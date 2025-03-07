"use client"
import { useEffect } from "react";
import Script from "next/script";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";

const PIXEL_ID = "664248859624021";

export default function Home() {
  useEffect(() => {
    window.fbq?.("init", PIXEL_ID);
    window.fbq?.("track", "PageView");
  }, []);
  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `,
        }}
      />
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
