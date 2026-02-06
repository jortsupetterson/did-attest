# Deep Dive: Decentralized Identifiers

Source: Synthesis of DID Core and method specs listed in this folder.
Retrieved: 2026-02-06

Notes:
- DIDs are URIs that identify a subject; DID documents bind identifiers to verification methods and services.
- DID methods define how identifiers are created, resolved, updated, and deactivated for a specific system.
- Resolution and dereferencing produce a DID document plus metadata that indicates the method and resolution context.
- Registry-based methods (ledger-backed) trade higher operational complexity for robust update history and recoverability.
- Non-registry methods (like did:key) are simple and offline-friendly but lack update/deactivate semantics.
- Web-based methods (did:web, did:webvh) leverage DNS and HTTPS hosting; did:webvh adds verifiable history.
