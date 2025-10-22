import { Earth, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Hero from "./_components/hero";
import History from "./_components/history";
import Essence from "./_components/essence";
import Stores from "./_components/stores";
import AppSuper from "./_components/app-super";
import ClubSection from "./_components/club";
import ConquersSection from "./_components/conquers";
import EventsSection from "./_components/events";
import FormSection from "./_components/form-section";
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
