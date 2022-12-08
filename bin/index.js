#!/usr/bin/env node
require('dotenv').config();
const chalk = require('chalk');
const { signInUser } = require('../auth-utils');
const { fetchSecrets } = require('../fetch-utils');
const prompt = require('prompt-sync')();

async function loadPrompts() {
  console.log(chalk.bold.red('Welcome to the __T E R M I N A L :::'));
  let validUser = false;
  let cookieInfo;

  while (!validUser) {
    const email = prompt(chalk.red('Enter your __E M A I L :::'));
    console.log(chalk.bold.green(`Hello __${email} :::`));
    const password = prompt.hide('Enter your __P A S S W O R D :::');
    try {
      cookieInfo = await signInUser(email, password);
      validUser = true;
    } catch (e) {
      console.log(chalk.bold.red(e.message));
      console.log(
        chalk.bold.red(
          'Why don\'t you give that __A N O T H E R ::: __S H O T :::'
        )
      );
    }
    const secrets = await fetchSecrets(cookieInfo);
    console.log(secrets);
  }
}

loadPrompts();
