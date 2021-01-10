import React from "react";

import { ReactComponent as WisebotIcon } from "../icons/qa.svg";

const WisebotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <WisebotIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default WisebotAvatar;
