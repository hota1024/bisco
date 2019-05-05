class Command {
  constructor(pattern, process) {
    this.pattern = pattern
    this.process = process
    this.description = ''
  }

  getRegexp() {
    let string = this
      .pattern
      .replace(/\(/g, '\\(') // 左括弧をエスケープ
      .replace(/\)/g, '\\)') // 右カッコをエスケープ
      .replace(/\./g, '\\.') // .をエスケープ
      .replace(/\-/g, '\\-') // -をエスケープ
      .replace(/\{[a-zA-Z0-9]*\}/g, '(.*)') // {}を()に変換
    
    return new RegExp(`^${string}$`)
  }

  getArgumentNames() {
    const matches = this.pattern.match(/\{[a-zA-Z0-9]*\}/g)
    if (!matches) return []

    return matches.map(arg => arg.replace('{', '').replace('}', ''))
  }

  setDescription(description) {
    this.description = description
    return this
  }

  execute(bisco, msg, cmd) {
    let matches = cmd.match(this.getRegexp())
    matches = matches.slice(1)

    let args = {}
    this.getArgumentNames().forEach((arg, index) => {
      args[arg] = matches[index]
    })

    this.process(msg, args, bisco)
  }

  getDescField() {
    return `**${this.pattern}** - ${this.description}`
  }
}

module.exports = Command
