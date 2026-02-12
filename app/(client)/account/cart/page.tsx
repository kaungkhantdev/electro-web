"use client";

import { useState } from "react";
import Link from "next/link";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  Tag,
  Truck,
  Shield,
  ArrowRight,
  RotateCcw,
  TicketPercent,
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  variant: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  inStock: boolean;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    variant: "256GB - Natural Titanium",
    image: "/products/iphone.png",
    price: 1199.99,
    quantity: 1,
    inStock: true,
  },
  {
    id: "2",
    name: "AirPods Pro 2",
    variant: "USB-C",
    image: "/products/airpods.png",
    price: 249.99,
    originalPrice: 279.99,
    quantity: 2,
    inStock: true,
  },
  {
    id: "3",
    name: "MagSafe Charger",
    variant: "White",
    image: "/products/charger.png",
    price: 49.99,
    quantity: 1,
    inStock: true,
  },
  {
    id: "4",
    name: "Apple Watch Band",
    variant: "Sport Band - Midnight",
    image: "/products/band.png",
    price: 49.00,
    quantity: 1,
    inStock: false,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const inStockItems = cartItems.filter((item) => item.inStock);
  const outOfStockItems = cartItems.filter((item) => !item.inStock);

  const subtotal = inStockItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = inStockItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>
              <p className="text-purple-200 text-sm mt-0.5">
                {inStockItems.reduce((sum, item) => sum + item.quantity, 0)} items ready for checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <AccountSidebar activeItem="Cart" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="xl:col-span-2 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="">
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                        <ShoppingCart className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                      <p className="text-gray-500 mb-6 max-w-sm mx-auto">Looks like you haven&apos;t added anything to your cart yet.</p>
                      <Link href="/">
                        <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                          Continue Shopping
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* In Stock Items */}
                    <div className="">
                      <div>
                        <div className="mb-4 flex items-center gap-2 text-lg font-semibold">
                          <ShoppingCart className="w-5 h-5 text-purple-600" />
                          Cart Items
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {inStockItems.reduce((sum, item) => sum + item.quantity, 0)}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {inStockItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-4 p-4 border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-sm transition-all group"
                          >
                            <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-400 shrink-0">
                              {item.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-500 mb-2">{item.variant}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-purple-600">
                                  ${item.price.toFixed(2)}
                                </span>
                                {item.originalPrice && (
                                  <>
                                    <span className="text-sm text-gray-400 line-through">
                                      ${item.originalPrice.toFixed(2)}
                                    </span>
                                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                      Save ${(item.originalPrice - item.price).toFixed(2)}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col items-end justify-between">
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <div className="flex items-center gap-1 border border-gray-200 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors disabled:opacity-40"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Out of Stock Items */}
                    {outOfStockItems.length > 0 && (
                      <div className="border-amber-200 bg-amber-50/30 ">
                        <div>
                          <div className="text-lg font-semibold mb-4 flex items-center gap-2 text-amber-800">
                            Unavailable Items
                            <span className="text-xs font-medium text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                              {outOfStockItems.length}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {outOfStockItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex gap-4 p-4 border border-amber-200 rounded-2xl bg-white/70"
                            >
                              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-300 shrink-0">
                                {item.name.charAt(0)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-600">{item.name}</h4>
                                <p className="text-sm text-gray-400">{item.variant}</p>
                                <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-2">
                                  Out of stock
                                </span>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors self-start"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Order Summary */}
              {cartItems.length > 0 && (
                <div className="space-y-4">
                  <div className="">
                    <div>
                      <h1 className="text-lg font-semibold mb-4">Order Summary</h1>
                    </div>
                    <div className="space-y-5 border rounded-2xl p-5">
                      {/* Promo Code */}
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <TicketPercent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            placeholder="Promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        <Button variant="outline">Apply</Button>
                      </div>

                      <hr className="border-gray-100" />

                      {/* Price Breakdown */}
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Subtotal</span>
                          <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>
                        {savings > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-emerald-600">Savings</span>
                            <span className="font-medium text-emerald-600">-${savings.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Shipping</span>
                          <span className="font-medium">
                            {shipping === 0 ? (
                              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-semibold">
                                Free
                              </span>
                            ) : (
                              `$${shipping.toFixed(2)}`
                            )}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Estimated Tax</span>
                          <span className="font-medium">${tax.toFixed(2)}</span>
                        </div>
                      </div>

                      <hr className="border-gray-100" />

                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-purple-600">${total.toFixed(2)}</span>
                      </div>

                      <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700 h-12 text-base gap-2">
                        Proceed to Checkout
                        <ArrowRight className="w-4 h-4" />
                      </Button>

                      <Link href="/" className="block">
                        <Button variant="outline" className="w-full rounded-full">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="">
                    <div className="pt-6 space-y-4">
                      {[
                        {
                          icon: <Truck className="w-5 h-5" />,
                          color: "text-blue-600 bg-blue-50",
                          title: "Free Shipping",
                          desc: "On orders over $100",
                        },
                        {
                          icon: <Shield className="w-5 h-5" />,
                          color: "text-emerald-600 bg-emerald-50",
                          title: "Secure Checkout",
                          desc: "SSL encrypted payment",
                        },
                        {
                          icon: <RotateCcw className="w-5 h-5" />,
                          color: "text-purple-600 bg-purple-50",
                          title: "Easy Returns",
                          desc: "30-day return policy",
                        },
                        {
                          icon: <Tag className="w-5 h-5" />,
                          color: "text-amber-600 bg-amber-50",
                          title: "Best Price Guarantee",
                          desc: "We match any competitor",
                        },
                      ].map((benefit) => (
                        <div key={benefit.title} className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${benefit.color}`}>
                            {benefit.icon}
                          </div>
                          <div>
                            <p className="font-medium text-sm text-gray-900">{benefit.title}</p>
                            <p className="text-xs text-gray-500">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
