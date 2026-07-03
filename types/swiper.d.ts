declare module "swiper" {
  import { SwiperModule } from "swiper/types";
  const Autoplay: SwiperModule;
  const Pagination: SwiperModule;
  export { Autoplay, Pagination };
}

declare module "swiper/css" {}
declare module "swiper/css/navigation" {}
declare module "swiper/css/pagination" {}
