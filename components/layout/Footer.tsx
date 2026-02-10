"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowRight, BellElectric } from "lucide-react";
import { Logo } from "./logo";

const footerLinks = {
  shopAndLearn: [
    { label: "iPhone", href: "/shop/iphone" },
    { label: "iPad", href: "/shop/ipad" },
    { label: "Mac", href: "/shop/mac" },
    { label: "Apple Watch", href: "/shop/watch" },
    { label: "AirPods", href: "/shop/airpods" },
  ],
  support: [
    { label: "Shipping Policy", href: "/support/shipping" },
    { label: "Returns Policy", href: "/support/returns" },
    { label: "FAQs", href: "/support/faqs" },
    { label: "Contact Us", href: "/support/contact" },
  ],
  aboutElectro: [
    { label: "About Us", href: "/about" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Stores", href: "/stores" },
    { label: "Careers", href: "/careers" },
    { label: "Promotions", href: "/promotions" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-[#1a1a1a] text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Subscribe section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
                <Logo />
            </div>
            <p className="text-white text-lg mb-6">
              Subscribe and get updated information!
            </p>
            <div className="relative max-w-sm">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-gray-600 rounded-full text-white placeholder:text-gray-500 pr-12 h-11"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Shop and Learn */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-medium text-xs text-gray-400 uppercase tracking-wider mb-4">
              Shop and Learn
            </h4>
            <ul className="space-y-3">
              {footerLinks.shopAndLearn.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-xs text-gray-400 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About elector */}
          <div className="lg:col-span-2">
            <h4 className="font-medium text-xs text-gray-400 uppercase tracking-wider mb-4">
              About Electro
            </h4>
            <ul className="space-y-3">
              {footerLinks.aboutElectro.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-gray-500">
            More ways to shop: Find an{" "}
            <Link href="/stores" className="text-purple-400 hover:underline">
              Elector Retail
            </Link>{" "}
            near you. Or call{" "}
            <Link href="tel:09880441122" className="text-purple-400 hover:underline">
              09 880 441122
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
