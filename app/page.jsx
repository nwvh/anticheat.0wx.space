import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Features from "@/components/features";
import Faq from "@/components/faq";
import Why from "@/components/why";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Why />
        <Pricing />
        <Faq />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
