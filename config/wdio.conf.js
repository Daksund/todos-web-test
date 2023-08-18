import reporter from 'cucumber-html-reporter';
import fs from 'fs';
import { removeSync } from 'fs-extra/esm';
import { logger } from '../src/framework/logger.js';
import { timeouts } from './timeouts.js';

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
    waitforTimeout: timeouts.explicit,
    connectionRetryTimeout: timeouts.connectionRetry,
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
        timeout: timeouts.cucumberStep,
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
            logger.error('Error removing  or making directory:', err);
        }
    },
    beforeScenario: async function (testCase) {
        await browser.reloadSession();
        logger.info(`---Start of scenario: ${testCase.pickle.name}---`);
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
            logger.error("Error generating report:", err);
        }
    },
}
