const steps = [
  {
    step: 1,
    title: "Get a Quote",
    description: "Tell us about your device and get an instant trade-in value",
  },
  {
    step: 2,
    title: "Verify & Ship",
    description: "We'll verify your device condition and send a prepaid label",
  },
  {
    step: 3,
    title: "Get Paid",
    description: "Receive credit towards your new device or a gift card",
  },
];

export function TradeInSteps() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.step}
            className="relative p-6 bg-gray-50 rounded-xl text-center"
          >
            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
              {step.step}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
