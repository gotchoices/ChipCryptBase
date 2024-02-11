export interface CryptoHash {
	/** Ensures that the given salt passes all of the tests for a Code */
	codeValid(code: string): boolean;

	/** Generates a unique Code with sufficient entropy based on the given options.
 	 * @throws An error if a Code with sufficient entropy cannot be generated within the maximum number of tries specified in the options.
 	 */
	generate(): Promise<string>;

	/** Generate anonymized identifier using a Code as a salt */
	makeNonce(identifier: string, code: string): Promise<string>;
}
