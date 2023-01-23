---
id: base
title: Base
---

[//]: # (TODO: add that positions are immutable, and can be fully decentralized according to strategies chosen)
[//]: # (TODO: Add new possible positions/strategies)

Talos is a new platform that offers ERC-20 wrappers for Uniswap V3 Non-fungible Positions (NFTs). This allows for maximum composability with what can be done with Talos' underlying NFTs, as existing solutions for Uni V3 NFTs can be used to build complex positions and strategies.

The first Talos Liquidity Pools (LPs) are base positions that support one Uniswap V3 NFT at a time. Anyone can create new and/or use existing LPs, and each LP can choose to have multiple strategies associated with it on launch. This allows for actions to be taken when certain parameters are met, such as [rebalancing](../strategies/rebalance) an LP to have 50% in each asset, or [rearranging](../strategies/rerange) a position to a wider or narrower range.

### Types of Positions
There exists 2 types of base positions:

1. **[Staked](./staked)**: Represent a share of one or more UNI V3 NFT positions that are all staked in [Hermes Uniswap V3 Gauges](base).
2. **[Vanilla](./vanilla)**: Represent a share of one or more UNI V3 NFT positions.

The deployer of each position selects the type, with no possibility of changing it in the future.

Creating a Position

Creating a new position on Talos is simple and straightforward. First, select the type of position you want to create (Staked or Vanilla). Next, select the underlying Uniswap V3 NFTs that you want to include in the position according to the rebalancing and/or rearranging strategy. 

Strategies

Each position on Talos can have one or more associated strategies. These strategies are used to automatically manage the position based on certain conditions or parameters. For example, a strategy can be set to automatically rebalance the position when the price of one of the underlying NFTs moves beyond a certain threshold.

Conclusion

Talos is a powerful platform that offers ERC-20 wrappers for Uniswap V3 Non-fungible Positions. This allows for maximum composability with what can be done with Talos' underlying NFTs, as existing solutions for Uni V3 NFTs can be used to build complex positions and strategies. The platform offers two types of base positions, staked and vanilla, and each position can have multiple strategies associated with it. This allows for advanced management of positions and can help to minimize risk and maximize returns.
