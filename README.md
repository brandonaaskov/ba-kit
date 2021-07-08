ba-kit
======

Helpers and utilities

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/ba-kit.svg)](https://github.com/brandonaaskov/ba-kit/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ba-kit
$ ba-kit COMMAND
running command...
$ ba-kit (-v|--version|version)
ba-kit/0.0.0 darwin-x64 node-v14.17.0
$ ba-kit --help [COMMAND]
USAGE
  $ ba-kit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ba-kit help [COMMAND]`](#ba-kit-help-command)
* [`ba-kit kali`](#ba-kit-kali)
* [`ba-kit kill [NAMEORPORT]`](#ba-kit-kill-nameorport)
* [`ba-kit ping [LOCATION]`](#ba-kit-ping-location)
* [`ba-kit pwd`](#ba-kit-pwd)

## `ba-kit help [COMMAND]`

display help for ba-kit

```
USAGE
  $ ba-kit help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `ba-kit kali`

Run kali in a docker container

```
USAGE
  $ ba-kit kali

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/kali.ts](https://github.com/brandonaaskov/ba-kit/blob/v0.0.0/src/commands/kali.ts)_

## `ba-kit kill [NAMEORPORT]`

Kill a process by name (without caring about its PID)

```
USAGE
  $ ba-kit kill [NAMEORPORT]

ARGUMENTS
  NAMEORPORT  name or port of the running process

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/kill.ts](https://github.com/brandonaaskov/ba-kit/blob/v0.0.0/src/commands/kill.ts)_

## `ba-kit ping [LOCATION]`

Ping stuff?

```
USAGE
  $ ba-kit ping [LOCATION]

ARGUMENTS
  LOCATION  Domain or IP
```

_See code: [src/commands/ping.ts](https://github.com/brandonaaskov/ba-kit/blob/v0.0.0/src/commands/ping.ts)_

## `ba-kit pwd`

Get pwd

```
USAGE
  $ ba-kit pwd
```

_See code: [src/commands/pwd.ts](https://github.com/brandonaaskov/ba-kit/blob/v0.0.0/src/commands/pwd.ts)_
<!-- commandsstop -->
