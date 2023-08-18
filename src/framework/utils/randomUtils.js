import { logger } from '../logger.js';

export default class RadnomUtils {

    static generateRandomString(length) {
        logger.info(`Generating random string with length '${length}'`);
        return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('');
    }

    static getRandomNumberByRange(min, max) {
        logger.info(`Getting random number beetwen '${min}' and '${max}'`);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}