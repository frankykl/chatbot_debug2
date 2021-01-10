class ActionProvider {
	// The action provider receives createChatBotMessage which you can use to define the bots response, and
	// the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

	// If user enter an empty message, do not include it in the messages array
	handleEmptyMsg = () => { 
    this.setState((state) => ({
      ...state,
      messages: state.messages.slice(0,-1),
    }));
	}

  toMyPage = () =>  {
    const message = this.createChatBotMessage("Just a moment. Redirecting you",
      {
				widget: "toMyPage",
      })
     this.addMessageToState(message);
	};

  serviceOptions = () => {
    const message = this.createChatBotMessage(
      "Below are some service options we currently provide.",
      {
        widget: "ServiceOptions",
        loading: true,
        terminateLoading: true,
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
