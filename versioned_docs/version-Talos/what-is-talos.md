---
id: introduction
title: What Is Talos?
sidebar_position: 1
---

[//]: # (TODO: Add links to Uniswap V3 specific information)

Welcome to TALOS 👋

Transparent Automated Liquidity Omnichain Strategies (TALOS) is a peer-to-peer[^1] system that was built to reduce the current huge barrier of entry for adoption of concentrated liquidity and elevate the current user experience, specifically for Uniswap V3.

The protocol is implemented as a set of persistent, non-upgradable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries who may selectively restrict access. Talos is open source and licensed under MIT. Once deployed, it will function in perpetuity, with 100% uptime, provided the continued existence of the blockchain deployed in.

## You don't have to manage your liquidity alone

Decentralized liquidity management strategies can function as a *pool together* of concentrated liquidity LPs. This not only automates user positions but can also be employed by DAOs for their LPs, guiding users toward desired and optimal liquidity ranges.

### Types vs Strategy Templates

Talos positions are split into two main *Types*:

- **Vanilla**: Represent a share of one or more UNI V3 NFT positions.
- **Staked**: Represent a share of one or more UNI V3 NFT positions that are all staked in our Uniswap V3 Staker.

*Strategy Templates* encompass rebalancing and reranging strategies that work with both *Types* of positions without requiring any modifications.

New *Strategy Templates* can easily be created by solidity developers. There are multiple audited examples with guides of some possible operations.

The first *Strategy Template* holds a single UNI V3 NFT that anyone can create for any pool. When the price deviates a predefined number of ticks from the center of the position, anyone can call rebalance for the pool to set it at 50/50 again. There is an associated fee to these tasks – if the cost of constantly balancing the position is too large, it either won't happen or the pool or gas depositors may incur losses.

### The future of decentralized liquidity management

Talos *Strategy Templates* are highly versatile, with the possibility to explore strategies that are able to:
- Support multiple NFTs
- Multiple rebalancing ratios
- Fixed expiry dates
- Hedge options
- Treasury solutions
- more.

The creation of *Strategy Templates* is open to everyone, there are different paths being explored for the best way to incentivize creators.

Talos LPs are not ERC-4626, but wrappers will be made available to allow for seamless integration with protocols that natively support ERC-4626.

### Permissionless Systems

The second deviation from traditional markets lies in the permissionless and immutable design of Talos. These decisions draw inspiration from Ethereum's core tenets, emphasizing the ideals of permissionless access and immutability as essential elements for a future where anyone worldwide can access financial services without fear of discrimination or counter-party risk.

Permissionless design ensures the protocol's services are entirely open for public use, without the ability to selectively restrict users. Anyone can contribute liquidity or create new markets at their discretion, departing from traditional financial services that often impose restrictions based on geography, wealth status, and age.

The protocol's immutability means it cannot be upgraded or altered. No entity can pause contracts, reverse trade executions, or modify the protocol's behavior in any way. Talos Governance retains a 20% share of swap fees from all Vanilla positions, a transparent and unalterable arrangement known to all participants beforehand.

It is important to highlight that Staked Talos positions do not incur any protocol fees on emissions. Instead, the owner of the position's boost aggregator can establish fees on earned emissions, which may be subject to change. While staked positions do not generate fees, as they are staked in [Hermes Uniswap v3 Gauges](../Hermes/overview/gauges/uni-v3), any earned swap fees from unstaked positions will be collected by the protocol and allocated as bribes, similar to the process for staked positions.

## Where can I find more information?

For research into the economics of AMMs, game theory, or optimization research, check out [**Uniswap's research**](https://docs.uniswap.org/concepts/research) page.

For new features implemented in V3 that expand and refine the AMM design, see the [**V3 Concepts**](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity) page.

[^1] Ethereum protocols are sometimes referred to as peer-to-contract systems as well. These are similar to a peer-to-peer systems, but with immutable, persistent programs known as smart contracts taking the place of a peer.

## Where can I find more information about ecosystem products?

For info about Maia, please check out our [**Maia docs**](../introduction) page.

For info about Hermes, please check out our [**Hermes docs**](../Hermes/introduction) page.

For info about Ulysses, please check out our [**Ulysses docs**](../Ulysses/introduction) page.
