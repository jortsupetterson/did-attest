import type {
  WrapJWK,
  UnwrapJWK,
  SignJWK,
  VerifyJWK,
} from '@z-base/cryptosuite'

export type DIDAttestURI = `did:vkh:${Base64URLString}`

export type DIDKID = Base64URLString // hash(DIDKeys)
export type DIDKeys = {
  timestamp: number
  public: { wrapJwk: WrapJWK; verifyJwk: VerifyJWK }
  private: { unwrapJwk: UnwrapJWK; signJwk: SignJWK }
}

export type DIDDocument = {
  public: {
    did: DIDAttestURI // decentralized identifier
    vkh: {} // verifiable key history
  }
  private: {
    did: DIDAttestURI // decentralized identifier
    vkh: {} // verifiable key history
  }
}
