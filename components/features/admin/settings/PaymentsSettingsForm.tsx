"use client"

import { CreditCard, Building2, Wallet } from "lucide-react"

const paymentMethods = [
  { id: "stripe", name: "Stripe", icon: CreditCard, description: "Accept credit and debit cards", enabled: true },
  { id: "paypal", name: "PayPal", icon: Wallet, description: "Accept PayPal payments", enabled: true },
  { id: "bank", name: "Bank Transfer", icon: Building2, description: "Accept bank transfers", enabled: false },
]

export function PaymentsSettingsForm() {
  return (
    <div className="space-y-6">
      <div className="bg-card border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Payment Methods</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{method.name}</div>
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

      <div className="bg-card border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Stripe Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Publishable Key</label>
            <input
              type="text"
              placeholder="pk_live_..."
              className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Secret Key</label>
            <input
              type="password"
              placeholder="sk_live_..."
              className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Webhook Secret</label>
            <input
              type="password"
              placeholder="whsec_..."
              className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
            />
          </div>
        </div>
      </div>

      <div className="bg-card border rounded-xl p-6">
        <h3 className="font-semibold mb-4">Tax Settings</h3>
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
          <div>
            <label className="text-sm font-medium mb-2 block">Default Tax Rate (%)</label>
            <input
              type="number"
              defaultValue="8.5"
              step="0.1"
              className="border-input bg-background w-full max-w-xs rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
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
