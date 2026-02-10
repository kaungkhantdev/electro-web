"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    sub: "Monday - Saturday, 9AM - 9PM",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@xtrasure.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Our Store",
    value: "123 Tech Street",
    sub: "Silicon Valley, CA 94000",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM - 9PM",
    sub: "Sat: 10AM - 6PM | Sun: Closed",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <MessageSquare className="w-4 h-4" />
            Contact Support
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Get in Touch
          </h1>
          <p className=" text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Have a question or need assistance? We&apos;d love to hear from you.
            Fill out the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 -mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3 rounded-3xl border">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone (optional)
                  </label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-full h-11">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="transition-all duration-300"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{item.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
