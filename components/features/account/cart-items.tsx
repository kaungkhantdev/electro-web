"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2, ChevronRight, ArrowRight } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  variant: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    variant: "256GB - Natural Titanium",
    image: "/products/iphone.png",
    price: 1199.99,
    quantity: 1,
  },
  {
    id: "2",
    name: "AirPods Pro 2",
    variant: "USB-C",
    image: "/products/airpods.png",
    price: 249.99,
    quantity: 2,
  },
  {
    id: "3",
    name: "MagSafe Charger",
    variant: "White",
    image: "/products/charger.png",
    price: 49.99,
    quantity: 1,
  },
];

export function CartItems() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-purple-600" />
          Shopping Cart
          {cartItems.length > 0 && (
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </CardTitle>
        <CardAction>
          <Link href="/account/cart">
            <Button variant="ghost" size="sm" className="gap-1 text-purple-600 hover:text-purple-700">
              View Cart
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-7 h-7 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-1">
              Add some items to get started
            </p>
            <Link href="/">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 border border-gray-200 rounded-xl hover:border-purple-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-base font-bold text-gray-400 shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.variant}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm font-bold text-purple-600">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors disabled:opacity-40"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors ml-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      {cartItems.length > 0 && (
        <CardFooter className="flex-col gap-4 border-t border-gray-100 pt-6">
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
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
            <div className="flex justify-between text-base font-bold pt-3 border-t border-gray-100">
              <span>Total</span>
              <span className="text-purple-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
            Proceed to Checkout
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
