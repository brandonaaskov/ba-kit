import { promisify } from 'util'
import * as childProcess from 'child_process'
import { Command } from '@oclif/command'

const exec = promisify(childProcess.exec)

export default class Ping extends Command {
  static description = 'Get pwd'

  async run() {
    const { stdout, stderr } = await exec('pwd')
    console.log(stdout)
  }
}
