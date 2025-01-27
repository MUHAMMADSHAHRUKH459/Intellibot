import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Intellibot Creation -Web & AI Chatbot Solutions",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="AI chatbot, chatbot solutions, web development, contact Intellibot Creation, AI automation, chatbot support"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
