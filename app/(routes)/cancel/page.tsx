"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PageCancel = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 sm:px-36 sm:py-24 mx-auto">
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <div className="block text-center">
          <p className="text-2xl font-bold">
            Ups, al parecer se ha interrumpido tu compra.
          </p>
          <div className="flex justify-between mt-5">
            <p
              onClick={() => router.back()}
              className="text-base font-semibold hover:text-sky-700 hover:underline hover:cursor-pointer"
            >
              Volver a la compra
            </p>
            <Link
              className="text-base font-semibold hover:text-sky-700 hover:underline"
              href="/"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/cancel.png" alt="cancel" width={300} height={400} />
        </div>
      </div>
    </div>
  );
};

export default PageCancel;
