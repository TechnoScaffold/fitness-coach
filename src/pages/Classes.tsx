import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Users, Star, MapPin, X } from "lucide-react";
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

const categories = ["All", "HIIT", "Yoga", "Strength", "Cardio", "Pilates", "Boxing", "Dance"];

const allClasses = [
  { id: 1, title: "HIIT Burn", category: "HIIT", coach: "Sarah Chen", rating: 4.9, reviews: 234, duration: "45 min", participants: 12, location: "Online", price: 25, popular: true },
  { id: 2, title: "Power Yoga Flow", category: "Yoga", coach: "Michael Torres", rating: 4.8, reviews: 189, duration: "60 min", participants: 20, location: "NYC Studio", price: 30, popular: false },
  { id: 3, title: "Strength Training", category: "Strength", coach: "David Kim", rating: 4.9, reviews: 312, duration: "50 min", participants: 8, location: "LA Gym", price: 35, popular: true },
  { id: 4, title: "Boxing Basics", category: "Boxing", coach: "Emma Wilson", rating: 4.7, reviews: 156, duration: "45 min", participants: 10, location: "Online", price: 28, popular: false },
  { id: 5, title: "Core Pilates", category: "Pilates", coach: "Lisa Park", rating: 4.8, reviews: 201, duration: "50 min", participants: 15, location: "Chicago", price: 32, popular: true },
  { id: 6, title: "Zumba Dance", category: "Dance", coach: "Maria Santos", rating: 4.9, reviews: 278, duration: "55 min", participants: 25, location: "Online", price: 22, popular: false },
  { id: 7, title: "Full Body HIIT", category: "HIIT", coach: "James Brown", rating: 4.7, reviews: 145, duration: "40 min", participants: 18, location: "Miami", price: 24, popular: false },
  { id: 8, title: "Vinyasa Yoga", category: "Yoga", coach: "Anna Lee", rating: 4.9, reviews: 367, duration: "75 min", participants: 12, location: "Online", price: 35, popular: true },
];

const Classes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredClasses = allClasses.filter((cls) => {
    const matchesSearch = cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.coach.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || cls.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "popular") return b.reviews - a.reviews;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
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
                Discover Classes
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse hundreds of classes from top-rated coaches around the world.
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
                  placeholder="Search classes or coaches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-44">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground mb-6">
              {filteredClasses.length} classes found
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClasses.map((cls, index) => (
                <motion.div
                  key={cls.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/classes/${cls.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5">
                      {cls.popular && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                          Popular
                        </Badge>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-foreground/10">{cls.category}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{cls.category}</Badge>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-medium">{cls.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {cls.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">by {cls.coach}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {cls.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {cls.participants}
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
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
