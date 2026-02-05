import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
