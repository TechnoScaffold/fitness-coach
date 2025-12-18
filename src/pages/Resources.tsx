import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  PlayCircle,
  Calendar,
  Users,
  Award,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const resourceCategories = [
  {
    title: "Training Programs",
    description: "Structured workout plans and training methodologies",
    icon: BookOpen,
    resources: [
      { name: "Beginner Strength Program", type: "PDF", size: "2.4 MB" },
      { name: "Advanced HIIT Protocols", type: "Video", size: "1.2 GB" },
      { name: "Nutrition Guidelines", type: "Document", size: "1.8 MB" }
    ]
  },
  {
    title: "Educational Videos",
    description: "Tutorial videos and technique demonstrations",
    icon: Video,
    resources: [
      { name: "Proper Form Techniques", type: "Video", size: "850 MB" },
      { name: "Client Motivation Strategies", type: "Webinar", size: "1.1 GB" },
      { name: "Injury Prevention", type: "Video Series", size: "2.3 GB" }
    ]
  },
  {
    title: "Templates & Tools",
    description: "Downloadable templates and planning tools",
    icon: FileText,
    resources: [
      { name: "Session Planning Template", type: "DOCX", size: "150 KB" },
      { name: "Client Progress Tracker", type: "Excel", size: "85 KB" },
      { name: "Marketing Toolkit", type: "ZIP", size: "5.2 MB" }
    ]
  }
];

const upcomingEvents = [
  { title: "Advanced Coaching Certification", date: "June 15, 2023", type: "Certification" },
  { title: "Nutrition Workshop", date: "July 22, 2023", type: "Workshop" },
  { title: "Virtual Conference", date: "August 5, 2023", type: "Conference" }
];

const Resources = () => {
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
                  Resources
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Coach <span className="text-primary">Resources</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                  Access exclusive training materials, educational content, and tools to enhance your coaching skills.
                </p>
                <Button size="lg">Browse All Resources</Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resource Library
              </h2>
              <p className="text-muted-foreground">
                Explore our curated collection of materials designed to help you excel as a fitness coach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {category.resources.map((resource, idx) => (
                          <li key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                            <div>
                              <h4 className="font-medium text-sm">{resource.name}</h4>
                              <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                            </div>
                            <Button size="icon" variant="ghost">
                              <Download className="w-4 h-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-6">
                        View All {category.title}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Upcoming Learning Opportunities
              </h2>
              <p className="text-muted-foreground">
                Enhance your skills with our exclusive events and training sessions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-accent">{event.type}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{event.date}</p>
                        <Button size="sm" className="w-full">Register Now</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Coaching Tips & Best Practices
              </h2>
              <p className="text-muted-foreground">
                Insights from top-performing coaches in our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="flex items-start mb-4">
                  <Lightbulb className="w-6 h-6 text-primary mr-3 mt-1" />
                  <h3 className="text-xl font-bold text-foreground">Building Client Rapport</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Establish trust and connection with clients by actively listening, setting realistic expectations, 
                  and celebrating small wins along the way.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read More →
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 shadow-card"
              >
                <div className="flex items-start mb-4">
                  <Award className="w-6 h-6 text-primary mr-3 mt-1" />
                  <h3 className="text-xl font-bold text-foreground">Program Design Principles</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Create effective training programs by incorporating progressive overload, variety, and recovery periods 
                  tailored to each client's goals and abilities.
                </p>
                <Button variant="link" className="p-0 h-auto">
                  Read More →
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;