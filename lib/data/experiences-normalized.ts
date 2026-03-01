import { ExperienceData } from "./experience";
import { ExperienceType } from "@/lib/data/types";
// Normalized experiences array for components that expect `id`, `role`, `startDate`, and `endDate`.
export const experiences: ExperienceType[] = ExperienceData.map(
  (item, idx: number) => {
    const slugBase = (item.company || "experience")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
    const id = `${slugBase}-${idx}`;

    // Attempt to split year into start and end where possible
    let startDate = item.year ?? "";
    let endDate = "";
    if (item.year) {
      const parts = item.year.split(/[-–—]/).map((p: string) => p.trim());
      if (parts.length >= 1) startDate = parts[0];
      if (parts.length >= 2) endDate = parts.slice(1).join(" - ");
    }

    return {
      id,
      title: item.title,
      year: item.year,
      company: item.company,
      role: item.title ?? item.company,
      startDate,
      endDate,
      category: item.category,
      description: item.description ?? [],
      companySite: item.companySite ?? "",
      logo: item.logo ?? undefined,
      location: item.location,
      color: item.color ?? "white",
    } as ExperienceType;
  }
);
