import { Earth, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Hero from "./_components/_pages/hero";
import History from "./_components/_pages/history";
import Essence from "./_components/_pages/essence";
import Stores from "./_components/_pages/stores";
import AppSuper from "./_components/_pages/app-super";
import ClubSection from "./_components/_pages/club";
import ConquersSection from "./_components/_pages/conquers";
import EventsSection from "./_components/_pages/events";
import FormSection from "./_components/_pages/form-section";
import Footer from "./_components/main-footer";



export default function Home() {



  return (
    <div className="w-full h-min-screen bg-white">
      <Hero />
      <History />
      <Essence />
      <Stores />
      <AppSuper />
      <ClubSection />
      <ConquersSection />
      <EventsSection />
      <FormSection />
      <Footer />
    </div>
  );
}
