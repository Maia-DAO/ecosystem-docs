---
id: fees
title: Fees
---

[//]: # (TODO: Add visuals examples)
[//]: # (TODO: Explain positive/negative fee situations and how arbitrageurs can take of advantagement of it)

Ulysses Unified Liquidity fees only apply to Ulysses Unified Pools, they are split into [protocol fees](#protocol-fees) and [rebalancing fees](#rebalancing-fees).

## Protocol Fees

Ulysses LPs have a protocol fee that can be turned on and off by Hermes governance. The fee will be set at 3 bps at launch, has a minimum value of 1 bp and maximum value of 10 bps.

These fees will be distributed to their respective gauges, chosen by Hermes Governance. When a token does not have a gauge, it is up to Hermes Governance to decide what to do with the fees.

## Rebalancing Fees

The purpose of rebalancing fees, similar to slippage in a regular AMM, is to ensure that pools are not depleted and there is always liquidity available for normal protocol operations in any pool.

The rebalancing fee function can be calculated with the current bandwidth $b$, the target bandwidth $B$, and the transaction size $t$. Assuming the pool starts at an equilibrium:

| Rebalancing Fee                                             | Condition                               |
|-------------------------------------------------------------|-----------------------------------------|
| 0                                                           | $b−t \leq \delta _1B$                   |
| $ \frac{\lambda_1}{(\delta_1−\delta_2​)B​​}(\delta_1 B−b+t)$   | $ \delta _2​B \leq b−t \lt \delta _1​B​$   |
| $ \lambda_1+\frac{\lambda_2}{\delta_2​B​​}(\delta_2​B−b+t)$     | $ b−t \lt \delta _2 ​B​​$                  |

### Fee Parameters

| Parameter      | Value  |
|----------------|--------|
| $ \lambda_1$   | 0.40%  |
| $ \lambda_2$   | 99.54% |
| $ \delta_1$    | 60%    |
| $ \delta_2$    | 5%     |

You can find a desmos demonstrating the fee in [other resources](../resources/other).
