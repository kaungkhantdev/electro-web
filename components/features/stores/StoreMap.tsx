import { MapPin } from "lucide-react";

export function StoreMap() {
  return (
    <div className="w-full h-64 bg-gray-100 rounded-xl mb-8 flex items-center justify-center">
      <div className="text-center text-gray-400">
        <MapPin className="w-12 h-12 mx-auto mb-2" />
        <p>Interactive Map</p>
      </div>
    </div>
  );
}
