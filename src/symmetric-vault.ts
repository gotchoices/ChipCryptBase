/**
 * Interface for a symmetric vault that handles encryption and decryption of content without disclosing the private key.
 */
export interface SymmetricVault {
	/**
	 * Encrypts the provided content.
	 * @param content The content to be encrypted, provided as a string.
	 * @returns A promise that resolves to a `Uint8Array` containing the encrypted content.
	 *
	 * This method takes a string as input and returns the encrypted content in a binary format (Uint8Array).
	 * The encryption is performed using a symmetric encryption algorithm, where the same key is used
	 * for both encryption and decryption.
	 */
	encrypt(content: string): Promise<Uint8Array>;

	/**
	 * Decrypts the provided encrypted content.
	 * @param encrypted The encrypted content as a `Uint8Array`.
	 * @returns A promise that resolves to a string containing the decrypted content.
	 *
	 * This method takes encrypted content in a binary format (Uint8Array) and returns the decrypted
	 * content as a string. The decryption is performed using a symmetric encryption algorithm, where
	 * the same key is used for both encryption and decryption. It is assumed that the encrypted content
	 * was encrypted using the same system.
	 */
	decrypt(encrypted: Uint8Array): Promise<string>;
}
