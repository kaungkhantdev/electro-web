const faqs = [
  {
    question: "What devices do you accept?",
    answer:
      "We accept iPhones, iPads, Macs, and Apple Watches in any condition. Even damaged devices have value.",
  },
  {
    question: "How do I prepare my device?",
    answer:
      "Back up your data, sign out of iCloud, disable Find My, and perform a factory reset. Our staff can help with this in-store.",
  },
  {
    question: "When do I receive my credit?",
    answer:
      "In-store trades receive instant credit. Mail-in trades are processed within 3-5 business days of receiving your device.",
  },
];

export function TradeInFAQ() {
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Trade-In FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h4 className="font-medium text-gray-900 mb-1">{faq.question}</h4>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
