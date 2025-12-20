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
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#b7b4f8" />
        <link rel="canonical" href="https://studioceramicsballarat.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Studio Ceramics Ballarat | Pottery Classes" />
        <meta
          property="og:description"
          content="Beginner to intermediate ceramic wheel throwing and hand building classes in Black Hill, Ballarat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studioceramicsballarat.com/" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Studio Ceramics Ballarat" />
        <meta property="og:image" content="https://studioceramicsballarat.com/og-image.jpg" />
        <meta
          property="og:image:alt"
          content="Studio Ceramics Ballarat pottery studio interior"
        />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Studio Ceramics Ballarat | Pottery Classes" />
        <meta
          name="twitter:description"
          content="Beginner to intermediate ceramic wheel throwing and hand building classes in Black Hill, Ballarat."
        />
        <meta name="twitter:image" content="https://studioceramicsballarat.com/og-image.jpg" />
        <meta
          name="twitter:image:alt"
          content="Studio Ceramics Ballarat pottery studio interior"
        />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://studioceramicsballarat.com/#website",
                url: "https://studioceramicsballarat.com/",
                name: "Studio Ceramics Ballarat",
                inLanguage: "en-AU",
                publisher: {
                  "@id": "https://studioceramicsballarat.com/#organization",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://studioceramicsballarat.com/#organization",
                name: "Studio Ceramics Ballarat",
                description: "Pottery and ceramics classes in Black Hill, Ballarat.",
                url: "https://studioceramicsballarat.com/",
                image: "https://studioceramicsballarat.com/og-image.jpg",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Black Hill",
                  addressRegion: "VIC",
                  addressCountry: "AU",
                },
                areaServed: "Ballarat, Victoria",
                sameAs: ["https://www.instagram.com/studioceramics.ballarat"],
              },
            ],
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
