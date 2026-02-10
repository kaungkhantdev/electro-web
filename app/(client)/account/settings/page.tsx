"use client";

import { useState } from "react";
import { AccountSidebar } from "@/components/features/account";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
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
  Settings,
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
    <main className="flex-1 bg-gray-50/60">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
              <p className="text-purple-200 text-sm mt-0.5">
                Manage your account preferences and security
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
              <AccountSidebar activeItem="Settings" />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* Profile Settings */}
            <Card className="shadow-sm">
              <CardHeader>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                      <User className="w-4 h-4" />
                    </div>
                    Profile Information
                  </CardTitle>
                  <CardDescription className="ml-10">Update your personal details</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            {/* Password Settings */}
            <Card className="shadow-sm">
              <CardHeader>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                      <Lock className="w-4 h-4" />
                    </div>
                    Password & Security
                  </CardTitle>
                  <CardDescription className="ml-10">Manage your password and security settings</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <Button className="bg-purple-600 hover:bg-purple-700">Update Password</Button>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="shadow-sm">
              <CardHeader>
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Bell className="w-4 h-4" />
                    </div>
                    Notification Preferences
                  </CardTitle>
                  <CardDescription className="ml-10">Choose how you want to receive notifications</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
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
                            isEnabled ? "bg-purple-600" : "bg-gray-200"
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
              </CardContent>
            </Card>

            {/* Saved Addresses */}
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    Saved Addresses
                  </CardTitle>
                  <CardDescription className="ml-10">Manage your delivery addresses</CardDescription>
                </div>
                <CardAction>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Plus className="w-4 h-4" />
                    Add Address
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockAddresses.map((address) => (
                    <div
                      key={address.id}
                      className={`p-4 rounded-xl border-2 transition-colors ${
                        address.isDefault
                          ? "border-purple-200 bg-purple-50/30"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-gray-900">{address.label}</span>
                          {address.isDefault && (
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex gap-1">
                          <button className="p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
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
                        <button className="text-xs text-purple-600 font-medium hover:text-purple-700 mt-3 transition-colors">
                          Set as default
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    Payment Methods
                  </CardTitle>
                  <CardDescription className="ml-10">Manage your saved payment methods</CardDescription>
                </div>
                <CardAction>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Plus className="w-4 h-4" />
                    Add Card
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPaymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-colors ${
                        method.isDefault
                          ? "border-purple-200 bg-purple-50/30"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-8 ${cardTypeColors[method.type] || "bg-gray-600"} rounded-lg flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider`}
                        >
                          {method.type}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-sm text-gray-900">
                              &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; {method.last4}
                            </p>
                            {method.isDefault && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">Expires {method.expiry}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {!method.isDefault && (
                          <Button variant="ghost" size="sm" className="text-purple-600 text-xs">
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
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200 shadow-sm">
              <CardHeader>
                <div>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <Trash2 className="w-4 h-4" />
                    </div>
                    Danger Zone
                  </CardTitle>
                  <CardDescription className="ml-10">Irreversible actions for your account</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl border border-red-100">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
