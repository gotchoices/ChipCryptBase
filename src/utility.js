"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToArray = exports.arrayToBase64 = void 0;
function arrayToBase64(array) {
    // Node.js
    if (typeof Buffer !== 'undefined') {
        return Buffer.from(array).toString('base64');
    }
    // Browser
    var binaryString = new TextDecoder().decode(array);
    return btoa(binaryString);
}
exports.arrayToBase64 = arrayToBase64;
function base64ToArray(base64) {
    // Node.js
    if (typeof Buffer !== 'undefined') {
        return new Uint8Array(Buffer.from(base64, 'base64'));
    }
    // Browser
    var binaryString = atob(base64);
    var len = binaryString.length;
    var result = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        result[i] = binaryString.charCodeAt(i);
    }
    return result;
}
exports.base64ToArray = base64ToArray;
//# sourceMappingURL=utility.js.map