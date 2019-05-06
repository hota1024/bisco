const Discord = require('discord.js')
const Command = require('./Command')
const pack = require('../package.json')

class Bisco {
  constructor(token) {
    this.token = token
    this.client = new Discord.Client()
    this.prefix = '!'
    this.versionString = ''
    this.commands = []
    this.games = []
    this.gameRooms = []
    this.gameTimeout = 1 * 60 * 1000

    this.onMessage(msg => {
      this.executeCommand(msg)
    })
  }

  registerDefaultCommands() {
    this.command('help', msg => {
      let fields = [
        {
          name: 'version',
          value: this.versionString
        },
        {
          name: 'コマンド一覧',
          value: this.commands.map(c => c.getDescField()).join('\n')
        }
      ]

      msg.reply({
        embed: {
          title: `${this.client.user.tag}`,
          fields
        }
      })
    }).setDescription('ヘルプを表示します。')

    this.command('games', msg => {

      msg.reply({
        embed: {
          title: 'ゲーム一覧',
          description: this.games.map(g => g.getDescField()).join('\n')
        }
      })
    }).setDescription('ゲーム一覧を表示します。')

    this.command('games.rooms.count', msg => {
      msg.reply(`現在${this.gameRooms.length}個のゲームがアクティブです。`)
    }).setDescription('現在プレイされているゲームの数を返します。')
  }

  executeCommand(msg) {
    if (this.prefix === '') throw new Error('[Bisco Error] prefix can not be empty. ')
    if (msg.author.bot) return
    if (!msg.content.startsWith(this.prefix)) return

    const cmd = msg.content.replace(this.prefix, '')

    if (cmd === 'bisco.version') {
      msg.reply(`Bisco v.${pack.version}`)
      return
    }

    for (let i = 0; i < this.commands.length; ++i) {
      let command = this.commands[i]
      if (command.getRegexp().test(cmd)) {
        command.execute(this, msg, cmd)
        return
      }
    }
  }

  setVersionString(string) {
    this.versionString = string
  }

  command(pattern, process) {
    const command = new Command(pattern, process)
    this.commands.push(command)
    return command
  }

  game(pattern, gameClass) {
    this.games.push(gameClass)

    let rooms = this.gameRooms

    return this.command(pattern, (msg, args) => {
      let room = rooms.find(g => g.isPlaying(msg.author))
      if (room) {
        msg.reply('参加中のゲームがあります。')
        return
      }
      room = new gameClass(this, msg, args)

      rooms.push(room)
      this.onMessage(msg => {
        room.onInput(msg)
      })
    })
  }

  exitGame(room) {
    this.gameRooms = this.gameRooms.filter(r => r !== room)
  }

  setPrefix(prefix) {
    this.prefix = prefix
  }

  createCallback(callback) {
    return () => {
      callback(this)
    }
  }

  onReady(callback) {
    this.client.on('ready', this.createCallback(callback))
  }

  onMessage(callback) {
    this.client.on('message', callback)
  }

  run() {
    this.registerDefaultCommands()
    this.client.login(this.token)

    setInterval(() => {
      let nowMs = Date.now()

      this.gameRooms.forEach(room => {
        let startedAtMs = room.startedAt

        if (nowMs - startedAtMs > this.gameTimeout) {
          room.onTimeout()
          room.exit()
        }
      })
    }, 3000)
  }

  setGameTimeout(timeout) {
    this.gameTimeout = timeout
  }
}

Bisco.Game = require('./Game')

module.exports = Bisco
