"use client"

import { Globe, Mail, Bell, Shield } from "lucide-react"

export function GeneralSettingsForm() {
  const inputClass = "border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
  const selectClass = "border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <div className="space-y-6">
      {/* Site Information */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 rounded-lg p-2">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Site Information</h3>
            <p className="text-muted-foreground text-xs">Basic information about your online store</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Site Name</label>
              <input
                type="text"
                defaultValue="Electro Store"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tagline</label>
              <input
                type="text"
                defaultValue="Your one-stop shop for electronics"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Site Description</label>
            <textarea
              rows={3}
              defaultValue="Your one-stop shop for electronics and gadgets. We offer the latest tech products at competitive prices with fast shipping and excellent customer support."
              className={`${inputClass} resize-none`}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Site URL</label>
              <input
                type="url"
                defaultValue="https://electro-store.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Logo URL</label>
              <input
                type="url"
                defaultValue="https://electro-store.com/logo.png"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/10 rounded-lg p-2">
            <Mail className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold">Contact Information</h3>
            <p className="text-muted-foreground text-xs">How customers can reach your store</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Contact Email</label>
            <input
              type="email"
              defaultValue="contact@electro-store.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Support Email</label>
            <input
              type="email"
              defaultValue="support@electro-store.com"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Support Phone</label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Business Hours</label>
            <input
              type="text"
              defaultValue="Mon-Fri 9:00 AM - 6:00 PM"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Regional Settings */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-violet-500/10 rounded-lg p-2">
            <Globe className="h-5 w-5 text-violet-500" />
          </div>
          <div>
            <h3 className="font-semibold">Regional Settings</h3>
            <p className="text-muted-foreground text-xs">Localization and regional preferences</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Timezone</label>
            <select className={selectClass} defaultValue="PST">
              <option value="UTC">UTC</option>
              <option value="EST">Eastern Time (EST)</option>
              <option value="CST">Central Time (CST)</option>
              <option value="MST">Mountain Time (MST)</option>
              <option value="PST">Pacific Time (PST)</option>
              <option value="GMT">Greenwich Mean Time (GMT)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Currency</label>
            <select className={selectClass} defaultValue="USD">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (&euro;)</option>
              <option value="GBP">GBP (&pound;)</option>
              <option value="CAD">CAD (C$)</option>
              <option value="AUD">AUD (A$)</option>
              <option value="JPY">JPY (&yen;)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Date Format</label>
            <select className={selectClass} defaultValue="MM/DD/YYYY">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Language</label>
            <select className={selectClass} defaultValue="en">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="pt">Portuguese</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Weight Unit</label>
            <select className={selectClass} defaultValue="lb">
              <option value="kg">Kilograms (kg)</option>
              <option value="lb">Pounds (lb)</option>
              <option value="oz">Ounces (oz)</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Dimension Unit</label>
            <select className={selectClass} defaultValue="in">
              <option value="cm">Centimeters (cm)</option>
              <option value="in">Inches (in)</option>
              <option value="m">Meters (m)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500/10 rounded-lg p-2">
            <Bell className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold">Notification Preferences</h3>
            <p className="text-muted-foreground text-xs">Control what notifications you receive</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">New Order Notifications</div>
              <div className="text-muted-foreground text-xs">Receive an email when a new order is placed</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Low Stock Alerts</div>
              <div className="text-muted-foreground text-xs">Get notified when product stock is running low</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Customer Reviews</div>
              <div className="text-muted-foreground text-xs">Notify when a new customer review is submitted</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Marketing Emails</div>
              <div className="text-muted-foreground text-xs">Receive promotional and marketing communications</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security & Maintenance */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-500/10 rounded-lg p-2">
            <Shield className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h3 className="font-semibold">Security & Maintenance</h3>
            <p className="text-muted-foreground text-xs">Security and maintenance mode settings</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Maintenance Mode</div>
              <div className="text-muted-foreground text-xs">Temporarily disable the storefront for maintenance</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Two-Factor Authentication</div>
              <div className="text-muted-foreground text-xs">Require 2FA for admin users</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Session Timeout (minutes)</label>
            <input
              type="number"
              defaultValue="30"
              className={`${inputClass} max-w-xs`}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="border rounded-md px-6 py-2 text-sm font-medium hover:bg-muted">
          Reset to Defaults
        </button>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2 text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  )
}
