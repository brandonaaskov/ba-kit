import { Command, flags } from '@oclif/command'

export default class Kali extends Command {
  static description = 'Run kali in a docker container'

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run () {
    this.parse(Kali)
    this.log('docker run --name kali -it kalilinux/kali')
  }
}
