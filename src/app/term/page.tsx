export default function TermsOfServicePage() {
    return (
      <main className="min-h-screen bg-[#121723] text-gray-300 px-6 py-16 flex justify-start mt-28">
        <div className="max-w-3xl w-full text-left space-y-6">
          <h1 className="text-4xl font-bold text-white border-b border-gray-600 pb-4">
            Terms of Service
          </h1>
  
          <p>
            Welcome to <strong className="text-white">Intellibot Creation</strong>. By using our website or chatbot, web development, and web designing services, you agree to be bound by the following Terms of Service. Please read them carefully.
          </p>
  
          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to comply with and be legally bound by these Terms. If you do not agree, please do not use our services.
            </p>
          </div>
  
          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Services Provided</h2>
            <p>
              Intellibot Creation offers AI chatbot development, custom web development, and creative web designing services for businesses and individuals. We reserve the right to modify or discontinue services at any time without prior notice.
            </p>
          </div>
  
          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Web Development Services</h2>
            <p>
              Our web development services are tailored to your project requirements. Upon agreement, we will provide a project timeline and scope. Any changes after finalization may result in additional charges.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Code ownership remains with Intellibot Creation until full payment is received.</li>
              <li>Hosting and domain purchases are the client’s responsibility unless stated otherwise.</li>
              <li>We are not responsible for third-party plugin or API failures.</li>
            </ul>
          </div>
  
          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Chatbot Services</h2>
            <p>
              Our chatbot development services include the design, training, and deployment of custom AI chatbots to automate customer interaction and support. Clients must provide relevant content and use-cases to ensure accurate functionality.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Chatbots are delivered after successful testing and demo approvals.</li>
              <li>We provide 1 month of free support for minor changes or bugs after delivery.</li>
              <li>Ongoing maintenance and feature updates may require a separate contract.</li>
              <li>Chatbot response quality depends on provided data and integration environment.</li>
            </ul>
          </div>
  
          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Web Designing Services</h2>
            <p>
              All design work is carried out based on client specifications and aesthetic goals. Any major changes after final approval may incur extra costs.
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>We provide 2 free design revisions. Further changes may be billed.</li>
              <li>Design concepts are the intellectual property of Intellibot Creation until full payment is made.</li>
            </ul>
          </div>
  
          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">6. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use our services only for lawful purposes</li>
              <li>Do not misuse, hack, or exploit the platform</li>
              <li>Provide accurate and honest information during communication</li>
            </ul>
          </div>
  
          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">7. Intellectual Property</h2>
            <p>
              All content, code, designs, and assets provided are owned by Intellibot Creation until full payment is received. After that, client will hold rights as agreed in the contract.
            </p>
          </div>
  
          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">8. Limitation of Liability</h2>
            <p>
              We are not liable for any damages or losses resulting from the use or inability to use our services, including any third-party interactions or hosting/server issues.
            </p>
          </div>
  
          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">9. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Continued use of our services after changes means you accept the new terms.
            </p>
          </div>
  
          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-2">10. Contact Us</h2>
            <p>
              For any questions or concerns about these Terms, please contact us at: <strong className="text-white">
                intellibotcreation459@gmail.com
              </strong>
            </p>
          </div>
  
          <footer className="text-sm text-gray-500 pt-8 border-t border-gray-700">
            &copy; 2025 Intellibot Creation. All rights reserved.
          </footer>
        </div>
      </main>
    );
  }
  