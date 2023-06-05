// exports.config = {
//     runner: 'local',
//     user: process.env.SAUCE_USERNAME,
//     key: process.env.SAUCE_ACCESS_KEY,
//     region: 'eu',
//     specs: Array(200).fill('./test/specs/**/*.js'),
//     // Patterns to exclude.
//     exclude: [
//         // 'path/to/excluded/files'
//     ],
//     maxInstances: 100,
    
//     // capabilities: [
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'latest',
//     //         platformName: 'Windows 11',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'firefox',
//     //         browserVersion: 'latest',
//     //         platformName: 'Windows 11',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'latest',
//     //         platformName: 'macOS 13',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'safari',
//     //         browserVersion: 'latest',
//     //         platformName: 'macOS 12',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'latest',
//     //         platformName: 'macOS 11',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'latest',
//     //         platformName: 'macOS 10.15',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'beta',
//     //         platformName: 'macOS 13',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'dev',
//     //         platformName: 'macOS 13',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
//     //     {
//     //         browserName: 'chrome',
//     //         browserVersion: 'latest-1',
//     //         platformName: 'macOS 13',
//     //         'sauce:options' : {
//     //             build: 'automated run',
//     //             name: 'Login test'
//     //         }
//     //     },
        
//     // ],
//     // Level of logging verbosity: trace | debug | info | warn | error | silent
//     logLevel: 'info',
//     bail: 0,
//     baseUrl: 'http://localhost',
//     waitforTimeout: 10000,
//     connectionRetryTimeout: 120000,
//     connectionRetryCount: 3,
//     services: ['sauce'],
//     framework: 'mocha',
//     reporters: ['spec'],
//     mochaOpts: {
//         ui: 'bdd',
//         timeout: 60000
//     },
//     /**
//      * Gets executed once before all workers get launched.
//      * @param {object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      */
//     // onPrepare: function (config, capabilities) {
//     // },
//     /**
//      * Gets executed before a worker process is spawned and can be used to initialise specific service
//      * for that worker as well as modify runtime environments in an async fashion.
//      * @param  {string} cid      capability id (e.g 0-0)
//      * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
//      * @param  {object} specs    specs to be run in the worker process
//      * @param  {object} args     object that will be merged with the main configuration once worker is initialized
//      * @param  {object} execArgv list of string arguments passed to the worker process
//      */
//     // onWorkerStart: function (cid, caps, specs, args, execArgv) {
//     // },
//     /**
//      * Gets executed just after a worker process has exited.
//      * @param  {string} cid      capability id (e.g 0-0)
//      * @param  {number} exitCode 0 - success, 1 - fail
//      * @param  {object} specs    specs to be run in the worker process
//      * @param  {number} retries  number of retries used
//      */
//     // onWorkerEnd: function (cid, exitCode, specs, retries) {
//     // },
//     /**
//      * Gets executed just before initialising the webdriver session and test framework. It allows you
//      * to manipulate configurations depending on the capability or spec.
//      * @param {object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that are to be run
//      * @param {string} cid worker id (e.g. 0-0)
//      */
//     // beforeSession: function (config, capabilities, specs, cid) {
//     // },
//     /**
//      * Gets executed before test execution begins. At this point you can access to all global
//      * variables like `browser`. It is the perfect place to define custom commands.
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs        List of spec file paths that are to be run
//      * @param {object}         browser      instance of created browser/device session
//      */
//     // before: function (capabilities, specs) {
//     // },
//     /**
//      * Runs before a WebdriverIO command gets executed.
//      * @param {string} commandName hook command name
//      * @param {Array} args arguments that command would receive
//      */
//     // beforeCommand: function (commandName, args) {
//     // },
//     /**
//      * Hook that gets executed before the suite starts
//      * @param {object} suite suite details
//      */
//     // beforeSuite: function (suite) {
//     // },
//     /**
//      * Function to be executed before a test (in Mocha/Jasmine) starts.
//      */
//     // beforeTest: function (test, context) {
//     // },
//     /**
//      * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
//      * beforeEach in Mocha)
//      */
//     // beforeHook: function (test, context) {
//     // },
//     /**
//      * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
//      * afterEach in Mocha)
//      */
//     // afterHook: function (test, context, { error, result, duration, passed, retries }) {
//     // },
//     /**
//      * Function to be executed after a test (in Mocha/Jasmine only)
//      * @param {object}  test             test object
//      * @param {object}  context          scope object the test was executed with
//      * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
//      * @param {*}       result.result    return object of test function
//      * @param {number}  result.duration  duration of test
//      * @param {boolean} result.passed    true if test has passed, otherwise false
//      * @param {object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
//      */
//     // afterTest: function(test, context, { error, result, duration, passed, retries }) {
//     // },


//     /**
//      * Hook that gets executed after the suite has ended
//      * @param {object} suite suite details
//      */
//     // afterSuite: function (suite) {
//     // },
//     /**
//      * Runs after a WebdriverIO command gets executed
//      * @param {string} commandName hook command name
//      * @param {Array} args arguments that command would receive
//      * @param {number} result 0 - command success, 1 - command error
//      * @param {object} error error object if any
//      */
//     // afterCommand: function (commandName, args, result, error) {
//     // },
//     /**
//      * Gets executed after all tests are done. You still have access to all global variables from
//      * the test.
//      * @param {number} result 0 - test pass, 1 - test fail
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that ran
//      */
//     // after: function (result, capabilities, specs) {
//     // },
//     /**
//      * Gets executed right after terminating the webdriver session.
//      * @param {object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that ran
//      */
//     // afterSession: function (config, capabilities, specs) {
//     // },
//     /**
//      * Gets executed after all workers got shut down and the process is about to exit. An error
//      * thrown in the onComplete hook will result in the test run failing.
//      * @param {object} exitCode 0 - success, 1 - fail
//      * @param {object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {<Object>} results object containing test results
//      */
//     // onComplete: function(exitCode, config, capabilities, results) {
//     // },
//     /**
//     * Gets executed when a refresh happens.
//     * @param {string} oldSessionId session ID of the old session
//     * @param {string} newSessionId session ID of the new session
//     */
//     // onReload: function(oldSessionId, newSessionId) {
//     // }
// }
exports.config = {
    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'eu',
    specs: Array(200).fill('./test/specs/**/*.js'),
    // Patterns to exclude.
    exclude: [
      // 'path/to/excluded/files'
    ],
    maxInstances: 100,
    capabilities: generateCapabilities(), // Call the function to generate capabilities
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['sauce'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
  };
  
  function generateCapabilities() {
    const macChromeVersions = [
      '113', '112', '111', '110', '109', '108', '107', '106', '105', '104', '103', '102',
      '101', '100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89',
      '88', '87', '86', '85', '84', '83', '81', '80', '79', '78', '77', '76'
    ];
  
    const macFirefoxVersions = [
      '113', '112', '111', '110', '109', '108', '107', '106', '105', '104', '103', '102',
      '101', '100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89',
      '88', '87', '86', '85', '84', '83', '82', '81', '80', '79'
    ];
  
    const macEdgeVersions = [
      '113', '112', '111', '110', '109', '108', '107', '106', '105', '104', '103', '102',
      '101', '100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90', '89',
    ];

    const safariVersions = [
      {
        browserVersion: '16',
        platformName: 'macOS 13'
      },
      {
        browserVersion: '15',
        platformName: 'macOS 12'
      },
      {
        browserVersion: '14',
        platformName: 'macOS 11'
      }
    ];

    console.log(macEdgeVersions.length, macFirefoxVersions.length, macChromeVersions.length)
  
    const capabilities = [];
  
    // Map over Chrome versions
    macChromeVersions.forEach(version => {
      capabilities.push({
        browserName: 'chrome',
        browserVersion: version,
        platformName: 'macOS 13',
        'sauce:options': {
          build: 'automated run',
          name: 'Login test'
        }
      });
    });
  
    // Map over Firefox versions
    macFirefoxVersions.forEach(version => {
      capabilities.push({
        browserName: 'firefox',
        browserVersion: version,
        platformName: 'macOS 13',
        'sauce:options': {
          build: 'automated run',
          name: 'Login test'
        }
      });
    });
  
    // Map over Edge versions
    macEdgeVersions.forEach(version => {
      capabilities.push({
        browserName: 'MicrosoftEdge',
        browserVersion: version,
        platformName: 'macOS 13',
        'sauce:options': {
          build: 'automated run',
          name: 'Login test'
        }
      });
    });

    safariVersions.forEach(version => {
      capabilities.push({
        browserName: 'Safari',
        browserVersion: version.browserVersion,
        platformName: version.platformVersion,
        'sauce:options': {
          build: 'automated run',
          name: 'Login test'
        }
      });
    });
  
    return capabilities;
  }
  