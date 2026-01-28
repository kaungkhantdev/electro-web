import { Phone, Mail, MapPin } from "lucide-react";

export function SupportContactInfo() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            <p className="text-xs text-gray-400">Mon-Sat 9AM-9PM</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-sm text-gray-500">support@xtrasure.com</p>
            <p className="text-xs text-gray-400">24/7 Support</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Visit Us</h3>
            <p className="text-sm text-gray-500">123 Tech Street</p>
            <p className="text-xs text-gray-400">Silicon Valley, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
