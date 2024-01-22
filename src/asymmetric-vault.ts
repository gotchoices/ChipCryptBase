/**
 * Interface for an asymmetric key pair vault.
 * This vault provides functionality for encryption, decryption, signing, and verifying data,
 * while keeping the private key secure and not exposed.
 */
export interface AsymmetricVault {

	/**
	 * Retrieves the public key in a binary format.
	 * @returns A promise that resolves to the public key as a Uint8Array.
	 */
	getPublicKey(): Promise<Uint8Array>;

	/**
	 * Retrieves the public key as a UTF8 encoded string.
	 * Useful for cases where the key needs to be transmitted or stored as text.
	 * @returns A promise that resolves to the public key as a string.
	 */
	getPublicKeyAsString(): Promise<string>;

	/**
	 * Encrypts data using the public key.
	 * This ensures that the data can only be decrypted by the corresponding private key.
	 * @param data The data to encrypt, as a string.
	 * @returns A promise that resolves to the encrypted data in JSON format.
	 */
	encrypt(data: string): Promise<string>;

	/**
	 * Decrypts data that was encrypted with the corresponding public key.
	 * This method requires access to the private key.
	 * @param encryptedDataJson The encrypted data, in JSON format.
	 * @returns A promise that resolves to the decrypted data.
	 */
	decrypt(encryptedDataJson: string): Promise<string>;

	/**
	 * Generates a digital signature for the given data using the private key.
	 * This signature can be used to verify the data's integrity and authenticity.
	 * @param data The data to sign, as a string.
	 * @returns A promise that resolves to the digital signature.
	 */
	sign(data: string): Promise<string>;

	/**
	 * Verifies a digital signature against the given data using the public key.
	 * Checks if the signature was created using the corresponding private key.
	 * @param data The data to verify, as a string.
	 * @param signature The digital signature to verify against the data.
	 * @returns A promise that resolves to a boolean indicating the validity of the signature.
	 */
	verify(data: string, signature: string): Promise<boolean>;
}
