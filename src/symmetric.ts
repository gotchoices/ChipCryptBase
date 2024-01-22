/**
 * Interface for symmetric cryptographic operations.
 */
export interface Symmetric {
	/**
	 * Asynchronously generates a symmetric encryption key.
	 * @returns A promise that resolves to a `Uint8Array` representing the generated key.
	 */
	generateKey(): Promise<Uint8Array>;

	/**
	 * Asynchronously encrypts content using a symmetric key.
	 * @param key The symmetric key as a `Uint8Array`.
	 * @param content The content to be encrypted, as a string.
	 * @returns A promise that resolves to a `Uint8Array` containing the encrypted content.
	 */
	encrypt(key: Uint8Array, content: string): Promise<Uint8Array>;

	/**
	 * Asynchronously decrypts content using a symmetric key.
	 * @param key The symmetric key as a `Uint8Array`.
	 * @param encrypted The encrypted content as a `Uint8Array`.
	 * @returns A promise that resolves to a string containing the decrypted content.
	 */
	decrypt(key: Uint8Array, encrypted: Uint8Array): Promise<string>;
}
