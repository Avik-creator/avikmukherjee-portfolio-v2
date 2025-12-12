export interface Experiment {
  slug: string;
  title: string;
  description: string;
  year: string;
  component: string;
  code: string;
  usage?: string;
  features?: string[];
  dependencies?: string[];
}

export const experiments: Experiment[] = [
  {
    slug: "animated-counter",
    title: "Animated Counter",
    description: "A smooth animated number counter with spring physics. Perfect for dashboards, stats displays, and gamification elements.",
    year: "2025",
    component: "AnimatedCounter",
    code: "",
    features: [
      "Spring-based animation physics",
      "Customizable duration and easing",
      "Supports formatting (commas, decimals)",
      "Accessible with reduced motion support",
    ],
    dependencies: ["motion"],
    usage: "",
  },
  {
    slug: "magnetic-button",
    title: "Magnetic Button",
    description: "A button that responds to cursor proximity with a magnetic pull effect. Creates an engaging, playful interaction.",
    year: "2025",
    component: "MagneticButton",
    code: "",
    features: [
      "Smooth cursor-following animation",
      "Customizable magnetic strength",
      "Works with any child content",
      "Touch-device compatible",
    ],
    dependencies: ["motion"],
    usage: "",
  },
  {
    slug: "text-scramble",
    title: "Text Scramble",
    description: "A text effect that scrambles characters before revealing the final text. Great for headers and loading states.",
    year: "2025",
    component: "TextScramble",
    code: "",
    features: [
      "Customizable scramble characters",
      "Adjustable animation speed",
      "Trigger on mount or hover",
      "Supports any text content",
    ],
    dependencies: [],
    usage: "",
  },
  {
    slug: "spotlight-card",
    title: "Spotlight Card",
    description: "A card component with a dynamic spotlight effect that follows the cursor. Creates depth and visual interest.",
    year: "2025",
    component: "SpotlightCard",
    code: "",
    features: [
      "Cursor-following spotlight",
      "Customizable spotlight color and size",
      "Smooth gradient transitions",
      "Works with any card content",
    ],
    dependencies: [],
    usage: "",
  },
  {
    slug: "typewriter",
    title: "Typewriter Effect",
    description: "A classic typewriter animation with blinking cursor. Perfect for hero sections and introductions.",
    year: "2025",
    component: "Typewriter",
    code: "",
    features: [
      "Adjustable typing speed",
      "Optional blinking cursor",
      "Delete and retype support",
      "Multiple text sequences",
    ],
    dependencies: [],
    usage: "",
  },
  {
    slug: "experiment-item",
    title: "Experiment Item",
    description: "A list item component with hover-activated corner markers. Features smooth transitions and minimalist design perfect for showcasing experiments or projects.",
    year: "2025",
    component: "ExperimentItem",
    code: "",
    features: [
      "Hover-activated corner markers",
      "Smooth CSS transitions",
      "Minimalist design",
      "Dark mode support",
      "Accessible and keyboard-friendly",
    ],
    dependencies: [],
    usage: `import ExperimentItem from "@/components/experiments/experiment-item";

<ExperimentItem
  slug="my-experiment"
  title="My Experiment"
  description="A cool experiment description"
  year="2025"
/>`,
  },
];

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((exp) => exp.slug === slug);
}

export function getAllExperimentSlugs(): string[] {
  return experiments.map((exp) => exp.slug);
}
