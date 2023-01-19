---
id: boost
title: Boost
---

[//]: # (TODO: Add reference to Curve boost)

Boost in Hermes gauges is a feature that allows users to earn a higher return on their liquidity provided on the HERMES platform. The boost is determined by the amount of bHERMES that a user holds in their wallet and proportion to the total supply of bHERMES.

To utilize the boost feature, a user must first acquire bHERMES and provide liquidity to a gauge. To achieve the maximum boost of 2.5x, a user must hold the same percentage of bHERMES as the gauge's total liquidity.

:::info
Please note that in order to prevent gaming of the boost system, users are able to have their entire boost applied to all pools, but are only able to have 1 boosted position per pool. This is necessary to ensure fair distribution of rewards and prevent abuse of the system.
:::

The formula to calculate the boost is:

$$min(UserLiquidity, (40\%*UserLiquidity)+(60\%*TotalLiquidity*VotingBalance/VotingTotal))$$

Where:
- UserLiquidity is the total liquidity provided by the user.
- VotingBalance is the amount of bHERMES held by the user.
- VotingTotal is the total supply of bHERMES.
- TotalLiquidity is the total liquidity provided to the gauge.

For example, if a user provides 100 of liquidity to a gauge and holds 1% of the total bHERMES supply, the boost earned on their liquidity would be:

$$min(100, (40\%*100)+(60\%*100*1/100)) = 40+(0.6*1) = 40+0.6 = 40.6$$

It's important to note that the boost earned on a user's liquidity is in addition to the standard rewards earned on the HERMES platform. This makes Boost in Hermes gauges an attractive feature for users looking to maximize their returns on liquidity provided.

It's important to note that users can withdraw their bHERMES and liquidity at any time, however, the boost will be lost and standard rewards will apply to the liquidity provided.
