import { KeyPair, KeyPairBin } from './key-pair';

export interface Asymmetric {
	generateKeyPairBin(): KeyPairBin;
	generateKeyPair(): KeyPair;
	generateDigest(content: string): Uint8Array;
	signDigest(privateKey: Uint8Array, digest: Uint8Array): Uint8Array;
	verifyDigest(publicKey: Uint8Array, digest: Uint8Array, signature: Uint8Array): boolean;
	encryptWithPublicKey(publicKey: Uint8Array, data: string): string;
	decryptWithPrivateKey(privateKey: Uint8Array, encryptedDataJson: string): string;
}
