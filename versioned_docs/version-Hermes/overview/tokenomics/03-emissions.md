---
id: emissions
title: Emissions
---

# HERMES Emissions

HERMES has an inflationary supply, and its emissions are the primary driver of yield generation within the Hermes Protocol. The emissions mechanism is designed to direct inflation toward revenue-generating activities rather than simply increasing locked value.

## Emission Schedule

Emissions are determined by the Minter contract based on the circulating supply of HERMES:

| Factor | Impact on Emissions |
|--------|-------------------|
| Higher circulating supply | Higher weekly emissions |
| More HERMES burned to bHERMES | Lower circulating supply, lower emissions |
| Theoretical limit | If all HERMES burned, emissions stop |

This creates a self-balancing system where committed token holders (bHERMES holders) benefit from reduced dilution.

## Weekly Distribution

```
┌─────────────────────────────────────────────────────┐
│              Weekly HERMES Emissions                │
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │           Gauge Emissions                   │   │
│   │   Distributed based on bHERMES Gauge votes  │   │
│   └─────────────────────────────────────────────┘   │
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │           DAO Allocation (0-30%)            │   │
│   │     Protocol development & operations       │   │
│   └─────────────────────────────────────────────┘   │
│                                                     │
│   ┌─────────────────────────────────────────────┐   │
│   │           bHERMES Rebase                    │   │
│   │   Increases HERMES:bHERMES conversion ratio │   │
│   └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Gauge Emissions

The majority of weekly emissions (70-100%) are distributed to gauges based on [bHERMES Gauges](./utility-tokens/01-bhermes-gauges.md) voting:

- **Epoch timing**: Votes are tallied at the end of each epoch (Thursday 00:00 UTC)
- **Linear distribution**: Emissions are distributed linearly throughout the epoch
- **Vote weight**: Each gauge receives emissions proportional to votes it received
- **Revenue alignment**: Voters are incentivized to vote for gauges generating the most revenue

### DAO Emissions

Up to 30% of weekly emissions can be allocated to the DAO for:

| Use Case | Description |
|----------|-------------|
| Protocol Development | Funding ongoing development work |
| Security | Audits, bug bounties, and security measures |
| Marketing | Promotional activities and partnerships |
| Operations | Infrastructure and operational costs |
| Grants | Community grants and ecosystem development |

DAO allocation is determined by governance and serves as an incentive for [bHERMES Votes](./utility-tokens/03-bhermes-votes.md) holders to participate actively.

### bHERMES Rebase

The rebase mechanism protects bHERMES holders from dilution caused by new emissions. When HERMES is burned to create bHERMES, a portion of weekly emissions is allocated to increase the conversion ratio.

**How It Works**

The rebase amount is calculated using the formula:

```
rebase = (HERMES burned) × (weekly emissions) / (HERMES total supply)
```

This allocation increases the HERMES:bHERMES conversion ratio over time, meaning each bHERMES becomes redeemable for more HERMES.

| Aspect | Description |
|--------|-------------|
| Purpose | Dilution protection for bHERMES holders |
| Trigger | Automatically applied during weekly emission distribution |
| Effect | Increases the amount of HERMES each bHERMES represents |
| Beneficiaries | All bHERMES holders proportionally |

**Why It Matters**

Without the rebase mechanism, new emissions would dilute existing bHERMES holders. The rebase ensures that early participants maintain their proportional share of the ecosystem as new HERMES is minted. This creates a stronger incentive for long-term commitment to the protocol.

## Emission Flow

### Epoch Cycle

1. **Epoch Start** (Thursday 00:00 UTC)
   - Previous epoch's votes are finalized
   - New emissions begin distributing based on vote weights

2. **During Epoch** (7 days)
   - Emissions flow linearly to gauges
   - Users can change votes (except during grace period)
   - Stakers accrue rewards based on their position

3. **Grace Period** (Wednesday 23:00 UTC - Thursday 00:00 UTC)
   - 1-hour window before epoch end
   - Votes can only be decreased, not increased
   - Prevents last-minute vote manipulation

4. **Epoch End** (Thursday 00:00 UTC)
   - Bribes and fees distributed to voters
   - Cycle repeats

### From Emission to Reward

```
Minter Contract
      │
      ├──▶ bHERMES Rebase (increases conversion ratio)
      │
      ▼ (remaining to gauges)
Gauge Controller
      │
      ▼ (distributes by vote weight)
Individual Gauges
      │
      ▼ (distributes by liquidity × time in range × boost)
Liquidity Providers
```

## Emission Economics

### Supply Dynamics

| Event | Effect on Emissions |
|-------|-------------------|
| HERMES burned to bHERMES | Decreases circulating supply → Lower future emissions |
| HERMES sold on market | Remains in circulation → No change to emissions |
| Gauge rewards claimed | Added to circulation → May increase future emissions |

### Deflationary Pressure

The bHERMES burning mechanism creates sustained deflationary pressure:

- Committed participants permanently remove HERMES from circulation
- Lower circulation = lower emissions
- Remaining holders benefit from reduced dilution

## Revenue vs. Emissions

Unlike simple inflation models, Hermes directs emissions toward productive use:

| Traditional Model | Hermes Model |
|-------------------|--------------|
| Emissions → Locked TVL | Emissions → Revenue-generating gauges |
| Value extraction | Value creation |
| Unsustainable | Self-optimizing |

bHERMES voters are incentivized to direct emissions to gauges that:
- Generate the most trading fees
- Attract the highest bribes
- Provide the best returns

This creates a flywheel where emissions drive revenue, which attracts more capital, generating more fees and bribes.
