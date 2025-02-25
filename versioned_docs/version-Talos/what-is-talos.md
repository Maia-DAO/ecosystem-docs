---
id: introduction
title: What Is Talos?
sidebar_position: 1
---

[//]: # 'TODO: Add links to Uniswap V3 specific information'

Welcome to TALOS 👋

Transparent Automated Liquidity Optimized Strategies (TALOS) is a peer-to-peer system built to reduce the significant barriers to adopting concentrated liquidity and elevate the current user experience, specifically for Uniswap V3.

The protocol is implemented as a set of persistent, non-upgradable smart contracts. It prioritizes censorship resistance, security, self-custody, functioning without any trusted intermediaries that may selectively restrict access. Talos is open source and licensed under MIT. Once deployed, this system will function in perpetuity, with 100% uptime, as long as the underlying blockchain exists.

## You Don't Have to Manage Your Liquidity Alone

Decentralized liquidity management strategies can function as a _pool together_ of concentrated liquidity LPs. This not only automates user positions but can also be employed by DAOs for their LPs, guiding users toward desired and optimal liquidity ranges.

### Types of Positions

Talos positions are split into two main _Types_:

- **Vanilla Positions**: These represent a share of one or more UNI V3 NFT positions.

- **Staked Positions**: These represent a share of one or more UNI V3 NFT positions that are staked in our Uniswap V3 Staker.

### Strategy Templates

_Strategy Templates_ encompass rebalancing and reranging strategies that work with both _Types_ of positions without requiring any modifications.

New _Strategy Templates_ can easily be created by solidity developers. There are multiple audited examples with guides of some possible operations.

The first _Strategy Template_ holds a single UNI V3 NFT that anyone can create for any pool. When the price deviates a predefined number of ticks from the center of the position, anyone can call rebalance for the pool to set it at 50/50 again. There is an associated fee to these tasks – if the cost of constantly balancing the position is too large, it either won't happen or the pool or gas depositors may incur losses.

### The Future of Decentralized Liquidity Management

Talos _Strategy Templates_ are highly versatile, with the possibility to explore strategies that are able to:

- Support multiple NFTs
- Implement multiple rebalancing ratios
- Set fixed expiry dates
- Hedge options
- Treasury solutions
- And more!

The creation of _Strategy Templates_ is open to everyone, there are different paths being explored for the best way to incentivize creators.

Talos LPs are not ERC-4626, but wrappers will be made available to allow for seamless integration with protocols that natively support ERC-4626.

### Permissionless Systems

Talos's **permissionless and immutable design**, inspired by Ethereum's core principles, ensures unrestricted global access to financial services, free from discrimination or counterparty risk.

A **permissionless system** means anyone can use the protocol without restrictions—providing liquidity or creating new markets without barriers like geography, wealth, or age.

**Immutability** guarantees that Talos cannot be altered, paused, or manipulated. No entity can pause contracts, reverse trade executions, or modify the protocol's behavior in any way. Talos Governance retains a 20% share of swap fees from all Vanilla positions, a transparent and unalterable arrangement known to all participants beforehand.

It is important to highlight that **Staked Talos positions** do not incur any protocol fees on emissions. Instead, the owner of the position's [Boost Aggregator](../Hermes/overview/gauges/boost-aggregator) can establish fees on earned emissions, which may be subject to change. While staked positions do not generate fees, as they are staked in [Hermes Uniswap v3 Gauges](../Hermes/overview/gauges/uni-v3), any earned swap fees from unstaked positions will be collected by the protocol and allocated as bribes, similar to the process for staked positions.

## Where can I find more information?

For research into the economics of AMMs, game theory, or optimization research, check out [**Uniswap's research**](https://docs.uniswap.org/concepts/research) page.

For new features implemented in V3 that expand and refine the AMM design, see the [**V3 Concepts**](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity) page.

## Where can I find more information about ecosystem products?

For info about Maia, please check out our [**Maia docs**](../introduction) page.

For info about Hermes, please check out our [**Hermes docs**](../Hermes/introduction) page.

For info about Ulysses, please check out our [**Ulysses docs**](../Ulysses/introduction) page.
