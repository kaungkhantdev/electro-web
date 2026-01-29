import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight, Heart, Zap, Users, Gift } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Career development and Apple certification programs",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate tech enthusiasts",
  },
  {
    icon: Gift,
    title: "Employee Discounts",
    description: "Exclusive discounts on Apple products",
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

export default function CareersPage() {
  return (
    <ContentPageLayout
      title="Join Our Team"
      subtitle="Build your career with XtraSure"
      breadcrumbs={[{ label: "Careers" }]}
      variant="hero"
      heroGradient="from-purple-900 via-purple-800 to-pink-700"
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At XtraSure, we're passionate about technology and helping people get
            the most out of their Apple devices. Join us and be part of something
            extraordinary.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open positions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <Card key={job.id} className="hover:border-purple-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {job.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button className="shrink-0 bg-purple-600 hover:bg-purple-700">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Don't see the right role?
          </h3>
          <p className="text-gray-600 mb-4">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            href="/support/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </ContentPageLayout>
  );
}
