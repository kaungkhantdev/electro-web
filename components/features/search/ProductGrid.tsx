import { ProductCard, Product } from "@/components/ui/ProductCard";

interface ProductGridProps {
  products: Product[];
  viewMode?: "grid" | "compact";
  columns?: 3 | 4;
}

export function ProductGrid({
  products,
  viewMode = "grid",
  columns = 4,
}: ProductGridProps) {
  const gridClass =
    viewMode === "grid"
      ? columns === 3
        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : columns === 3
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          variant={viewMode === "compact" ? "compact" : "default"}
        />
      ))}
    </div>
  );
}
