"use client";

import GetProducts from "@/api/GetProducts";
import { CategoryType } from "@/types/categorias";
import { ResponseType } from "@/types/response";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const ChooseCategory = () => {
  const { error, result, loading }: ResponseType = GetProducts();
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoria favorita
      </h3>

      {loading && result === null && (
        <div className="grid gap-5 sm:grid-cols-3">
          <Skeleton className="w-full h-80" />
          <Skeleton className="w-full h-80" />
          <Skeleton className="w-full h-80" />
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-3">
        {!loading &&
          result !== null &&
          result.map((category: CategoryType) => {
            const { attributes, id } = category;
            const urlImage = `${category.attributes.mainImage.data.attributes.url}`;

            return (
              <Link
                key={id}
                href={`/category/${attributes.slug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg h-80"
              >
                <Image
                  src={urlImage}
                  alt={attributes.categoryName}
                  width={400}
                  height={300}
                  className="max-w-[270px] transition duration-500 ease-in-out rounded-lg hover:scale-110 h-full"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                  {attributes.categoryName}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ChooseCategory;
