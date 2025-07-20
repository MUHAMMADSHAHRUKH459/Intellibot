"use client";

import { useEffect } from "react";

const KommunicateChat = () => {
  useEffect(() => {
    (function (d, m) {
      const kommunicateSettings = {
        appId: "2ab527cfad03d9769414a910684bac87c",
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
    })(document, (window as any).kommunicate || {});
  }, []);

  return null; // Yeh component sirf script inject karega
};

export default KommunicateChat;
