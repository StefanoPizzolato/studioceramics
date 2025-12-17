import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Studio Ceramics Ballarat | Pottery Classes in Black Hill</title>
        <meta
          name="description"
          content="Beginner to intermediate ceramic wheel throwing and hand building classes in Black Hill, Ballarat. Small class sizes in a cosy studio space. Book your pottery class today!"
        />
        <meta
          name="keywords"
          content="pottery classes, ceramics, wheel throwing, hand building, Ballarat, Black Hill, pottery studio, art classes"
        />
        <link rel="canonical" href="https://studioceramicsballarat.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Studio Ceramics Ballarat | Pottery Classes" />
        <meta
          property="og:description"
          content="Beginner to intermediate ceramic wheel throwing and hand building classes in Black Hill, Ballarat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Studio Ceramics Ballarat",
            description: "Pottery and ceramics classes in Black Hill, Ballarat",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Black Hill",
              addressRegion: "VIC",
              addressCountry: "AU",
            },
            url: "https://studioceramicsballarat.com",
            sameAs: ["https://www.instagram.com/studioceramics.ballarat"],
          })}
        </script>
      </Helmet>

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
