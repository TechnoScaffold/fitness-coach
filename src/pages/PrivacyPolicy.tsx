import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none bg-card rounded-2xl p-8 shadow-card">
              <p className="lead">
                At FitHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p>
                When you register for an account or use our services, we may collect personally identifiable information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Name and contact details (email address, phone number)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Fitness goals, preferences, and health information (if voluntarily provided)</li>
                <li>Profile photos and biographical information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Usage Data</h3>
              <p>We automatically collect certain information when you access or use our services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage statistics (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>To provide, maintain, and improve our services</li>
                <li>To personalize your experience and recommend relevant content</li>
                <li>To process transactions and send transactional notifications</li>
                <li>To communicate with you about updates, promotions, and support</li>
                <li>To detect, prevent, and address technical issues or security breaches</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>With Service Providers:</strong> We may employ third-party companies to facilitate our services, process payments, or conduct analytics.</li>
                <li><strong>For Legal Compliance:</strong> We may disclose information if required by law or to protect our rights and safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new owners.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no method of transmission 
                over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access, update, or delete your personal information</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent for data processing (where applicable)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns. 
                You can control cookie preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;