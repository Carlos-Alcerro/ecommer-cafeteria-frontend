import FiltersOrigin from "./FiltersOrigin";

type FilterControlCategoryProps = {
  setFiltersOrigin: (origin: string) => void;
};

const FiltersControlsCategory = (props: FilterControlCategoryProps) => {
  const { setFiltersOrigin } = props;
  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FiltersOrigin setFiltersOrigin={setFiltersOrigin} />
    </div>
  );
};

export default FiltersControlsCategory;
