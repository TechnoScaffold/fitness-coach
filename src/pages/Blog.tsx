import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Search, Calendar, User, Tag, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Science Behind High-Intensity Interval Training",
    excerpt: "Discover how HIIT workouts maximize calorie burn and improve cardiovascular health in less time than traditional cardio.",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2023",
    category: "Workout Science",
    readTime: "5 min read",
    image: "HIIT"
  },
  {
    id: 2,
    title: "Nutrition Tips for Morning Workouts",
    excerpt: "Fuel your body correctly for early exercise sessions with these evidence-based nutrition strategies.",
    author: "Marcus Williams",
    date: "May 10, 2023",
    category: "Nutrition",
    readTime: "4 min read",
    image: "Nutrition"
  },
  {
    id: 3,
    title: "Building Sustainable Fitness Habits",
    excerpt: "Learn how to create lasting lifestyle changes that stick beyond January resolutions.",
    author: "Elena Rodriguez",
    date: "May 5, 2023",
    category: "Lifestyle",
    readTime: "6 min read",
    image: "Habits"
  },
  {
    id: 4,
    title: "Recovery Techniques for Athletes",
    excerpt: "Explore advanced recovery methods that can reduce soreness and improve performance.",
    author: "Dr. Michael Torres",
    date: "April 28, 2023",
    category: "Recovery",
    readTime: "7 min read",
    image: "Recovery"
  },
  {
    id: 5,
    title: "Mind-Muscle Connection Explained",
    excerpt: "Understanding how mental focus can enhance muscle activation during resistance training.",
    author: "James Brown",
    date: "April 22, 2023",
    category: "Training Tips",
    readTime: "5 min read",
    image: "MindMuscle"
  },
  {
    id: 6,
    title: "Yoga for Injury Prevention",
    excerpt: "How incorporating yoga into your routine can reduce injury risk and improve flexibility.",
    author: "Lisa Park",
    date: "April 18, 2023",
    category: "Flexibility",
    readTime: "4 min read",
    image: "Yoga"
  }
];

const categories = [
  "All",
  "Workout Science",
  "Nutrition",
  "Lifestyle",
  "Recovery",
  "Training Tips",
  "Flexibility"
];

const popularPosts = [
  { id: 1, title: "10 Minute Home Workout", views: "12.5K" },
  { id: 2, title: "Protein Myths Debunked", views: "9.8K" },
  { id: 3, title: "Sleep and Muscle Growth", views: "8.7K" },
  { id: 4, title: "Hydration Guidelines", views: "7.3K" }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Fitness Insights
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  <span className="text-primary">FitHub</span> Blog
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Evidence-based fitness articles, expert tips, and the latest research to fuel your health journey.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filter */}
              <div className="mb-12">
                <div className="relative max-w-md mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 rounded-full border-muted-foreground/20 focus-visible:ring-primary"
                  />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className={`px-4 py-2 h-auto rounded-full transition-all ${selectedCategory === category ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-secondary'}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Blog Posts */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-card-hover transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                        <div className="text-4xl font-bold text-primary/20">{post.image}</div>
                      </div>

                      
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-3 py-1 bg-primary/5 text-primary rounded-full border border-primary/10">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                        {/* <Button variant="outline" size="sm" className="mt-4" asChild>
                          <a href={`/blog/${post.id}`}>
                            Read Article <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button> */}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Popular Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Trending Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {popularPosts.map((post) => (
                        <li key={post.id}>
                          <a 
                            href="#" 
                            className="flex items-start group hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary/50"
                          >
                            <ChevronRight className="w-4 h-4 mt-1 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                            <div className="ml-3">
                              <h4 className="font-medium text-sm group-hover:text-primary">{post.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">{post.views} views</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <li key={category}>
                          <button 
                            className="flex items-center justify-between group hover:text-primary transition-colors w-full p-3 rounded-lg hover:bg-secondary/50 text-left"
                            onClick={() => setSelectedCategory(category)}
                          >
                            <span className="text-sm group-hover:text-primary">{category}</span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                    <CardDescription>Get the latest fitness insights delivered to your inbox.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative">
                        <Input placeholder="Your email address" type="email" className="pr-24" />
                        <Button className="absolute right-1 top-1 h-8 text-xs">Subscribe</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;