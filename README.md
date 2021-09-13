# Cypress IO
How to work with cypress tests. This readme covers the aspects of:

- [Test environment setup](#environment)
- [Automated GUI tests](#writing)
- [Running test cases](#running)
- [Mocked environment](#mocked)

## <a name="environment" href="#environment"/>Running the tests
You can find the script used to run Cypress in the package.json file. 

The difference between cypress run and cypress open is that run runs the tests headless while open opens up
the cypress GUI.

Run against QA environment: 
- npm run cypress:qa

Run in docker:
- npm run docker:qa


### E2E environment
In this environment both the frontend and the backend is exeuting on your local machine. The 
micro services are executed in a deployed environment (QA).
To set up this environment do the following:

* First start the frontend
* Start the backend 
* You can now browse in the following URL: localhost:4200


## <a name="writing" href="#writing"/>Automated GUI tests

The fundamentals of the automated GUI tests:

 - [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file)
 - [Page objects](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/)

If you're not familiar with these tools/techniques, read up on them (and how they are used together) a little. It helps when 
working with e2e test development.


#### Writing new test cases
Create a new name.spec.js file under the correct folder in cypress/integration/ and start writing your tests. Cypress will automatically detect
the testfile and run it while running the tests unless you specify otherwise. Open the testfile in the cypress testrunner GUI and see the test 
running as you type the code.

## <a name="running" href="#running"/>Running test cases
#### If you want to run the test cases:
We can run the tests in three different environments:
- Development backend
    - Start the frontend with npm run start:docker
    - Start the backend
    - In a terminal window, type "npx cypress open" to open the testrunner GUI or "npx cypress run" to run the tests in headless mode
- Against mocked stubs
    - If you have mocked stubs saved just start the frontend with "npm run start:for:e2e"
    - In a terminal window, type "npx cypress open" to open the testrunner GUI or "npx cypress run" to run the tests in headless mode. 
    Cypress will autodetect if there are any mocks available for use
- In docker containers against mocked stubs
    - cd to the root of infotorgv3 project
    - type ./run_cypress_tests.sh that boots the containers and runs the tests

### Cypress run configurations and folders
The folders under the cypress tool are the following, and used for:
- Config
    - You can have multiple configuration files for different environments. The way the tests are written right now the only configuration
    file that is used is called "cypress.json" and is located in the e2e folder. 
    Config files can be used to change environmental variables such as baseUrl 
- Fixtures
    - Fixtures are used as external pieces of static data that can be used by your tests. Used most often when stubbing network requests. 
    Since we use an automocker plugin to create our stubs, these files are instead stored under the folder "mocks"
- integration
    - This is where all your test specs reside. If you want to add more tests, create the spec file under its corresponding folder.
- pages
    - This is where the page objects are created and later exported from.
- plugins
    - As the name suggests, all the plugins are imported under this folder, such as cypress autorecord.
- support
    - You can find the command.js file in the support folder. This file is run before the cypress config file runs whenever you open cypress. 
    Used for reusable code such as a login spec function.
- screenshots
    - Where screenshots from your runs are saved.
- videos
    - Where videos from your testruns are saved.

#### Browser compatibility
The default browser for all run configurations is **Electron**. To run in a different browser, simply run in terminal:
cypress run --browser firefox, or create an npm script where you either open or launch cypress with the browser tag added to it

The currently supported browsers at this time are chromium based browsers such as:
- Google chrome
- Edge chromium
- Firefox
- Electron
- Brave, etc

