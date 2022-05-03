<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [rain-sdk](./rain-sdk.md) &gt; [Verify](./rain-sdk.verify.md) &gt; [statusAtBlock](./rain-sdk.verify.statusatblock.md)

## Verify.statusAtBlock property

Derives a single `Status` from a `State` and a reference block number.

<b>Signature:</b>

```typescript
readonly statusAtBlock: (state: VerifyState, blockNumber: BigNumberish, overrides?: ReadTxOverrides) => Promise<BigNumber>;
```