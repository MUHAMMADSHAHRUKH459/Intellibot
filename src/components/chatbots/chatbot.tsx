"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    // Check if running on client-side
    if (typeof window === "undefined") return;

    // Initialize only once
    if (!window.kommunicate || !window.kommunicate._globals) {
      (function(d, m) {
        const kommunicateSettings = {
          appId: "ef1e05b047fcd591db01579dd541d157",
          popupWidget: true,
          automaticChatOpenOnNavigation: true
        };
        
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        
        // Load the script
        document.head.appendChild(script);
        
        // Initialize Kommunicate
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }

    // Cleanup function (optional)
    return () => {
      const widget = document.getElementById("kommunicate-widget");
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default Chatbot;