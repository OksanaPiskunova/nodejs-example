/*var ALLOWABLE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
var ALLOWABLE_LENGTH = ALLOWABLE.length;

function getRandomString() {
    var newString = '';
    var newStringLength = getRandomNumber(ALLOWABLE.length);

    for (var index = 0; index < newStringLength; index++) {
        newString += ALLOWABLE.charAt(getRandomNumber(ALLOWABLE_LENGTH));
    }

    return newString;
}

function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * (maxValue - 1)) + 1;
}

exports.getRandomString = getRandomString;*/
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
