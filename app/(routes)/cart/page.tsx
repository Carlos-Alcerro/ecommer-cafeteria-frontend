"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { FormatPrice } from "@/lib/FormatPrice";
import CartItem from "./components/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/Payment";
import Image from "next/image";
import Link from "next/link";

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
      localStorage.removeItem("cart-storage");
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
                <div className="flex flex-col-reverse justify-center items-center">
                  <Link
                    className="text-sm font-light mb-4 sm:mb-0 hover:text-sky-800 hover:underline mt-4 dark:hover:text-gray-300"
                    href="/"
                  >
                    Volver al incio
                  </Link>
                  <div>
                    <Image
                      src="/CartEmpty.png"
                      alt="CartEmpty"
                      width={350}
                      height={400}
                    />
                  </div>
                  <div className="flex justify-between gap-4 items-center mb-4">
                    <p className="text-xl font-semibold">
                      Carrito de compras vacio
                    </p>
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
