export interface Symmetric {
	generateKey(): Uint8Array;
	encryptContent(content: string, key: Uint8Array): Uint8Array;
	decryptContent(encrypted: Uint8Array, key: Uint8Array): string;
	encryptObject(obj: any, key: Uint8Array): Uint8Array;
	decryptObject(encrypted: Uint8Array, key: Uint8Array): any;
}

