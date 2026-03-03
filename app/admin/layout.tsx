"use client";

import { useState } from "react";
import { AdminHeader } from "@/components/features/admin/shared/admin-header";
import { AdminNav } from "@/components/features/admin/shared/admin-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-6">
          <AdminHeader
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          <AdminNav
            mobileMenuOpen={mobileMenuOpen}
            onMobileMenuChange={setMobileMenuOpen}
          />
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-6 py-6">{children}</div>
    </div>
  );
}
