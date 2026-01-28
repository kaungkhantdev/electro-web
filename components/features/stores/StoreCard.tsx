import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
  featured?: boolean;
}

interface StoreCardProps {
  store: Store;
}

export function StoreCard({ store }: StoreCardProps) {
  return (
    <Card className={store.featured ? "border-purple-300 ring-1 ring-purple-100" : ""}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">{store.name}</h3>
            {store.featured && (
              <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-600 text-xs font-medium rounded mt-1">
                Flagship Store
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" className="shrink-0">
            <Navigation className="w-4 h-4 mr-1" />
            Directions
          </Button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <span className="text-gray-600">{store.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-purple-600 shrink-0" />
            <span className="text-gray-600">{store.phone}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <span className="text-gray-600">{store.hours}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Services:</p>
          <div className="flex flex-wrap gap-2">
            {store.services.map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
