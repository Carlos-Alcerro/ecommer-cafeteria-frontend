import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductsProps {
  images: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
}

const CarouselProducts = (props: CarouselProductsProps) => {
  const { images } = props;

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.data.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="Image Product"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselProducts;
