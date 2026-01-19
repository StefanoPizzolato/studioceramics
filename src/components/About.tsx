import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, Heart } from "lucide-react";
import aboutPortrait from "../assets/SBC-maddison.webp";

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
    <section id="about" className="py-24 md:py-32 bg-primary/20 bg-grain">
      <div className="container-narrow" ref={ref}>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm font-medium text-secondary tracking-wider uppercase block">
              Welcome to the Studio
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Come Play with Clay
            </h2>
            <p className="text-muted-foreground text-lg">
              Studio Ceramics Ballarat offers wheel throwing and hand building
              classes in a beautiful, cosy space in Black Hill. Whether you're
              looking to learn something new or reconnect with an old hobby, our
              studio is the perfect place to get your hands dirty.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Wheel throwing
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Hand building
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Ballarat ceramics
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-3xl bg-secondary/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-elevated">
              <img
                src={aboutPortrait}
                alt="Maddison shaping clay in the Studio Ceramics Ballarat workshop"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
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
