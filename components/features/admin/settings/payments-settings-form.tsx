"use client"

import { CreditCard, Building2, Wallet, Receipt, RefreshCw, DollarSign } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const paymentMethods = [
  { id: "stripe", name: "Stripe", icon: CreditCard, description: "Accept credit and debit cards via Stripe", enabled: true, status: "Connected" },
  { id: "paypal", name: "PayPal", icon: Wallet, description: "Accept PayPal and Venmo payments", enabled: true, status: "Connected" },
  { id: "bank", name: "Bank Transfer", icon: Building2, description: "Accept direct bank transfers", enabled: false, status: "Not configured" },
  { id: "cod", name: "Cash on Delivery", icon: DollarSign, description: "Collect payment on delivery", enabled: false, status: "Not configured" },
]

export function PaymentsSettingsForm() {
  const inputClass = "border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 rounded-lg p-2">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Payment Methods</h3>
            <p className="text-muted-foreground text-xs">Enable and configure payment gateways</p>
          </div>
        </div>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-2 ${method.enabled ? "bg-primary/10" : "bg-muted"}`}>
                  <method.icon className={`h-5 w-5 ${method.enabled ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{method.name}</span>
                    <Badge variant={method.enabled ? "default" : "secondary"} className="text-xs">
                      {method.status}
                    </Badge>
                  </div>
                  <div className="text-muted-foreground text-sm">{method.description}</div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={method.enabled} className="sr-only peer" />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Stripe Configuration */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-violet-500/10 rounded-lg p-2">
              <CreditCard className="h-5 w-5 text-violet-500" />
            </div>
            <div>
              <h3 className="font-semibold">Stripe Configuration</h3>
              <p className="text-muted-foreground text-xs">API keys and webhook settings for Stripe</p>
            </div>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Live Mode</Badge>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Test Mode</div>
              <div className="text-muted-foreground text-xs">Use Stripe test keys for development</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Publishable Key</label>
              <input
                type="text"
                placeholder="pk_live_..."
                className={`${inputClass} font-mono`}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Secret Key</label>
              <input
                type="password"
                placeholder="sk_live_..."
                defaultValue="sk_live_xxxxxxxxxxxx"
                className={`${inputClass} font-mono`}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Webhook Secret</label>
            <input
              type="password"
              placeholder="whsec_..."
              defaultValue="whsec_xxxxxxxxxxxx"
              className={`${inputClass} font-mono`}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Webhook Endpoint URL</label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                defaultValue="https://electro-store.com/api/webhooks/stripe"
                className={`${inputClass} bg-muted font-mono text-muted-foreground`}
              />
              <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted whitespace-nowrap">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PayPal Configuration */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/10 rounded-lg p-2">
            <Wallet className="h-5 w-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-semibold">PayPal Configuration</h3>
            <p className="text-muted-foreground text-xs">API credentials for PayPal payments</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Sandbox Mode</div>
              <div className="text-muted-foreground text-xs">Use PayPal sandbox for testing</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Client ID</label>
              <input
                type="text"
                placeholder="PayPal Client ID"
                className={`${inputClass} font-mono`}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Client Secret</label>
              <input
                type="password"
                placeholder="PayPal Client Secret"
                defaultValue="xxxxxxxxxxxx"
                className={`${inputClass} font-mono`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tax Settings */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-amber-500/10 rounded-lg p-2">
            <Receipt className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold">Tax Settings</h3>
            <p className="text-muted-foreground text-xs">Configure tax calculation and rates</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Enable Tax Calculation</div>
              <div className="text-muted-foreground text-xs">Automatically calculate taxes on orders</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Prices Include Tax</div>
              <div className="text-muted-foreground text-xs">Product prices already include tax</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Default Tax Rate (%)</label>
              <input
                type="number"
                defaultValue="8.5"
                step="0.1"
                className={`${inputClass} max-w-xs`}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tax Calculation Based On</label>
              <select className={inputClass} defaultValue="shipping">
                <option value="shipping">Shipping Address</option>
                <option value="billing">Billing Address</option>
                <option value="store">Store Address</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Refund Policy */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500/10 rounded-lg p-2">
            <RefreshCw className="h-5 w-5 text-green-500" />
          </div>
          <div>
            <h3 className="font-semibold">Refund Policy</h3>
            <p className="text-muted-foreground text-xs">Configure automatic refund handling</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Allow Refunds</div>
              <div className="text-muted-foreground text-xs">Enable customers to request refunds</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">Auto-Approve Refunds</div>
              <div className="text-muted-foreground text-xs">Automatically process refund requests without manual approval</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Refund Window (days)</label>
              <input
                type="number"
                defaultValue="30"
                className={`${inputClass} max-w-xs`}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Restocking Fee (%)</label>
              <input
                type="number"
                defaultValue="0"
                step="0.5"
                className={`${inputClass} max-w-xs`}
              />
            </div>
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
