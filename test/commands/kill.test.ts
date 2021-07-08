import {expect, test} from '@oclif/test'
import cli from 'cli-ux'
import * as inquirer from 'inquirer'
import * as sinon from 'sinon'

describe('kill', () => {
  test
  .stdout()
  .command(['kill'])
  .it('Starts an inquiry if no argument is provided', ctx => {
    expect(ctx.stdout).to.contain('Do you want to kill a process by name or by port?')
  })

  test
  .stdout()
  .command(['kill', 'node'])
  .it('Attempts to kill a process by name', ctx => {
    expect(ctx.stdout).to.contain('Great, we killed the process "node" with the PID of 1337')
  })
})
