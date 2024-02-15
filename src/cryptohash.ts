/** Interface for generating and validating secure hashes (Nonces) using highly random salt values (Codes) */
export interface CryptoHash {
	/**
	 * Ensures that the given Code (salt) passes all of the tests for high randomness and expiration.
	 * @param now The current time in milliseconds since the epoch. This is used to validate the expiration of the Code.
	 */
	isValid(code: string, now?: number): boolean;

	/**
	 * Ensures that the given Code (salt) passes all of the tests for high randomness.
	 * @param codeBin The binary representation of the code to validate.
	 * @param now The current time in milliseconds since the epoch. This is used to validate the expiration of the Code.
	 */
	isValidBin(codeBin: Uint8Array, now?: number): boolean;

	/**
	 * @returns The expiration date/time in milliseconds since the Unix epoch. Note: this may not be to millisecond granularity.
	 */
	getExpiration(code: string): number;

	/**
	 * @param codeBin The binary representation of the code to get the expiration for.
	 * @returns The expiration date/time in milliseconds since the Unix epoch. Note: this may not be to millisecond granularity.
	 */
	getExpirationBin(codeBin: Uint8Array): number;

	/**
 	 * @param now The current time in milliseconds since the epoch. This is used to validate the expiration of the Code.
	 * @returns true if the given session code is expired
	 */
	isExpired(code: string, now?: number): boolean;

	/**
	 * @param codeBytes The binary representation of the code to validate.
 	 * @param now The current time in milliseconds since the epoch. This is used to validate the expiration of the Code.
	 * @returns true if the given session code is expired
	 */
	isExpiredBin(codeBytes: Uint8Array, now?: number): boolean;

	/**
	 * Generates a unique Code with sufficient entropy based on the given options.
	 * @param now The current time in milliseconds since the epoch. This is used to calculate the expiration of the Code. Note: may not be stored to millisecond granularity.
	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
	 */
	generate(now?: number): Promise<string>;

	/**
	 * Generates a unique Code with sufficient entropy based on the given options.
	 * @param now The current time in milliseconds since the epoch. This is used to calculate the expiration of the Code. Note: may not be stored to millisecond granularity.
	 * @returns A promise that resolves to the binary representation of the generated code.
	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
	 */
	generateBin(now?: number): Promise<Uint8Array>;

	/**
	 * Generates an anonymized payload hash using a Code as a salt.
	 * @param payload The payload to hash.
	 * @param code The code to use as a salt.
	 * @returns A promise that resolves to the generated nonce.
	 */
	makeNonce(payload: string, code: string): Promise<string>;

	/**
	 * Generates an anonymized payload hash using a Code as a salt.
	 * @param payloadBin The binary representation of the payload to hash.
	 * @param codeBin The binary representation of the code to use as a salt.
	 * @returns A promise that resolves to the binary representation of the generated nonce.
	 */
	makeNonceBin(payloadBin: Uint8Array, codeBin: Uint8Array): Promise<Uint8Array>;
}
