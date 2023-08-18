import { browser } from '@wdio/globals';
import reporter from 'cucumber-html-reporter';
import fs from 'fs';
import { removeSync } from 'fs-extra/esm';

const jsonReportDir = 'reports/json';
const htmlReportDir = 'reports/html';

export const wdioConfig = {
    runner: 'local',
    specs: [
        '../src/tests/features/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', 
    ["cucumberjs-json",
    {
        jsonFolder: './reports/json/',
        language: 'en',
    }]],
    cucumberOpts: {
        require: ['./src/tests/steps/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    onPrepare: async function () {
        try {
            if (fs.existsSync(jsonReportDir)) {
                removeSync(jsonReportDir);
            }
            fs.mkdirSync(jsonReportDir);

            if (fs.existsSync(htmlReportDir)) {
                removeSync(htmlReportDir);
            }
            fs.mkdirSync(htmlReportDir);
        } catch (err) {
            console.error('Error removing directory:', err);
        }
    },
    beforeScenario: async function (world, context) {
        await browser.reloadSession();
    },
    onComplete: function(exitCode, config, capabilities, results) {
        try {

            const now = new Date();

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            const hour = String(now.getHours()).padStart(2, '0');
            const minute = String(now.getMinutes()).padStart(2, '0');

            const formattedDate = `${day}-${month}-${year}_${hour}-${minute}`;

            const options = {
                theme: 'bootstrap',
                jsonFile: `${jsonReportDir}`,
                output: `${htmlReportDir}/${formattedDate}_report.html`,
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: false,
                failedSummaryReport: true,
            };

            reporter.generate(options);
        }
        catch (err) {
            console.log("err", err);
        }
    },
}
