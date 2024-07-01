import ProductOriginTaste from "@/components/shared/ProductOriginTaste";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { UseLovedProducts } from "@/hooks/useLovedProducts";
import { FormatPrice } from "@/lib/FormatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LovedItemsProducProps {
  product: ProductType;
}

const LovedItemsProducts = (props: LovedItemsProducProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = UseLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = (product: ProductType) => {
    addItem(product), removeLovedItem(product.id);
  };

  return (
    <li className="flex py-6 border-b ">
      <div onClick={() => router.push(`/product/${product.attributes.slug}`)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          alt={product.attributes.productName}
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
          width={300}
          height={300}
        />
      </div>
      <div className="flex justify-between flex-1 px-6 ">
        <div>
          <div className="">
            <h2 className="text-lg font-bold">
              {product.attributes.productName}
            </h2>
            <p className="font-semibold">
              {FormatPrice(product.attributes.price)}
            </p>
            <ProductOriginTaste
              key={product.id}
              origin={product.attributes.origin}
              taste={product.attributes.taste}
            />
            <Button
              onClick={() => addToCheckout(product)}
              className="mt-5 rounded-full"
            >
              Anadir al carrito
            </Button>
          </div>
        </div>
        <div className="">
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeLovedItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemsProducts;
