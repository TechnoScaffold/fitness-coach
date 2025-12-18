import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Search, CalendarCheck, Dumbbell, Trophy, Play, UserCheck, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse thousands of classes and coaches. Filter by type, location, and availability.",
    color: "primary",
  },
  {
    icon: CalendarCheck,
    title: "Book",
    description: "Choose your perfect time slot and book instantly with secure payment.",
    color: "accent",
  },
  {
    icon: Dumbbell,
    title: "Train",
    description: "Join live sessions, follow workout programs, and track your progress.",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Achieve",
    description: "Reach your fitness goals with personalized guidance and community support.",
    color: "accent",
  },
];

const benefits = [
  {
    icon: Play,
    title: "On-Demand Access",
    description: "Access recorded sessions anytime, anywhere. Never miss a workout again."
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    description: "Learn from certified fitness professionals with years of experience."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Join thousands who transformed their health with our platform."
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Connect with like-minded individuals on the same fitness journey."
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                 <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                How It Works
            </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Your Fitness Journey <span className="text-primary">Simplified</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Discover how FitHub makes achieving your fitness goals easier than ever before.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                How FitHub Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Getting started with FitHub is easy. Four simple steps to transform your fitness journey.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
                  )}

                  <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center group">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        step.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <step.icon className="w-10 h-10" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose FitHub?
              </h2>
              <p className="text-muted-foreground">
                We provide everything you need for a successful fitness journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Fitness Journey?
              </h2>
              <p className="text-primary-foreground/90 text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied members who have achieved their fitness goals with FitHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/signup">Get Started Today</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;