"use client";

import { useState } from "react";
import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Minus, Plus, Trash2, Tag, Truck, Shield } from "lucide-react";

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
    <ContentPageLayout
      title="Shopping Cart"
      subtitle="Review and manage your cart items"
      breadcrumbs={[
        { label: "Account", href: "/account" },
        { label: "Cart" },
      ]}
      variant="default"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <AccountSidebar activeItem="Cart" />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="xl:col-span-2 space-y-4">
              {cartItems.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
                    <Link href="/">
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {/* In Stock Items */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5 text-purple-600" />
                        Cart Items ({inStockItems.reduce((sum, item) => sum + item.quantity, 0)})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {inStockItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-200 transition-colors"
                        >
                          <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-500 flex-shrink-0">
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
                                <span className="text-sm text-gray-400 line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-2 text-gray-600 hover:text-purple-600 transition-colors disabled:opacity-50"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-10 text-center font-medium">{item.quantity}</span>
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
                    </CardContent>
                  </Card>

                  {/* Out of Stock Items */}
                  {outOfStockItems.length > 0 && (
                    <Card className="border-orange-200 bg-orange-50/50">
                      <CardHeader>
                        <CardTitle className="text-orange-800">
                          Unavailable Items ({outOfStockItems.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {outOfStockItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex gap-4 p-4 border border-orange-200 rounded-lg bg-white opacity-75"
                          >
                            <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-400 flex-shrink-0">
                              {item.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-600">{item.name}</h4>
                              <p className="text-sm text-gray-400">{item.variant}</p>
                              <p className="text-sm text-orange-600 font-medium mt-1">Out of stock</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1 self-start"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Promo Code */}
                    <div className="flex gap-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline">Apply</Button>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Price Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-green-600">Savings</span>
                          <span className="font-medium text-green-600">-${savings.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Shipping</span>
                        <span className="font-medium">
                          {shipping === 0 ? (
                            <span className="text-green-600">Free</span>
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

                    <hr className="border-gray-200" />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-purple-600">${total.toFixed(2)}</span>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 py-6 text-lg">
                      Proceed to Checkout
                    </Button>

                    <Link href="/">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Free Shipping</p>
                        <p className="text-sm text-gray-500">On orders over $100</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Secure Checkout</p>
                        <p className="text-sm text-gray-500">SSL encrypted payment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Best Price Guarantee</p>
                        <p className="text-sm text-gray-500">We match any competitor price</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
