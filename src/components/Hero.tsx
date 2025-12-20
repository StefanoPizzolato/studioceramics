import { motion } from "framer-motion";
import heroImage from "@/assets/SBC-back3.jpg";
import logoImage from "@/assets/SBC-logo-lilac-darker-transparent.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grain">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Studio Ceramics Ballarat pottery studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-20">
        <div className="flex flex-col items-center justify-around min-h-[70vh] w-full">
          {<motion.img
            src={logoImage}
            alt="Studio Ceramics Ballarat logo"
            initial={{ opacity: 0, x: -80, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="mx-auto w-64 sm:w-80 md:w-[25rem] h-auto object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.2)] invisible"
          />}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-screen bg-primary/50 px-6 py-1 text-2xl md:text-1xl lg:text-1xl font-large text-white tracking-wider uppercase"
          >
            Beginner to Intermediate - Pottery classes - Ballarat
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-warm hover:shadow-elevated hover:-translate-y-0.5"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
