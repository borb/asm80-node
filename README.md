# ASM80.js

[![NPM Version](http://img.shields.io/npm/v/@justnine/asm80.svg?style=flat)](https://www.npmjs.com/package/@justnine/asm80)
[![NPM Downloads](https://img.shields.io/npm/dm/@justnine/asm80.svg?style=flat)](https://www.npmjs.com/package/@justnine/asm80)
[![NPM Downloads](https://img.shields.io/npm/dt/@justnine/asm80.svg?style=flat)](https://www.npmjs.com/package/@justnine/asm80)

The Assembler for the 8bit CPUs

## Installation

```shell
$ npm install asm80 -g
```


## Usage

```shell
$ asm80 [options] filename
```

Assembles given the file, e.g. test.z80, into two files: test.hex (binary) and test.lst (listing).

Filename has to be the last parameter.

Options are:

  - `-o, --output <file>` Output file name
  - `-t, --type <type>` Output type [default: hex]. Available types are: hex, srec, com (for CP/M), sna, tap (for ZX Spectrum), prg (for C64), bin (use directives .binfrom and .binto to specify memory range to export)
  - `-n, --nolist` Suppress listing (.lst file)
  - `-m, --machine <type>` Processor type, one of the following: Z80, I8080, C6502, C65816, CDP1802, M6800, M6809
  - `-h, --help` See HELP

Machine type can be omitted. Right CPU is determined by file name extension (-m option overrides this decision).

  - Intel 8080: .A80
  - Zilog Z80: .Z80
  - Motorola 6800: .A68
  - Motorola 6809: .A09
  - MOS 6502: .A65
  - WDC 65816: .816
  - CDP 1802: .A18

## Format, directives, etc.

See [docs/index.html](docs/index.html) for further information.

## Author

This project was written by [Martin Maly](https://github.com/maly) (I am not this person!).

Subsequent updates (-borbX) versions were updated by [borb](https://github.com/borb) (I am this person).

## Support this project

I am not the original author; if you want to support this project, please visit Martin Maly's original page [here on GitHub](https://github.com/maly/asm80) and donate by PayPal, Patreon, etc.

## Changes

  - 1.11.14-borb1: Polyfill Buffer so assembler can be used with webpack 5 or otherwise in a browser, drop `console.log` from asm.js to prevent console spamming on asm failure.

Changelog for prior versions can be found at [Martin Maly's Original Source](https://github.com/maly/asm80).
