export function getExampleUsage(componentName: string): string {
  switch (componentName) {
    case "AnimatedCounter":
      return `<${componentName} value={12847} />`;
    case "MagneticButton":
      return `<${componentName} strength={0.4}>\n      <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium shadow-lg">\n        Hover & move around me\n      </button>\n    </${componentName}>`;
    case "TextScramble":
      return `<${componentName} text="Hello, World!" className="text-4xl font-bold" />`;
    case "SpotlightCard":
      return `<${componentName} className="p-8 border rounded-2xl">\n      <h3 className="text-xl font-semibold mb-2">Spotlight Effect</h3>\n      <p className="text-gray-600">Move your cursor around to see the spotlight follow.</p>\n    </${componentName}>`;
    case "Typewriter":
      return `<${componentName} texts={["Hello, World!", "Welcome to experiments"]} typingSpeed={80} />`;
    case "ExperimentItem":
      return `<${componentName}\n      slug="example"\n      title="Example Item"\n      description="An example experiment item"\n      year="2025"\n    />`;
    case "GitHubStars":
      return `<${componentName} repo="vercel/next.js" stargazersCount={125000} />`;
    default:
      return `<${componentName} />`;
  }
}
