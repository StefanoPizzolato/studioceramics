import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Intimate sessions with personalized attention to help you master the craft at your own pace.",
  },
  {
    icon: Sparkles,
    title: "All Skill Levels",
    description:
      "From complete beginners to intermediate potters, everyone is welcome to come play with clay.",
  },
  {
    icon: Heart,
    title: "Cosy Studio Space",
    description:
      "A warm, inviting environment designed to spark creativity and foster your artistic journey.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 bg-grain">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Welcome to the Studio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Come Play with Clay
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Studio Ceramics Ballarat offers wheel throwing and hand building
            classes in a beautiful, cosy space in Black Hill. Whether you're
            looking to learn something new or reconnect with an old hobby, our
            studio is the perfect place to get your hands dirty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
