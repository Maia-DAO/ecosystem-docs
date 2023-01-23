---
id: integration-issues
title: Token Integration Issues
---

Fee-on-transfer and rebasing tokens will not function correctly on Hermes Protocol.

## Fee-on-transfer Tokens

Fee-on-transfer tokens will not function with our contracts. As a workaround, the token creators may create a token wrapper. We will not be making a wrapper that supports fee-on-transfer tokens in the future.

## Rebasing Tokens

Rebasing tokens will succeed in pool creation, swapping and bribing, but the protocol and liquidity providers will bear the loss of a negative rebase when their position becomes active, with no way to recover the loss.
