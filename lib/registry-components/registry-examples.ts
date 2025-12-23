export function getExampleUsage(componentName: string): string {
  switch (componentName) {
    case "AnimatedCounter":
      return `<${componentName} value={12847} />`;
    case "MagneticButton":
      return `<${componentName} strength={0.4}>\n      <button className="px-8 py-4 bg-neutral-100 text-neutral-900 rounded-xl font-medium shadow-lg hover:bg-white transition-colors">\n        Hover & move around me\n      </button>\n    </${componentName}>`;
    case "TextScramble":
      return `<${componentName} text="Hello, World!" className="text-4xl font-bold text-neutral-100" />`;
    case "SpotlightCard":
      return `<${componentName} className="p-8 border border-neutral-800 rounded-2xl bg-neutral-900/50">\n      <h3 className="text-xl font-semibold mb-2 text-neutral-100">Spotlight Effect</h3>\n      <p className="text-neutral-400">Move your cursor around to see the spotlight follow.</p>\n    </${componentName}>`;
    case "Typewriter":
      return `<${componentName} texts={["Hello, World!", "Welcome to experiments"]} typingSpeed={80} />`;
    case "ExperimentItem":
      return `<${componentName}\n      slug="example"\n      title="Example Item"\n      description="An example experiment item"\n      year="2025"\n    />`;
    case "GitHubStars":
      return `<${componentName} repo="vercel/next.js" stargazersCount={125000} />`;
    case "RetroWindow":
      return `<${componentName} title="About.txt">\n      <div className="space-y-2 text-neutral-200">\n        <p>Welcome to Retro Window</p>\n        <p>These components give retro feel to your UI</p>\n        <p>Built with modern React and Tailwind CSS.</p>\n      </div>\n    </${componentName}>`;
    default:
      return `<${componentName} />`;
  }
}
