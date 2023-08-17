export default class RadnomUtils {

    static generateRandomString(length) {
        return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join('');
    }

    static getRandomNumberByRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
}