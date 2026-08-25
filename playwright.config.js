// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config({ path: '.env' });
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
//this cofig is  required to run the test
export default defineConfig({
  testDir: './tests',
  timeout:40000,
  expect:{
    timeout:40000,
  },
  reporter:'html',

use:{
 browserName: 'chromium',
 headless: false,
 
}


});

