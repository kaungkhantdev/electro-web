"use client"

import { Plus, Trash2, MapPin, Gift, Truck, Package, RotateCcw, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const shippingZones = [
  {
    id: "1",
    name: "United States",
    countries: ["USA"],
    methods: [
      { name: "Standard Shipping", price: 5.99, days: "5-7", enabled: true },
      { name: "Express Shipping", price: 12.99, days: "2-3", enabled: true },
      { name: "Overnight", price: 24.99, days: "1", enabled: true },
    ],
  },
  {
    id: "2",
    name: "Canada",
    countries: ["CAN"],
    methods: [
      { name: "Standard Shipping", price: 9.99, days: "7-10", enabled: true },
      { name: "Express Shipping", price: 18.99, days: "3-5", enabled: true },
    ],
  },
  {
    id: "3",
    name: "Europe",
    countries: ["UK", "DE", "FR", "IT", "ES"],
    methods: [
      { name: "International Standard", price: 19.99, days: "10-14", enabled: true },
      { name: "International Express", price: 34.99, days: "5-7", enabled: true },
    ],
  },
  {
    id: "4",
    name: "Asia Pacific",
    countries: ["JP", "AU", "KR", "SG"],
    methods: [
      { name: "International Standard", price: 24.99, days: "14-21", enabled: true },
    ],
  },
]

const carriers = [
  { name: "FedEx", description: "Real-time rates, tracking, and label printing", connected: true },
  { name: "UPS", description: "Real-time rates, tracking, and label printing", connected: true },
  { name: "USPS", description: "Real-time rates and tracking for US shipments", connected: false },
  { name: "DHL", description: "International express shipping and tracking", connected: false },
]

export function ShippingSettingsForm() {
  const inputClass = "border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <div className="space-y-6">
      {/* Shipping Zones */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-lg p-2">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Shipping Zones</h3>
              <p className="text-muted-foreground text-xs">Define regions and their shipping rates</p>
            </div>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-1.5">
            <Plus className="h-4 w-4" />
            Add Zone
          </button>
        </div>
        <div className="space-y-4">
          {shippingZones.map((zone) => (
            <div key={zone.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{zone.name}</div>
                    <div className="text-muted-foreground text-xs">{zone.countries.join(", ")}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">{zone.methods.length} methods</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <button className="border rounded-md px-3 py-1.5 text-xs font-medium hover:bg-muted">
                    Edit
                  </button>
                  <button className="text-red-600 hover:bg-red-50 rounded-md p-1.5">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                {zone.methods.map((method, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted/50 rounded-md px-4 py-2.5">
                    <div className="flex items-center gap-3">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">
                        <span className="font-medium">{method.name}</span>
                        <span className="text-muted-foreground ml-2">({method.days} days)</span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">${method.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Shipping */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500/10 rounded-lg p-2">
            <Gift className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-muted-foreground text-xs">Offer free shipping promotions to customers</p>
          </div>
        </div>
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Minimum Order for Free Shipping</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  defaultValue="50"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Free Shipping Applies To</label>
              <select className={inputClass} defaultValue="all">
                <option value="all">All Shipping Zones</option>
                <option value="domestic">Domestic Only</option>
                <option value="select">Select Zones</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Show Free Shipping Badge</div>
              <div className="text-muted-foreground text-xs">Display a badge on qualifying products</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Package Defaults */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500/10 rounded-lg p-2">
            <Package className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold">Package Defaults</h3>
            <p className="text-muted-foreground text-xs">Default package dimensions and weight for shipping calculation</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Default Weight (lb)</label>
              <input
                type="number"
                defaultValue="1.0"
                step="0.1"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Default Length (in)</label>
              <input
                type="number"
                defaultValue="12"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Default Width (in)</label>
              <input
                type="number"
                defaultValue="8"
                className={inputClass}
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Default Height (in)</label>
              <input
                type="number"
                defaultValue="6"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Packing Material Weight (lb)</label>
              <input
                type="number"
                defaultValue="0.2"
                step="0.1"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Max Package Weight (lb)</label>
              <input
                type="number"
                defaultValue="70"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Handling Time */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/10 rounded-lg p-2">
            <Clock className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold">Handling Time</h3>
            <p className="text-muted-foreground text-xs">Processing time before orders are shipped</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Processing Time (business days)</label>
              <select className={inputClass} defaultValue="1-2">
                <option value="same">Same day</option>
                <option value="1">1 business day</option>
                <option value="1-2">1-2 business days</option>
                <option value="2-3">2-3 business days</option>
                <option value="3-5">3-5 business days</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Cut-off Time for Same-Day Processing</label>
              <input
                type="time"
                defaultValue="14:00"
                className={inputClass}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Process on Weekends</div>
              <div className="text-muted-foreground text-xs">Include Saturday and Sunday in processing days</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Carrier Integrations */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-violet-500/10 rounded-lg p-2">
            <Truck className="h-5 w-5 text-violet-500" />
          </div>
          <div>
            <h3 className="font-semibold">Carrier Integrations</h3>
            <p className="text-muted-foreground text-xs">Connect shipping carriers for real-time rates</p>
          </div>
        </div>
        <div className="space-y-3">
          {carriers.map((carrier) => (
            <div key={carrier.name} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-2 ${carrier.connected ? "bg-primary/10" : "bg-muted"}`}>
                  <Truck className={`h-5 w-5 ${carrier.connected ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{carrier.name}</span>
                    <Badge variant={carrier.connected ? "default" : "secondary"} className="text-xs">
                      {carrier.connected ? "Connected" : "Not connected"}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground text-sm">{carrier.description}</div>
                </div>
              </div>
              <button className={`rounded-md px-4 py-2 text-sm font-medium ${carrier.connected ? "border hover:bg-muted" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                {carrier.connected ? "Configure" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Returns & Exchanges */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-500/10 rounded-lg p-2">
            <RotateCcw className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h3 className="font-semibold">Returns & Exchanges</h3>
            <p className="text-muted-foreground text-xs">Configure return shipping preferences</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Free Return Shipping</div>
              <div className="text-muted-foreground text-xs">Provide prepaid return labels to customers</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Auto-Generate Return Labels</div>
              <div className="text-muted-foreground text-xs">Automatically generate return shipping labels</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Return Shipping Carrier</label>
            <select className={inputClass} defaultValue="fedex">
              <option value="fedex">FedEx</option>
              <option value="ups">UPS</option>
              <option value="usps">USPS</option>
            </select>
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
