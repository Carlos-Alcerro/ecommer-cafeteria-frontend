import { Menu } from "lucide-react";
import { PopoverContent, Popover, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const MenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>

      <PopoverContent>
        <Link href="/categories/cafe-molido" className="block">
          Cafe Molido
        </Link>
        <Link href="/categories/cafe-grano" className="block">
          Cafe en Grabo
        </Link>
        <Link href="/categories/cafe-capsula" className="block">
          Cafe en Capsula
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default MenuMobile;
