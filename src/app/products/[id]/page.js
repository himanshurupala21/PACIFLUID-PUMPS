import { PRODUCTS } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return {};

  return {
    title: `${product.name} | Pacifluid Pumps`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
