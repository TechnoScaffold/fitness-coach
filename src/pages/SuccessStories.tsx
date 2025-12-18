import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Quote, 
  Trophy, 
  Users, 
  TrendingUp,
  Star,
  Award,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const successStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Yoga & Mindfulness",
    achievement: "Built a thriving online coaching business",
    revenue: "$12,000+/month",
    students: "300+ clients",
    testimonial: "FitHub gave me the platform to share my passion globally. I've built a sustainable business while helping people transform their lives.",
    image: "SJ",
    rating: 4.9,
    location: "Remote",
    joined: "2020"
  },
  {
    id: 2,
    name: "Marcus Williams",
    specialty: "Strength Training",
    achievement: "Became top-rated coach",
    revenue: "$8,500+/month",
    students: "150+ clients",
    testimonial: "The tools and community support helped me refine my approach. My client retention rate increased by 70% in just six months.",
    image: "MW",
    rating: 4.8,
    location: "Chicago, IL",
    joined: "2021"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    specialty: "HIIT & Nutrition",
    achievement: "Reached 1000+ clients",
    revenue: "$18,000+/month",
    students: "1000+ clients",
    testimonial: "FitHub's marketing resources helped me scale beyond my local market. Now I coach clients across 15 countries!",
    image: "ER",
    rating: 5.0,
    location: "International",
    joined: "2019"
  },
  {
    id: 4,
    name: "David Chen",
    specialty: "Senior Fitness Specialist",
    achievement: "Created niche market expertise",
    revenue: "$6,800+/month",
    students: "200+ clients",
    testimonial: "I found my unique niche working with seniors. FitHub helped me connect with clients who truly value my specialized approach.",
    image: "DC",
    rating: 4.9,
    location: "Vancouver, BC",
    joined: "2022"
  },
  {
    id: 5,
    name: "Amira Hassan",
    specialty: "Pre/Post Natal Fitness",
    achievement: "Authored bestselling workout guide",
    revenue: "$15,200+/month",
    students: "450+ clients",
    testimonial: "FitHub's community helped me develop a specialized program that became so popular I turned it into a published guide.",
    image: "AH",
    rating: 5.0,
    location: "London, UK",
    joined: "2020"
  },
  {
    id: 6,
    name: "Tyler Morrison",
    specialty: "Esports Athlete Training",
    achievement: "Pioneered new fitness category",
    revenue: "$9,300+/month",
    students: "275+ clients",
    testimonial: "I created a whole new category for esports athletes. FitHub supported my innovation and helped me reach a global audience.",
    image: "TM",
    rating: 4.7,
    location: "Austin, TX",
    joined: "2021"
  }
];

const stats = [
  { value: "12,000+", label: "Active Coaches" },
  { value: "$75M+", label: "Annual Revenue" },
  { value: "2M+", label: "Student Connections" },
  { value: "35 Countries", label: "Global Reach" }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{  opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Success Stories
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Inspiring <span className="text-primary">Journeys</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Discover how fitness professionals built thriving careers and transformed lives with FitHub.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Diverse Coaching Successes
              </h2>
              <p className="text-muted-foreground">
                Real stories from coaches across specialties, locations, and backgrounds.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground">
                          {story.image}
                        </div>
                        <div>
                          <CardTitle>{story.name}</CardTitle>
                          <CardDescription>{story.specialty}</CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(story.rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">{story.rating}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{story.location} • Joined {story.joined}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <div className="bg-primary/10 rounded-lg p-4 mb-6">
                        <Quote className="w-8 h-8 text-primary mb-3" />
                        <p className="text-foreground italic">"{story.testimonial}"</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Trophy className="w-5 h-5 text-primary mr-3" />
                          <span className="text-sm">{story.achievement}</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-primary mr-3" />
                          <span className="text-sm">{story.revenue}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-primary mr-3" />
                          <span className="text-sm">{story.students}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Begin Your Transformation
              </h2>
              <p className="text-xl mb-10 text-primary-foreground/90">
                Join diverse coaches who built thriving careers with FitHub's support.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <Target className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Define Your Niche</h3>
                  <p>Create your profile and specialize in your passion area</p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <Award className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Develop Expertise</h3>
                  <p>Access exclusive resources and training programs</p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <TrendingUp className="w-12 h-12 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-2">Expand Globally</h3>
                  <p>Connect with clients worldwide and scale your impact</p>
                </div>
              </div>
              
              <Button size="lg" variant="secondary" asChild>
                <a href="/become-coach">Become a Coach</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;