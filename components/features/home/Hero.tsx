"use client";

import Image from "next/image";
import Hero1 from "@/public/img/hero1.webp";
import Hero2 from "@/public/img/hero2.webp";
import Hero3 from "@/public/img/hero3.webp";
import Hero4 from "@/public/img/hero4.webp";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main banner */}
          <div className="col-span-1">
            <Link href="/products">
              <Image
                src={Hero1}
                alt="Hero Banner"
                className="w-full h-full object-cover rounded-3xl"
              />
            </Link>
          </div>

          {/* Side banners */}
          <div className="flex flex-col gap-4">
            {/* Trade-in banner */}
            <div>
              <Link href="/trade-in">
                <Image
                  src={Hero2}
                  alt="Hero Banner"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </Link>
            </div>

            {/* New Year Schedule banner */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/new-year-schedule">
                <Image
                  src={Hero3}
                  alt="Hero Banner"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </Link>
              
              <Link href="/new-year-schedule">
                <Image
                  src={Hero4}
                  alt="Hero Banner"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
