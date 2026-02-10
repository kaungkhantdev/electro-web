import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Zap,
  Users,
  Gift,
  Briefcase,
  Building2,
  GraduationCap,
  Coffee,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
};

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your family.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description:
      "Career development programs and Apple certification pathways.",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Great Team",
    description:
      "Work alongside passionate tech enthusiasts who love what they do.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Gift,
    title: "Employee Discounts",
    description: "Exclusive discounts on the latest Apple products and accessories.",
    color: "from-green-100 to-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "Annual stipend for courses, conferences, and skill development.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Flexible schedules, paid time off, and remote work options.",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
];

const openings = [
  {
    id: 1,
    title: "Sales Specialist",
    department: "Retail",
    location: "Multiple Locations",
    type: "Full-time",
    description:
      "Help customers find the perfect Apple products and provide exceptional service.",
  },
  {
    id: 2,
    title: "Technical Specialist",
    department: "Service",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Diagnose and repair Apple devices, providing expert technical support.",
  },
  {
    id: 3,
    title: "Store Manager",
    department: "Management",
    location: "Los Angeles, CA",
    type: "Full-time",
    description:
      "Lead a team of retail professionals and drive store performance.",
  },
  {
    id: 4,
    title: "Visual Merchandiser",
    department: "Retail",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Create compelling product displays and maintain store aesthetics.",
  },
  {
    id: 5,
    title: "Customer Experience Lead",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead customer support initiatives and improve customer satisfaction.",
  },
];

const cultureHighlights = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We encourage creative thinking and new ideas at every level.",
  },
  {
    icon: Building2,
    title: "Inclusive Culture",
    description: "A diverse workplace where every voice is heard and valued.",
  },
  {
    icon: Briefcase,
    title: "Real Impact",
    description: "Your work directly shapes how customers experience technology.",
  },
];

const departmentColors: Record<string, string> = {
  Retail: "bg-blue-50 text-blue-700",
  Service: "bg-green-50 text-green-700",
  Management: "bg-purple-50 text-purple-700",
  Support: "bg-amber-50 text-amber-700",
};

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Briefcase className="w-4 h-4" />
            We&apos;re Hiring
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Build Your Career <span className=" text-purple-600">With XtraSure</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join a team of passionate tech enthusiasts and help customers get the
            most out of their Apple devices. We&apos;re looking for people who
            love technology and great experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-7 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20"
            >
              View Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
            >
              See Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cultureHighlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-3xl border p-6 bg-white hover:shadow-md hover:border-purple-100 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50/80 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Work With Us
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We invest in our people with benefits that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-md hover:border-purple-100 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}
                >
                  <benefit.icon
                    className={`w-5 h-5 ${benefit.iconColor}`}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Open Positions
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Find the role that&apos;s right for you and take the next step in
            your career.
          </p>
        </div>

        <div className="space-y-4">
          {openings.map((job) => (
            <div
              key={job.id}
              className="group rounded-3xl border p-6 hover:shadow-md hover:border-purple-100 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                        departmentColors[job.department] ??
                        "bg-gray-50 text-gray-700"
                      }`}
                    >
                      {job.department}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium text-sm hover:bg-purple-700 transition-colors shadow-sm shadow-purple-600/10 cursor-pointer">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
