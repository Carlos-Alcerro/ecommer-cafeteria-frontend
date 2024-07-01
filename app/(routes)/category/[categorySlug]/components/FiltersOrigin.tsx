import GetProductFileld from "@/api/GetProductFileld";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterType } from "@/types/filter";

type FilterOriginProps = {
  setFiltersOrigin: (origin: string) => void;
};

const FiltersOrigin = (props: FilterOriginProps) => {
  const { result, loading }: FilterType = GetProductFileld();
  const { setFiltersOrigin } = props;
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result === null && <p>Cargando Origen ...</p>}
      <RadioGroup onValueChange={(value) => setFiltersOrigin(value)}>
        {result !== null &&
          result.schema.attributes.origin.enum.map((origin: string) => (
            <div key={origin} className="flex items-center space-x-2">
              <RadioGroupItem value={origin} id={origin} />
              <Label htmlFor={origin}>{origin}</Label>
            </div>
          ))}
      </RadioGroup>
    </div>
  );
};

export default FiltersOrigin;
