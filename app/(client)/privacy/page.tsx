import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Database,
  Share2,
  Lock,
  UserCheck,
  Cookie,
  Baby,
  RefreshCw,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    id: "information-collect",
    icon: Database,
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Personal Information",
        description:
          "We may collect personal information that you provide to us, including:",
        items: [
          "Name and contact information (email, phone, address)",
          "Payment information (credit card numbers, billing address)",
          "Account credentials",
          "Order history and preferences",
          "Communications with our customer service team",
        ],
      },
      {
        subtitle: "Automatically Collected Information",
        description:
          "When you visit our website, we may automatically collect certain information, including:",
        items: [
          "IP address and device information",
          "Browser type and settings",
          "Pages visited and time spent",
          "Referring website or search terms",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    description: "We use the information we collect to:",
    items: [
      "Process and fulfill your orders",
      "Communicate with you about your orders and account",
      "Send promotional communications (with your consent)",
      "Improve our website and services",
      "Prevent fraud and enhance security",
      "Comply with legal obligations",
    ],
  },
  {
    id: "information-sharing",
    icon: Share2,
    title: "Information Sharing",
    description: "We may share your information with:",
    items: [
      "Service providers who assist in our operations",
      "Payment processors for transaction processing",
      "Shipping carriers for order delivery",
      "Law enforcement when required by law",
    ],
    note: "We do not sell your personal information to third parties for marketing purposes.",
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    description:
      "Depending on your location, you may have the right to:",
    items: [
      "Access the personal information we hold about you",
      "Request correction of inaccurate information",
      "Request deletion of your information",
      "Opt out of marketing communications",
      "Data portability",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    text: "We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings.",
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    text: "Our services are not directed to individuals under 16. We do not knowingly collect personal information from children.",
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Policy",
    text: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.',
  },
];

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Shield className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            XtraSure is committed to protecting your privacy. This policy
            explains how we collect, use, disclose, and safeguard your
            information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-sm font-medium text-gray-900 mb-3">
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition-colors"
              >
                <section.icon className="w-3.5 h-3.5" />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="space-y-8">
          {sections.map((section) => (
            <Card
              key={section.id}
              id={section.id}
              className="border-gray-100 shadow-sm scroll-mt-24 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Section Header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-50 bg-gray-50/50">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shrink-0">
                    <section.icon className="w-4.5 h-4.5 text-purple-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                {/* Section Body */}
                <div className="px-6 py-5 space-y-4">
                  {/* Plain text section */}
                  {"text" in section && section.text && (
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {section.text}
                    </p>
                  )}

                  {/* Description + items */}
                  {"description" in section &&
                    section.description &&
                    !("subsections" in section) && (
                      <>
                        <p className="text-gray-600 text-[15px]">
                          {section.description}
                        </p>
                        {"items" in section && section.items && (
                          <ul className="space-y-2 ml-1">
                            {section.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 text-[15px] text-gray-600"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}

                  {/* Subsections */}
                  {"subsections" in section &&
                    section.subsections &&
                    section.subsections.map((sub, i) => (
                      <div
                        key={sub.subtitle}
                        className={
                          i > 0
                            ? "pt-4 border-t border-gray-100"
                            : ""
                        }
                      >
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          {sub.subtitle}
                        </h3>
                        <p className="text-gray-600 text-[15px] mb-3">
                          {sub.description}
                        </p>
                        <ul className="space-y-2 ml-1">
                          {sub.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[15px] text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {/* Note callout */}
                  {"note" in section && section.note && (
                    <div className="mt-4 px-4 py-3 bg-purple-50 rounded-xl border border-purple-100">
                      <p className="text-sm text-purple-700 font-medium">
                        {section.note}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-10 md:p-14 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 backdrop-blur-sm border border-white/20">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Questions About Your Privacy?
            </h2>
            <p className="text-purple-200 mb-4 max-w-md mx-auto">
              We&apos;re here to help. Reach out to our privacy team for any
              concerns or requests.
            </p>
            <div className="space-y-1.5 text-sm text-purple-200 mb-8">
              <p>
                Email:{" "}
                <span className="text-white font-medium">
                  privacy@xtrasure.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="text-white font-medium">
                  +1 (555) 123-4567
                </span>
              </p>
              <p>
                Address:{" "}
                <span className="text-white font-medium">
                  123 Tech Street, Silicon Valley, CA 94000
                </span>
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg shadow-purple-900/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
