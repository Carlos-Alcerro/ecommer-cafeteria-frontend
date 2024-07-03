"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { FormatPrice } from "@/lib/FormatPrice";
import CartItem from "./components/CartItem";
import { Skeleton } from "@/components/ui/skeleton";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/Payment";

const CartPage = () => {
  const { items, removeAll } = useCart();
  const totalPrice = items.reduce(
    (total, item) => item.attributes.price + total,
    0
  );
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRAPI || "");

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
      removeAll();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-3xl  mb-5 font-bold">Carrito de Compras</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && (
            <>
              <div className="flex gap-5">
                <div>
                  <Skeleton className="h-24 w-24 sm:w-48 sm:h-32" />
                </div>
                <div className="mt-2 gap-4">
                  <Skeleton className="w-24 sm:w-48 h-[20px] block" />
                  <Skeleton className="w-20 sm:w-32 h-[20px] block mt-2" />
                  <div className="flex justify-between items-center mt-2">
                    <Skeleton className="w-8 sm:w-16 h-[20px]" />
                    <Skeleton className="w-8 sm:w-16 h-[20px]" />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <div>
                  <Skeleton className="h-24 w-24 sm:w-48 sm:h-32" />
                </div>
                <div className="mt-2 gap-4">
                  <Skeleton className="w-24 sm:w-48 h-[20px] block" />
                  <Skeleton className="w-20 sm:w-32 h-[20px] block mt-2" />
                  <div className="flex justify-between items-center mt-2">
                    <Skeleton className="w-8 sm:w-16 h-[20px]" />
                    <Skeleton className="w-8 sm:w-16 h-[20px]" />
                  </div>
                </div>
              </div>
            </>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100 dark:bg-gray-800">
            <p className="mb-3 text-lg font-semibold">Resumen de orden</p>
            <Separator className="dark:bg-white" />
            <div className="flex justify-between gap-5 my-4">
              <p>Total de Orden</p>
              <p>{FormatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={buyStripe}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
