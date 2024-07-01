import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "../types/product";
import { toast } from "@/components/ui/use-toast";

interface UseLovedProductsPropos {
  lovedItem: ProductType[];
  addLoveItem: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
}

export const UseLovedProducts = create(
  persist<UseLovedProductsPropos>(
    (set, get) => ({
      lovedItem: [],
      addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItem;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );
        if (existingItem) {
          return toast({
            title: "El producto ya existe en la lista :(",
            variant: "destructive",
          });
        }
        set({ lovedItem: [...get().lovedItem, data] });
        toast({ title: "Producto anadido a la lista :)" });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItem: [...get().lovedItem.filter((item) => item.id !== id)],
        });
        toast({ title: "Producto eliminado de favoritos :(" });
      },
    }),
    {
      name: "loved-products-storge",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
