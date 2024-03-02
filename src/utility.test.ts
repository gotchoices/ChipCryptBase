import { arrayToBase64, base64ToArray } from './utility';

describe('runsTest', () => {
	test('array to Base64 conversion', () => {
		const origString = '1010101100011010';
		const array = binaryStringToArray(origString);
		const binString = arrayToBinaryString(array);

		expect(origString).toBe(binString);
	});

	test('Base64 to array conversion', () => {
		// TODO: resurrect
		// const origString = '1010101100011010';
		// var bytes = Buffer.from(binaryStringToArray('1010101100011010'), 'base64');
		// var bytesBase64 = bytes.toString('base64');
		// var backToBytes = Buffer.from(bytesBase64, 'base64');
		// const binarySequence = arrayToBase64(backToBytes);

		// expect(backToBytes.toString('base64')).toBe(bytesBase64);
		// expect(binarySequence).toBe(bufferToBinaryString(bytes));
	});
});

function binaryStringToArray(binaryString: string): Uint8Array {
	// Convert binary string to byte array
	let byteArray = new Uint8Array(binaryString.length / 8);
	for (let i = 0; i < byteArray.length; i++) {
		byteArray[i] = parseInt(binaryString.slice(i * 8, i * 8 + 8), 2);
	}
	return byteArray;
}

function arrayToBinaryString(array: Uint8Array) {
	let binaryString = '';
	for (const byte of array) {
		binaryString += byte.toString(2).padStart(8, '0');
	}
	return binaryString;
}
