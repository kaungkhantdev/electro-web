"use client";

import { useState } from "react";
import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  User,
  Lock,
  Bell,
  CreditCard,
  MapPin,
  Trash2,
  Eye,
  EyeOff,
  Plus,
  Edit,
} from "lucide-react";

interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

interface PaymentMethod {
  id: string;
  type: "visa" | "mastercard" | "amex";
  last4: string;
  expiry: string;
  isDefault: boolean;
}

const mockAddresses: Address[] = [
  {
    id: "1",
    label: "Home",
    name: "John Doe",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
    isDefault: true,
  },
  {
    id: "2",
    label: "Work",
    name: "John Doe",
    street: "456 Business Ave, Suite 100",
    city: "New York",
    state: "NY",
    zip: "10002",
    country: "United States",
    isDefault: false,
  },
];

const mockPaymentMethods: PaymentMethod[] = [
  { id: "1", type: "visa", last4: "4242", expiry: "12/26", isDefault: true },
  { id: "2", type: "mastercard", last4: "8888", expiry: "06/25", isDefault: false },
];

const cardTypeColors: Record<string, string> = {
  visa: "bg-blue-600",
  mastercard: "bg-orange-500",
  amex: "bg-gray-700",
};

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newsletter: false,
    sms: false,
  });

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Settings */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <User className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-semibold">Profile Information</h2>
          </div>
          <CardDescription className="ml-10">Update your personal details</CardDescription>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name</label>
              <Input defaultValue="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
              <Input defaultValue="Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <Input type="email" defaultValue="john.doe@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
              <Input type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
          </div>
        </div>
      </div>

      {/* Password Settings */}
      <div className="bg-white border border-gray-200 p-5 rounded-xl">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-semibold">Password & Security</h2>
          </div>
          <CardDescription className="ml-10">Manage your password and security settings</CardDescription>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 md:max-w-[calc(50%-0.5rem)]">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label>
              <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder="Enter current password" className="pr-10" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
              <Input type="password" placeholder="Enter new password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label>
              <Input type="password" placeholder="Confirm new password" />
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <Button className="bg-blue-600 hover:bg-blue-700">Update Password</Button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-5 rounded-xl border border-gray-200">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Bell className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-semibold">Notification Preferences</h2>
          </div>
          <CardDescription className="ml-10">Choose how you want to receive notifications</CardDescription>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { key: "orderUpdates", label: "Order Updates", description: "Get notified about your order status" },
            { key: "promotions", label: "Promotions & Deals", description: "Receive exclusive offers and discounts" },
            { key: "newsletter", label: "Newsletter", description: "Weekly newsletter with new products and tips" },
            { key: "sms", label: "SMS Notifications", description: "Receive text messages for urgent updates" },
          ].map((item) => {
            const isEnabled = notifications[item.key as keyof typeof notifications];
            return (
              <div key={item.key} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-medium text-sm text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      [item.key]: !prev[item.key as keyof typeof prev],
                    }))
                  }
                  className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ml-4 ${
                    isEnabled ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                      isEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white p-5 rounded-xl border border-gray-200">
        <div className="flex flex-row items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-semibold">Saved Addresses</h2>
            </div>
            <CardDescription className="ml-10">Manage your delivery addresses</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Plus className="w-4 h-4" />
            Add Address
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockAddresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 rounded-xl border-2 transition-colors ${
                address.isDefault
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900">{address.label}</span>
                  {address.isDefault && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                      Default
                    </span>
                  )}
                </div>
                <div className="flex gap-1">
                  <button className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="space-y-0.5 text-sm text-gray-600">
                <p>{address.name}</p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
                <p>{address.country}</p>
              </div>
              {!address.isDefault && (
                <button className="text-xs text-blue-600 font-medium hover:text-blue-700 mt-3 transition-colors">
                  Set as default
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white p-5 rounded-xl border border-gray-200">
        <div className="flex flex-row items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                <CreditCard className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-semibold">Payment Methods</h2>
            </div>
            <CardDescription className="ml-10">Manage your saved payment methods</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Plus className="w-4 h-4" />
            Add Card
          </Button>
        </div>
        <div className="space-y-3">
          {mockPaymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                method.isDefault
                  ? "border-blue-200 bg-blue-50/30"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-8 ${cardTypeColors[method.type] || "bg-gray-600"} rounded flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider`}
                >
                  {method.type}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm text-gray-900">
                      &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {method.last4}
                    </p>
                    {method.isDefault && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Expires {method.expiry}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {!method.isDefault && (
                  <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
                    Set Default
                  </Button>
                )}
                <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border-red-200 p-5 rounded-xl border">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <Trash2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
          </div>
          <CardDescription className="ml-10">Irreversible actions for your account</CardDescription>
        </div>
        <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-lg border border-red-100">
          <div>
            <p className="font-medium text-sm text-gray-900">Delete Account</p>
            <p className="text-sm text-gray-500">
              Permanently delete your account and all associated data
            </p>
          </div>
          <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 shrink-0 ml-4">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
