# did:key Method (v0.9)

Source: https://w3c-ccg.github.io/did-key-spec/
Retrieved: 2026-02-06
Status: Draft (W3C CCG)

Notes:
- Non-registry method that expands a public key into a DID document deterministically.
- Method-specific identifier uses multibase and multicodec to encode the key material.
- No update or deactivate operations because there is no registry.
- Intended for simplicity and offline use cases where a single key is sufficient.
