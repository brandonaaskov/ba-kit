import * as childProcess from 'child_process'
import { Command } from '@oclif/command'

export default class Ping extends Command {
  static description = 'Ping stuff?'

  static args = [{
    name: 'location',
    description: 'Domain or IP'
  }]

  async run () {
    const { args } = this.parse(Ping)
    const log = this.log

    const child = childProcess.spawn('ping', [args.location])
    child.stdout.on('data', (chunk) => {
      log('chunk', chunk.toString('utf-8'))
    })
  }
}
