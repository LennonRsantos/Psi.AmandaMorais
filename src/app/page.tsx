import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import AwarenessSection from "@/components/AwarenessSection";
import ModulesSection from "@/components/ModulesSection";
import AuthoritySection from "@/components/AuthoritySection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex-1">
        <Hero />
        <AuthoritySection />
        <AwarenessSection />
        <ModulesSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
