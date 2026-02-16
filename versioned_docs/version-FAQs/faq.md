---
id: faq
title: FAQs
sidebar_position: 1
---

## 1 - What are the legacy protocol websites and how do I remove my old assets?

If you have assets on older versions of Maia DAO protocols, you can access them through the following legacy websites:

**Hermes V1** - https://hermes.maiadao.io  
Actions available: Unstake tokens and withdraw liquidity

**Maia V1** - https://v1.maiadao.io/  
Actions available: Claim old rewards

---

## 2 - What does the APR displayed mean (e.g., 7.12% → 175.65%)?

The APR range indicates the reward range from a [Uniswap V3 Gauge](../version-Hermes/overview/gauges/02-uni-v3-gauges.md):

- **Left Side (Minimum APR)**: Represents the APR with full-range liquidity and no boost, yielding 40% of rewards.
- **Right Side (Maximum APR)**: Represents the APR with the narrowest tick width and maximum 2.5x boost.

A narrower range increases APR but also raises the risk of impermanent loss (IL). This approach is generally more useful for closely correlated or similarly priced assets, where price fluctuations are minimal.

For more information on concentrated liquidity, visit these [Uniswap Resources on Concentrated Liquidity](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity/).

---

## 3 - How Does NFT Position Boosting Work?

When you stake your Uniswap V3 NFT position into a gauge using the HermesV2 UI, the system automatically boosts it if you have [bHERMES-Boost](../version-Hermes/overview/tokenomics/utility-tokens/02-bhermes-boost.md) tokens delegated to you. Here’s how it works:

1. **First Staked NFT**: The first NFT you stake into a gauge receives the boost.
2. **Changing the Boosted NFT**: If you want to boost a different NFT, unstake the current one to detach the boost, then stake the new NFT.

Ensure you have enough [bHERMES](../version-Hermes/overview/tokenomics/01-bhermes.md), which you can acquire through the **Swap** or **Burn** tabs.

---

## 4 - How Does Burning HERMES into bHERMES work?

Burning HERMES into [bHERMES](../version-Hermes/overview/tokenomics/01-bhermes.md) is a one way irreversible process. Here’s how it works:

1. Go to the **Burn** tab in the Hermes V2 UI.
2. Select the amount of HERMES you want to burn.
3. Click **Burn**.

The UI automatically claims all utility tokens and delegates them for you, granting position [boosting](../version-Hermes/overview/tokenomics/utility-tokens/02-bhermes-boost.md), [gauge](../version-Hermes/overview/tokenomics/utility-tokens/02-bhermes-gauges.md), and [governance](../version-Hermes/overview/tokenomics/utility-tokens/02-bhermes-votes.md) voting capabilities. This process ensures your bHERMES is ready for use immediately.

---

## 5 - What Is the bHERMES 'Burn Index'?

The [bHERMES](../version-Hermes/overview/tokenomics/01-bhermes.md) burn index dictates the amount of HERMES required to mint bHERMES. As emissions increase, the index grows, meaning that each bHERMES token will cost more HERMES to create. This provides a form of inflation protection for bHERMES holders, as their tokens become more valuable relative to the amount of HERMES needed for new mints. This mechanism is similar in effect to the original ve(3,3) rebases.

---

## 6 - I Bought bHERMES, Why Can't I Boost and Vote for Gauges and Governance?

After buying [bHERMES](../version-Hermes/overview/tokenomics/01-bhermes.md), you need to claim your utility tokens to access its utility tokens. Here's how:

1. Go to the **Burn** page in the Hermes V2 UI.
2. Access the **Claim** tab.
3. Select "MAX" and claim all your outstanding utility tokens.

The system will automatically delegate these tokens to you, making them ready for use across the platform.

---

## 7 - Why Can't I Transfer My bHERMES?

Once you claim your utility tokens, your [bHERMES](../version-Hermes/overview/tokenomics/01-bhermes.md) becomes non-transferable. To revert this and make your bHERMES transferable, you need to forfeit the utility tokens. Here’s how:

1. Go to the **Burn** page in the Hermes V2 UI.
2. Access the **Forfeit** tab.
3. Input the amount of bHERMES you want to forfeit and click **Forfeit**.

Make sure to remove enough gauge votes or unstake boosted positions, as you can't forfeit utility tokens that are currently in use.

---

## 8 - How Does Staking MAIA for vMAIA Work?

Here's how you can Stake MAIA for [vMAIA](../version-Maia/overview/tokenomics/01-vMaia.md):

1. Go to the **Stake** page in the Hermes V2 UI.
2. Input the amount of MAIA you want to stake.
3. Click **Stake**.

You can deposit MAIA at any time, but withdrawals are only allowed on the first Tuesday of each month. When you stake, the UI automatically claims all your utility tokens, The amount of utilities available are based on the current bHERMES rate, i.e., the bHERMES backing for each MAIA. These utilities are delegated to you, granting gauge voting and governance power over both Hermes and MAIA governance.

---

## 9 - What Is the MAIA 'bHERMES Rate'?

The bHERMES Rate represents the amount of bHERMES backing each MAIA token. This rate is designed to increase over time as more bHERMES tokens are accumulated by the DAO. MAIA can raise this rate on demand, enhancing the intrinsic value of each MAIA token. This mechanism provides ongoing value appreciation for MAIA holders accessible through staking.

---

## 10 - Why Do I See More Balance in the UI Than in the Block Explorer?

The additional balance you see in the UI comes from your [Virtual Account](../version-Ulysses/overview/omnichain/05-virtual-account.md), a contract managed by your externally owned account (EOA). This Virtual Account facilitates the remote management of assets. Any assets you previously owned in V1 have been migrated and deposited into this account. You can use them across the UI seamlessly, as the interaction with the Virtual Account is fully integrated and abstracted from the user experience.

---

## 11 - What do the verified badges next to strategies mean?

The verified badge indicates that the strategy was created by a known entity. Some of the initial verified strategies were introduced by the team as part of the kickstart process, and Maia Boosted strategies also qualify as verified strategies.
