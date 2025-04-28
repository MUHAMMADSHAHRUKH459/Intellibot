"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kommunicate: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "ef1e05b047fcd591db01579dd541d157", // Updated appId
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return null; // empty component
};

export default Chatbot;
