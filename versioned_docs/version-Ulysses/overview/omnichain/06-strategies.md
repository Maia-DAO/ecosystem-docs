---
id: strategies
title: Strategies
---

# Port Strategies

:::note
This feature was planned for a future release and was not included at Maia Ecosystem V2 launch.
:::

Port Strategies are yield-generating mechanisms that deploy idle liquidity from Ulysses Ports into low-risk DeFi strategies, enhancing the capital efficiency of the protocol.

## Overview

Thanks to the Port architecture design, the platform's capital efficiency can be significantly increased by deploying a portion of the Port's locked liquidity into approved strategies. These contracts have permission to manage idle assets and apply them in low-risk yield-generating opportunities.

## How Port Strategies Work

### Architecture

```
┌─────────────────────────────────────────┐
│              Ulysses Port               │
│  ┌─────────────────────────────────┐    │
│  │      Active Liquidity           │    │  ← Used for cross-chain operations
│  │      (Reserved Buffer)          │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │      Idle Liquidity             │    │  ← Available for strategies
│  │      (Strategy Eligible)        │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
                    │
                    ▼
          ┌──────────────────┐
          │  Port Strategy   │
          │    Contract      │
          └──────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│   AAVE V3     │       │   Compound    │
│   Lending     │       │   Lending     │
└───────────────┘       └───────────────┘
```

### Key Components

1. **Buffer Management**: A portion of Port liquidity is always reserved to handle cross-chain operations, ensuring the protocol can process withdrawals and transfers

2. **Strategy Allocation**: The remaining idle liquidity can be deployed into approved yield strategies

3. **Risk Parameters**: Governance sets limits on:
   - Maximum allocation per strategy
   - Allowed protocols and assets
   - Minimum buffer requirements

## Example Strategies

### Lending Protocol Strategies

Deploy idle stablecoins to established lending protocols:

| Strategy | Asset | Protocol | Risk Level |
|----------|-------|----------|------------|
| USDC Lending | USDC | AAVE V3 | Low |
| USDT Lending | USDT | AAVE V3 | Low |
| ETH Lending | WETH | Compound V3 | Low |

### Benefits

- **Passive Yield**: Locked assets generate returns instead of sitting idle
- **Capital Efficiency**: Protocol earns yield on behalf of liquidity providers
- **Risk Mitigation**: Only governance-approved low-risk strategies are permitted

## Governance Controls

Port Strategies are governed by bHERMES Votes holders who can:

- **Add Strategies**: Approve new yield strategies for deployment
- **Remove Strategies**: Disable underperforming or risky strategies
- **Adjust Parameters**: Modify allocation limits and buffer requirements
- **Emergency Actions**: Withdraw funds from strategies if needed

## Risk Considerations

### Mitigated Risks

- **Smart Contract Risk**: Only audited, battle-tested protocols are approved
- **Liquidity Risk**: Mandatory buffer ensures withdrawal capacity
- **Governance Risk**: Multi-step approval process for strategy changes

### Potential Risks

- **Protocol Risk**: Underlying DeFi protocols could experience issues
- **Market Risk**: Yield rates may fluctuate based on market conditions
- **Opportunity Cost**: Funds in strategies may miss other opportunities

## Future Development

The Ulysses team is actively developing Port Strategies with a focus on:

1. **Safety First**: Extensive audits and conservative initial parameters
2. **Gradual Rollout**: Starting with the lowest-risk strategies
3. **Community Input**: Governance involvement in strategy selection
4. **Cross-Chain Strategies**: Eventually supporting yield across multiple chains

## Resources

- Strategy proposals will be discussed in the governance forum
- Technical specifications will be published prior to launch
- Audit reports will be made publicly available
