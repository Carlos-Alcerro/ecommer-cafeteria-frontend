"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const { removeAll } = useCart();

  useEffect(() => {
    removeAll();
    localStorage.removeItem("cart-storage");
  }, [removeAll]);
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="Success"
            className="rounded-lg"
            width={250}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-3xl">Gracias por tu compra</h1>
          <p className="my-3 ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words
          </p>
          <p className="my-3">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using Content here, content here, making
            it look like readable English.
          </p>
          <p className="my-3">Disfruta del Cafe</p>
          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
