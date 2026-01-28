"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  shopWithLearn: [
    { label: "iPhone", href: "/shop/iphone" },
    { label: "iPad", href: "/shop/ipad" },
    { label: "Mac", href: "/shop/mac" },
    { label: "Apple Watch", href: "/shop/watch" },
    { label: "AirPods", href: "/shop/airpods" },
    { label: "Accessories", href: "/shop/accessories" },
  ],
  support: [
    { label: "Contact Us", href: "/support/contact" },
    { label: "FAQs", href: "/support/faqs" },
    { label: "Shipping Info", href: "/support/shipping" },
    { label: "Returns", href: "/support/returns" },
    { label: "Warranty", href: "/support/warranty" },
    { label: "Trade-In", href: "/trade-in" },
  ],
  aboutXtrasure: [
    { label: "About Us", href: "/about" },
    { label: "Our Stores", href: "/stores" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Subscribe and get updated information</h3>
                <p className="text-sm text-gray-400">Get the latest news, deals, and exclusive offers</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-w-[250px]"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold text-white">
                Xtra<span className="text-purple-400">Sure</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted destination for premium Apple products and accessories.
            </p>
            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>123 Tech Street, Silicon Valley</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Mon-Sat: 9AM - 9PM</span>
              </div>
            </div>
          </div>

          {/* Shop & Learn */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop With Learn</h4>
            <ul className="space-y-2">
              {footerLinks.shopWithLearn.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About XtraSure */}
          <div>
            <h4 className="font-semibold text-white mb-4">About XtraSure</h4>
            <ul className="space-y-2">
              {footerLinks.aboutXtrasure.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-semibold text-white mb-4">Download Our App</h4>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs font-bold">G</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} XtraSure. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-purple-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-purple-400">
                Terms of Service
              </Link>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
