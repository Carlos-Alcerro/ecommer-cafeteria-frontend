import BannerDiscount from "@/components/BannerDiscount";
import BannerProducts from "@/components/BannerProducts";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import ChooseCategory from "@/components/ChooseCategory";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProducts />
    </main>
  );
}
