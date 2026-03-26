import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import ComparisonTable from "@/components/ui/ComparisonTable";
import ToolCard from "@/components/tools/ToolCard";
import CategoryIcon from "@/components/ui/CategoryIcon";

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: category.metaTitle || `Best ${category.name} (2026)`,
    description: category.metaDescription || category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3">
          <CategoryIcon slug={slug} size="lg" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          Best {category.name} (2026)
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {category.description}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {categoryTools.length} tool{categoryTools.length !== 1 && "s"}{" "}
          reviewed
        </p>
      </div>

      {/* Comparison Table */}
      {categoryTools.length > 0 ? (
        <>
          <div className="mb-8">
            <ComparisonTable tools={categoryTools} />
          </div>

          {/* Individual Cards */}
          <h2 className="mb-4 text-xl font-bold text-foreground">
            All {category.name} Reviews
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
          <p className="text-muted-foreground">
            Reviews for this category are coming soon. Check back shortly.
          </p>
        </div>
      )}
    </div>
  );
}
