const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const defaultOptions = [
    '--start-maximized',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-extensions'
];
const protractor = require('protractor');

exports.config = {
    specs: [
        './tests/spec/*_spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {args: defaultOptions}
    },
    getPageTimeout: 10000,
    allScriptsTimeout: 30000,
    directConnect: true,
    noGlobals: true,
    baseUrl: 'http://the-internet.herokuapp.com/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 20000
    },
    onPrepare: function() {
        protractor.browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter);
        require('ts-node').register({
            project: './tsconfig.json'
        });
    },
};
