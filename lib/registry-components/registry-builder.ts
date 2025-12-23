import {
  generatePageContent,
  generateLayoutContent,
  generateGlobalsCssContent,
} from "./registry-files";

interface ExperimentData {
  component: string;
  title: string;
  description: string;
  dependencies?: string[];
  features?: string[];
}

interface RegistryFile {
  type: string;
  path: string;
  target: string;
  content: string;
}

interface RegistryItem {
  name: string;
  type: string;
  registryDependencies: string[];
  files: RegistryFile[];
  dependencies: string[];
  devDependencies: string[];
  peerDependencies: string[];
  description: string;
  features: string[];
}

export function buildRegistryItem(
  experiment: ExperimentData,
  componentCode: string
): RegistryItem {
  return {
    name: experiment.component.toLowerCase(),
    type: "registry:ui",
    registryDependencies: [],
    files: [
      {
        type: "registry:file",
        path: "app/globals.css",
        target: "app/globals.css",
        content: generateGlobalsCssContent(),
      },
      {
        type: "registry:file",
        path: "app/layout.tsx",
        target: "app/layout.tsx",
        content: generateLayoutContent(experiment),
      },
      {
        type: "registry:file",
        path: "app/page.tsx",
        target: "app/page.tsx",
        content: generatePageContent(experiment),
      },
      {
        type: "registry:file",
        path: `components/${experiment.component}.tsx`,
        target: `components/${experiment.component}.tsx`,
        content: componentCode,
      },
    ],
    dependencies: experiment.dependencies || [],
    devDependencies: [],
    peerDependencies: [],
    description: experiment.description,
    features: experiment.features || [],
  };
}
