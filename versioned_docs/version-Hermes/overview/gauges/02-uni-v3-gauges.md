---
id: uni-v3
title: Uniswap V3 Gauges
---

[//]: # (TODO:  Add examples)
[//]: # (TODO:  Link how Talos helps or users can take advantage of it's staked positions)

Uniswap V3 [Gauges](./introduction) are a new tool for liquidity mining on the Uniswap V3 protocol. They utilize an improved version of the [Uniswap V3 Staker](https://docs.uniswap.org/contracts/v3/guides/liquidity-mining/overview), which is optimized for layer 2 by reducing calldata. This allows for faster and cheaper transactions while still maintaining the integrity of the liquidity pool.

## Liquidity Mining

Liquidity mining incentives are a key feature of Uniswap V3 Gauges. These incentives are distributed according to each Uni V3 NFT position's liquidity per second inside traded ticks. This means that the more active liquidity a position provides to the pool, the more incentives it will receive. This encourages users to provide more efficient liquidity to the pool, which in turn improves the overall depth of the pool.

:::caution
LPs will lose new rewards between the moment a new [gauge cycle](./introduction/#gauge-cycle) starts until they re-stake again! Additionally, staked positions will give up any fees until they unstake.
:::

The Staker also takes into account all of a pool's liquidity, even if a pool is not staked, their respective rewards will be refunded to the minter and not distributed to others. This means that if a pool is not staked, the rewards will be returned to Hermes Minter.

## Minimum Range

Incentivizing liquidity on Uniswap V3 is an important aspect of managing liquidity pools. A lot of research has been done to find the most safe, efficient, decentralized and easy-to-manage solution. The solution proposed in [Uniswap's Governance](https://gov.uniswap.org/t/consensus-check-should-uniswap-incentivize-liquidity-on-optimism-and-arbitrum/15288/13) was found to be the best option.

Every gauge has a minimum range for staked Uniswap V3 NFT positions that is determined by governance. This was added to prevent a few users with narrow positions from accumulating the majority of emissions. This issue was observed with [Ribbon at the end of 2021](https://medium.com/@revert_finance/onetickdao-eth-and-the-narrow-rangers-f9a376f7f0c9). By setting a minimum range for Uni V3 positions, the pool remains stable, and the liquidity is distributed more fairly among all users.

### Customized Incentives

This solution allows each pool to incentivize a custom depth, with pools of highly correlated assets (stable pools) having a small range (possibly as low as one tick), and loosely correlated assets (volatile pools) having a wide minimum range.

The custom incentives will depend on the correlation of the assets in the pool. This means that pools with highly correlated assets will have a smaller minimum range, while pools with loosely correlated assets will have a wider minimum range. The idea behind this approach is that the assets in a pool with a high correlation will be less likely to move away from the equilibrium point, and therefore, a smaller range is needed. On the other hand, pools with low correlation are more likely to move away from the equilibrium point, so a wider range is needed to keep them in check.

### Easy to Manage

This solution is also easy to manage by partner protocols, they only need to choose the minimum width and the pool's fee tier according to the correlation of the pool's tokens. This allows for a more efficient use of the liquidity pool's resources.

### Fee Tiers

Uniswap V3 Gauges also allow for different fee tiers to be set for different tokens in the pool. The fee tiers of gauges' pools can be adjusted by governance according to market conditions and the needs of the protocol.

## Calculating Boost

:::info
Please note that to prevent gaming of the boost system, users can have their entire boost applied to all pools, but are only able to have 1 boosted position per pool. This is necessary to ensure fair distribution of rewards and prevent abuse of the system.
:::

Calculating boost is an important aspect of managing liquidity pools on the Uniswap V3 protocol. The boost is used to determine the rewards received by liquidity providers for their staked positions in the pool. The equation used to calculate the boost is equivalent to the boosting in Hermes V1 and takes into account the time spent in the range and the total rewards that could have been earned during that time. This allows for a fair distribution of rewards among liquidity providers in the pool.

The Uniswap V3 Staker distributes rewards based on the time spent in range. This means that the total supply used to calculate the boost of each position is the maximum reward that it could have earned during the incentive duration. The maximum is the total week's rewards if staked during the whole week.

The equation used to calculate the boost is as follows:

$Rewards Received = min(Position Rewards, Position Rewards * 40\% + (Total Rewards For Duration Staked * User bHERMES / Total bHERMES Supply) * 60\%)$

The formula calculates the rewards received by a user, based on their position rewards, and their stake in the bHERMES token. The rewards received are determined by taking the minimum value between the position rewards and a combination of two other factors: the position rewards multiplied by 40%, and the total rewards for the duration staked multiplied by the user's bHERMES stake divided by the total bHERMES supply, multiplied by 60%. This formula ensures that users are rewarded for both their position in the liquidity pool and their stake in the bHERMES token, but the rewards will be capped at the position rewards.


