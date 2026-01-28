import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

const returnSteps = [
  {
    step: 1,
    title: "Initiate Return",
    description: "Log into your account and select the item to return",
  },
  {
    step: 2,
    title: "Print Label",
    description: "Download and print your prepaid shipping label",
  },
  {
    step: 3,
    title: "Ship Item",
    description: "Pack the item securely and drop it off at any carrier location",
  },
  {
    step: 4,
    title: "Get Refund",
    description: "Receive your refund within 5-7 business days",
  },
];

export function ReturnSteps() {
  return (
    <>
      {/* Return process steps */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          How to Return an Item
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {returnSteps.map((step) => (
            <div
              key={step.step}
              className="relative p-4 bg-gray-50 rounded-xl text-center"
            >
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                {step.step}
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Return policy highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Eligible for Return
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Unopened products in original packaging</li>
                  <li>• Products with manufacturing defects</li>
                  <li>• Incorrect items received</li>
                  <li>• Most accessories and cases</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Not Eligible for Return
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Opened software or digital products</li>
                  <li>• Gift cards</li>
                  <li>• Items with physical damage (non-defect)</li>
                  <li>• Items purchased more than 30 days ago</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
