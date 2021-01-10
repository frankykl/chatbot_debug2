import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import ToMyPage from "./widgets/ToMyPage/ToMyPage";
import WisebotAvatar from "./domainComponents/WisebotAvatar";
import ServiceOptions from "./widgets/options/ServiceOptions/ServiceOptions";

const botName = "Agent";

const config = {
  botName: botName,
  lang: "en",
  initialMessages: [
    createChatBotMessage(`Welcome`),
    createChatBotMessage(
      "Pick One Option ",
			{
        withAvatar: true,
				widget: "ServiceOptions",
				delay: 500
			}
		),
  ],
  state: {
  },
  customComponents: {
		header: () => null,
    botAvatar: (props) => <WisebotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "toMyPage",
      widgetFunc: (props) => <ToMyPage {...props} />,
      mapStateToProps: [],
    },
    {
      widgetName: "ServiceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
			mapStateToProps: [],
    },
  ],
};

export default config;
