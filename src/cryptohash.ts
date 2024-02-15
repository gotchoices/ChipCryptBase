/** Interface for generating and validating secure hashes (Nonces) using highly random salt values (Codes) */
export interface CryptoHash {
	/** Ensures that the given Code (salt) passes all of the tests for high randomness.
	 * @now The current time in milliseconds since the epoch.  This is used to validate the expiration of the Code.
	*/
	isValid(code: string, now?: number): boolean;

	/** @returns the expiration date/time (ms since Unix epoch) of the given code.  Note: this may not be to ms granularity */
	getExpiration(code: string): number;

	/** Generates a unique Code with sufficient entropy based on the given options.
	 * @now The current time in milliseconds since the epoch.  This is used to calculate the expiration of the Code.  Note: may not be stored to ms granularity.
	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
	 */
	generate(now?: number): Promise<string>;

	/** Generate anonymized payload hash using a Code as a salt */
	makeNonce(payload: string, code: string): Promise<string>;
}
