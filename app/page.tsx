import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AISection } from "@/components/sections/ai";
import { Comparison } from "@/components/sections/comparison";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <AISection />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
