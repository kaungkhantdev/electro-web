"use client"

import { Plus, Trash2 } from "lucide-react"

const shippingZones = [
  { id: "1", name: "United States", countries: ["USA"], methods: [{ name: "Standard Shipping", price: 5.99, days: "5-7" }, { name: "Express Shipping", price: 12.99, days: "2-3" }] },
  { id: "2", name: "Canada", countries: ["CAN"], methods: [{ name: "Standard Shipping", price: 9.99, days: "7-10" }] },
  { id: "3", name: "Europe", countries: ["UK", "DE", "FR"], methods: [{ name: "International", price: 19.99, days: "10-14" }] },
]

export function ShippingSettingsForm() {
  return (
    <div className="space-y-6">
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Shipping Zones</h3>
          <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            <Plus className="h-4 w-4" />
            Add Zone
          </button>
        </div>
        <div className="space-y-4">
          {shippingZones.map((zone) => (
            <div key={zone.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-medium">{zone.name}</div>
                  <div className="text-muted-foreground text-sm">{zone.countries.join(", ")}</div>
                </div>
                <button className="text-red-600 hover:bg-red-50 rounded p-1">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                {zone.methods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/50 rounded-md px-3 py-2">
                    <div className="text-sm">
                      <span className="font-medium">{method.name}</span>
                      <span className="text-muted-foreground ml-2">({method.days} days)</span>
                    </div>
                    <span className="text-sm font-medium">${method.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Free Shipping</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Enable Free Shipping</div>
              <div className="text-muted-foreground text-xs">Offer free shipping for orders above a threshold</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Minimum Order for Free Shipping</label>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <input
                type="number"
                defaultValue="50"
                className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Carrier Integrations</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">FedEx</div>
              <div className="text-muted-foreground text-sm">Real-time shipping rates</div>
            </div>
            <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted">
              Configure
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">UPS</div>
              <div className="text-muted-foreground text-sm">Real-time shipping rates</div>
            </div>
            <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted">
              Configure
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-medium">USPS</div>
              <div className="text-muted-foreground text-sm">Real-time shipping rates</div>
            </div>
            <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted">
              Configure
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2 text-sm font-medium">
          Save Changes
        </button>
      </div>
    </div>
  )
}
