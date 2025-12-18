import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const classes = [
  {
    id: 1,
    title: "HIIT Burn",
    category: "Cardio",
    coach: "Sarah Chen",
    rating: 4.9,
    reviews: 234,
    duration: "45 min",
    participants: 12,
    location: "Online",
    price: 25,
    image: "from-primary/30 to-primary/10",
    popular: true,
  },
  {
    id: 2,
    title: "Power Yoga Flow",
    category: "Yoga",
    coach: "Michael Torres",
    rating: 4.8,
    reviews: 189,
    duration: "60 min",
    participants: 20,
    location: "NYC Studio",
    price: 30,
    image: "from-accent/30 to-accent/10",
    popular: false,
  },
  {
    id: 3,
    title: "Strength Training",
    category: "Strength",
    coach: "David Kim",
    rating: 4.9,
    reviews: 312,
    duration: "50 min",
    participants: 8,
    location: "LA Gym",
    price: 35,
    image: "from-primary/40 to-primary/20",
    popular: true,
  },
  {
    id: 4,
    title: "Boxing Basics",
    category: "Combat",
    coach: "Emma Wilson",
    rating: 4.7,
    reviews: 156,
    duration: "45 min",
    participants: 10,
    location: "Online",
    price: 28,
    image: "from-accent/40 to-accent/20",
    popular: false,
  },
];

export const FeaturedClasses = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Popular Now</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Featured Classes
            </h2>
          </div>
          <Button variant="ghost" className="group self-start sm:self-auto" asChild>
            <Link to="/classes">
              View All Classes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/classes/${cls.id}`}
                className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                {/* Image */}
                <div className={`relative h-48 bg-gradient-to-br ${cls.image}`}>
                  {cls.popular && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/20">{cls.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {cls.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{cls.rating}</span>
                      <span className="text-muted-foreground">({cls.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cls.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">by {cls.coach}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {cls.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {cls.participants} spots
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {cls.location}
                    </div>
                    <span className="text-xl font-bold text-primary">${cls.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
