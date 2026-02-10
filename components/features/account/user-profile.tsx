"use client";

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Edit, Calendar, Shield } from "lucide-react";

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
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile Information</CardTitle>
        <CardAction>
          <Button variant="outline" size="sm" className="gap-2">
            <Edit className="w-4 h-4" />
            Edit Profile
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-sm">
              {mockUser.name.charAt(0)}
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-600 font-medium justify-center">
              <Shield className="w-3.5 h-3.5" />
              Verified
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900">
              {mockUser.name}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
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
      </CardContent>
    </Card>
  );
}
