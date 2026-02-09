import {
  AccountSidebar,
  UserProfile,
  OrdersList,
  CartItems,
} from "@/components/features/account";

export default function AccountPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <AccountSidebar activeItem="Profile" />
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          <UserProfile />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <OrdersList />
            <CartItems />
          </div>
        </div>
      </div>
  );
}
