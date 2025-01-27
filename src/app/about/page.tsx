import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Intellibot Creation - Revolutionizing Chatbot Services",
  description: "Learn more about Intellibot Creation, a leading chatbot agency providing cutting-edge AI-powered chatbot solutions for businesses worldwide.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover Intellibot Creation, a premier chatbot development agency specializing in AI-driven solutions to enhance customer engagement and business growth."
      />

      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
