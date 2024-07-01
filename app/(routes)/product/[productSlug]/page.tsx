"use client";

import GetProductSlug from "@/api/GetProductSlug";
import { useParams } from "next/navigation";
import SkeletonProducts from "./components/SkeletonProducts";
import CarouselProducts from "./components/CarouselProducts";
import { ResponseType } from "@/types/response";
import InfoProducts from "./components/InfoProducts";

const ProductPage = () => {
  const params = useParams();
  const { productSlug } = params;
  const { result }: ResponseType = GetProductSlug(productSlug);

  if (result === null) {
    return <SkeletonProducts />;
  }

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div>
          <CarouselProducts images={result[0].attributes.images} />
        </div>
        <div className="sm:px-12">
          <InfoProducts product={result[0]} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
