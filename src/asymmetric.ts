import { KeyPair, KeyPairBin } from './key-pair';

/**
 * Interface for asymmetric cryptographic operations.
 */
export interface Asymmetric {
    /**
     * Generates a key pair in binary format.
     * @returns A promise that resolves to a `KeyPairBin` object containing the binary representation of the key pair.
     */
    generateKeyPairBin(): Promise<KeyPairBin>;

    /**
     * Generates a key pair.
     * @returns A promise that resolves to a `KeyPair` object containing the key pair.
     */
    generateKeyPair(): Promise<KeyPair>;

    /**
     * Generates a digest from the given content.  NOTE: Not async
     * @param content The content to be hashed.
     * @returns A `Uint8Array` representing the digest of the content.
     */
    generateDigest(content: string): Uint8Array;

    /**
     * Signs a digest using a private key.
     * @param privateKey The private key as a `Uint8Array`.
     * @param digest The digest to be signed, as a `Uint8Array`.  Use generateDigest to generate this from a string.
     * @returns A promise that resolves to a `Uint8Array` containing the signature.
     */
    signDigest(privateKey: Uint8Array, digest: Uint8Array): Promise<Uint8Array>;

    /**
     * Verifies a digest against a signature using a public key.
     * @param publicKey The public key as a `Uint8Array`.
     * @param digest The digest that was signed, as a `Uint8Array`.  Use generateDigest to generate this from a string.
     * @param signature The signature to verify, as a `Uint8Array`.
     * @returns A promise that resolves to a boolean indicating whether the signature is valid.
     */
    verifyDigest(publicKey: Uint8Array, digest: Uint8Array, signature: Uint8Array): Promise<boolean>;

    /**
     * Encrypts data using a public key.
     * @param publicKey The public key as a `Uint8Array`.
     * @param data The data to be encrypted, as a string.
     * @returns A promise that resolves to a JSON string containing the encrypted data.
     */
    encryptWithPublicKey(publicKey: Uint8Array, data: string): Promise<string>;

    /**
     * Decrypts data using a private key.
     * @param privateKey The private key as a `Uint8Array`.
     * @param encryptedDataJson The encrypted data to be decrypted, as a string in JSON format.
     * @returns A promise that resolves to a string containing the decrypted data.
     */
    decryptWithPrivateKey(privateKey: Uint8Array, encryptedDataJson: string): Promise<string>;
}
