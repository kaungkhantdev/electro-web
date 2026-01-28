import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function FlashSaleBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">Flash Sale!</h3>
            <p className="text-white/80 text-sm">
              Extra 10% off select accessories today only
            </p>
          </div>
        </div>
        <Link href="/shop/accessories">
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Shop Accessories
          </Button>
        </Link>
      </div>
    </div>
  );
}
