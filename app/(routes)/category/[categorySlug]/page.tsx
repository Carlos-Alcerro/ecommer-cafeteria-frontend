"use client";

import GetCategoryProducts from "@/api/GetCategoryProducts";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "./components/FiltersControlsCategory";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonSchema from "@/components/SkeletonSchema";
import ProductCard from "./components/ProductCard";
import { ProductType } from "@/types/product";
import FiltersOrigin from "./components/FiltersOrigin";
import { useState } from "react";

const CategoryPage = () => {
  const params = useParams();
  const router = useRouter();

  const { error, loading, result }: ResponseType = GetCategoryProducts(
    params.categorySlug
  );

  const [FiltersOrigin, setFiltersOrigin] = useState("");

  const filteredProducts =
    result !== null &&
    !loading &&
    (FiltersOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.attributes.origin === FiltersOrigin
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium px-2 sm:px-0">
          Cafe {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator />
      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFiltersOrigin={setFiltersOrigin} />
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p className="w-full text-center text-lg">
                No se encuentran productos de esta categoria
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
