"use client";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./MenuList";
import MenuMobile from "./MenuMobile";
import ModeToggle from "./ModeToggle";
import { useCart } from "@/hooks/useCart";
import { UseLovedProducts } from "@/hooks/useLovedProducts";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItem } = UseLovedProducts();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Cafeteria <span className="font-bold">Web</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <MenuMobile />
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1 " onClick={() => router.push("/cart")}>
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span className="absolute top-2 ml-4">{cart.items.length}</span>
          </div>
        )}
        <Heart
          strokeWidth="1"
          className={`${
            lovedItem.length > 0 && "fill-black dark:fill-white"
          } cursor-pointer`}
          onClick={() => router.push("/loved-products")}
        />
        <User strokeWidth="1" className="cursor-pointer" />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
