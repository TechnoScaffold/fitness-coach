import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none bg-card rounded-2xl p-8 shadow-card">
              <p className="lead">
                Welcome to FitHub. These Terms of Service govern your access to and use of our platform, 
                services, and website. By accessing or using FitHub, you agree to be bound by these terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
              <p>
                By registering for an account, accessing, or using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree 
                to these terms, you must not access or use our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Eligibility</h2>
              <p>
                You must be at least 18 years old to use our services. By using FitHub, you represent and warrant 
                that you are at least 18 years old and have the legal capacity to enter into these terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Account Registration</h2>
              <p>
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information as needed</li>
                <li>Keep your password confidential and secure</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mt-3">
                You are responsible for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Services Description</h2>
              <p>
                FitHub provides a platform connecting fitness enthusiasts with certified coaches for virtual and in-person 
                training sessions. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access to fitness classes and training programs</li>
                <li>Connection with certified fitness coaches</li>
                <li>Progress tracking and analytics tools</li>
                <li>Educational content and resources</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">User Responsibilities</h2>
              <p>As a user of FitHub, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the operation of our services</li>
                <li>Use our services for any fraudulent or malicious activities</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
              <p>
                All content, features, and functionality on FitHub, including but not limited to text, graphics, logos, 
                icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property 
                of FitHub or its licensors and are protected by international copyright, trademark, patent, trade secret, 
                and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Subscription and Payments</h2>
              <p>
                Some features of our services may require payment. By purchasing a subscription, you agree to pay all 
                fees and charges associated with your chosen plan. Payments are processed through secure third-party 
                payment processors. All fees are non-refundable except as expressly stated in these terms or as required 
                by law.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account and access to our services at our sole discretion, 
                without notice, for conduct that we believe violates these Terms of Service or is harmful to other users 
                or our business interests.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or 
                implied. FitHub disclaims all warranties, including but not limited to merchantability, fitness for a 
                particular purpose, and non-infringement.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, FitHub shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
                indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your access to or use of our services</li>
                <li>Any unauthorized access to or alteration of your transmissions</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FitHub, its affiliates, officers, directors, employees, 
                and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in 
                any way connected with your access to or use of our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify you of any changes 
                by posting the new terms on this page and updating the "Last updated" date. Your continued use of our 
                services after such changes constitutes your acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                <p className="font-semibold">FitHub Legal Team</p>
                <p>Email: legal@fithub.com</p>
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

export default TermsOfService;