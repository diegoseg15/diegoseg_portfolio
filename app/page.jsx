import Image from "next/image";
import { HeaderComponent } from "@/components/Header/HeaderComponent";
import { BannerComponent } from "@/components/Banner/BannerComponent";
import { FooterComponent } from "@/components/Footer/FooterComponent";


export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <HeaderComponent />

      {/* Banner ocupa el espacio disponible */}
      <div className="z-0">
        <BannerComponent />
      </div>

      <FooterComponent />
    </main>
  );
}

