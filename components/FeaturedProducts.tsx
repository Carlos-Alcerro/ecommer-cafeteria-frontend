"use client";

import UseGetFeaturedProducts from "@/api/UseGetFeaturedProducts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./SkeletonSchema";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";

const FeaturedProducts = () => {
  const { result, error, loading }: ResponseType = UseGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { attributes, id } = product;
              const {
                productName,

                images,
                slug,
                taste,

                origin,
              } = attributes;

              const urlImage = `${images.data[0].attributes.url}`;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1 ">
                    <Card className="py-4 border border-gray-200 shadow-none h-full">
                      <CardContent className="relative flex items-center justify-center h-60 px-6 py-4 ">
                        <Image
                          src={urlImage}
                          alt={productName}
                          width={400}
                          height={300}
                          className="h-full"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              className="text-gray-600"
                              icon={<Expand size={20} />}
                              onClick={() => router.push(`product/${slug}`)}
                            />
                            <IconButton
                              className="text-gray-600"
                              icon={<ShoppingCart size={20} />}
                              onClick={() => addItem(product)}
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
