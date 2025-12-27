"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X, Wifi, ChevronLeft, ChevronRight } from "lucide-react";
import { WorldMap } from "@/components/world-map";
import { ExperienceType } from "@/lib/data/types";
import { experiences as defaultExperiences } from "@/lib/data/experiences-normalized";
import CornerMarkers from "@/components/CornerMarkers";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ExperienceMapProps {
  experiences?: ExperienceType[];
}

export function ExperienceMap({
  experiences = defaultExperiences,
}: ExperienceMapProps) {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceType | null>(null);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 });
  const [experienceIndex, setExperienceIndex] = useState(0);

  useEffect(() => {
    if (mapContainerRef.current) {
      const container = mapContainerRef.current;
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
      container.scrollTop =
        (container.scrollHeight - container.clientHeight) / 2;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("[data-marker]")) return;
    if (!mapContainerRef.current) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setScrollPos({
      x: mapContainerRef.current.scrollLeft,
      y: mapContainerRef.current.scrollTop,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !mapContainerRef.current) return;
    const dx = e.clientX - startPos.x;
    const dy = e.clientY - startPos.y;
    mapContainerRef.current.scrollLeft = scrollPos.x - dx;
    mapContainerRef.current.scrollTop = scrollPos.y - dy;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getExperiencesAtLocation = (exp: ExperienceType): ExperienceType[] => {
    return experiences.filter(
      (e) =>
        e.location.lat === exp.location.lat &&
        e.location.lng === exp.location.lng
    );
  };

  const handleNextExperience = () => {
    if (!selectedExperience) return;
    const expsAtLocation = getExperiencesAtLocation(selectedExperience);
    if (expsAtLocation.length > 1) {
      const nextIndex = (experienceIndex + 1) % expsAtLocation.length;
      setExperienceIndex(nextIndex);
      setSelectedExperience(expsAtLocation[nextIndex]);
    }
  };

  const handlePrevExperience = () => {
    if (!selectedExperience) return;
    const expsAtLocation = getExperiencesAtLocation(selectedExperience);
    if (expsAtLocation.length > 1) {
      const prevIndex =
        (experienceIndex - 1 + expsAtLocation.length) % expsAtLocation.length;
      setExperienceIndex(prevIndex);
      setSelectedExperience(expsAtLocation[prevIndex]);
    }
  };

  const colorMap: Record<string, string> = {
    white: "#ffffff",
    light: "#a3a3a3",
    medium: "#737373",
    dark: "#525252",
  };

  const colorClassMap: Record<string, string> = {
    white: "bg-gray-800 dark:bg-white",
    light: "bg-gray-500 dark:bg-neutral-400",
    medium: "bg-gray-400 dark:bg-neutral-500",
    dark: "bg-gray-300 dark:bg-neutral-600",
  };

  return (
    <div className="w-full">
      {/* Map View */}
      <div className="group relative border border-dashed border-gray-300 dark:border-neutral-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-neutral-950">
        {/* Corner markers with proper z-index - below map markers */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <CornerMarkers variant="static" />
        </div>

        <div
          ref={mapContainerRef}
          className={`relative h-[500px] overflow-scroll ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } scrollbar-hide`}
          style={
            {
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              position: "relative",
              zIndex: 10,
            } as React.CSSProperties
          }
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <WorldMap
            experiences={experiences}
            selectedExperience={selectedExperience}
            onSelectExperience={(exp) => {
              if (exp) {
                setSelectedExperience(exp);
                const expsAtLocation = experiences.filter(
                  (e) =>
                    e.location.lat === exp.location.lat &&
                    e.location.lng === exp.location.lng
                );
                const index = expsAtLocation.indexOf(exp);
                setExperienceIndex(index >= 0 ? index : 0);
              } else {
                setSelectedExperience(null);
                setExperienceIndex(0);
              }
            }}
          />
        </div>

        {selectedExperience &&
          (() => {
            const expsAtLocation = getExperiencesAtLocation(selectedExperience);
            const hasMultiple = expsAtLocation.length > 1;

            return (
              <div
                className="absolute bottom-4 left-4 z-20 animate-[slideFadeUp_0.2s_ease-out]"
                style={{ width: hasMultiple ? "360px" : "320px" }}
              >
                <div className="group relative bg-black rounded-lg p-4">
                  {/* Dot grid background pattern */}
                  <div
                    className="absolute inset-0 opacity-20 rounded-lg"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <CornerMarkers variant="static" />

                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="absolute top-3 right-3 text-neutral-400 hover:text-white transition-colors z-20"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-start justify-between mb-3 pr-6 relative z-10">
                    <div className="flex-1">
                      <Link
                        href={selectedExperience.companySite || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1"
                      >
                        <h3 className="font-semibold text-white tracking-wide uppercase text-sm underline decoration-white/50 underline-offset-[3px] transition-all duration-300 group-hover/link:underline-offset-[6px] group-hover/link:decoration-white">
                          {selectedExperience.company}
                        </h3>
                        <ArrowUpRight
                          size={12}
                          className="text-white opacity-0 translate-y-px transition-all duration-150 group-hover/link:opacity-60 group-hover/link:translate-y-0"
                        />
                      </Link>
                      <p className="text-neutral-400 text-sm">
                        {selectedExperience.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3 relative z-10">
                    <div className="inline-block border border-neutral-600 px-3 py-1 rounded">
                      <span className="font-mono text-xs text-neutral-400">
                        {selectedExperience.startDate} -{" "}
                        {selectedExperience.endDate}
                      </span>
                    </div>
                    {selectedExperience.location.isRemote && (
                      <span className="text-xs text-neutral-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-pulse" />
                        Remote
                      </span>
                    )}
                  </div>

                  <div
                    className="h-px mb-3 relative z-10"
                    style={{
                      backgroundColor:
                        colorMap[selectedExperience.color] + "66",
                    }}
                  />

                  <div className="flex items-start gap-3 relative z-10">
                    {/* Mini map preview */}
                    <div className="w-16 h-16 border border-neutral-700 rounded overflow-hidden bg-neutral-900/50 flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-30">
                        <svg width="100%" height="100%" viewBox="0 0 64 64">
                          {[...Array(8)].map((_, i) => (
                            <circle
                              key={`r1-${i}`}
                              cx={8 + i * 8}
                              cy="32"
                              r="1"
                              fill="#737373"
                              opacity="0.5"
                            />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <circle
                              key={`r2-${i}`}
                              cx={8 + i * 8}
                              cy="24"
                              r="1"
                              fill="#737373"
                              opacity="0.3"
                            />
                          ))}
                          {[...Array(8)].map((_, i) => (
                            <circle
                              key={`r3-${i}`}
                              cx={8 + i * 8}
                              cy="40"
                              r="1"
                              fill="#737373"
                              opacity="0.3"
                            />
                          ))}
                        </svg>
                      </div>
                      {selectedExperience.logo ? (
                        <div className="w-10 h-10 relative z-10">
                          <Image
                            src={selectedExperience.logo}
                            alt={`${selectedExperience.company} logo`}
                            fill
                            sizes="40px"
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            colorClassMap[selectedExperience.color]
                          } z-10`}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                        {selectedExperience.location.city},{" "}
                        {selectedExperience.location.country}
                      </p>
                      <p className="font-mono text-sm text-neutral-300">
                        LAT: {selectedExperience.location.lat}
                      </p>
                      <p className="font-mono text-sm text-neutral-300">
                        LNG: {selectedExperience.location.lng}
                      </p>
                    </div>
                  </div>

                  {hasMultiple && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-700 relative z-10">
                      <button
                        onClick={handlePrevExperience}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs text-neutral-500 font-mono">
                        {experienceIndex + 1} of {expsAtLocation.length}
                      </span>
                      <button
                        onClick={handleNextExperience}
                        className="text-neutral-400 hover:text-white transition-colors p-1"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}
