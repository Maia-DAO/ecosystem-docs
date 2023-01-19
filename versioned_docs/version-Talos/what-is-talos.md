---
id: introduction
title: What Is Talos?
sidebar_position: 1
---

[//]: # (TODO: Add links to Uniswap V3 specific information)

Welcome to TALOS 👋

Transparent Automated Liquidity Omnichain Strategies (TALOS) is a peer-to-peer[^1] system that was built to reduce the current huge barrier of entry for adoption of concentrated liquidity and elevate the current user experience, specifically for Uniswap V3.

The protocol is implemented as a set of persistent, non-upgradable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries who may selectively restrict access. Talos is open source and licensed under MIT. Once deployed, will function in perpetuity, with 100% uptime, provided the continued existence of the blockchain deployed in.

## You don't have to manage your liquidity alone

Decentralized liquidity management strategies can become a pool together of concentrated liquidity LPs. This helps automate not only user’s positions, but can be used by DAO’s for their own LPs and to guide users to desired and optimal liquidity ranges.

### Types vs Strategy Templates

Talos positions are split into two main *Types*:

- **Vanilla**: Represent a share of one or more UNI V3 NFT positions.
- **Staked**: Represent a share of one or more UNI V3 NFT positions that are all staked in our Uniswap V3 Staker.

*Strategy Templates* are rebalancing and reranging strategies that work with both *Types* of positions without any necessary changes.

New *Strategy Templates* can easily be created by solidity developers. There are multiple audited examples with guides of some possible operations.

The first *Strategy Templates* holds a single UNI V3 NFT that anyone can create for any pool, when the price deviates a predefined number of ticks from the center of the position, anyone can call rebalance for the pool to set it at 50/50 again. You need to take into consideration there is an associated fee to these tasks, if the cost of constant balancing the position is too large, then it either won't happen or the pool or gas depositors may incur losses.

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

The second departure from traditional markets is the permissionless and immutable design of Talos. These design decisions were inspired by Ethereum's core tenets, and our commitment to the ideals of permissionless access and immutability as indispensable components of a future in which anyone in the world can access financial services without fear of discrimination or counter-party risk.

Permissionless design means that the protocol's services are entirely open for public use, with no ability to selectively restrict who can or cannot use them. Anyone can provide liquidity, or create new markets at will. This is a departure from traditional financial services, which typically restrict access based on geography, wealth status, and age.

The protocol is also immutable, in other words not upgradeable. No party is able to pause the contracts, reverse trade execution, or otherwise change the behavior of the protocol in any way.Talos Governance has the right (but no obligation) to divert a percentage of swap fees of any Vanilla positions to a specified address. However, this capability is known to all participants in advance, and to prevent abuse, the percentage is constrained between 10% and 25%. It is worth noting that each Talos position can be launched with a management fee, that cannot be changed after launch.

## Where can I find more information

For research into the economics of AMMs, game theory, or optimization research, check out [**Uniswaps' research**](https://docs.uniswap.org/concepts/research) page.

For new features implemented in V3 that expand and refine the AMM design, see the [**V3 Concepts**](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity) page.

[^1] Ethereum protocols are sometimes referred to as peer-to-contract systems as well. These are similar to a peer-to-peer systems, but with immutable, persistent programs known as smart contracts taking the place of a peer.

## Where can I find more information about ecosystem products

For info about Maia, please check out our [**Maia docs**](../introduction) page.

For info about Hermes, please check out our [**Hermes docs**](../Hermes/introduction) page.

For info about Ulysses, please check out our [**Ulysses docs**](../Ulysses/introduction) page.
