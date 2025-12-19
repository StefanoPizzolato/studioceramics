import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Info } from "lucide-react";
import throwingImage from "../assets/SBC-throwing.jpg";

const classes = [
  {
    title: "Clay Play Beginners",
    description:
      "Learn the art of wheel throwing in a fun, relaxed environment. Perfect for beginners wanting to experience the joy of working with clay.",
    duration: "2 hours",
    price: "$150",
    note: "Experience only - pieces not included",
    iframeSrc:
      "https://classbento.com.au/hmruzuj5au-booking-widget?open_in_new=1",
  },
  {
    title: "Clay Play Deluxe",
    description:
      "The full pottery experience! Learn wheel throwing and take home your creations - professionally glazed and fired.",
    duration: "2.5 hours",
    price: "$250",
    note: "Includes glazing & firing",
    iframeSrc:
      "https://classbento.com.au/wnmuzqtqau-booking-widget?open_in_new=1",
  },
  {
    title: "Guided sculpting",
    description:
      "Explore hand building and sculpting techniques to create unique ceramic art pieces without the wheel.",
    duration: "2.5 hours",
    price: "$200",
    note: "All materials included",
    iframeSrc:
      "https://classbento.com.au/cn324a2sau-booking-widget?open_in_new=1",
  },
  {
    title: "Five Week Pottery Class",
    description:
      "A comprehensive journey into ceramics. Develop your skills over five weeks with dedicated instruction and studio time.",
    duration: "5 weeks",
    price: "$560",
    note: "Includes all materials & firings",
    iframeSrc:
      "https://classbento.com.au/t9r2p68fau-booking-widget?open_in_new=1",
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
            Ceramic Classes in Ballarat
          </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of pottery lessons designed to inspire
            creativity and build skills in a supportive environment.
            </p>
          </motion.div>

          <div className="space-y-10">
            {classes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <div className="grid lg:grid-cols-[60%_40%] gap-8 p-8 md:p-10 items-start">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={throwingImage}
                  alt="Hands shaping clay on a pottery wheel"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                </div>
                <div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                    <div className="flex flex-wrap gap-5 text-base font-medium">
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                        {item.price}
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Info className="h-5 w-5 text-primary" />
                        {item.note}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background p-2 overflow-hidden h-[470px]">
                  <iframe
                    id={`cbIframe-${index}`}
                    title={`${item.title} booking`}
                    allow="payment *"
                    src={item.iframeSrc}
                    style={{ width: "1px", minWidth: "100%", height: "560px" }}
                    frameBorder="0"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
