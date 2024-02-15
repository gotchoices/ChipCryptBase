/** Interface for generating and validating secure hashes (Nonces) using highly random salt values (Codes) */
export interface CryptoHash {
	/** Ensures that the given Code (salt) passes all of the tests for high randomness.
	 * @now The current time in milliseconds since the epoch.  This is used to validate the expiration of the Code.
	*/
	isValid(code: string, now?: number): boolean;

	/** Generates a unique Code with sufficient entropy based on the given options.
	 * @now The current time in milliseconds since the epoch.  This is used to calculate the expiration of the Code.
	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
	 */
	generate(now?: number): Promise<string>;

	/** Generate anonymized payload hash using a Code as a salt */
	makeNonce(payload: string, code: string): Promise<string>;
}
