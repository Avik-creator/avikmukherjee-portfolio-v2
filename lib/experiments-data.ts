export interface Experiment {
  slug: string;
  title: string;
  description: string;
  year: string;
  component: string;
  usage?: string;
  features?: string[];
  dependencies?: string[];
  githubRepo?: string;
  stargazersCount?: number;
}

export const experiments: Experiment[] = [
  {
    slug: "animated-counter",
    title: "Animated Counter",
    description: "A smooth animated number counter with spring physics. Perfect for dashboards, stats displays, and gamification elements.",
    year: "2025",
    component: "AnimatedCounter",
    features: [
      "Spring-based animation physics",
      "Customizable duration and easing",
      "Supports formatting (commas, decimals)",
      "Accessible with reduced motion support",
    ],
    dependencies: ["motion"],
    usage: `<AnimatedCounter value={12847} />`,
  },
  {
    slug: "magnetic-button",
    title: "Magnetic Button",
    description: "A button that responds to cursor proximity with a magnetic pull effect. Creates an engaging, playful interaction.",
    year: "2025",
    component: "MagneticButton",
    features: [
      "Smooth cursor-following animation",
      "Customizable magnetic strength",
      "Works with any child content",
      "Touch-device compatible",
    ],
    dependencies: ["motion"],
    usage: `<MagneticButton strength={0.4}>\n      <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium shadow-lg">\n        Hover & move around me\n      </button>\n    </MagneticButton>`,
  },
  {
    slug: "text-scramble",
    title: "Text Scramble",
    description: "A text effect that scrambles characters before revealing the final text. Great for headers and loading states.",
    year: "2025",
    component: "TextScramble",
    features: [
      "Customizable scramble characters",
      "Adjustable animation speed",
      "Trigger on mount or hover",
      "Supports any text content",
    ],
    usage: `<TextScramble text="Hello, World!" className="text-4xl font-bold" />`,
  },
  {
    slug: "spotlight-card",
    title: "Spotlight Card",
    description: "A card component with a dynamic spotlight effect that follows the cursor. Creates depth and visual interest.",
    year: "2025",
    component: "SpotlightCard",
    features: [
      "Cursor-following spotlight",
      "Customizable spotlight color and size",
      "Smooth gradient transitions",
      "Works with any card content",
    ],
    usage: `<SpotlightCard className="p-8 border rounded-2xl">\n      <h3 className="text-xl font-semibold mb-2">Spotlight Effect</h3>\n      <p className="text-gray-600">Move your cursor around to see the spotlight follow.</p>\n    </SpotlightCard>`,
  },
  {
    slug: "typewriter",
    title: "Typewriter Effect",
    description: "A classic typewriter animation with blinking cursor. Perfect for hero sections and introductions.",
    year: "2025",
    component: "Typewriter",
    features: [
      "Adjustable typing speed",
      "Optional blinking cursor",
      "Delete and retype support",
      "Multiple text sequences",
    ],
    usage: `<Typewriter texts={["Hello, World!", "Welcome to experiments", "Build amazing UIs"]} typingSpeed={80} />`,
  },
  {
    slug: "experiment-item",
    title: "Experiment Item",
    description: "A list item component with hover-activated corner markers. Features smooth transitions and minimalist design perfect for showcasing experiments or projects.",
    year: "2025",
    component: "ExperimentItem",
    features: [
      "Hover-activated corner markers",
      "Smooth CSS transitions",
      "Minimalist design",
      "Dark mode support",
      "Accessible and keyboard-friendly",
    ],
    usage: `<ExperimentItem\n      slug="example"\n      title="Example Item"\n      description="An example experiment item"\n      year="2025"\n    />`,
  },
  {
    slug: "github-stars",
    title: "GitHub Stars",
    description: "A compact component that displays GitHub repository star count with a tooltip showing the full number. Perfect for showcasing project popularity and engagement.",
    year: "2025",
    component: "GitHubStars",
    features: [
      "Compact star count display",
      "Hover tooltip with full number",
      "Direct link to GitHub repository",
      "Accessible and keyboard-friendly",
      "Dark mode support",
    ],
    usage: `<GitHubStars repo="vercel/next.js" stargazersCount={125000} />`,
  },
];

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return experiments.find((exp) => exp.slug === slug);
}

export function getAllExperimentSlugs(): string[] {
  return experiments.map((exp) => exp.slug);
}
