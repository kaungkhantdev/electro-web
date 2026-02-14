"use client"

import { MapPin, Package, ShoppingCart, Share2, Clock } from "lucide-react"

const businessHours = [
  { day: "Monday", open: "09:00", close: "18:00", enabled: true },
  { day: "Tuesday", open: "09:00", close: "18:00", enabled: true },
  { day: "Wednesday", open: "09:00", close: "18:00", enabled: true },
  { day: "Thursday", open: "09:00", close: "18:00", enabled: true },
  { day: "Friday", open: "09:00", close: "18:00", enabled: true },
  { day: "Saturday", open: "10:00", close: "16:00", enabled: true },
  { day: "Sunday", open: "", close: "", enabled: false },
]

export function StoreSettingsForm() {
  const inputClass = "border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <div className="space-y-6">
      {/* Store Details */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 rounded-lg p-2">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Store Details</h3>
            <p className="text-muted-foreground text-xs">Your physical store location and address</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Store Name</label>
            <input
              type="text"
              defaultValue="Electro Store - Main Branch"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Store Address</label>
            <input
              type="text"
              defaultValue="123 Tech Street"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Address Line 2</label>
            <input
              type="text"
              defaultValue="Suite 400"
              className={inputClass}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">City</label>
              <input
                type="text"
                defaultValue="San Francisco"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">State / Province</label>
              <input
                type="text"
                defaultValue="California"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm font-medium mb-2 block">ZIP / Postal Code</label>
              <input
                type="text"
                defaultValue="94102"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Country</label>
              <select className={inputClass} defaultValue="US">
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/10 rounded-lg p-2">
            <Clock className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-muted-foreground text-xs">Set your store operating hours</p>
          </div>
        </div>
        <div className="space-y-3">
          {businessHours.map((schedule) => (
            <div key={schedule.day} className="flex items-center gap-4">
              <div className="w-28 text-sm font-medium">{schedule.day}</div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={schedule.enabled} className="sr-only peer" />
                <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
              </label>
              {schedule.enabled ? (
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    defaultValue={schedule.open}
                    className="border-input bg-background rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-muted-foreground text-sm">to</span>
                  <input
                    type="time"
                    defaultValue={schedule.close}
                    className="border-input bg-background rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ) : (
                <span className="text-muted-foreground text-sm">Closed</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Settings */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500/10 rounded-lg p-2">
            <Package className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold">Inventory Settings</h3>
            <p className="text-muted-foreground text-xs">Configure how inventory is tracked and managed</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Track Inventory</div>
              <div className="text-muted-foreground text-xs">Enable inventory tracking for products</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Low Stock Alerts</div>
              <div className="text-muted-foreground text-xs">Get notified when products are running low</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Allow Backorders</div>
              <div className="text-muted-foreground text-xs">Allow customers to order out-of-stock items</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Low Stock Threshold</label>
              <input
                type="number"
                defaultValue="10"
                className={`${inputClass} max-w-xs`}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Out of Stock Threshold</label>
              <input
                type="number"
                defaultValue="0"
                className={`${inputClass} max-w-xs`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Settings */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500/10 rounded-lg p-2">
            <ShoppingCart className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold">Order Settings</h3>
            <p className="text-muted-foreground text-xs">Configure order processing preferences</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Order ID Prefix</label>
              <input
                type="text"
                defaultValue="ORD-"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Invoice Prefix</label>
              <input
                type="text"
                defaultValue="INV-"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Minimum Order Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  defaultValue="0"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Maximum Order Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  defaultValue="10000"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Guest Checkout</div>
              <div className="text-muted-foreground text-xs">Allow customers to checkout without creating an account</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Order Confirmation Emails</div>
              <div className="text-muted-foreground text-xs">Send automatic confirmation emails for new orders</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-violet-500/10 rounded-lg p-2">
            <Share2 className="h-5 w-5 text-violet-500" />
          </div>
          <div>
            <h3 className="font-semibold">Social Media</h3>
            <p className="text-muted-foreground text-xs">Connect your store social media accounts</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Facebook</label>
            <input
              type="url"
              placeholder="https://facebook.com/your-store"
              defaultValue="https://facebook.com/electro-store"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Instagram</label>
            <input
              type="url"
              placeholder="https://instagram.com/your-store"
              defaultValue="https://instagram.com/electro-store"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Twitter / X</label>
            <input
              type="url"
              placeholder="https://x.com/your-store"
              defaultValue="https://x.com/electro-store"
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">YouTube</label>
            <input
              type="url"
              placeholder="https://youtube.com/@your-store"
              className={inputClass}
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
