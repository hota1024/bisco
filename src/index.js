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

    this.onMessage(msg => {
      this.executeCommand(msg)
    })
  }

  registerDefaultCommands() {
    this.command('help|', msg => {
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
  }

  executeCommand(msg) {
    if (this.prefix === '') throw new Error('[Bisco Error] prefix can not be empty. ')
    if (msg.author.bot) return
    if (msg.content.startsWith(this.prefix))
    if (msg.content.match(/bisco/)) {
      msg.reply(`Bisco v.${pack.version}`)
      return
    }

    for (let i = 0; i < this.commands.length; ++i) {
      let command = this.commands[i]
      if (command.getRegexp().test(msg.content)) {
        command.execute(this, msg)
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
  }
}

module.exports = Bisco
