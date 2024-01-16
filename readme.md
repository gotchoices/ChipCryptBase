## Welcome to ChipCryptTypes

### Purpose

The ChipCrypt library (types) provides Typescript type mappings to abstract the notions of symmetric and asymmetric encryption.  This allows development of libraries that need encryption, without binding that library to a specific implementation.

### Usage

####Encrypt data:

	...
	constructor (private symmetric: Symmetric) {}

	wisperToMe(key: Uint8Array) {
		return this.symmetric.encryptContent('He, who shall not be named', key)
	}

This library is tiny, just refer to the source code in symmetric.ts and asymmetric.ts for reference.

### Development

* Build: ```npm run build```
	* Builds into an ES module
