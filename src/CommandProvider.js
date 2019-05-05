class CommandProvider {
  constructor(onMessage) {
    onMessage(this.executeCommand)
  }

  executeCommand(msg) {
    if (msg.content === 'test') {
      
    }
  }
}

module.exports = CommandProvider
