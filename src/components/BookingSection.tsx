import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Mail, ExternalLink } from "lucide-react";

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
    <section id="book" className="py-24 md:py-32 bg-secondary/30 bg-grain">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Book Your Spot
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Ready to Get Your Hands Dirty?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Secure your place in one of our upcoming classes. Small class sizes
            mean spots fill up fast!
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-2xl shadow-soft">
            <span className="text-xl font-serif font-semibold text-primary">
              $20 off
            </span>
            <span className="text-sm text-muted-foreground">
              Use code{" "}
              <span className="font-semibold text-foreground">LAUNCH20</span> at
              checkout
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendly Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden"
          >
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Book via ClassBento
              </h3>
              <p className="text-muted-foreground mb-6">
                Browse available classes and book your spot directly through ClassBento.
              </p>
              <a
                href="https://classbento.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-warm hover:shadow-elevated"
              >
                View Classes on ClassBento
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Don't forget to use code <strong>LAUNCH20</strong> for $20 off!
              </p>
            </div>
            
            {/* Alternative: Direct Calendly embed when you have a Calendly link */}
            {/* 
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/YOUR_CALENDLY_LINK"
              style={{ minWidth: "320px", height: "630px" }}
            />
            */}
          </motion.div>

          {/* Contact & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
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
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
              <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                What to Expect
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  All materials and tools provided
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Take home your creations after firing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Wear clothes you don't mind getting dirty
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Refreshments available
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
