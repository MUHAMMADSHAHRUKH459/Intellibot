// components/KommunicateChat.js
"use client";
import Script from "next/script";

export default function KommunicateChat() {
  return (
    <>
      <Script
        id="kommunicate-chat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, m){
              var kommunicateSettings = 
                  {"appId":"841c3551affcc2e51810a068d7c00c19","popupWidget":true,"automaticChatOpenOnNavigation":true};
              var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
              s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
              var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
              window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
          `,
        }}
      />
    </>
  );
}


