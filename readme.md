## Welcome to ChipCryptBase

### Purpose

The ChipCrypt library (types) provides Typescript type mappings to abstract the notions of symmetric, asymmetric, and hashed encryption.  This library primary allows development of libraries that need encryption, without binding to a specific implementation.  

The only concrete exports are basic utility functions.

### Reference

####Type only:
* **Asymmetric** interface - Abstraction of private key and public key generation, encryption, decryption, and signing.
* **AsymmetricVault** interface - Abstraction of asymmetric functionality wrapping an assumed private/public key pair (without exposing the private key)
* **Symmetric** interface - Abstraction of private key encryption, decryption, and signing.
* **SymmetricVault** interface - Abstraction of symmetric functionality wrapping an assumed private key (without exposing that key)
* **CryptoHash** interface - Abstraction of a cryptographically sound, expiring hashing salt

Note: most of these methods are async (return promises)

####Concrete:

Converstion from byte array to base64 string
```ts
  function arrayToBase64(array: Uint8Array): string
```

Converstion from base64 string to byte array
```ts
  function base64ToArray(base64: string): Uint8Array
```

####Simple example:
	...
	constructor (private symmetric: Symmetric) {}

	async wisperToMe(key: Uint8Array) {
		return await this.symmetric.encrypt(key, 'He, who shall not be named')
	}

### Platforms

Nodejs and browser

### See Also

* [ChipCrypt](https://github.com/gotchoices/ChipCrypt) - implementation of asymmetric and symmetric related interfaces
* [ChipCode](https://github.com/gotchoices/ChipCode) - implementation of CryptoHash interface

### Development

* Build: ```npm run build```
	* Builds into an ES module
