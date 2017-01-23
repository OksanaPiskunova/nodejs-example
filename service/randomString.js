'use strict';

class RandomString {
    constructor() {
        this.allowableChars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        this.lengthOfAllowableChars = this.allowableChars.length;
    }

    getRandomString() {
        let newString = '';
        let newStringLength = this.getRandomNumber(this.lengthOfAllowableChars);

        for (let index = 0; index < newStringLength; index++) {
            let allowableCharIndex = this.getRandomNumber(this.lengthOfAllowableChars);
            newString += this.allowableChars.charAt(allowableCharIndex);
        }

        return newString;
    }

    getRandomNumber(maxValue) {
        return Math.floor(Math.random() * (maxValue - 1)) + 1;
    }
}

exports.RandomString = RandomString;
