#!/usr/bin/env node

const path = require('path');
const app = require('./app');

const [ , , ...cli_args ] = process.argv

if (cli_args.length !== 1) {
  throw new Error('You must provide exactly one argument: the path to your config.')
}

const filepath = path.join(process.cwd(), cli_args[0]);
const config = require(filepath);

app(config);
