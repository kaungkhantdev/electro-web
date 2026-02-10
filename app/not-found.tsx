import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-purple-600" />
          </div>

          <h1 className="text-7xl font-bold text-purple-600 mb-2">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">
                <ArrowLeft className="w-4 h-4" />
                Browse Shop
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
