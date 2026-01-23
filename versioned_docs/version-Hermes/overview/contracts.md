---
id: contracts
title: Contract Addresses
sidebar_position: 99
---

# Hermes Contract Addresses

All Hermes Protocol contracts are deployed on **Arbitrum One** (Chain ID: 42161).

## Core Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| HERMES Token | [`0x45940000009600102A1c002F0097C4A500fa00AB`](https://arbiscan.io/address/0x45940000009600102A1c002F0097C4A500fa00AB) | The native governance and utility token |
| bHERMES | [`0x3A0000000000E1007cEb00351F65a1806eCd937C`](https://arbiscan.io/address/0x3A0000000000E1007cEb00351F65a1806eCd937C) | Burned HERMES governance token |
| bHERMES Votes | [`0x5B99ACF131463bFc62FE000b8Bb962097B6734d9`](https://arbiscan.io/address/0x5B99ACF131463bFc62FE000b8Bb962097B6734d9) | Governance voting token |
| bHERMES Gauges | [`0xe6D0aeA7cEf79B08B906e0C455C25042b57b23Ed`](https://arbiscan.io/address/0xe6D0aeA7cEf79B08B906e0C455C25042b57b23Ed) | Gauge voting power token |
| bHERMES Boost | [`0x73A899D7e71393dDf2B1cD8336f820969c709E70`](https://arbiscan.io/address/0x73A899D7e71393dDf2B1cD8336f820969c709E70) | Boost utility token |

## Gauge Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Uniswap V3 Gauge Factory | [`0xE64278005e0F00cd6199d000386b018d7C000000`](https://arbiscan.io/address/0xE64278005e0F00cd6199d000386b018d7C000000) | Factory for deploying Uni V3 gauges |
| Uniswap V3 Staker | [`0x54De3b7b5D1993Db4B2a93C897b5272FBd60e99E`](https://arbiscan.io/address/0x54De3b7b5D1993Db4B2a93C897b5272FBd60e99E) | Staking contract for Uni V3 positions |
| Base V2 Gauge Manager | [`0x0000070059ed0005981800C8d66017bC00500632`](https://arbiscan.io/address/0x0000070059ed0005981800C8d66017bC00500632) | Manages gauge operations |
| Flywheel Gauge Rewards | [`0x000000b53E67c90000e1C22e1530c70020657Ff7`](https://arbiscan.io/address/0x000000b53E67c90000e1C22e1530c70020657Ff7) | Distributes gauge rewards |
| Flywheel Booster | [`0x006f48258FC9562F00003b9700009231008b0600`](https://arbiscan.io/address/0x006f48258FC9562F00003b9700009231008b0600) | Manages boost balances |

## Minter & Emissions

| Contract | Address | Description |
|----------|---------|-------------|
| Base V2 Minter | [`0x000000B473F20DEA03618d00315900eC5900dc59`](https://arbiscan.io/address/0x000000B473F20DEA03618d00315900eC5900dc59) | HERMES token minter |

## Bribes & Partners

| Contract | Address | Description |
|----------|---------|-------------|
| Bribes Factory | [`0x863011414b400340178Ec329647a2aa55f724D70`](https://arbiscan.io/address/0x863011414b400340178Ec329647a2aa55f724D70) | Factory for creating bribes |
| Partner Manager Factory | [`0x8c272715be844488Ff7AAf201d51D8FA50149387`](https://arbiscan.io/address/0x8c272715be844488Ff7AAf201d51D8FA50149387) | Factory for partner vaults |

## Helper Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Rewards Info Helper | [`0x3219f8cf74ABb16D7C0923dE58a48Edde997D9Db`](https://arbiscan.io/address/0x3219f8cf74ABb16D7C0923dE58a48Edde997D9Db) | Helper for querying rewards |
| ERC20 Boost Helper | [`0x127991cC764B05fe6C9257A0EC3Be9E4f48Ad744`](https://arbiscan.io/address/0x127991cC764B05fe6C9257A0EC3Be9E4f48Ad744) | Helper for boost operations |
| Restake Helper | [`0xCc06B09F822eeC7aD6c30C59c060647C3Aab2D06`](https://arbiscan.io/address/0xCc06B09F822eeC7aD6c30C59c060647C3Aab2D06) | Helper for restaking |
| Flywheel Helper | [`0xf3f35E27AE1B3ab928327F72391B29f1bFd8DAF6`](https://arbiscan.io/address/0xf3f35E27AE1B3ab928327F72391B29f1bFd8DAF6) | Helper for flywheel operations |

## Governance Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Governor Severity 1 | [`0xEdf6aD5f569485090ECa00359E3e3813Be985809`](https://arbiscan.io/address/0xEdf6aD5f569485090ECa00359E3e3813Be985809) | Low severity proposals |
| Governor Severity 2 | [`0xF2831E87088f2E113050c4EE5EB138978eAEBb49`](https://arbiscan.io/address/0xF2831E87088f2E113050c4EE5EB138978eAEBb49) | Medium-low severity proposals |
| Governor Severity 3 | [`0x428f076301026c7665F7F70EEBbB391506aEc2a1`](https://arbiscan.io/address/0x428f076301026c7665F7F70EEBbB391506aEc2a1) | Medium severity proposals |
| Governor Severity 4 | [`0x45E8089C4C033cb28bb652a153dDE49182Bae49a`](https://arbiscan.io/address/0x45E8089C4C033cb28bb652a153dDE49182Bae49a) | Medium-high severity proposals |
| Governor Severity 5 | [`0xb23c7BE6c14a145a7ca33083Fb6e8B3fC9c820aC`](https://arbiscan.io/address/0xb23c7BE6c14a145a7ca33083Fb6e8B3fC9c820aC) | High severity proposals |

## Timelock Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Timelock Severity 1 | [`0x07D87055E82EAf4851Dfa251a5d79A7E99Bd789A`](https://arbiscan.io/address/0x07D87055E82EAf4851Dfa251a5d79A7E99Bd789A) | Timelock for severity 1 |
| Timelock Severity 2 | [`0xb97c3D79Af827c915E5F6B492e6bd99D653F8cC7`](https://arbiscan.io/address/0xb97c3D79Af827c915E5F6B492e6bd99D653F8cC7) | Timelock for severity 2 |
| Timelock Severity 3 | [`0xaCE7B2BbD13acE4E23F622209c46C9F2885edd49`](https://arbiscan.io/address/0xaCE7B2BbD13acE4E23F622209c46C9F2885edd49) | Timelock for severity 3 |
| Timelock Severity 4 | [`0x716147a2169246c09f47D9880Bf85D49093A92C4`](https://arbiscan.io/address/0x716147a2169246c09f47D9880Bf85D49093A92C4) | Timelock for severity 4 |
| Timelock Severity 5 | [`0xB4523B4541Ab27337AB8389188a545BF3d07d5E3`](https://arbiscan.io/address/0xB4523B4541Ab27337AB8389188a545BF3d07d5E3) | Timelock for severity 5 |

## Verifying Contracts

All contracts can be verified on [Arbiscan](https://arbiscan.io/).
