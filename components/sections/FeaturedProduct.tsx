import ProductHighlight from "@/components/sections/ProductHighlight";
import { brand } from "@/data/brand";

export default function FeaturedProduct() {
  const { featuredProduct } = brand.story;

  return (
    <ProductHighlight
      body={featuredProduct.body}
      detailImage={featuredProduct.detailImage}
      details={featuredProduct.details}
      eyebrow={featuredProduct.eyebrow}
      id={featuredProduct.id}
      image={featuredProduct.image}
      title={featuredProduct.title}
    />
  );
}
