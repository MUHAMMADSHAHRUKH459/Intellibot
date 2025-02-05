"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "chat-icon"?: string;
        "intent"?: string;
        "chat-title"?: string;
        "agent-id"?: string;
        "language-code"?: string;
        "chat-background"?: string;
        "button-titlebar-color"?: string;
        "button-color"?: string;
      };
    }
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <df-messenger
        chat-icon="https://files.oaiusercontent.com/file-FB7dumLWwoQ858ny1deisQ?se=2025-02-05T11%3A04%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D50bb4971-e883-4a19-bb09-0b34e090c5d8.webp&sig=hu17Is8dhjqn8qaE3f69hAv%2B5xjkYExr%2BHwQkDm5tb0%3D"
        intent="WELCOME"
        chat-title="Intellibot-Assistant"
        agent-id="14243804-411a-4707-8306-e99d159c9061"
        language-code="en"
        chat-background="#ffffff"
        button-titlebar-color="#000"
        button-color="#ffffff"
      ></df-messenger>
    </>
  );
};

export default Chatbot;
