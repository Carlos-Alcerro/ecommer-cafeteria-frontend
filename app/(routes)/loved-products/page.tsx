"use client";
import { UseLovedProducts } from "@/hooks/useLovedProducts";
import LovedItemsProducts from "./components/LovedItemsProducts";

const ProductsLoved = () => {
  const { lovedItem } = UseLovedProducts();
  console.log(lovedItem);

  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
      <h1 className="text-2xl">Productos que te gustan</h1>
      <div>
        <div>
          {lovedItem.length === 0 && (
            <p>No hay productos en la seccion de me gusta</p>
          )}
          <ul>
            {lovedItem.map((loved) => (
              <LovedItemsProducts key={loved.id} product={loved} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsLoved;
