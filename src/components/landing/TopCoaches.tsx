import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Award, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const coaches = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "HIIT & Cardio",
    rating: 4.9,
    reviews: 456,
    students: 1200,
    experience: "8 years",
    certified: true,
    avatar: "SC",
    color: "from-primary to-primary/70",
  },
  {
    id: 2,
    name: "Michael Torres",
    specialty: "Yoga & Meditation",
    rating: 4.9,
    reviews: 389,
    students: 980,
    experience: "10 years",
    certified: true,
    avatar: "MT",
    color: "from-accent to-accent/70",
  },
  {
    id: 3,
    name: "David Kim",
    specialty: "Strength Training",
    rating: 4.8,
    reviews: 512,
    students: 1450,
    experience: "12 years",
    certified: true,
    avatar: "DK",
    color: "from-primary/80 to-primary/50",
  },
  {
    id: 4,
    name: "Emma Wilson",
    specialty: "Boxing & MMA",
    rating: 4.9,
    reviews: 278,
    students: 720,
    experience: "6 years",
    certified: true,
    avatar: "EW",
    color: "from-accent/80 to-accent/50",
  },
];

export const TopCoaches = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Expert Trainers</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Top Coaches
            </h2>
          </div>
          <Button variant="ghost" className="group self-start sm:self-auto" asChild>
            <Link to="/coaches">
              View All Coaches
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/coaches/${coach.id}`}
                className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center"
              >
                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${coach.color} flex items-center justify-center text-2xl font-bold text-primary-foreground`}
                  >
                    {coach.avatar}
                  </div>
                  {coach.certified && (
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {coach.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{coach.specialty}</p>

                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold">{coach.rating}</span>
                  <span className="text-muted-foreground text-sm">({coach.reviews})</span>
                </div>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {coach.students}+ students
                  </div>
                </div>

                <Badge variant="secondary">{coach.experience} exp</Badge>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
