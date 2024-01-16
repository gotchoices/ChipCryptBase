export function arrayToBase64(array: Uint8Array): string {
	// Node.js
	if (typeof Buffer !== 'undefined') {
		return Buffer.from(array).toString('base64');
	}
	// Browser
	var binaryString = new TextDecoder().decode(array);
	return btoa(binaryString);
}

export function base64ToArray(base64: string): Uint8Array {
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
