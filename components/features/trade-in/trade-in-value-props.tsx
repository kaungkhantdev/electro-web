import { DollarSign, Repeat, Shield } from "lucide-react";

const valueProps = [
  {
    icon: DollarSign,
    title: "Best Value",
    description: "Get competitive trade-in values for your devices",
  },
  {
    icon: Repeat,
    title: "Easy Process",
    description: "Simple online process or visit any store",
  },
  {
    icon: Shield,
    title: "Secure Data",
    description: "We securely erase all your personal data",
  },
];

export function TradeInValueProps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {valueProps.map((prop) => (
        <div key={prop.title} className="text-center p-6">
          <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <prop.icon className="w-7 h-7 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{prop.title}</h3>
          <p className="text-sm text-gray-600">{prop.description}</p>
        </div>
      ))}
    </div>
  );
}
