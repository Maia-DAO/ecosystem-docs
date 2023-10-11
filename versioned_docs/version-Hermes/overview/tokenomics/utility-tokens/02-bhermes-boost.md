---
id: bhermes-boost
title: bHermes Boost
---
# bHermes Boost

Boost in Hermes gauges is a feature designed to incentivize users by providing them with an opportunity to earn a higher return on the liquidity they provide on the HERMES platform.

## Key Terms

Before we dive in, let's clarify some terms:

- **Liquidity**: This refers to the assets that users deposit into a pool. These assets are used to facilitate trading and are rewarded with fees and tokens.
- **Gauge**: A gauge is a smart contract that measures and rewards the liquidity provided by users.
- **bHermes**: bHermes are tokens that represent a user's stake in the Hermes platform. The more bHermes a user holds, the higher their potential rewards.
- **LP Tokens**: LP stands for Liquidity Provider. LP tokens are proof of your contribution to a liquidity pool. They are used to claim your share of the pool's trading fees and rewards.

## Boost Formula

The calculation for the user's boost, 𝑏*<sub>𝑢</sub> is based on the formula by Curve Finance

$$b_u^* = \min(0.4 b + 0.6 S\frac{w_i}{W}, b)$$

Where:
- 𝑏*<sub>𝑢</sub> = User's boosted balance.
- 𝑏 = User's balance (measured in LP tokens).
- 𝑆 = Total liquidity supplied by users (measured in LP tokens).
- 𝑤<sub>𝑖</sub> = User's bHERMES.
- 𝑊 = Total bHERMES of all users.

This formula calculates the user's boost, 𝑏*<sub>𝑢</sub> based on the amount of bHERMES they hold and the liquidity they provide. It also takes into account the total amount of bHERMES and liquidity provided by all users.

:::note
In order to prevent gaming of the boost system and ensure fair distribution of rewards, users are able to have their entire boost applied to all pools, but are only able to have 1 boosted position per pool.
:::

### To utilize this feature, a user must first acquire bHermes Boost and also provide liquidity to a gauge. 

## Maximum Boost = 2.5 x [No Boost]

To achieve the maximum boost of 2.5x, a user must hold the <span class="green-text">same % share of **bHermes Boost** to their **liquidity** staked in gauge</span>. This occurs because if you have the same % Liquidity Pool as you have % veHERMES, then: $\frac{w_i}{W} = \frac{b}{S}$

We can simplify our equation from:

$$b_u^* = \min(0.4 b + 0.6 S\frac{w_i}{W}, b)$$

### 1. Replace $b_u^*$ with $Boost \times {b}$ 

$$\textcolor{green}{{\text{Boost} \times b}} = \min(0.4 b + 0.6 S\frac{w_i}{W}, b)$$

### 2. Replace $\frac{w_i}{W}$ with $\frac{b}{S}$

$$Boost \times {b} = \min(0.4 b + 0.6 S\textcolor{green}{{\frac{b}{S}}}, b)$$

### 3. Simplify $0.6 S\frac{b}{S}$

$$Boost \times b = \min(0.4 b + \textcolor{green}{{0.6 b}}, b)$$

### 4. Add $0.4b + 0.6b$

$$Boost \times b = \min(\textcolor{green}{{1.0 b}}, b)$$

### 5. Divide by ${b}$

$$\textcolor{green}{{Boost}} = \min(\textcolor{green}{{1.0}}, b)$$

The term "Boost = min(1.0, 𝑏)" signifies that the user's boost is determined by the minimum value between 1.0 and 𝑏. In this context, 1.0 represents 100% of rewards based on the liquidity provided by the user, denoted by 𝑏. 

> This allows for potential rewards up to 100%, a significant increase from the standard 40%, effectively offering up to a 2.5x boost.

## No Boost = 40% x [Max Boost]

Conversely, if a user has <span class="red-text">0 bHERMES</span> ($w_i = 0$), then they will only receive 40% of the Max Boost

$$b_u^* = \min(0.4 b + 0.6 S\frac{w_i}{W}, b)$$

### 1. Replace $b_u^*$ with ${Boost \times {b}}$

$$\textcolor{red}{{Boost \times {b}}} = \min(0.4 b + 0.6 S\frac{w_i}{W}, b)$$

### 2. Replace ${w_i}$ with ${0}$

$$Boost \times {b} = \min(0.4 b + 0.6 S\textcolor{red}{{\frac{0}{W}}}, b)$$

### 3. Simplify $0.6 S\frac{0}{W}$ = ${0}$

$$Boost \times b = \min(\textcolor{red}{{0.4 b}}, b)$$

### 4. Divide by **${b}$**

$$\textcolor{red}{{Boost}} = \min(\textcolor{red}{{0.4}}, b)$$

The expression "Boost = min(0.4, 𝑏)" is saying that a user's boost will be the smaller of two values: 0.4 or 𝑏. In simpler terms, if the value of 𝑏, which is based on the user's provided liquidity, is less than 0.4, then that's the boost they'll receive. If 𝑏 is more than 0.4, then their boost will be 0.4. 

> This mechanism ensures that the user's boost will not exceed 0.4, or 40% of potential rewards.

## Other Considerations

It's important to note that the boost earned on a user's liquidity is in addition to the standard rewards earned on the HERMES platform. This makes Boost in Hermes gauges an attractive feature for users looking to maximize their returns on liquidity provided.

Users can withdraw their attached bHermes Boost and liquidity at any time, however, if boost is dettached from a staked position, boosted rewards will be lost and standard rewards will apply to the liquidity provided.
