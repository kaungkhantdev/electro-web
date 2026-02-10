"use client";

import { useState } from "react";
import { StoreSearch } from "./store-search";
import { StoreMap } from "./store-map";
import { StoreCard, Store } from "./store-card";
import { SearchX } from "lucide-react";

const stores: Store[] = [
  {
    id: 1,
    name: "XtraSure Silicon Valley",
    address: "123 Tech Street, Palo Alto, CA 94301",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-6PM",
    services: ["Sales", "Repairs", "Trade-In", "Training"],
    featured: true,
  },
  {
    id: 2,
    name: "XtraSure San Francisco",
    address: "456 Market Street, San Francisco, CA 94102",
    phone: "+1 (555) 234-5678",
    hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
    services: ["Sales", "Repairs", "Trade-In"],
  },
  {
    id: 3,
    name: "XtraSure Los Angeles",
    address: "789 Sunset Blvd, Los Angeles, CA 90028",
    phone: "+1 (555) 345-6789",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    services: ["Sales", "Repairs", "Trade-In", "Training"],
  },
  {
    id: 4,
    name: "XtraSure Seattle",
    address: "321 Pine Street, Seattle, WA 98101",
    phone: "+1 (555) 456-7890",
    hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
    services: ["Sales", "Repairs"],
  },
  {
    id: 5,
    name: "XtraSure New York",
    address: "555 Fifth Avenue, New York, NY 10017",
    phone: "+1 (555) 567-8901",
    hours: "Mon-Sat: 9AM-9PM, Sun: 10AM-7PM",
    services: ["Sales", "Repairs", "Trade-In", "Training"],
    featured: true,
  },
  {
    id: 6,
    name: "XtraSure Chicago",
    address: "888 Michigan Ave, Chicago, IL 60611",
    phone: "+1 (555) 678-9012",
    hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
    services: ["Sales", "Repairs", "Trade-In"],
  },
];

export function StoreList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredStores = filteredStores.filter((s) => s.featured);
  const otherStores = filteredStores.filter((s) => !s.featured);

  return (
    <>
      <StoreSearch value={searchQuery} onChange={setSearchQuery} />
      <StoreMap />

      {/* Results heading */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {searchQuery ? "Search Results" : "All Locations"}
        </h2>
        <span className="text-sm text-gray-500">
          {filteredStores.length}{" "}
          {filteredStores.length === 1 ? "store" : "stores"} found
        </span>
      </div>

      {/* Featured stores */}
      {featuredStores.length > 0 && !searchQuery && (
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-wider text-purple-600 mb-3">
            Flagship Stores
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}

      {/* Other stores */}
      {(searchQuery ? filteredStores : otherStores).length > 0 && (
        <div>
          {!searchQuery && featuredStores.length > 0 && (
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-3">
              More Locations
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(searchQuery ? filteredStores : otherStores).map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredStores.length === 0 && (
        <div className="text-center py-16">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-7 h-7 text-gray-400" />
          </div>
          <p className="text-gray-900 font-medium mb-1">No stores found</p>
          <p className="text-sm text-gray-500">
            Try a different city, state, or zip code.
          </p>
        </div>
      )}
    </>
  );
}
