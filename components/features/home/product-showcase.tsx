"use client";

import Image, { StaticImageData } from "next/image";
import IPadPro from "@/public/img/ipad_pro.jpeg";
import IPhone17Pro from "@/public/img/iphone_17_pro.jpeg";
import MacbookPro from "@/public/img/macbook_pro.jpeg";
import AppleWatch from "@/public/img/apple_watch_s3.jpeg";
import AirPods from "@/public/img/airpods.jpeg";
import IPhone17 from "@/public/img/iphone17.jpeg";
import IPhoneAir from "@/public/img/iphone_air.jpeg";

interface Product {
  id: number;
  name: string;
  tagline: string;
  price: string;
  monthlyPrice?: string;
  image: StaticImageData;
  bgColor: string;
  textLight: boolean;
  size: "large" | "medium" | "small";
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    tagline: "All out Pro.",
    price: "From $1099",
    monthlyPrice: "$45.79/mo. for 24 mo.",
    image: IPhone17Pro,
    bgColor: "bg-black",
    textLight: true,
    size: "large",
  },
  {
    id: 2,
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    price: "From $1599",
    monthlyPrice: "$66.62/mo. for 24 mo.",
    image: MacbookPro,
    bgColor: "bg-black",
    textLight: true,
    size: "large",
  },
  {
    id: 3,
    name: "iPad Pro",
    tagline: "Impossibly thin. Incredibly powerful.",
    price: "From $999",
    monthlyPrice: "$41.62/mo. for 24 mo.",
    image: IPadPro,
    bgColor: "bg-black",
    textLight: true,
    size: "large",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    tagline: "The ultimate sports watch.",
    price: "From $799",
    image: AppleWatch,
    bgColor: "bg-white",
    textLight: false,
    size: "medium",
  },
  {
    id: 5,
    name: "IPhone 17",
    tagline: "The ultimate sports watch.",
    price: "From $799",
    image: IPhone17,
    bgColor: "bg-white",
    textLight: false,
    size: "medium",
  },
  {
    id: 6,
    name: "AirPods Pro",
    tagline: "Intelligent sound.",
    price: "From $249",
    image: AirPods,
    bgColor: "bg-white",
    textLight: false,
    size: "medium",
  },
  {
    id: 7,
    name: "iPhone Air",
    tagline: "The ultimate sports watch.",
    price: "From $799",
    image: IPhoneAir,
    bgColor: "bg-white",
    textLight: false,
    size: "medium",
  },
];

function ProductCard({ product }: { product: Product }) {
  const textColor = product.textLight ? "text-white" : "text-gray-900";
  const subtextColor = product.textLight ? "text-gray-400" : "text-gray-500";

  const sizeClasses = {
    large: "md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-[400px]",
    medium: "md:col-span-1 min-h-[300px] md:min-h-[350px]",
    small: "md:col-span-1 min-h-[280px] md:min-h-[300px]",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${product.bgColor} ${sizeClasses[product.size]} cursor-pointer group transition-transform hover:scale-[1.02]`}
    >
      {/* Text content */}
      <div className="absolute top-8 left-8 z-10">
        <h3 className={`text-2xl md:text-2xl font-medium ${textColor} mb-1`}>
          {product.name}
        </h3>
        <p className={`text-base md:text-lg ${subtextColor} mb-2`}>
          {product.tagline}
        </p>
        <p className={`text-sm ${subtextColor}`}>
          {product.price}
          {product.monthlyPrice && (
            <span>
              {" "}
              or {product.monthlyPrice}
              <sup className="text-xs">◊</sup>
            </span>
          )}
        </p>
      </div>

      {/* Product image */}
      <div className="absolute inset-0 flex items-end justify-center pt-20">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain object-bottom w-full h-full transition-transform duration-500 group-hover:scale-105"
          priority={product.size === "large"}
        />
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const largeProducts = products.filter((p) => p.size === "large");
  const otherProducts = products.filter((p) => p.size !== "large");

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">
            Explore and Acquire Your Desired
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Apple Products Now
          </h2>
        </div>

        {/* Featured large products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {largeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Other products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {otherProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
