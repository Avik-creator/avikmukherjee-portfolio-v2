import { readFile } from "fs/promises";
import { join } from "path";

// Special filename mappings for components that don't follow standard PascalCase to kebab-case
const fileNameOverrides: Record<string, string> = {
  GitHubStars: "github-stars",
};

/**
 * Converts PascalCase component name to kebab-case filename
 * @example "AnimatedCounter" -> "animated-counter"
 * @example "GitHubStars" -> "github-stars"
 */
export function getComponentFileName(componentName: string): string {
  // Check for override first
  if (fileNameOverrides[componentName]) {
    return fileNameOverrides[componentName];
  }

  return componentName
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Add dash between lowercase and uppercase
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2") // Add dash between acronym and word
    .toLowerCase();
}

/**
 * Reads the source code of a component file from the experiments directory
 * @param componentName - PascalCase component name (e.g., "AnimatedCounter")
 * @returns The component source code as a string
 */
export async function readComponentCode(componentName: string): Promise<string> {
  try {
    const fileName = getComponentFileName(componentName);
    const componentPath = join(
      process.cwd(),
      "components",
      "experiments",
      `${fileName}.tsx`
    );
    const code = await readFile(componentPath, "utf-8");
    return code;
  } catch (error) {
    console.error(`Failed to read component file for ${componentName}:`, error);
    return `// Component code not found for ${componentName}\n// Please ensure the component file exists at: components/experiments/${getComponentFileName(componentName)}.tsx`;
  }
}

