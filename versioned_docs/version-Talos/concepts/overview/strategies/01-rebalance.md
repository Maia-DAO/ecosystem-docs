---
id: rebalance
title: Rebalance
---

[//]: # (TODO: what is rebalancing)
[//]: # (TODO: rebalancing parameters, how they affect when a rebalancing happens)
[//]: # (TODO: add example)

## Uniswap V3 NFT Position Rebalancing Wrapper

This wrapper allows for automatic rebalancing of Uniswap V3 NFT positions according to specified conditions. The wrapper will automatically re-allocate funds to maintain a 50/50 ratio between the two NFTs in the position.

### Usage

To use the wrapper, simply wrap your Uniswap V3 NFT position in the wrapper contract. Once wrapped, the position will be automatically rebalanced according to the specified conditions.

### Conditions for Rebalancing

The wrapper will automatically rebalance the position when any of the following conditions are met:

- The ratio between the two NFTs in the position deviates from 50/50 by more than a certain threshold (specified when wrapping the position)
- A specified time interval has elapsed (also specified when wrapping the position)
- A specified event occurs on-chain (can be specified when wrapping the position)

### Advantages

- Maintains a balanced portfolio of NFTs, reducing risk from over-exposure to a single NFT
- Automates the rebalancing process, removing the need for manual intervention
- Allows for customization of rebalancing conditions to suit individual investment strategies

### Potential Drawbacks

- Gas cost for frequent rebalancing.
- Rebalancing might cause a loss of liquidity in the position.

### Conclusion

The Uniswap V3 NFT Position Rebalancing Wrapper provides a convenient and automated way to maintain a balanced portfolio of NFTs on Uniswap V3. By specifying custom rebalancing conditions, users can tailor the wrapper to suit their individual investment strategies. However, it's important to consider the potential drawbacks and be mindful of the gas cost and possible liquidity loss.