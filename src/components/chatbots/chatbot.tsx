"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kommunicate?: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    (function (d, m) {
      const kommunicateSettings = {
        appId: "29713958bd664aecb4b36fc7e4a37cf0c",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      const h = d.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return null;
};

export default Chatbot;
