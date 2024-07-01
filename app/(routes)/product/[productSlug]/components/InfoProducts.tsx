import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { UseLovedProducts } from "@/hooks/useLovedProducts";
import { FormatPrice } from "@/lib/FormatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductsProps = {
  product: ProductType;
};

const InfoProducts = (props: InfoProductsProps) => {
  const { product } = props;
  const { addItem, items } = useCart();
  const { addLoveItem } = UseLovedProducts();

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.attributes.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
            {product.attributes.taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full  w-fit">
            {product.attributes.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="text-lg">{product.attributes.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{FormatPrice(product.attributes.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full " onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLoveItem(product)}
        />
      </div>
    </div>
  );
};

export default InfoProducts;
