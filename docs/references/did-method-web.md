# did:web Method

Source: https://w3c-ccg.github.io/did-method-web/
Retrieved: 2026-02-06
Status: Draft (W3C CCG)

Notes:
- Method name is `web`; identifier is based on a DNS name with optional path segments.
- Resolution uses HTTPS to fetch a `did.json` document from the domain.
- Uses `/.well-known/did.json` for root identifiers and `<path>/did.json` for path-based identifiers.
- Uses the Web PKI and DNS/TLS security properties; no additional API is required.
