import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-center text-sm font-medium text-secondary tracking-wider uppercase mb-4 block">
            TESTIMONIALS
          </span>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Loved by our students
            </h2>
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-4" />
          </div>

          <a
            href="https://classbento.com.au/studio-ceramics-ballarat?wtn=8e2hbhkhbkau#reviews?only_5_star=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Studio Ceramics Ballarat reviews on ClassBento"
            className="block rounded-3xl border border-border bg-card p-10 shadow-soft hover:shadow-elevated transition-all duration-300"
          >
            <iframe
              id="cbIframe"
              title="ClassBento reviews"
              src="https://classbento.com.au/8e2hbhkhbkau-review-widget?succinct=1"
              style={{ width: "1px", minWidth: "100%", height: "400px" }}
              loading="lazy"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
