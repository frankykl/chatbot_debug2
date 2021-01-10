class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
		// Do not keep empty message
		if (!message || 0 === message.length) {
			return this.actionProvider.handleEmptyMsg();
		}
  }

  containsValidMsg = (message) => {
    const regexp = ".*";
    return message.match(regexp) && message.length >= 2;
  };
}

export default MessageParser;
