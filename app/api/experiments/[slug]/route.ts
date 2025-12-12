import { NextRequest } from "next/server";
import { getExperimentBySlug } from "@/lib/experiments-data";
import { readComponentCode } from "@/lib/read-component";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const experiment = getExperimentBySlug(slug);

  if (!experiment) {
    return new Response(JSON.stringify({ error: "Experiment not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Read the component code
    const componentCode = await readComponentCode(experiment.component);

    // Format as v0 registry item
    const registryItem = {
      name: experiment.component.toLowerCase(),
      type: "components:ui",
      registryDependencies: experiment.dependencies || [],
      files: [
        {
          path: `components/${experiment.component}.tsx`,
          content: componentCode,
        },
      ],
      dependencies: experiment.dependencies || [],
      devDependencies: [],
      peerDependencies: [],
      description: experiment.description,
      features: experiment.features || [],
    };

    return new Response(JSON.stringify(registryItem, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error(`Failed to generate registry item for ${slug}:`, error);
    return new Response(JSON.stringify({ error: "Failed to generate registry item" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
