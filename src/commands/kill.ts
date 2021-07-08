
import * as _ from 'lodash'
import { flags } from '@oclif/command'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'
import BaseCommand from '../base'

export default class Kill extends BaseCommand {
  static description = 'Kill a process by name (without caring about its PID)'

  static flags = {
    help: flags.help({ char: 'h' })
  }

  static args = [{
    name: 'nameOrPort',
    description: 'name or port of the running process',
    required: false,
    parse: (input: string) => _.toLower(input)
  }]

  async killById (processId: number) {
    const { stdout, stderr } = await this.exec(`kill -9 ${processId}`)
    if (stderr) throw new Error(`Something failed when running killById(${processId})`)
    return stdout
  }

  async killByName (processName: string) {
    const errMessage = `Something failed when running killByName(${processName})`

    const { stdout, stderr } = await this.exec(`pgrep ${_.toLower(processName)}`)
    if (stderr) this.error(errMessage)

    await this.killById(Number(stdout))
    this.log(`Great, we killed the process "${processName}" with the PID of ${stdout}`)

    return stdout
  }

  async killByPort (processPort: number) {
    const { stdout, stderr } = await this.exec(`lsof -nti:${processPort}`)
    if (stderr) throw new Error(`Something failed when running killByPort(${processPort})`)

    await this.killById(Number(stdout))
    this.log(`Great, we killed the process running on port ${processPort} with the PID of ${stdout}`)

    return stdout
  }

  async startInquiry () {
    let processName, processPort
    const responses = await inquirer.prompt([{
      name: 'choice',
      message: 'Do you want to kill a process by name or by port?',
      type: 'list',
      choices: [{ name: 'process name' }, { name: 'open port' }]
    }])

    const choice = responses.choice
    if (choice === 'process name') {
      processName = await cli.prompt(`What's the name of the process?`)
    }

    if (choice === 'open port') {
      processPort = await cli.prompt(`What port?`)
    }

    return { processName, processPort }
  }

  async run () {
    const { args } = this.parse(Kill)

    const isArgString = _.isNaN(_.toNumber(args.nameOrPort))

    let processName: string = isArgString ? args.nameOrPort : undefined
    let processPort: number = !isArgString ? args.nameOrPort : undefined

    if (_.isUndefined(args.nameOrPort)) {
      ({ processName, processPort } = await this.startInquiry())
    }

    if (processName) this.doPromise(this.killByName(processName))
    else if (processPort) this.doPromise(this.killByPort(processPort))
  }
}
