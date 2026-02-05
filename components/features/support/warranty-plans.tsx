import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Wrench, Phone } from "lucide-react";

const warrantyPlans = [
  {
    name: "Standard Warranty",
    price: "Included",
    duration: "1 Year",
    features: [
      "Manufacturing defects coverage",
      "Hardware malfunctions",
      "Apple-authorized repairs",
      "Genuine Apple parts",
    ],
  },
  {
    name: "AppleCare+",
    price: "From $149",
    duration: "2-3 Years",
    features: [
      "Everything in Standard",
      "Accidental damage coverage",
      "Battery service",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "XtraSure Care",
    price: "From $99",
    duration: "2 Years",
    features: [
      "Extended hardware coverage",
      "Screen protection plan",
      "Data recovery service",
      "Express replacement",
    ],
  },
];

export function WarrantyPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {warrantyPlans.map((plan) => (
        <Card
          key={plan.name}
          className={plan.highlighted ? "border-purple-500 ring-2 ring-purple-200" : ""}
        >
          <CardContent className="p-6">
            {plan.highlighted && (
              <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full mb-4">
                Recommended
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-purple-600">
                {plan.price}
              </span>
              <span className="text-gray-500">/ {plan.duration}</span>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function WarrantyClaim() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        How to Claim Warranty
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">1. Contact Us</h3>
            <p className="text-sm text-gray-500">
              Reach out to our support team with your proof of purchase
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">2. Verify Coverage</h3>
            <p className="text-sm text-gray-500">
              We'll check your warranty status and coverage details
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">3. Get Service</h3>
            <p className="text-sm text-gray-500">
              Visit a store or receive mail-in service instructions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
