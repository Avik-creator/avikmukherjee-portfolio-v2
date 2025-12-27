"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import { CURRENT_LOCATION, LOCATION_LOOKUP } from "@/lib/data/data";
import { ExperienceType } from "@/lib/data/types";

interface WorldMapProps {
  experiences: ExperienceType[];
  selectedExperience: ExperienceType | null;
  onSelectExperience: (exp: ExperienceType | null) => void;
}

const MAP_WIDTH = 2000;
const MAP_HEIGHT = 1000;

export function WorldMap({
  experiences,
  selectedExperience,
  onSelectExperience,
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [worldData, setWorldData] = useState<any>(null);
  const [hoveredExp, setHoveredExp] = useState<ExperienceType | null>(null);
  const [projection, setProjection] = useState<d3.GeoProjection | null>(null);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((data) => {
        setWorldData(data);
      });
  }, []);

  useEffect(() => {
    if (!svgRef.current || !worldData) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = MAP_WIDTH;
    const height = MAP_HEIGHT;

    // Create projection that fits all experience locations
    const tempProj = d3.geoNaturalEarth1().scale(1).translate([0, 0]);

    // Calculate bounds of all experience locations
    let minLng = 180,
      maxLng = -180,
      minLat = 90,
      maxLat = -90;
    experiences.forEach((exp) => {
      minLng = Math.min(minLng, exp.location.lng);
      maxLng = Math.max(maxLng, exp.location.lng);
      minLat = Math.min(minLat, exp.location.lat);
      maxLat = Math.max(maxLat, exp.location.lat);
    });

    // Set projection to center on the bounding box
    const centerLng = (minLng + maxLng) / 2;
    const centerLat = (minLat + maxLat) / 2;

    const proj = d3
      .geoNaturalEarth1()
      .scale(280)
      .translate([width / 2, height / 2])
      .center([centerLng, centerLat]);

    setProjection(() => proj);

    const path = d3.geoPath().projection(proj);
    const countries = feature(worldData, worldData.objects.countries) as any;

    const defs = svg.append("defs");

    const pattern = defs
      .append("pattern")
      .attr("id", "dotPattern")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 6)
      .attr("height", 6);

    pattern
      .append("circle")
      .attr("cx", 3)
      .attr("cy", 3)
      .attr("r", 1)
      .attr("fill", "#404040");

    svg
      .append("g")
      .selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("d", path as any)
      .attr("fill", "url(#dotPattern)")
      .attr("stroke", "none");

    const sortedExperiences = [...experiences].sort((a, b) => {
      const dateA = a.startDate
        ? new Date(a.startDate)
        : a.year
        ? new Date(a.year)
        : new Date(0);
      const dateB = b.startDate
        ? new Date(b.startDate)
        : b.year
        ? new Date(b.year)
        : new Date(0);
      return dateA.getTime() - dateB.getTime();
    });

    const lineGenerator = d3.line<[number, number]>().curve(d3.curveBasis);

    const colorMap: Record<string, string> = {
      white: "#ffffff",
      light: "#a3a3a3",
      medium: "#737373",
      dark: "#525252",
    };

    for (let i = 0; i < sortedExperiences.length - 1; i++) {
      const exp1 = sortedExperiences[i];
      const exp2 = sortedExperiences[i + 1];
      const coords1 = proj([exp1.location.lng, exp1.location.lat]);
      const coords2 = proj([exp2.location.lng, exp2.location.lat]);

      if (!coords1 || !coords2) continue;

      const [x1, y1] = coords1;
      const [x2, y2] = coords2;

      const midX = (x1 + x2) / 2;
      const midY = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.15;

      const gradientId = `line-gradient-${i}`;
      const gradient = defs
        .append("linearGradient")
        .attr("id", gradientId)
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2);

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", colorMap[exp1.color])
        .attr("stop-opacity", 0.8);
      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", colorMap[exp2.color])
        .attr("stop-opacity", 0.8);

      svg
        .append("path")
        .attr(
          "d",
          lineGenerator([
            [x1, y1],
            [midX, midY],
            [x2, y2],
          ])
        )
        .attr("fill", "none")
        .attr("stroke", `url(#${gradientId})`)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4")
        .attr("opacity", 0.9);
    }

    experiences.forEach((exp) => {
      const color = colorMap[exp.color];

      const glowFilter = defs
        .append("filter")
        .attr("id", `glow-${exp.id}`)
        .attr("x", "-100%")
        .attr("y", "-100%")
        .attr("width", "300%")
        .attr("height", "300%");

      glowFilter
        .append("feGaussianBlur")
        .attr("stdDeviation", "4")
        .attr("result", "coloredBlur");

      const feMerge = glowFilter.append("feMerge");
      feMerge.append("feMergeNode").attr("in", "coloredBlur");
      feMerge.append("feMergeNode").attr("in", "SourceGraphic");
    });
  }, [worldData, experiences]);

  const getMarkerPosition = (exp: ExperienceType): [number, number] | null => {
    if (!projection) return null;
    return projection([exp.location.lng, exp.location.lat]);
  };

  const colorMap: Record<string, string> = {
    white: "#ffffff",
    light: "#a3a3a3",
    medium: "#737373",
    dark: "#525252",
  };

  const colorClassMap: Record<string, string> = {
    white: "bg-white",
    light: "bg-neutral-400",
    medium: "bg-neutral-500",
    dark: "bg-neutral-600",
  };

  return (
    <div className="relative" style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}>
      <svg ref={svgRef} width={MAP_WIDTH} height={MAP_HEIGHT} />

      {experiences.map((exp, index) => {
        const pos = getMarkerPosition(exp);
        if (!pos) return null;
        const [x, y] = pos;

        // Find how many experiences are at this exact location
        const experiencesAtLocation = experiences.filter(
          (e) =>
            e.location.lat === exp.location.lat &&
            e.location.lng === exp.location.lng
        );
        const locationIndex = experiencesAtLocation.indexOf(exp);

        const isSelected = selectedExperience?.id === exp.id;
        const isHovered = hoveredExp?.id === exp.id;
        const color = colorMap[exp.color];

        return (
          <div
            key={exp.id}
            data-marker
            className="absolute cursor-pointer pointer-events-auto"
            style={{
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              // ensure the earliest (start) experience at a shared location is on top
              zIndex: isSelected
                ? 50
                : isHovered
                ? 40
                : experiencesAtLocation.length - locationIndex,
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Find all experiences at this location
              const experiencesAtLocation = experiences.filter(
                (e) =>
                  e.location.lat === exp.location.lat &&
                  e.location.lng === exp.location.lng
              );

              if (experiencesAtLocation.length > 1 && selectedExperience) {
                // If already selected one at this location, cycle to next
                const currentIndex = experiencesAtLocation.findIndex(
                  (e) => e.id === selectedExperience.id
                );
                if (currentIndex !== -1) {
                  const nextIndex =
                    (currentIndex + 1) % experiencesAtLocation.length;
                  onSelectExperience(experiencesAtLocation[nextIndex]);
                } else {
                  onSelectExperience(exp);
                }
              } else if (selectedExperience?.id === exp.id) {
                onSelectExperience(null);
              } else {
                onSelectExperience(exp);
              }
            }}
            onMouseEnter={() => setHoveredExp(exp)}
            onMouseLeave={() => setHoveredExp(null)}
          >
            {(isSelected || isHovered) && (
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  backgroundColor: color,
                  opacity: 0.3,
                  width: 32,
                  height: 32,
                  left: -8,
                  top: -8,
                }}
              />
            )}
            {(isSelected || isHovered) && (
              <div
                className="absolute rounded-full"
                style={{
                  border: `1px solid ${color}`,
                  opacity: 0.5,
                  width: 32,
                  height: 32,
                  left: -8,
                  top: -8,
                }}
              />
            )}
            <div
              className="rounded-full transition-all duration-200"
              style={{
                backgroundColor: color,
                width: isSelected || isHovered ? 14 : 10,
                height: isSelected || isHovered ? 14 : 10,
                boxShadow: `0 0 ${isSelected || isHovered ? 12 : 8}px ${color}`,
              }}
            />
          </div>
        );
      })}

      {experiences.map((exp) => {
        const pos = getMarkerPosition(exp);
        if (!pos) return null;
        const [x, y] = pos;

        const isVisible =
          hoveredExp?.id === exp.id || selectedExperience?.id === exp.id;

        return (
          <div
            key={`tooltip-${exp.id}`}
            className={`absolute pointer-events-none transition-opacity duration-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: x + 20,
              top: y,
              transform: "translateY(-50%)",
            }}
          >
            <div className="flex items-center gap-2 bg-neutral-900/95 border border-neutral-700 rounded px-3 py-1.5 backdrop-blur-sm">
              <div
                className={`w-2 h-2 rounded-full ${colorClassMap[exp.color]}`}
              />
              <span className="font-mono text-xs text-neutral-300">
                {Math.abs(exp.location.lat).toFixed(2)}°,{" "}
                {Math.abs(exp.location.lng).toFixed(2)}°
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
