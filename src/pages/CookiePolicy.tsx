import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cookie Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none bg-card rounded-2xl p-8 shadow-card">
              <p className="lead">
                This Cookie Policy explains how FitHub ("we", "us", or "our") uses cookies and similar tracking technologies 
                when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, smartphone, etc.) when you 
                visit websites. They are widely used to make websites work more efficiently and to provide information 
                to the website owners.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function and cannot be switched off in our systems. 
                They are usually only set in response to actions made by you which amount to a request for services, 
                such as setting your privacy preferences, logging in, or filling in forms.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Authentication cookies</li>
                <li>Security cookies</li>
                <li>Load balancing cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Performance Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
                of our site. They help us to know which pages are the most and least popular and see how visitors move 
                around the site.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Google Analytics cookies</li>
                <li>Server performance cookies</li>
                <li>Page load time measurement cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Functionality Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set 
                by us or by third party providers whose services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>User preference cookies</li>
                <li>Social media integration cookies</li>
                <li>Language preference cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Targeting Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners. They may be used by those 
                companies to build a profile of your interests and show you relevant advertisements on other sites.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Facebook Pixel cookies</li>
                <li>Google Ads cookies</li>
                <li>Retargeting cookies</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Cookies</h2>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                and deliver advertisements on and through our services. These third parties include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Analytics providers:</strong> Google Analytics, Mixpanel</li>
                <li><strong>Advertising networks:</strong> Google Ads, Facebook Ads</li>
                <li><strong>Social media platforms:</strong> Facebook, Twitter, Instagram</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managing Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                device and you can set most browsers to prevent them from being placed. However, if you do this, you 
                may have to manually adjust some preferences every time you visit a site and some services and 
                functionalities may not work.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Browser Settings</h3>
              <p>
                Most web browsers automatically accept cookies, but you can modify your browser settings to decline 
                cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the 
                interactive features of our services.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Our Cookie Consent Tool</h3>
              <p>
                When you first visit our website, you will be presented with our cookie consent banner where you can 
                choose which categories of cookies to accept or reject.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
                or our practices. We will notify you of any material changes by posting the new policy on this page 
                and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="font-semibold">FitHub Privacy Team</p>
                <p>Email: privacy@fithub.com</p>
                <p className="mt-2">Address: 123 Fitness Street, Healthville, HV 12345</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;