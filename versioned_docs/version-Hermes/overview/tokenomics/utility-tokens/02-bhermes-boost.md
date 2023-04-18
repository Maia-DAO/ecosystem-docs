---
id: bhermes-boost
title: bHermes Boost
---

Boost in Hermes gauges is a feature that allows users to earn a higher return on their liquidity provided on the HERMES platform. The boost is determined by the amount of bHermes Boost that a user holds in their wallet and proportion to the total supply of bHermes Boost.

To utilize the boost feature, a user must first acquire bHermes Boost and provide liquidity to a gauge. To achieve the maximum boost of 2.5x, a user must hold the same percentage of bHermes Boost as the gauge's total liquidity. This is equivalent to veCRV's boost in Curve Finance.

:::info
Please note that in order to prevent gaming of the boost system, users are able to have their entire boost applied to all pools, but are only able to have 1 boosted position per pool. This is necessary to ensure fair distribution of rewards and prevent abuse of the system.
:::

The formula to calculate the boost is:

$min(UserLiquidity,(40\%*UserLiquidity)+(60\%*TotalLiquidity*UserBoostBalance/BoostTotal))$

Where:
- UserLiquidity is the total liquidity provided by the user.
- TotalLiquidity is the total liquidity provided to the gauge.
- UserBoostBalance is the amount of bHermes Boost Boost held by the user.
- BoostTotal is the total supply of bHermes Boost (equal to bHermes total supply).

For example, if a user provides 100 of liquidity to a gauge and holds 1% of the total bHermes Boost supply, the boost earned on their liquidity would be:

$min(100,(40\%*100)+(60\%*100*1/100))=40+(0.6*1)=40+0.6=40.6$

It's important to note that the boost earned on a user's liquidity is in addition to the standard rewards earned on the HERMES platform. This makes Boost in Hermes gauges an attractive feature for users looking to maximize their returns on liquidity provided.

Users can withdraw their attached bHermes Boost and liquidity at any time, however, if boost is dettached from a staked position, boosted rewards will be lost and standard rewards will apply to the liquidity provided.
