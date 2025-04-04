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
        appId: "1ccb7ede72baa273b2091e1072db51847", // Updated appId
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

  return <></>;
};

export default Chatbot;
