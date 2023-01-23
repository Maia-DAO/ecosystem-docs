---
id: pools
title: Ulysses Unified Pools
---

[//]: # (TODO: Add visuals examples)

Ulysses Unified Pools are single-sided staking liquidity pools that allow the trading of assets with any number of other Ulysses Pools. The main difference between a Delta Algorithm LP presented in the paper mentioned above is that all Ulysses LPs reside in Arbitrum. This makes the trade-off between composability outside of Arbitrum with inside of Arbitrum.

This means that when transactions are executed in Arbitrum, the protocol guarantees finality but not when trading from other chains. Additionally, anyone can route trades between multiple Ulysses LPs from different chains in the same execution environment, without any cross-chain calls; thereby making arbitrage cheaper to execute inside our system.

Each Unified Liquidity LP handles only a single token from a specific chain and is connected to one or more Unified Liquidity LPs. Liquidity is available to trade between each of these LPs, according to set weights. 

To ensure liquidity availability between chains, we implemented a [rebalancing fee](./fees/#rebalancing-fees) that can be zero, positive, or negative, depending on the action and bandwidth (available liquidity on the receiving chain) of the pool. There is also a [protocol fee](./fees/#protocol-fees) to be deposited in each token respective gauge.

To ease integrations, every Ulysses LP total supply is exactly equal to the total withdrawable assets when the pool is balanced (without rebalancing fees).

# How does an Ulysses Pool work?

To fully understand an Ulysses Pool it is necessary to know the three actions possible that users can make to alter the pool's state: depositing, withdrawing, and swapping assets.

## Swapping Assets

Swapping LPs and assets between Ulysses pools is detailed [here](./swaps).

## Depositing Assets

When you deposit an asset in a Unified Liquidity Pool, you are replenishing the bandwidths that are furthest from their [target bandwidth](.). Users may incur positive slippage when performing this action.

Let's look at some examples of depositing 10 tokens to an LP with two destinations:

### Both pools' bandwidths are greater than or equal to their target (50):

When depositing assets in this scenario, the transferred amount will be distributed evenly between both bandwidths. So 5 tokens for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 50 | 55 |
|  2 | 50 | 55 |

### One pool's bandwidth is below its target:
When depositing assets in this scenario, the transferred amount will be distributed to the deficient bandwidth until it meets the target balance, then evenly between them. So 2 tokens for destination 2's bandwidth and then 4 for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 52 | 56 |
|  2 | 48 | 54 |

### Both pools' bandwidths are below their targets:
When depositing assets in this scenario, the transfered amount will be distributed to the lowest bandwidth until they are equal, then evenly between them. So 2 tokens for destination 2's bandwidth and then 4 for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 30 | 34 |
|  2 | 28 | 34 |

### One pool's bandwidth is significantly lower than the other's:
When depositing assets in this scenario, the transferred amount will be entirely distributed to the lowest bandwidth. So all 10 tokens will be deposited in destination 2's bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 50 | 50 |
|  2 | 40 | 50 |

### Adding Unified Liquidity Algorithm

| Symbol         | Definition     |
|----------------|----------------|
| t | transaction amount |
| a<sub>s</sub> | this LP assets |
| b<sub>x,s</sub> | bandwidth from x LP to this LP |
| w<sub>d,s</sub> | weight from x LP to this LP |

```markdown
Input: t

# On the source LP:
 1: aₛ ← aₛ + t
 2: for x != s do
 3:     diffₓ,ₛ ← max(0, lpₛ * wₓ,ₛ − bₓ,ₛ))
 4: end for
 5: Total ← ∑ₓ diffₓ,ₛ
 6: for x != s do
 7:     diffₓ,ₛ ← min(Total, t) * diffₓ,ₛ / Total
 8: end for
 9: t′ ← t - min(Total, t)
10: for ∀x do
11:     bₓ,ₛ ← bₓ,ₛ + diffₓ,ₛ + t′ * wₓ,ₛ
12: end for
```

## Withdrawing Assets

Withdrawing assets is the exact opposite of [depositing](#depositing-assets). Liquidity is removed from the bandwidths that are larger or closer to the target/ideal bandwidth. Users may incur negative slippage when performing this action.

Let's look at some examples of withdrawing 10 tokens from an LP with two destinations:

### Both pools' bandwidths are less than or equal to their target (50):

When withdrawing assets in this scenario, the transferred amount will be removed evenly between them. So 5 tokens from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 50 | 45 |
|  2 | 50 | 45 |

### One pool's bandwidth is below its target:
When withdrawing assets in this scenario, the transferred amount will be removed from the greater bandwidth until it meets the target balance, then evenly between them. So 2 tokens from destination 1's bandwidth and then 4 from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 52 | 46 |
|  2 | 48 | 44 |

### Both pools' bandwidths exceed their targets:
When withdrawing assets in this scenario, the transfered amount will be removed from the highest bandwidth until they are equal, then evenly between them. So 2 tokens from destination 2's bandwidth and then 4 from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 80 | 74 |
|  2 | 78 | 74 |

### One pool's bandwidth is significantly greater than the other's:
When withdrawing assets in this scenario, all of the transferred amount will be removed from the highest bandwidth. So all 10 tokens will be withdrawn from destination 2's bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 60 | 60 |
|  2 | 80 | 70 |

### Withdrawing Unified Liquidity Algorithm

| Symbol         | Definition     |
|----------------|----------------|
| t | transaction amount |
| a<sub>s</sub> | this LP assets |
| b<sub>x,s</sub> | bandwidth from x LP to this LP |
| w<sub>d,s</sub> | weight from x LP to this LP |

```markdown
Input: t

# On the source LP:
 1: aₛ ← aₛ + t
 2: for x != s do
 3:     diffₓ,ₛ ← max(0, bₓ,ₛ - lpₛ * wₓ,ₛ))
 4: end for
 5: Total ← ∑ₓ diffₓ,ₛ
 6: for x != s do
 7:     diffₓ,ₛ ← min(Total, t) * diffₓ,ₛ / Total
 8: end for
 9: t′ ← t - min(Total, t)
10: for ∀x do
11:     bₓ,ₛ ← bₓ,ₛ - (diffₓ,ₛ + t′ * wₓ,ₛ)
12: end for
```
