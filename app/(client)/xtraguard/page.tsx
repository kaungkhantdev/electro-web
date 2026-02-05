import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Sparkles,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Zap,
  RefreshCw,
  Droplets,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Military-Grade Protection",
    description: "9H hardness rating protects against scratches, drops, and impacts",
  },
  {
    icon: Sparkles,
    title: "Self-Healing Technology",
    description: "Minor scratches disappear within 24-48 hours",
  },
  {
    icon: Droplets,
    title: "Oleophobic Coating",
    description: "Resists fingerprints and smudges for crystal-clear display",
  },
  {
    icon: Zap,
    title: "Easy Installation",
    description: "Bubble-free application with included alignment tool",
  },
];

const compatibleDevices = [
  "iPhone 17 Pro Max",
  "iPhone 17 Pro",
  "iPhone 17",
  "iPhone 17 Plus",
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 15 Plus",
];

const packages = [
  {
    name: "XtraGuard 2.0 Basic",
    price: 29,
    features: [
      "1x Screen Protector",
      "Cleaning Kit",
      "Alignment Tool",
      "1-Year Warranty",
    ],
  },
  {
    name: "XtraGuard 2.0 Plus",
    price: 39,
    features: [
      "1x Screen Protector",
      "1x Camera Lens Protector",
      "Premium Cleaning Kit",
      "Alignment Tool",
      "2-Year Warranty",
    ],
    popular: true,
  },
  {
    name: "XtraGuard 2.0 Complete",
    price: 59,
    features: [
      "2x Screen Protectors",
      "1x Camera Lens Protector",
      "1x Back Protector",
      "Premium Cleaning Kit",
      "Alignment Tool",
      "Lifetime Warranty",
    ],
  },
];

export default function XtraGuardPage() {
  return (
    <div className="max-w-5xl mx-auto">
        {/* Hero product */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-400 text-black mb-4">New Release</Badge>
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-purple-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">2.0</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of screen protection. XtraGuard 2.0
            combines military-grade durability with revolutionary self-healing
            technology.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why XtraGuard 2.0?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={pkg.popular ? "border-purple-500 ring-2 ring-purple-200" : ""}
              >
                <CardContent className="p-6">
                  {pkg.popular && (
                    <Badge className="bg-purple-600 text-white mb-4">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compatible devices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Compatible Devices
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {compatibleDevices.map((device) => (
              <Badge
                key={device}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {device}
              </Badge>
            ))}
          </div>
        </div>

        {/* Warranty info */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
          <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl font-bold mb-2">Lifetime Replacement</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            With our Complete package, get unlimited replacements for the lifetime
            of your device. No questions asked.
          </p>
          <Link href="/shop/accessories">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Shop Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
  );
}
