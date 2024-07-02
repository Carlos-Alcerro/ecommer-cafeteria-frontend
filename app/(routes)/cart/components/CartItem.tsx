import ProductOriginTaste from "@/components/shared/ProductOriginTaste";
import { useCart } from "@/hooks/useCart";
import { FormatPrice } from "@/lib/FormatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type CartItemProp = {
  product: ProductType;
};

const CartItem = (props: CartItemProp) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border-b">
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
      >
        <Image
          src={`${product.attributes.images.data[0].attributes.url}`}
          alt={product.attributes.productName}
          className="w-24 h-24 overflow-hidden rounded-md sm:w-48 sm:h-32 transition duration-300 hover:scale-110"
          width={300}
          height={300}
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">
            {product.attributes.productName}
          </h2>
          <p className="font-bold">{FormatPrice(product.attributes.price)}</p>
          <ProductOriginTaste
            key={product.id}
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />
        </div>
        <div className="">
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white dark:bg-black dark:text-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
