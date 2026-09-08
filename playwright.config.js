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
  fullyParallel: true,
  workers:4,
  retries:1,
  timeout:40000,
  expect:{
    timeout:40000,
  },
  reporter:[
    ['html',{open: 'never'}],
    ['list'],
    ['allure-playwright'],
  ],

use:{
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'on',
    actionTimeout: 60000,
    navigationTimeout: 60000
  },
  projects:[
    {name: 'setup', testMatch: /.*setup\.spec\.ts/},
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'] },
    },
]

});

