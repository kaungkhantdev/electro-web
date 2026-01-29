"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ContentPageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
  variant?: "default" | "hero";
  heroGradient?: string;
}

export function ContentPageLayout({
  title,
  subtitle,
  breadcrumbs = [],
  children,
  variant = "default",
  heroGradient = "from-purple-900 via-purple-800 to-purple-700",
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <div className="border-b border-gray-100">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-gray-500 hover:text-purple-600">
                  Home
                </Link>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="text-gray-500 hover:text-purple-600"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-gray-900">{crumb.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Page header */}
        {variant === "hero" ? (
          <section
            className={`relative overflow-hidden bg-gradient-to-r ${heroGradient} py-16 md:py-20`}
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          </section>
        ) : (
          <section className="py-8 md:py-12 border-b border-gray-100">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-gray-600">{subtitle}</p>
              )}
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">{children}</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
