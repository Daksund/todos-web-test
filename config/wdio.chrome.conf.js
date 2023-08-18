import { wdioConfig } from "./wdio.conf.js";

export const config = {
    ...wdioConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--window-size=1920,1080',
                    '--incognito'
                ]
            }
        }],
    }
}