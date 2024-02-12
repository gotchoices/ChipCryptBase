/** Interface for generating and validating secure hashes (Nonces) using highly random salt values (Codes) */
export interface CryptoHash {
	/** Ensures that the given Code (salt) passes all of the tests for high randomness. */
	isValid(code: string): boolean;

	/** Generates a unique Code with sufficient entropy based on the given options.
 	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
 	 */
	generate(): Promise<string>;

	/** Generate anonymized payload hash using a Code as a salt */
	makeNonce(payload: string, code: string): Promise<string>;
}
