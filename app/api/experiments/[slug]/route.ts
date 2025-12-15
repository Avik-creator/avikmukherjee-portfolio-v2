import { getExperimentBySlug } from "@/lib/experiments-data";
import { readComponentCode } from "@/lib/read-component";
import { buildRegistryItem } from "@/lib/registry-builder";

export async function GET(
  _: unknown,
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
    const componentCode = await readComponentCode(experiment.component);
    const registryItem = buildRegistryItem(experiment, componentCode);

    return new Response(JSON.stringify(registryItem, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error) {
    console.error(`Failed to generate registry item for ${slug}:`, error);
    return new Response(
      JSON.stringify({ error: "Failed to generate registry item" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
