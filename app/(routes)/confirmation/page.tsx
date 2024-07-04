// pages/confirmation.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "@/hooks/useCart";

const ConfirmationPage = () => {
  const { removeAll } = useCart();
  const router = useRouter();

  useEffect(() => {
    removeAll();
    localStorage.removeItem("cart-storage");
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [removeAll, router]);

  return (
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-3xl mb-5 font-bold">¡Gracias por tu compra!</h1>
      <p>Tu pago ha sido confirmado. Estamos procesando tu pedido.</p>
      <p>Serás redirigido a la página principal en unos momentos.</p>
    </div>
  );
};

export default ConfirmationPage;
