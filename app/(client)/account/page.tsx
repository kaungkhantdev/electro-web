import {
  AccountSidebar,
  UserProfile,
  OrdersList,
  CartItems,
  AccountStats,
} from "@/components/features/account";
import Image from "next/image";
import Photo from '@/public/img/avatar.avif'

export default function AccountPage() {
  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Welcome Banner */}
      <section className="bg-linear-to-r from-purple-400 via-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2">
              <Image src={Photo} height={100} width={100} alt="photo" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Welcome back, John
              </h1>
              <p className="text-purple-200 mt-1 text-sm sm:text-base">
                Manage your account, track orders, and explore your wishlist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-6">
        <AccountStats />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <AccountSidebar activeItem="Profile" />
            </div>
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
      </section>
    </main>
  );
}
