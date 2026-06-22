import PageContainer from "@/components/layout/PageContainer";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Journey from "@/components/journey/Journey";
import Events from "@/components/events/Events";
import Venue from "@/components/venue";
import Countdown from "@/components/countdown/Countdown";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <Journey />
      <Events />
      <Venue />
      <Countdown />
      <Footer />
    </PageContainer>
  );
}