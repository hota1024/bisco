class Game {
  constructor(bisco) {
    this.bisco = bisco
    this.id = Game.currentId++
    this.startedAt = Date.now()
  }

  exit() {
    this.onExit()
    this.bisco.exitGame(this)
  }

  onTimeout() {}

  onInput() {}

  onExit() {}

  static setDescription(description) {
    this.description = description
  }

  static setGameName(gameName) {
    this.gameName = gameName
  }

  static getDescField() {
    return `**${this.gameName || this.name}** - ${this.description}`
  }
}

Game.description = ''
Game.gameName = ''
Game.currentId = 0

Game.setDescription('')
Game.setGameName('')

module.exports = Game
