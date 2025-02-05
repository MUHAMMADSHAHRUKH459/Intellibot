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
        chat-icon="images\logo\chat.jpg"
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
