import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star, Award, Users, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const specialties = ["All", "HIIT", "Yoga", "Strength", "Cardio", "Pilates", "Boxing", "Dance", "Nutrition"];

const allCoaches = [
  { id: 1, name: "Sarah Chen", specialty: "HIIT & Cardio", rating: 4.9, reviews: 456, students: 1200, experience: "8 years", certified: true, avatar: "SC", location: "New York", hourlyRate: 75 },
  { id: 2, name: "Michael Torres", specialty: "Yoga & Meditation", rating: 4.9, reviews: 389, students: 980, experience: "10 years", certified: true, avatar: "MT", location: "Los Angeles", hourlyRate: 85 },
  { id: 3, name: "David Kim", specialty: "Strength Training", rating: 4.8, reviews: 512, students: 1450, experience: "12 years", certified: true, avatar: "DK", location: "Chicago", hourlyRate: 90 },
  { id: 4, name: "Emma Wilson", specialty: "Boxing & MMA", rating: 4.9, reviews: 278, students: 720, experience: "6 years", certified: true, avatar: "EW", location: "Miami", hourlyRate: 70 },
  { id: 5, name: "Lisa Park", specialty: "Pilates", rating: 4.8, reviews: 345, students: 890, experience: "9 years", certified: true, avatar: "LP", location: "San Francisco", hourlyRate: 80 },
  { id: 6, name: "James Brown", specialty: "HIIT & CrossFit", rating: 4.7, reviews: 234, students: 650, experience: "7 years", certified: true, avatar: "JB", location: "Austin", hourlyRate: 65 },
  { id: 7, name: "Maria Santos", specialty: "Dance Fitness", rating: 4.9, reviews: 412, students: 1100, experience: "11 years", certified: true, avatar: "MS", location: "Online", hourlyRate: 60 },
  { id: 8, name: "Robert Lee", specialty: "Nutrition & Wellness", rating: 4.8, reviews: 298, students: 780, experience: "8 years", certified: true, avatar: "RL", location: "Seattle", hourlyRate: 95 },
];

const Coaches = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredCoaches = allCoaches.filter((coach) => {
    const matchesSearch = coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || coach.specialty.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviews - a.reviews;
    if (sortBy === "students") return b.students - a.students;
    if (sortBy === "price-low") return a.hourlyRate - b.hourlyRate;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Find Your Coach
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with certified fitness professionals for personalized training.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search coaches or specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {specialties.slice(0, 6).map((spec) => (
                  <Button
                    key={spec}
                    variant={selectedSpecialty === spec ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(spec)}
                  >
                    {spec}
                  </Button>
                ))}
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="students">Most Students</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              {filteredCoaches.length} coaches found
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCoaches.map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/coaches/${coach.id}`}
                    className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 text-center"
                  >
                    {/* Avatar */}
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-2xl font-bold text-primary-foreground">
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
                        {coach.students}+
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {coach.location}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{coach.experience}</Badge>
                      <span className="text-lg font-bold text-primary">${coach.hourlyRate}/hr</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Coaches;
