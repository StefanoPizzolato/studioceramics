import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Star } from "lucide-react";

const classes = [
  {
    title: "Wheel Throwing",
    description:
      "Learn the art of centering clay on the wheel and creating beautiful vessels. Perfect for beginners wanting to master the basics.",
    duration: "2.5 hours",
    size: "Max 6 students",
    level: "Beginner - Intermediate",
  },
  {
    title: "Hand Building",
    description:
      "Explore pinching, coiling, and slab techniques to create unique ceramic pieces without the wheel.",
    duration: "2.5 hours",
    size: "Max 8 students",
    level: "All levels",
  },
];

const Classes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="classes" className="py-24 md:py-32 bg-background">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Classes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Find Your Flow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of ceramic classes designed to inspire
            creativity and build skills in a supportive environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-8">{item.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {item.size}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" />
                    {item.level}
                  </div>
                </div>

                <a
                  href="#book"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 group-hover:shadow-warm"
                >
                  Book This Class
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
