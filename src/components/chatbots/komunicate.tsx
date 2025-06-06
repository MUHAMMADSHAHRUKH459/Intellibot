// components/KommunicateChat.js

import Script from 'next/script';

const KommunicateChat = () => {
  return (
    <>
      <Script
        id="kommunicate-chat-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, m){
              var kommunicateSettings = 
                {"appId":"29713958bd664aecb4b36fc7e4a37cf0c","popupWidget":true,"automaticChatOpenOnNavigation":true};
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
};

export default KommunicateChat;
