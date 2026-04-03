import type { StaticImageData } from "next/image";

export type Testimonial = {
  id: number;
  name: string;
  destination?: string;
  image: string | StaticImageData;
  content: string;
  designation: string;
};
