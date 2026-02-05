"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2, ChevronRight } from "lucide-react";

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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-purple-600" />
          Shopping Cart
          {cartItems.length > 0 && (
            <span className="text-sm font-normal text-gray-500">
              ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
            </span>
          )}
        </CardTitle>
        <Link href="/account/cart">
          <Button variant="ghost" size="sm" className="gap-1 text-purple-600 hover:text-purple-700">
            View Cart
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Your cart is empty</p>
            <Link href="/">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 border border-gray-200 rounded-lg hover:border-purple-200 transition-colors"
              >
                <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-500 flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.variant}</p>
                  <p className="text-sm font-semibold text-purple-600 mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1.5 text-gray-600 hover:text-purple-600 transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1.5 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
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
                  <span className="text-green-600">Free</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t border-gray-100">
              <span>Total</span>
              <span className="text-purple-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Proceed to Checkout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
