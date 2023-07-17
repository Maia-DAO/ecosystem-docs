---
id: bhermes-boost
title: bHermes Boost
---

Boost in Hermes gauges is a feature designed to incentivize users by providing them with an opportunity to earn a higher return on the liquidity they provide on the HERMES platform. The mechanism for calculating this boost is derived from the formula used by Curve Finance.

The formula for calculating the boost 𝑏*<sub>𝑢</sub> is as follows:

𝑏*<sub>𝑢</sub> = _min_(0.4 𝑏 + 0.6 𝑆(𝑤<sub>𝑖</sub>/𝑊), 𝑏)

Where:
- 𝑏*<sub>𝑢</sub> = User's boosted balance.
- 𝑏 = User's balance (measured in LP tokens).
- 𝑆 = Total liquidity supplied by users (measured in LP tokens).
- 𝑤<sub>𝑖</sub> = User's bHERMES.
- 𝑊 = Total bHERMES of all users.

This formula ensures that the user's boost (𝑏*<sub>𝑢</sub>) is calculated in a way that rewards users proportionally based users bHERMES and liquidity provided while taking into account the total bHERMES and total liquidity provided by all users.

:::info
Please note that in order to prevent gaming of the boost system, users are able to have their entire boost applied to all pools, but are only able to have 1 boosted position per pool. This is necessary to ensure fair distribution of rewards and prevent abuse of the system.
:::

To utilize this feature, a user must first acquire bHermes Boost and also provide liquidity to a gauge. 

To achieve the maximum boost of 2.5x, a user must hold the same percentage of bHermes Boost as the gauge's total liquidity. This occurs because if you have the same % Liquidity Pool as you have % veHERMES, then

𝑤<sub>𝑖</sub>/𝑊 = 𝑏/𝑆

where (user's boosted balance) 𝑏*<sub>𝑢</sub> = Boost &times; 𝑏. We can simplify our equation from:

𝑏*<sub>𝑢</sub> = _min_(0.4 𝑏 + 0.6 𝑆(𝑤<sub>𝑖</sub>/𝑊), 𝑏)

1. Replace 𝑏*<sub>𝑢</sub> with (Boost &times; 𝑏) | Boost &times; 𝑏 = _min_(0.4 𝑏 + 0.6 𝑆(𝑤<sub>𝑖</sub>/𝑊), 𝑏)

2. Replace 𝑤<sub>𝑖</sub>/𝑊 with 𝑏/𝑆 | Boost &times; 𝑏 = _min_(0.4 𝑏 + 0.6 𝑆(𝑏/S), 𝑏)

3. Simplify 0.6 𝑆(𝑏/S) | Boost &times; 𝑏 = _min_(0.4 𝑏 + 0.6 𝑏, 𝑏)

4. Add 0.4𝑏 + 0.6𝑏 | Boost &times; 𝑏 = _min_(1.0 𝑏, 𝑏)

5. Divide by 𝑏 | Boost = _min_(1.0, 𝑏)

The term "Boost = min(1.0, 𝑏)" signifies that the user's boost is determined by the minimum value between 1.0 and 𝑏. In this context, 1.0 represents 100% of rewards based on the liquidity provided by the user, denoted by 𝑏. This allows for potential rewards up to 100%, a significant increase from the standard 40%, effectively offering up to a 2.5x boost.

Conversely, if a user has 0 bHERMES (aka 𝑤<sub>𝑖</sub> = 0), then they will only receive 40%.

𝑏*<sub>𝑢</sub> = _min_(0.4 𝑏 + 0.6 𝑆(𝑤<sub>𝑖</sub>/𝑊), 𝑏)

1. Replace 𝑏*<sub>𝑢</sub> with (Boost &times; 𝑏) | 𝑏*<sub>𝑢</sub> with (Boost &times; 𝑏) = _min_(0.4 𝑏 + 0.6 𝑆(𝑤<sub>𝑖</sub>/𝑊), 𝑏)

2. Replace 𝑤<sub>𝑖</sub>/𝑊 with 0 | Boost &times; 𝑏 = _min_(0.4 𝑏 + 0.6 𝑆(0/𝑊), 𝑏)

3. Simplify 0.6 𝑆(0/𝑊) = 0 | Boost &times; 𝑏 = _min_(0.4 𝑏, 𝑏)

4. Divide by 𝑏 | Boost = _min_(0.4, 𝑏)

The expression "Boost = min(0.4, 𝑏)" is a way of saying that a user's boost will be the smaller of two values: 0.4 or 𝑏. In simpler terms, if the value of 𝑏, which is based on the user's provided liquidity, is less than 0.4, then that's the boost they'll receive. If 𝑏 is more than 0.4, then their boost will be 0.4. This mechanism ensures that the user's boost will not exceed 0.4, or 40% of potential rewards.

It's important to note that the boost earned on a user's liquidity is in addition to the standard rewards earned on the HERMES platform. This makes Boost in Hermes gauges an attractive feature for users looking to maximize their returns on liquidity provided.

Users can withdraw their attached bHermes Boost and liquidity at any time, however, if boost is dettached from a staked position, boosted rewards will be lost and standard rewards will apply to the liquidity provided.
