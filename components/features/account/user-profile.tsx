"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Edit, Calendar, Shield } from "lucide-react";
import Image from "next/image";
import Photo from '@/public/img/avatar.avif'

interface UserData {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  memberSince: string;
}

const mockUser: UserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "/placeholder-avatar.jpg",
  address: "123 Main Street, New York, NY 10001",
  memberSince: "January 2024",
};

const infoItems = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: mockUser.email,
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Phone",
    value: mockUser.phone,
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Address",
    value: mockUser.address,
  },
  {
    icon: <Calendar className="w-4 h-4" />,
    label: "Member Since",
    value: mockUser.memberSince,
  },
];

export function UserProfile() {
  return (
    <div className="bg-white p-5 border rounded-2xl">
      <div>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden">
              <Image src={Photo} height={100} width={100} alt="photo" />
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-600 font-medium justify-center">
              <Shield className="w-3.5 h-3.5" />
              Verified
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {mockUser.name}
              </h3>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href="/account/setting">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Link>
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-900 mt-0.5 truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
