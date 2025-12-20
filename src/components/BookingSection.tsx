import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Mail } from "lucide-react";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="py-24 md:py-32 bg-primary/20 bg-grain">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary tracking-wider uppercase mb-4 block">
            Book Your Spot
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Ready to Get Your Hands Dirty?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Secure your place in one of our upcoming classes. Small class sizes
            mean spots fill up fast!
          </p>
          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-[1254px] mx-auto px-6 mt-10"
      >
        <iframe
          id="cbIframe"
          title="ClassBento booking widget"
          src="https://classbento.com.au/8e2hbhkhbkau-widget?wtn=8e2hbhkhbkau&is_preview=1"
          style={{ width: "1px", minWidth: "100%", height: "700px" }}
        ></iframe>
      </motion.div>

      <div className="container-narrow mt-6">
        {/* Contact & Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8 w-full"
        >
          <div className="bg-card p-8 rounded-3xl border border-border shadow-soft">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Visit the Studio
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Location
                  </h4>
                  <p className="text-muted-foreground">
                    Black Hill, Ballarat
                    <br />
                    Victoria, Australia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Get in Touch
                  </h4>
                  <a
                    href="https://www.instagram.com/studioceramics.ballarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    @studioceramics.ballarat
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-background p-2">
                <iframe
                  id="cbIframe"
                  title="ClassBento contact form"
                  src="https://classbento.com.au/8e2hbhkhbkau-message-widget"
                  style={{ width: "1px", minWidth: "100%", height: "500px" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
