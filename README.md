# PlayWright

## The Why

[Read](https://playwright.dev/docs/why-playwright) or [watch](https://www.youtube.com/watch?v=wGr5rz8WGCE).

## What's inside

-   Playwright/Typescript inital setup
-   How to run tests within Playwright/VSCode
-   Browser selection when running test cases
-   Working with Page Objects
-   VScode configuration to debug a single test
-   Set GAME Test Enviroment

## Set Up

### Install Visual Studio Code

[Install VSCode](https://code.visualstudio.com/download)

### Install NPM Node js

[Install node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Install Playwright Test for VSCode Extension

[Read](https://playwright.dev/docs/getting-started-vscode)

[Install Playwright Test for VSCode Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Usage

### Working with Page Objects

A page object represents a part of your web application. A web application might have a home page, a user login page and a transaction page. Each of them can be represented by page object models.

Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place and create reusable code to avoid repetition.

[Further Reading](https://playwright.dev/docs/pom)

### Framework

TBC

### Users

TBC

### Utils - Constants & Helpers

TBC

### Test Structure

TBC

### How to set up Api request

TBC

### How to set up Sql request

TBC

### How to run your tests

Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.

-   By default, test files are run in parallel. Tests in a single file are run in order, in the same worker process.
-   Configure tests using test.describe.configure to run tests in a single file in parallel.
-   You can configure entire project to have all tests in all files to run in parallel using testProject.fullyParallel or testConfig.fullyParallel.
-   To disable parallelism limit the number of workers to one.
-   You can control the number of parallel worker processes and limit the number of failures in the whole test suite for efficiency.

`npx playwright test tests` runs all tests

`npx playwright test tests/<folder name>` runs a single set of tests

`npx playwright test tests/<folder name>/../<testname>.ts` runs a single tests

`--workers=<#>` added to the end of the above test run commands sets the maximum number of parallel worker processes as Playwright by default executes all tests in (maximum workers = 6)

## Debugging Features

### In Visual Studio Code

[Read](https://playwright.dev/docs/getting-started-vscode#run-in-debug-mode)

-   Open the test
-   Select the debug options in the VSCode debugger
-   Set breakpoints in the code

To stop the test, you can add the `Then debug` step inside your feature. It will stop your debugger.

## HTML Reports

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.

-   Reports are saved to the folder - `test-reports`
-   Reports can be viewed by opening the .html file in a browser

## Trace Viewer

Playwright [Trace Viewer](https://playwright.dev/docs/trace-viewer-intro) is a GUI tool that lets you explore recorded Playwright traces of your tests meaning you can go back and forward through each action of your test and visually see what was happening during each action.

-   Traces are created for each test run
-   Traces are only retained when a test fails
-   Traces can be downloaded from the failed test in the HTML report.

#### View Trace online

-   Navigate [here](https://trace.playwright.dev)
-   Upload downloaded Trace.zip from HTML Report

View traces of your test by clicking through each action or hovering using the timeline and see the state of the page before and after the action.
Inspect the log, source and network during each step of the test.
The trace viewer creates a DOM snapshot so you can fully interact with it, open devtools etc.
