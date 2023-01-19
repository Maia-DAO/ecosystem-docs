---
id: pools
title: Ulysses Unified Pools
---

[//]: # (TODO: Add visuals examples)

Ulysses Unified Pools are single-sided staking liquidity pools that allow the trading of assets with any number of other Ulysses Pools. The main difference between a Delta Algorithm LP presented in the paper mentioned above is that all Ulysses LPs reside in Arbitrum. This makes the trade-off between composability outside of Arbitrum with inside of Arbitrum.

This means that when transactions are executed in Arbtrum, the protocol guarantees finality but not when trading from other chains. In additon to this, anyone can route trades between multiple Ulysses LPs from different chains in the same execution environment, without any cross-chain calls. Making arbitrage cheaper to execute inside our system.

Each Unified Liquidity LP handles only a single token from a specific chain and is connected to one or more Unified Liquidity LPs. Liquidity is available to trade between each of this LPs according to set weights. 

To ensure liquidity availability between chains, we implemented a [rebalancing fee](./fees/#rebalancing-fees) that can be zero, positive or negative depending on the action and bandwidth (available liquidity on the receiving chain) of the pool. There is also a [protocol fee](./fees/#protocol-fees) to be deposited in each token respective gauge.

To ease integrations, every Ulysses LP total supply is exactly equal to the total withdrawable assets when the pool is balanced (without rebalancing fees).

# How does an Ulysses Pool work?

To fully understand an Ulysses Pool it is necessary to know the three actions possible that users can make to alter the pool's state: depositing, withdrawing and swapping assets.

## Swapping Assets

Swapping LPs and assets between Ulysses pools is detailed [here](./swaps).

## Depositing Assets

When you deposit an asset in a Unified Liquidity Pool, you are replenishing the bandwidths that are furthest apart from their [target bandwidth](.). Users can occur in a positive slippage when doing this action.

Let's look at a couple of examples of interacting with 10 tokens to an LP with a total supply of 100 and two destinations with equal weights:

### Pool's bandwidths are at or higher than their target bandwidth

When depositing assets in this scenario, the transfered amount will be distributed evenly between them. So 5 tokens for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 50 | 55 |
|  2 | 50 | 55 |

### Pool's has a bandwidth that is not at it's target bandwidth
When depositing assets in this scenario, the transfered amount will be distributed to the bandwidth until it's target balance, then evenly between them. So 2 tokens for destination 2's bandwidth and then 4 for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 52 | 56 |
|  2 | 48 | 54 |

### Pool's bandwidths are not at their target bandwidth
When depositing assets in this scenario, the transfered amount will be distributed to the lowest bandwidth until they are equal, then evenly between them. So 2 tokens for destination 2's bandwidth and then 4 for each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 30 | 34 |
|  2 | 28 | 34 |

### Pool's has one bandwidth significantly more depleted than others
When depositing assets in this scenario, the transfered amount will be distributed to the lowest bandwidth. So all the 10 tokens will be deposited in destination 2's bandwidth.

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

Withdrawing assets is the exact opposite of [depositing](#depositing-assets). Liquidity is removed from the bandwidths that are larger or closer to the target/ideal bandwith. Users can occur in a negative slippage when doing this action.

Let's look at a couple of examples of interacting with 10 tokens to an LP with a total supply of 100 and two destinations with equal weights:

### Pool's bandwidths are at or lower than their target bandwidth

When withdrawing assets in this scenario, the transfered amount will be removed evenly between them. So 5 tokens from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 50 | 45 |
|  2 | 50 | 45 |

### Pool's has a bandwidth that is not at it's target bandwidth
When withdrawing assets in this scenario, the transfered amount will be removed from the bandwidth until it's target balance, then evenly between them. So 2 tokens from destination 1's bandwidth and then 4 from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 52 | 46 |
|  2 | 48 | 44 |

### Pool's bandwidths are over their target bandwidth
When withdrawing assets in this scenario, the transfered amount will be removed from the highest bandwidth until they are equal, then evenly between them. So 2 tokens from destination 2's bandwidth and then 4 from each bandwidth.

| Destination | Initial State  | Final State |
|-------------|----------------|-------------|
|  1 | 80 | 74 |
|  2 | 78 | 74 |

### Pool's bandwidths are at their target bandwidth, one has significantly more liquidity
When withdrawing assets in this scenario, the transfered amount will be removed from the highest bandwidth. So all the 10 tokens will be withdrawn from the destination 2's bandwidth.

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