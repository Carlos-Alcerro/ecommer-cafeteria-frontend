export type TasteOriginProps = {
  origin: string;
  taste: string;
};

const ProductOriginTaste = (props: TasteOriginProps) => {
  const { origin, taste } = props;
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">
        {taste}
      </p>
      <p className="px-2 py-1 text-xs text-white rounded-full bg-yellow-900 w-fit">
        {origin}
      </p>
    </div>
  );
};

export default ProductOriginTaste;
