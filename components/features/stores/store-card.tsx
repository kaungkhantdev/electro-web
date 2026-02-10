import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Star } from "lucide-react";

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
    <div
      className={`group transition-all rounded-3xl border duration-200 hover:shadow-md ${
        store.featured
          ? "border-purple-200 ring-1 ring-purple-100 bg-linear-to-br from-purple-50/40 to-white"
          : "hover:border-gray-300"
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-start gap-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                store.featured
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-100 text-gray-600 group-hover:bg-purple-50 group-hover:text-purple-600"
              } transition-colors`}
            >
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{store.name}</h3>
              {store.featured && (
                <Badge className="mt-1.5 bg-purple-100 text-purple-700 border-purple-200 text-[11px]">
                  <Star className="w-2.5 h-2.5" />
                  Flagship Store
                </Badge>
              )}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity rounded-full"
          >
            <Navigation className="w-4 h-4 mr-1.5" />
            Directions
          </Button>
        </div>

        {/* Info */}
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
            <span className="text-gray-600">{store.address}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-purple-500 shrink-0" />
            <span className="text-gray-600">{store.phone}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
            <span className="text-gray-600">{store.hours}</span>
          </div>
        </div>

        {/* Services */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-1.5">
            {store.services.map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
