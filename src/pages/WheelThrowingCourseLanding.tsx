import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Users,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-small.webp";
import heroImage from "@/assets/SBC-class.webp";

const landingPath = "/five-week-wheel-throwing-course-ballarat";
const landingUrl = `https://studioceramics.com.au${landingPath}`;
const classBentoVideoUrl =
  "https://assets.classbento.com.au/videos/class/five-week-pottery-wheel-throwing-course-ballarat-landscape.mp4?v=1771237322";
const pageTitle =
  "5-Week Wheel Throwing Course Ballarat | Starts 26 February 2026";
const pageDescription =
  "5-week wheel throwing pottery course in Ballarat starting Thursday, 26 February 2026. Beginner friendly, small class size (max 3), all materials and firings included.";

const seoMetaTags = [
  { attribute: "name", key: "description", content: pageDescription },
  {
    attribute: "name",
    key: "keywords",
    content:
      "wheel throwing course Ballarat, pottery course Ballarat, five week pottery course, ceramics classes Ballarat, Studio Ceramics Ballarat",
  },
  { attribute: "name", key: "robots", content: "index, follow" },
  {
    attribute: "property",
    key: "og:title",
    content: "5-Week Wheel Throwing Course in Ballarat | Studio Ceramics",
  },
  { attribute: "property", key: "og:description", content: pageDescription },
  { attribute: "property", key: "og:type", content: "website" },
  { attribute: "property", key: "og:url", content: landingUrl },
  {
    attribute: "property",
    key: "og:image",
    content: "https://studioceramics.com.au/og-image.jpg",
  },
  {
    attribute: "property",
    key: "og:image:alt",
    content: "Studio Ceramics Ballarat wheel throwing course",
  },
  { attribute: "name", key: "twitter:card", content: "summary_large_image" },
  {
    attribute: "name",
    key: "twitter:title",
    content: "5-Week Wheel Throwing Course in Ballarat | Studio Ceramics",
  },
  { attribute: "name", key: "twitter:description", content: pageDescription },
  {
    attribute: "name",
    key: "twitter:image",
    content: "https://studioceramics.com.au/og-image.jpg",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${landingUrl}#webpage`,
      url: landingUrl,
      name: "5-Week Wheel Throwing Course Ballarat",
      description: pageDescription,
      inLanguage: "en-AU",
      isPartOf: {
        "@id": "https://studioceramics.com.au/#website",
      },
    },
    {
      "@type": "Course",
      "@id": `${landingUrl}#course`,
      name: "Five Week Pottery Wheel Throwing Course",
      description:
        "A five-week pottery course in Ballarat focused on wheel throwing skills, trimming, shaping and finishing.",
      provider: {
        "@type": "LocalBusiness",
        name: "Studio Ceramics Ballarat",
        url: "https://studioceramics.com.au/",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "InPerson",
        startDate: "2026-02-26",
        duration: "PT10H",
        location: {
          "@type": "Place",
          name: "Studio Ceramics Ballarat",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Black Hill",
            addressRegion: "VIC",
            postalCode: "3350",
            addressCountry: "AU",
          },
        },
      },
      offers: {
        "@type": "Offer",
        price: "600",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        url: landingUrl,
      },
    },
  ],
};

const highlights = [
  {
    icon: CalendarDays,
    label: "Start date",
    value: "Thursday, 26 February 2026",
  },
  {
    icon: Clock3,
    label: "Duration",
    value: "5 sessions x 2 hours",
  },
  {
    icon: Users,
    label: "Class size",
    value: "Max 3 participants",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Black Hill, Ballarat",
  },
];

const classBentoGallerySources = [
  {
    thumbSrc: "/classbento/thumb/course-0-v2.webp",
    fullSrc: "/classbento/modal/course-0-v2.webp",
    alt: "Hands shaping clay on a pottery wheel in Ballarat",
  },
  {
    thumbSrc: "/classbento/thumb/course-1-v2.webp",
    fullSrc: "/classbento/modal/course-1-v2.webp",
    alt: "Student refining the rim of a wheel-thrown ceramic piece",
  },
  {
    thumbSrc: "/classbento/thumb/course-2-v2.webp",
    fullSrc: "/classbento/modal/course-2-v2.webp",
    alt: "Close-up of pottery wheel throwing technique",
  },
  {
    thumbSrc: "/classbento/thumb/course-3-v2.webp",
    fullSrc: "/classbento/modal/course-3-v2.webp",
    alt: "Ceramic vessel being shaped during class",
  },
  {
    thumbSrc: "/classbento/thumb/course-4-v2.webp",
    fullSrc: "/classbento/modal/course-4-v2.webp",
    alt: "Wheel-throwing setup inside Studio Ceramics Ballarat",
  },
  {
    thumbSrc: "/classbento/thumb/course-5-v2.webp",
    fullSrc: "/classbento/modal/course-5-v2.webp",
    alt: "Clay piece centered on the wheel at Studio Ceramics",
  },
  {
    thumbSrc: "/classbento/thumb/course-6-v2.webp",
    fullSrc: "/classbento/modal/course-6-v2.webp",
    alt: "Pottery class participant learning wheel skills",
  },
  {
    thumbSrc: "/classbento/thumb/course-7-v2.webp",
    fullSrc: "/classbento/modal/course-7-v2.webp",
    alt: "Freshly thrown pottery pieces from the wheel-throwing course",
  },
  {
    thumbSrc: "/classbento/thumb/course-10-v2.webp",
    fullSrc: "/classbento/modal/course-10-v2.webp",
    alt: "Instructor-guided pottery wheel session in Ballarat",
  },
  {
    thumbSrc: "/classbento/thumb/course-9-v2.webp",
    fullSrc: "/classbento/modal/course-9-v2.webp",
    alt: "Course participant working on ceramic form details",
  },
  {
    thumbSrc: "/classbento/thumb/course-8-v2.webp",
    fullSrc: "/classbento/modal/course-8-v2.webp",
    alt: "Finished clay work in progress during the five-week course",
  },
];

const learnList = [
  "Prepare and centre clay confidently on the wheel.",
  "Throw core forms including cylinders, bowls and cups.",
  "Refine pieces with trimming and finishing techniques.",
  "Understand glazing and firing basics for finished pieces.",
  "Build skills week by week in a guided small-group format.",
];

const includedList = [
  "All clay, glazes and studio tools.",
  "Hands-on guidance for beginners and returning makers.",
  "Professional glazing and kiln firings.",
  "Take home completed pottery pieces after firing.",
  "Secure checkout with ClassBento.",
];

const faqList = [
  {
    question: "Do I need experience?",
    answer:
      "No. This course is beginner friendly and also suits students who want to refresh wheel-throwing fundamentals.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring an apron and a hand towel, wear comfortable clothing, and keep nails short for easier wheel control.",
  },
  {
    question: "How does the schedule run?",
    answer:
      "The course runs over five consecutive weekly sessions, starting Thursday, 26 February 2026.",
  },
  {
    question: "Can I ask questions before booking?",
    answer:
      "Yes. You can message Studio Ceramics Ballarat on Instagram if you want to check suitability before checkout.",
  },
];

const upsertMetaTag = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  const existed = Boolean(element);
  const previousContent = element?.getAttribute("content") ?? "";

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);

  return () => {
    if (!element) {
      return;
    }

    if (existed) {
      element.setAttribute("content", previousContent);
      return;
    }

    element.remove();
  };
};

const WheelThrowingCourseLanding = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const courseGallery = classBentoGallerySources;

  useEffect(() => {
    const cleanupFns: Array<() => void> = [];
    const previousTitle = document.title;
    document.title = pageTitle;

    seoMetaTags.forEach((meta) => {
      cleanupFns.push(
        upsertMetaTag(
          meta.attribute as "name" | "property",
          meta.key,
          meta.content,
        ),
      );
    });

    let canonicalLink = document.head.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    const canonicalExisted = Boolean(canonicalLink);
    const previousCanonical = canonicalLink?.href ?? "";
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = landingUrl;
    cleanupFns.push(() => {
      if (!canonicalLink) {
        return;
      }
      if (canonicalExisted) {
        canonicalLink.href = previousCanonical;
      } else {
        canonicalLink.remove();
      }
    });

    const schemaId = "ld-json-wheel-throwing-course";
    let schemaScript = document.getElementById(schemaId) as
      | HTMLScriptElement
      | null;
    const schemaExisted = Boolean(schemaScript);
    const previousSchemaText = schemaScript?.textContent ?? "";

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = schemaId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(schemaData);
    cleanupFns.push(() => {
      if (!schemaScript) {
        return;
      }
      if (schemaExisted) {
        schemaScript.textContent = previousSchemaText;
      } else {
        schemaScript.remove();
      }
    });

    return () => {
      document.title = previousTitle;
      cleanupFns.reverse().forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    if (activeImageIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveImageIndex((current) => {
          if (current === null) {
            return 0;
          }
          return (current + 1) % courseGallery.length;
        });
      } else if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) => {
          if (current === null) {
            return 0;
          }
          return (current - 1 + courseGallery.length) % courseGallery.length;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImageIndex, courseGallery.length]);

  const goToNextImage = () => {
    setActiveImageIndex((current) => {
      if (current === null) {
        return 0;
      }
      return (current + 1) % courseGallery.length;
    });
  };

  const goToPreviousImage = () => {
    setActiveImageIndex((current) => {
      if (current === null) {
        return 0;
      }
      return (current - 1 + courseGallery.length) % courseGallery.length;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container-narrow flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Studio Ceramics Ballarat"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-serif text-xl font-semibold text-foreground">
              Studio Ceramics
            </span>
          </a>
          <a
            href="#checkout"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-elevated"
          >
            Book now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-grain">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Wheel throwing class in Studio Ceramics Ballarat"
              className="h-full w-full object-cover opacity-30"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
          </div>

          <div className="container-narrow relative py-16 md:py-24">
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="space-y-6"
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold tracking-wide text-primary">
                  Start your wheel-throwing journey
                </span>
                <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                  5-Week Wheel Throwing Course in Ballarat
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  This 5-week small-group course starts on{" "}
                  <strong className="text-foreground">
                    Thursday, 26 February 2026
                  </strong>{" "}
                  and is designed for beginners through to intermediate
                  students. Learn wheel fundamentals, build forms you are proud
                  of, and complete your pieces with glazing and firing support.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#checkout"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-elevated"
                  >
                    Secure your spot
                  </a>
                  <a
                    href="https://www.instagram.com/studioceramics.ballarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 font-semibold text-foreground transition-colors hover:bg-muted/70"
                  >
                    Message on Instagram
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="rounded-3xl border border-border bg-card/90 p-7 shadow-elevated backdrop-blur-sm"
              >
                <h2 className="mb-5 font-serif text-2xl font-semibold text-foreground">
                  Course snapshot
                </h2>
                <div className="space-y-5">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="text-base font-semibold text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-6 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
                  5 x 2-hour sessions, $600 per person, and
                  all materials plus firings included.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="bg-primary/10 py-16 md:py-24"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1100px" }}
        >
          <div className="container-narrow">
            <div className="mb-10 text-center">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-secondary">
                Class photos
              </span>
              <h2 className="mb-4 font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Inside the 5-week course
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Get a feel for the studio, techniques, and finished pieces.
              </p>
            </div>

            <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                poster={courseGallery[0]?.thumbSrc}
              >
                <source src={classBentoVideoUrl} type="video/mp4" />
              </video>
            </div>

            <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-3">
              {courseGallery.map((item, index) => (
                <button
                  type="button"
                  key={item.thumbSrc}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft ${
                    index === 0 || index === 7 ? "col-span-2 row-span-2" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Open image ${index + 1} in gallery`}
                >
                  <img
                    src={item.thumbSrc}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-16 md:py-24"
          style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
        >
          <div className="container-narrow grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground">
                What you will learn
              </h2>
              <ul className="space-y-4">
                {learnList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-foreground">
                What is included
              </h2>
              <ul className="space-y-4">
                {includedList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section
          id="checkout"
          className="bg-primary/20 py-16 md:py-24"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1100px" }}
        >
          <div className="container-narrow">
            <div className="mb-10 text-center">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-secondary">
                Checkout
              </span>
              <h2 className="mb-4 font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Book your place now
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Complete your booking below through ClassBento to secure your
                seat in the course starting Thursday, 26 February 2026.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-elevated">
              <iframe
                allow="payment *"
                id="cbIframe"
                src="https://classbento.com.au/t9r2p68fau-booking-widget?open_in_new=0"
                style={{ width: "1px", minWidth: "100%", height: "750px" }}
                frameBorder="0"
                title="ClassBento checkout widget"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <section
          className="py-16 md:py-24"
          style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
        >
          <div className="container-narrow">
            <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Quick answers before you book
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {faqList.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeImageIndex !== null && courseGallery[activeImageIndex] && (
        <div
          className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative flex h-full w-full items-center justify-center p-4 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-card/80 p-2 text-foreground transition-colors hover:bg-card"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="absolute left-3 rounded-full bg-card/80 p-2 text-foreground transition-colors hover:bg-card md:left-6"
              onClick={goToPreviousImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={courseGallery[activeImageIndex].fullSrc}
              alt={courseGallery[activeImageIndex].alt}
              className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain"
              loading="eager"
              decoding="async"
            />

            <button
              type="button"
              className="absolute right-3 rounded-full bg-card/80 p-2 text-foreground transition-colors hover:bg-card md:right-6"
              onClick={goToNextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-5 rounded-full bg-card/80 px-4 py-1 text-sm font-medium text-foreground">
              {activeImageIndex + 1} / {courseGallery.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WheelThrowingCourseLanding;
