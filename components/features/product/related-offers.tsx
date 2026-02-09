import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  ShieldEnergyIcon, 
} from '@hugeicons/core-free-icons'

interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

interface RelatedOffersProps {
  offers: Offer[];
}

export function RelatedOffers({ offers }: RelatedOffersProps) {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Grab It With The Best Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex gap-4 p-4 bg-white rounded-2xl hover:border-purple-200 transition-colors"
            >
              <div className="w-20 h-20 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center">
                <HugeiconsIcon
                  icon={ShieldEnergyIcon}
                  size={30}
                  color="currentColor"
                  className="text-purple-600"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex-1">
                {offer.badge && (
                  <Badge className="bg-purple-600 text-white text-xs mb-1">
                    {offer.badge}
                  </Badge>
                )}
                <h3 className="font-semibold text-gray-900">{offer.title}</h3>
                <p className="text-sm text-purple-600">{offer.subtitle}</p>
                <p className="text-xs text-gray-500 mt-1">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
