---
id: uni-v3
title: Uniswap V3 Gauges
---

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

### Understanding the Formula

| Term | Description |
|------|-------------|
| **Position Rewards** | Maximum rewards earnable based on your liquidity and time in range |
| **Total Rewards For Duration Staked** | Total gauge rewards distributed during your staking period |
| **User bHERMES** | Your bHERMES Boost balance |
| **Total bHERMES Supply** | Total bHERMES Boost supply across all users |

### How It Works

1. **Base Rewards (40%)**: Everyone receives at least 40% of their position rewards regardless of bHERMES holdings
2. **Boost Rewards (60%)**: The remaining 60% is distributed based on your share of bHERMES
3. **Cap**: Total rewards cannot exceed your position rewards (prevents over-boosting)

### Example Calculation

**Scenario**: You have 1% of pool liquidity, staked for a full week
- Weekly gauge rewards: 10,000 HERMES
- Your position rewards: 100 HERMES (1% of total)
- Your bHERMES: 500,000
- Total bHERMES: 10,000,000 (you hold 5%)

**Calculation**:
```
Boosted Rewards = min(100, 100 * 0.4 + (100 * 5%) * 0.6)
               = min(100, 40 + 3)
               = min(100, 43)
               = 43 HERMES
```

To achieve maximum boost (100 HERMES), you would need bHERMES proportional to your liquidity share.

## Calculating APRs

This section explains how APRs are calculated in the UI for Uniswap V3 Gauges. Displayed APRs are estimates that can change based on price movements and active liquidity changes.

### APR Range Display

The UI shows two APR values:
- **Minimum APR**: Expected return with a full-range position (lowest capital efficiency)
- **Maximum APR**: Expected return with a minimum-width position (highest capital efficiency)

### Calculation Method

The APR calculation follows these steps:

#### Step 1: Calculate Active Tick Liquidity

First, determine how much liquidity (in USD) exists in the currently active tick:

```
Active Liquidity (USD) = Token A in active tick × Price A + Token B in active tick × Price B
```

This is calculated by simulating swaps to measure the liquidity depth in the current tick for both tokens.

**Source**: [calculateLiquidityData.ts](https://github.com/Maia-DAO/sdks/blob/main/sdks/hermes-v2-sdk/src/utils/calculateLiquidityData.ts#L5)

#### Step 2: Calculate Capital Efficiency

Capital efficiency determines how much of your deposited liquidity is active in the current tick:

```
Capital Efficiency = 1 / (1 - (Price A / Price B) ^ 0.25)
```

**Note**: Each tick represents approximately 0.01% (1.0001x) price change. A minimum width of 60 ticks equals ~0.6% price range.

#### Step 3: Calculate APR

```
APR = (Weekly HERMES Emissions × HERMES Price × 52) / Liquidity in Position
```

### Example APR Calculation

**Given**:
- Pool: USDC/USDT
- Tick Spacing: 1 tick
- Weekly emissions to gauge: 1,000 HERMES
- HERMES price: $0.50
- Your deposit: $10,000
- Position range: 10 ticks
- Your bHermesBoost: 0

**Calculation**:
```
Your Effective Active Liquidity = $10,000 / 10 = $1,000 contribution to active tick
Your Share of Emissions = 1,000 × ($1,000 / Total Active Liquidity)
Weekly Rewards (USD) = Your Share × $0.50
APR = (Weekly Rewards × 52) / $10,000
```

### Important Considerations

- APRs assume your position stays in range 100% of the time
- Actual returns depend on price volatility and time in range
- Higher capital efficiency = higher APR but higher risk of going out of range
- Consider using [Talos strategies](/docs/Talos/overview/strategies/rebalance) to automate position management

### Reference Implementation

For the complete calculation logic, see the Hermes V2 SDK:
- [TVL calculation](https://github.com/Maia-DAO/sdks/blob/main/sdks/hermes-v2-sdk/src/utils/tvl.ts)
- [Liquidity data calculation](https://github.com/Maia-DAO/sdks/blob/main/sdks/hermes-v2-sdk/src/utils/calculateLiquidityData.ts)