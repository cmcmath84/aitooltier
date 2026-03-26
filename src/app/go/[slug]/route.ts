import { redirect } from "next/navigation";
import { getToolBySlug } from "@/data/tools";
import { getAffiliateUrl } from "@/lib/affiliates";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    redirect("/");
  }

  const url = getAffiliateUrl(tool.slug, tool.url);
  redirect(url);
}
