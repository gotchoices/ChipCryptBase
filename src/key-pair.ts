export interface KeyPair {
	privateKey: string;
	publicKey: string;
}

export interface KeyPairBin {
	privateKey: Uint8Array;
	publicKey: Uint8Array;
}
