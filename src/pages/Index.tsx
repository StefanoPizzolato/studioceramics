import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Gallery />
        <Testimonial />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
