import Command from '@oclif/command'
import * as childProcess from 'child_process'
import { promisify } from 'util'

// const exec = promisify(childProcess.exec)

export default abstract class BaseCommand extends Command {
  protected exec = promisify(childProcess.exec)

  async doPromise (promise: Promise<any>) {
    try {
      const data = await promise
      return [data, null]
    } catch (err) {
      console.error(err.message)
      return [null, err]
    }
  }
}
