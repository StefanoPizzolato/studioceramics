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
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
            "Thought it would be fun to give pottery a go and it was! Maddison
            was so informative and such a patient teacher. Her studio was lovely
            and the equipment great to work on."
          </blockquote>
          <cite className="not-italic">
            <span className="font-semibold text-foreground">Jasmine B.</span>
            <span className="text-muted-foreground ml-2">— Student</span>
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
