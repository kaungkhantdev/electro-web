"use client";

import { useState } from "react";
import { StoreSearch } from "./StoreSearch";
import { StoreMap } from "./StoreMap";
import { StoreCard, Store } from "./StoreCard";

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

  return (
    <>
      <StoreSearch value={searchQuery} onChange={setSearchQuery} />
      <StoreMap />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {filteredStores.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No stores found matching your search. Try a different location.
          </p>
        </div>
      )}
    </>
  );
}
