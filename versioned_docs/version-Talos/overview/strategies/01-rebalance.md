---
id: rebalance
title: Rebalance
---

# Rebalance Strategy

The Rebalance Strategy automatically adjusts Uniswap V3 positions by both repositioning the price range AND swapping tokens to maintain a 50/50 balance, maximizing fee generation and minimizing impermanent loss.

## What is Rebalancing?

Rebalancing is the process of repositioning a Uniswap V3 position to center it around the current price while also swapping tokens to restore a 50/50 ratio. When triggered, rebalancing:
1. **Adjusts the price range** to center around the current market price
2. **Swaps tokens** to achieve a balanced 50/50 allocation

This ensures your position is always in range and earning fees efficiently.

### Why Rebalance?

```
Price Moves Up → Position becomes heavy in Token B
                          ↓
              Rebalance: Sell some Token B for Token A
                          ↓
              Position restored to 50/50 ratio
```

- **Maximize Fee Capture**: Balanced positions earn fees more efficiently
- **Reduce Impermanent Loss**: Regular rebalancing can mitigate IL over time
- **Maintain Exposure**: Keep desired 50/50 allocation to both assets

## Rebalancing Parameters

### Deviation Threshold

The maximum allowed deviation from the target ratio before triggering a rebalance.

| Parameter | Description | Typical Range |
|-----------|-------------|---------------|
| `deviationThreshold` | % deviation from lower/upper tick that triggers rebalance | 5% - 20% |

**Example**: With a 10% threshold, rebalancing triggers when the position reaches 60/40 or 40/60.

### Slippage Tolerance

Maximum acceptable slippage during rebalance swaps.

| Parameter | Description | Typical Range |
|-----------|-------------|---------------|
| `maxSlippage` | Maximum % slippage for swap execution | 0.5% - 2% |

## Example Scenario

### Initial Position
- **Pool**: ETH/USDC
- **Deposit**: 1 ETH + 2,000 USDC (ETH price = $2,000)
- **Ratio**: 50/50
- **Deviation Threshold**: 10%

### After Price Movement
- **ETH Price**: Increases to $2,500
- **Position Value**: ~0.89 ETH + 2,236 USDC
- **New Ratio**: ~47/53 (ETH/USDC by value)

### Rebalance Trigger
- Deviation: 6% (below threshold)
- No rebalance yet

### Further Price Movement
- **ETH Price**: Increases to $3,000
- **Position Value**: ~0.82 ETH + 2,449 USDC
- **New Ratio**: ~42/58 (ETH/USDC by value)

### Rebalance Executed
- Deviation: 16% (exceeds 10% threshold)
- **Action**: Sell USDC, buy ETH to restore 50/50
- **Result**: ~0.91 ETH + 2,273 USDC

## Strategy Configuration

When deploying a Talos Rebalance Strategy, consider:

### Conservative Settings
```
Deviation Threshold: 15-20%
Slippage: 0.5%
```
- Lower gas costs
- Suitable for stable pairs
- Less frequent transactions

### Aggressive Settings
```
Deviation Threshold: 5-10%
Slippage: 1-2%
```
- Tighter position management
- Better for volatile pairs
- Higher gas costs

## Advantages

- **Automated Management**: No manual intervention required
- **Customizable**: Parameters can be tuned to match risk tolerance
- **Gas Efficient**: Only rebalances when necessary
- **Composable**: Works with Hermes gauges for additional rewards

## Considerations

- **Gas Costs**: Each rebalance incurs gas fees - factor this into expected returns
- **Slippage**: Large positions may experience significant slippage during rebalancing
- **Market Conditions**: Extreme volatility may cause frequent rebalances
- **Impermanent Loss**: Rebalancing realizes IL by swapping tokens, making it permanent

## Comparison with Rerange

| Feature | Rebalance | Rerange |
|---------|-----------|---------|
| Adjusts token ratio | Yes (swaps to 50/50) | No |
| Adjusts price range | Yes | Yes |
| Keeps position in range | Always | Not guaranteed |
| Best for | Maintaining balanced exposure | Adjusting range width/bounds |
| Typical trigger | Deviation from 50/50 | Price near range edge |
