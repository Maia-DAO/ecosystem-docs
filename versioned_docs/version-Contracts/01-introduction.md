---
id: introduction
title: Introduction
sidebar_position: 1
---

Maia DAO V2 Ecossytem Technical References, the rest of our documentation can be found [here](https://v2-docs.maiadao.io/). Docs are split into 4 protocols, in which you will find relevant information about how each of these protocols work in the system.

The Maia DAO Ecosystem is designed to significantly enhance capital efficiency and utility for the Maia DAO community compared to the previous V1 . The V2 ecosystem is made up of 4 protocols: Hermes, Maia, Talos and Ulysses.

Previous Audits by Zellic can be found in our [Github](https://github.com/Maia-DAO/maia-ecosystem-monorepo/tree/main). There are two audits, each for different parts of the codebase:

- [Rewards System](https://github.com/Maia-DAO/maia-ecosystem-monorepo/tree/1-audit)
- [Ulysses Protocol](https://github.com/Maia-DAO/maia-ecosystem-monorepo/tree/2-audit)

:::caution
Changes have been made to the contracts since these audits that are not reflected in this repositories. Updated code is available in the [Code4rena Contest](https://github.com/code-423n4/2023-09-maia).
:::

## Hermes

The new iteration of [Hermes](versioned_docs/version-Hermes/what-is-hermes.md) provides significant improvements over V1, which is a Solidly fork. There are three ideas behind the revamped model:

- Lockers direct emissions to gauges and receive the revenue of each gauge they vote for, proportional to the amount of votes for that gauge
- Lockers can boost their liquidity farming rewards from gauges by up to 2.5x
- Lockers receive rebases weekly proportional to inflation

One of the improvements made is that instead of veNFTs that are locked for 4 years, every lock is made permanent. Claiming rebases was also substituted with a deposit only ERC4626 tokenized vault, which instead of claiming rebases, the burn (permanent lock) rate is increased. This allows users only to vote once and remove unecessary weekly tasks to optimize their funds.

Hermes also introduced a new gauge system, that accepts any kind of yield. The first gauges to be deployed are the Uniswap V3 gauges, which allow users to stake their NFTs and receive rewards. The gauges also allow users to boost their rewards up to 2.5x.

## Maia

[Maia](versioned_docs/version-Maia/what-is-maia.md) is the first implementation of the Partner bHermes Vault. It allows users to stake their Maia converting it to vMaia and receive two of the three bHermes utilities deposited in the vault. The utilities are: weight and governance. The third utility is boost, which is not claimable by users, but instead used by Maia's Treasury to host a boost aggregator with Talos Positions to enable further accumulation of hermes.

## Talos

[Talos](versioned_docs/version-Talos/what-is-talos.md) is decentralized Uniswap V3 Liquidity Management protocol. It allows anyone to create and manage new LPs. These LPs always start 50/50 and if they have a manager, it can call two strategies: rebalancing and reranging. Talos LPs are Uni V3 NFT wrappers, while this is less gas efficient, it allows for easier integrations with other protocols, like staking in Uniswap V3 gauges.

Staked Talos Positions need to be attached to a boost aggregator, anyone can deploy one using Boost Aggregator Factory. This allows users to pool together and share the same boost.

## Ulysses

[Ulysses](versioned_docs/version-Ulysses/what-is-Ulysses.md) is divided in two separate concepts: Virtualized and Unified Liquidity. Virtualized liquidity is made possible by using Anycall v7 as our messaging layer and means that an asset deposited from a specific chain, is recognized as a different asset from the "same" asset but from a different chain (ex: arb ETH is different from mainnet ETH). Unified Liquidity then unifies these tokens using a stableswap AMM and then depositing them in a Unified Liquidity Token, which is a Multi-Asset ERC4626 tokenized vault. This allows users to deposit any asset from any chain and receive a 1:1 representation of the underlying assets. These Unified Liquidity Tokens can then be used in any other protocol, like Uniswap v3.

## Overview


- [./reference/gauges/UniswapV3Gauge](./reference/gauges/UniswapV3Gauge):
Handles rewards for distribution, boost attaching/detaching and accruing bribes for a strategy. This gauge was designed for Uniswap V3 liquidity mining, it is responsible for creating and depositing weekly rewards in UniswapV3Staker. The minimum width represents the minimum range a UniV3 NFT must have to be illegible for staking.
- [./reference/gauges/BaseV2Gauge](./reference/gauges/BaseV2Gauge):
Handles rewards for distribution, boost attaching/detaching and accruing bribes for a given strategy.
- [./reference/gauges/factories/BaseV2GaugeManager](./reference/gauges/factories/BaseV2GaugeManager):
Handles the management of gauges and gauge factories.
- [./reference/gauges/factories/UniswapV3GaugeFactory](./reference/gauges/factories/UniswapV3GaugeFactory):
Handles the creation of new Uniswap V3 gauges and the management of existing ones. Adds and removes gauges, and allows the bribe factory to add and remove bribes to gauges.
- [./reference/gauges/factories/BaseV2GaugeFactory](./reference/gauges/factories/BaseV2GaugeFactory):
Handles the creation of new gauges and the management of existing ones. Adds and removes gauges, and allows the bribe factory to add and remove bribes to gauges.
- [./reference/gauges/factories/BribesFactory](./reference/gauges/factories/BribesFactory):
Responsible for creating new bribe flywheel instances. Owner has admin rights to add bribe flywheels to gauges.
- [./reference/erc-4626/ERC4626](./reference/erc-4626/ERC4626):
Minimal ERC4626 tokenized Vault implementation
- [./reference/erc-4626/ERC4626MultiToken](./reference/erc-4626/ERC4626MultiToken):
Minimal ERC4626 tokenized Vault multi asset implementation
- [./reference/erc-4626/UlyssesERC4626](./reference/erc-4626/UlyssesERC4626):
Minimal ERC4626 tokenized 1:1 Vault implementation
- [./reference/erc-4626/ERC4626DepositOnly](./reference/erc-4626/ERC4626DepositOnly):
Minimal Deposit Only ERC4626 tokenized Vault implementation
- [./reference/erc-20/ERC20MultiVotes](./reference/erc-20/ERC20MultiVotes):
an ERC20 extension that allows delegations to multiple delegatees up to a user's balance on a given block.
- [./reference/erc-20/ERC20Boost](./reference/erc-20/ERC20Boost):
This contract is meant to be used to represent a token that can boost holders' rewards in other contracts. Holders can have their boost attached to gauges and cannot transfer their bHermes until they remove their boost. Only gauges can attach and detach boost from a user. The current user's boost and total supply are stored when attaching. The boost is then detached when the user removes their boost or when the gauge is removed. A "gauge" is represented by an address that distributes rewards to users periodically or continuously.
- [./reference/erc-20/ERC20Gauges](./reference/erc-20/ERC20Gauges):
This contract is meant to be used to support gauge style votes with weights associated with resource allocation. Only after delegating to himself can a user allocate weight to a gauge. Holders can allocate weight in any proportion to supported gauges. A "gauge" is represented by an address that would receive the resources periodically or continuously. For example, gauges can be used to direct token emissions, similar to Curve or Hermes V1. Alternatively, gauges can be used to direct another quantity such as relative access to a line of credit.
- [./reference/governance/GovernorBravoDelegator](./reference/governance/GovernorBravoDelegator): 
Upgradeable Governance and on-chain execution contract.
- [./reference/governance/GovernorBravoDelegateMaia](./reference/governance/GovernorBravoDelegateMaia): 
Implementation of Maia Ecosystem Governance and on-chain execution.
- [./reference/governance/GovernorBravoInterfaces](./reference/governance/GovernorBravoInterfaces): 
Library with Governor Bravo Interfaces.
- [./reference/ulysses-omnichain/ArbitrumBranchBridgeAgent](./reference/ulysses-omnichain/ArbitrumBranchBridgeAgent): 
Used for interfacing with Users/Routers acting as a middleman to access Anycall cross-chain messaging and Port communication for asset management connecting Arbitrum Branch Chain contracts and the root omnichain environment.
- [./reference/ulysses-omnichain/ArbitrumBranchPort](./reference/ulysses-omnichain/ArbitrumBranchPort): 
Used to manage the deposit and withdrawal of underlying assets from the Arbitrum Branch Chain in response to Branch Bridge Agents' requests. Manages Bridge Agents and their factories as well as the chain's strategies and their tokens.
- [./reference/ulysses-omnichain/ArbitrumCoreBranchRouter](./reference/ulysses-omnichain/ArbitrumCoreBranchRouter): 
Responsible for permissionlessly adding new tokens or Bridge Agents to the system as well as key governance enabled system functions (i.e. `addBridgeAgentFactory`).
- [./reference/ulysses-omnichain/MulticallRootRouter](./reference/ulysses-omnichain/MulticallRootRouter): 
Root Router implementation for interfacing with third party dApps present in the Root Omnichain Environment.
- [./reference/ulysses-omnichain/CoreRootRouter](./reference/ulysses-omnichain/CoreRootRouter): 
Responsible for permissionlessly adding new tokens or Bridge Agents to the system as well as key governance enabled system functions (i.e. `toggleBranchBridgeAgentFactory`). Desingated for Root chain deployment in the Ulysses Omnichain Liqudity System.
- [./reference/ulysses-omnichain/RootBridgeAgentExecutor](./reference/ulysses-omnichain/RootBridgeAgentExecutor): 
Contract used for requesting token settlement clearance and executing transaction requests from the branch chains.
- [./reference/ulysses-omnichain/CoreBranchRouter](./reference/ulysses-omnichain/CoreBranchRouter): 
Allows users to permissionlessly add new tokens or Bridge Agents to the system. As well as executes key governance enabled system functions (i.e. `addBridgeAgentFactory`). Designated for Ulysses Omnichain Liquidity System branch chain deployment.
- [./reference/ulysses-omnichain/RootBridgeAgent](./reference/ulysses-omnichain/RootBridgeAgent): 
Contract responsible for interfacing with Users and Routers acting as a middleman to access Anycall cross-chain messaging and Port communication for asset management.
- [./reference/ulysses-omnichain/VirtualAccount](./reference/ulysses-omnichain/VirtualAccount): 
A Virtual Account allows users to manage assets and perform interactions remotely while allowing dApps to keep encapsulated user balance for accounting purposes.
- [./reference/ulysses-omnichain/BranchPort](./reference/ulysses-omnichain/BranchPort): 
This contract is used to manage the deposit and withdrawal of underlying assets from the Branch Chain in response to Branch Bridge Agents' requests. Manages Bridge Agents and their factories as well as the chain's strategies and their tokens.
- [./reference/ulysses-omnichain/BranchBridgeAgent](./reference/ulysses-omnichain/BranchBridgeAgent): 
Contract for deployment in Branch Chains of Omnichain System, responible for
interfacing with Users and Routers acting as a middleman to access Anycall cross-chain messaging and  requesting / depositing  assets in the Branch Chain's Ports.
- [./reference/ulysses-omnichain/BaseBranchRouter](./reference/ulysses-omnichain/BaseBranchRouter): 
Base contract for deployment in Branch Chains of the Ulysses Omnichain System, additional logic can be implemented to perform actions before sending cross-chain requests, as well as in response to requests from the Root Omnichain Environment.
- [./reference/ulysses-omnichain/RootPort](./reference/ulysses-omnichain/RootPort): 
Used to manage the deposit and withdrawal of assets between the Root Omnichain Environment an every Branch Chain in response to Root Bridge Agents requests. Manages Bridge Agents and their factories as well as key governance enabled actions such as adding new chains.
- [./reference/ulysses-omnichain/BranchBridgeAgentExecutor](./reference/ulysses-omnichain/BranchBridgeAgentExecutor): 
Used for requesting token deposit clearance and executing transactions in response to requests from the root environment.
- [./reference/ulysses-omnichain/token/ERC20hTokenRoot](./reference/ulysses-omnichain/token/ERC20hTokenRoot): 
1:1 ERC20 representation of a token deposited in a Branch Chain's Port. ERC20 hToken contract deployed in the Root Chain of the Ulysses Omnichain Liquidity System
- [./reference/ulysses-omnichain/token/ERC20hTokenBranch](./reference/ulysses-omnichain/token/ERC20hTokenBranch): 1:1 ERC20 representation of a token deposited in a  Branch Chain's Port. Is only minted upon user request otherwise underlying tokens are cleared and the matching Root hToken has been burned. Contract designated for deployment in the Branch Chains of the Ulysses Omnichain Liquidity System.
- [./reference/ulysses-omnichain/factories/BranchBridgeAgentFactory](./reference/ulysses-omnichain/factories/BranchBridgeAgentFactory): 
Factory contract for allowing permissionless deployment of new Branch Bridge Agents which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [./reference/ulysses-omnichain/factories/RootBridgeAgentFactory](./reference/ulysses-omnichain/factories/RootBridgeAgentFactory): 
Factory contract used to deploy new Root Bridge Agents responsible which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [./reference/ulysses-omnichain/factories/ERC20hTokenBranchFactory](./reference/ulysses-omnichain/factories/ERC20hTokenBranchFactory): 
Factory contract allowing for permissionless deployment of new Branch hTokens in Branch Chains of Ulysses Omnichain Liquidity Protocol. This contract is called by the chain's Core Branch Router.
- [./reference/ulysses-omnichain/factories/ERC20hTokenRootFactory](./reference/ulysses-omnichain/factories/ERC20hTokenRootFactory): 
Factory contract allowing for permissionless deployment of new Root hTokens in the Root Chain of Ulysses Omnichain Liquidity Protocol. This contract is called by the chain's Core Root Router.
- [./reference/ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory](./reference/ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory):
Factory contract for allowing permissionless deployment of new Arbitrum Branch Bridge Agents which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [./reference/ulysses-omnichain/lib/AnycallFlags](./reference/ulysses-omnichain/lib/AnycallFlags): 
Library of Anycall Flags
- [./reference/ulysses-amm/UlyssesRouter](./reference/ulysses-amm/UlyssesRouter):
This contract routes and adds/removes liquidity from Ulysses Pools deployed by the Ulysses Factory, it allows users to set maximum slippage.
- [./reference/ulysses-amm/UlyssesToken](./reference/ulysses-amm/UlyssesToken):
ERC4626 multiple token implementation intended for Ulysses Pools. Balances are always 1 : 1 with the underlying assets.
- [./reference/ulysses-amm/UlyssesPool](./reference/ulysses-amm/UlyssesPool):
This contract is stableswap AMM that uses it's implemention of the Delta Algorithm to manage the LP's balances and transfers between LPs.
- [./reference/ulysses-amm/factories/UlyssesFactory](./reference/ulysses-amm/factories/UlyssesFactory):
This contract is responsible for creating new Ulysses Tokens and Ulysses Pools.
- [./reference/uni-v3-staker/UniswapV3Staker](./reference/uni-v3-staker/UniswapV3Staker):
Allows staking non-fungible liquidity tokens in exchange for reward tokens.
- [./reference/uni-v3-staker/libraries/RewardMath](./reference/uni-v3-staker/libraries/RewardMath):
Allows computing rewards given some parameters of boost, stakes and incentives.
- [./reference/uni-v3-staker/libraries/NFTPositionInfo](./reference/uni-v3-staker/libraries/NFTPositionInfo):
Encapsulates the logic for getting info about a NFT token ID.
- [./reference/uni-v3-staker/libraries/IncentiveId](./reference/uni-v3-staker/libraries/IncentiveId):
This library is responsible for computing the incentive identifier.
- [./reference/uni-v3-staker/libraries/IncentiveTime](./reference/uni-v3-staker/libraries/IncentiveTime):
This library is responsible for computing the incentive start and end times.
- [./reference/rewards/FlywheelCoreInstant](./reference/rewards/FlywheelCoreInstant):
Flywheel Instant is a general framework for managing token incentives that should be accrued atomically. It takes a single reward stream to various *strategies* such as staking LP tokens and divides them among *users* of those strategies.
- [./reference/rewards/FlywheelCoreStrategy](./reference/rewards/FlywheelCoreStrategy):
Flywheel Strategy is a general framework for managing token incentives. It takes reward streams per *strategies* such as staking LP tokens and divides them among *users* of those strategies.
- [./reference/rewards/base/BaseFlywheelRewards](./reference/rewards/base/BaseFlywheelRewards):
Determines how many rewards accrue to each strategy globally over a given time period.
- [./reference/rewards/base/FlywheelCore](./reference/rewards/base/FlywheelCore):
Flywheel is a general framework for managing token incentives. It takes reward streams to various *strategies* such as staking LP tokens and divides them among *users* of those strategies.
- [./reference/rewards/rewards/FlywheelBribeRewards](./reference/rewards/rewards/FlywheelBribeRewards):
Distributes rewards for allocation to voters at the end of each epoch in accordance to votes.
- [./reference/rewards/rewards/FlywheelGaugeRewards](./reference/rewards/rewards/FlywheelGaugeRewards):
Distributes rewards from a stream based on gauge weights.
- [./reference/rewards/rewards/FlywheelInstantRewards](./reference/rewards/rewards/FlywheelInstantRewards):
This contract is responsible for strategy rewards management. At any moment all the rewards can be accrued from any strategy from the general rewards depot for subsequent distribution. The reward depot serves as a pool of rewards.
- [./reference/rewards/rewards/FlywheelAcummulatedRewards](./reference/rewards/rewards/FlywheelAcummulatedRewards):
This contract is responsible for strategy rewards management. Once every cycle all the rewards can be accrued from the strategy's corresponding rewards depot for subsequent distribution. The reward depot serves as a pool of rewards.
- [./reference/rewards/booster/FlywheelBoosterGaugeWeight](./reference/rewards/booster/FlywheelBoosterGaugeWeight):
The Booster module is an optional module for virtually boosting or otherwise transforming user balances. If a booster is not configured, the strategies ERC-20 balanceOf/totalSupply will be used instead. Boosting logic can be associated with referrals, vote-escrow, or other strategies.
- [./reference/rewards/depots/SingleRewardsDepot](./reference/rewards/depots/SingleRewardsDepot):
Holds rewards to be distributed by a Flywheel Rewards distributor contract.
- [./reference/rewards/depots/MultiRewardsDepot](./reference/rewards/depots/MultiRewardsDepot):
Holds multiple rewards to be distributed to Flywheel Rewards distributor contracts. When `getRewards()` is called by an added flywheel rewards, it transfers its balance of the associated assets to its flywheel rewards contract.
- [./reference/rewards/depots/RewardsDepot](./reference/rewards/depots/RewardsDepot):
Holds a single reward token to be distributed to Flywheel Rewards distributor contracts. When `getRewards()` is called by an added flywheel rewards, it transfers all of the its balance to the flywheel rewards contract.
- [./reference/maia/vMaia](./reference/maia/vMaia):
vMaia is an ERC-4626 compliant MAIA token which: distributes bHermes utility tokens (Weight, Governance) and Maia Governance in exchange for staking MAIA. Withdraw is only allowed once per month, during the 1st Tuesday (UTC+0) of the month.
- [./reference/maia/PartnerUtilityManager](./reference/maia/PartnerUtilityManager):
When implemented, this contract allows for the partner management of bHermes utility tokens.
- [./reference/maia/factories/PartnerManagerFactory](./reference/maia/factories/PartnerManagerFactory):
This contract is used to manage the list of partners and vaults.
- [./reference/maia/tokens/Maia](./reference/maia/tokens/Maia):
ERC20 representing a share of the Maia ecosystem.
- [./reference/maia/tokens/ERC4626PartnerManager](./reference/maia/tokens/ERC4626PartnerManager):
Partner Manager is an ERC-4626 compliant Partner token which: distributes bHermes utility tokens (Weight, Boost, Governance) in exchange for staking Partner tokens.
- [./reference/maia/libraries/DateTimeLib](./reference/maia/libraries/DateTimeLib):
Library for date time operations. To get the current month and check if it is the first Tuesday of the month.
- [./reference/talos/TalosManager](./reference/talos/TalosManager):
TalosManager is a Uniswap V3 yield enhancement contract which acts as intermediary between the user who wants to provide liquidity to specific pools and earn fees from such actions. The contract ensures that user position is in range and earns the maximum amount of fees available at current liquidity utilization rate.
- [./reference/talos/TalosStrategyVanilla](./reference/talos/TalosStrategyVanilla):
Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.
- [./reference/talos/TalosStrategyStaked](./reference/talos/TalosStrategyStaked):
Tokenized Vault implementation for a staked Uniswap V3 Non-Fungible Positions.
- [./reference/talos/TalosOptimizer](./reference/talos/TalosOptimizer):
Contains Optimizer variables used by Talos LPs that may only be modified by the governance.
- [./reference/talos/factories/BoostAggregatorFactory](./reference/talos/factories/BoostAggregatorFactory):
This contract is responsible for creating new BoostAggregators.
- [./reference/talos/factories/TalosStrategyVanillaFactory](./reference/talos/factories/TalosStrategyVanillaFactory):
This contract is used to create new TalosStrategyVanilla contracts.
- [./reference/talos/factories/TalosStrategyStakedFactory](./reference/talos/factories/TalosStrategyStakedFactory):
This contract is used to create new TalosStrategyStaked contracts.
- [./reference/talos/factories/OptimizerFactory](./reference/talos/factories/OptimizerFactory):
This contract is responsible for creating new Talos Optimizers.
- [./reference/talos/factories/TalosBaseStrategyFactory](./reference/talos/factories/TalosBaseStrategyFactory):
This contract is used to create new TalosBaseStrategy contracts.
- [./reference/talos/strategies/TalosStrategySimple](./reference/talos/strategies/TalosStrategySimple):
This contract is responsible for rebalacing and reranging strategies for TALOS UniswapV3 LPs.
- [./reference/talos/boost-aggregator/BoostAggregator](./reference/talos/boost-aggregator/BoostAggregator):
This contract is used to aggregate Uniswap V3 NFTs from multiple addresses and stake them in the Uniswap V3 Staker contract, sharing the same boost. This contract allows for boost management and rewards distribution. so users can stake their NFTs and receive boosted hermes rewards.
- [./reference/talos/libraries/PoolVariables](./reference/talos/libraries/PoolVariables):
Provides functions for computing liquidity and ticks for token amounts and prices.
- [./reference/talos/libraries/PoolActions](./reference/talos/libraries/PoolActions):
This library is created to conduct a variety of swap, burn and add liquidity methods.
- [./reference/talos/base/TalosBaseStrategy](./reference/talos/base/TalosBaseStrategy):
This contract is responsible for managing a Uniswap V3 Non Fungible Position. TalosBaseStrategy allows the implementation two managing functions: rerange and rebalance. Both these actions are performed according to Talos Optimzer's values. The underlying Uniswap V3 Pool NFT can be staked in any other contract by using internal hooks.
- [./reference/hermes/bHermes](./reference/hermes/bHermes):
bHermes is a deposit only ERC-4626 for HERMES tokens which: mints bHermes utility tokens (Weight, Boost, Governance) in exchange for burning HERMES.
- [./reference/hermes/UtilityManager](./reference/hermes/UtilityManager):
When implemented, this contract allows for the management of bHermes utility tokens.
- [./reference/hermes/tokens/bHermesVotes](./reference/hermes/tokens/bHermesVotes):
Represents the underlying governance power of a bHermes token.
- [./reference/hermes/tokens/HERMES](./reference/hermes/tokens/HERMES):
Native token for the Hermes Incentive System.
- [./reference/hermes/tokens/bHermesGauges](./reference/hermes/tokens/bHermesGauges):
Represents the underlying emission direction power of a bHermes token. bHermesGauges is an ERC-4626 compliant bHermes token which: votes on bribes rewards allocation for Hermes gauges in a manipulation-resistant manner.
- [./reference/hermes/tokens/bHermesBoost](./reference/hermes/tokens/bHermesBoost):
An ERC20 with an embedded attachment mechanism to keep track of boost allocations to gauges.
- [./reference/hermes/minters/BaseV2Minter](./reference/hermes/minters/BaseV2Minter):
Codifies the minting rules as per b(3,3), abstracted from the token to support any ERC4626 with any token that allows minting. Responsible for minting new tokens.

## Contracts

| Contract                                                                                                                             | SLOC | Purpose                                                                                                      | Libraries Used                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [gauges/UniswapV3Gauge](gauges/UniswapV3Gauge)                                                                               | 33   | Uniswap V3 Gauge - Handles liquidity provider incentives for Uniswap V3 in the Base V2 Gauge implementation. | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [gauges/BaseV2Gauge](gauges/BaseV2Gauge)                                                                                     | 79   | Base V2 Gauge - Base contract for handling liquidity provider incentives and voter's bribes.                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BaseV2GaugeManager](gauges/factories/BaseV2GaugeManager)                                                   | 84   | Base V2 Gauge Factory Manager - Manages addition/removal of Gauge Factories to bHermes.                      | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [gauges/factories/UniswapV3GaugeFactory](gauges/factories/UniswapV3GaugeFactory)                                             | 58   | Uniswap V3 Gauge Factory                                                                                     | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BaseV2GaugeFactory](gauges/factories/BaseV2GaugeFactory)                                                   | 88   | Base V2 Gauge Factory                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BribesFactory](gauges/factories/BribesFactory)                                                             | 58   | Gauge Bribes Factory                                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626](erc-4626/ERC4626)                                                                                         | 86   | Minimal ERC4626 tokenized Vault implementation                                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626MultiToken](erc-4626/ERC4626MultiToken)                                                                     | 184  | Minimal ERC4626 tokenized Vault multi asset implementation                                                   | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/UlyssesERC4626](erc-4626/UlyssesERC4626)                                                                           | 73   | Minimal ERC4626 tokenized 1:1 Vault implementation                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626DepositOnly](erc-4626/ERC4626DepositOnly)                                                                   | 50   | Minimal Deposit Only ERC4626 tokenized Vault implementation                                                  | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-20/ERC20MultiVotes](erc-20/ERC20MultiVotes)                                                                             | 194  | ERC20 Multi-Delegation Voting contract                                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet)                                                                                                                                                                      |
| [erc-20/ERC20Boost](erc-20/ERC20Boost)                                                                                       | 189  | An ERC20 with an embedded attachment mechanism to keep track of boost                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet)                                                                                                                                                                      |
| [erc-20/ERC20Gauges](erc-20/ERC20Gauges)                                                                                     | 295  | An ERC20 with an embedded "Gauge" style vote with liquid weights                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet)                                                                                                                                                                      |
| [governance/GovernorBravoDelegator](governance/GovernorBravoDelegator)                                                       | 53   | Governor Bravo Delegate Proxy Contract                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [governance/GovernorBravoDelegateMaia](governance/GovernorBravoDelegateMaia)                                                 | 338  | Governor Bravo Constants Contract                                                                            |                                                                                                                                                                                                                                                                                                                    |
| [governance/GovernorBravoInterfaces](governance/GovernorBravoInterfaces)                                                     | 112  | Storage for Governor Bravo Delegate                                                                          |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-omnichain/ArbitrumBranchBridgeAgent](ulysses-omnichain/ArbitrumBranchBridgeAgent)                                   | 111  | Manages bridging transactions between root and Arbitrum branch                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/ArbitrumBranchPort](ulysses-omnichain/ArbitrumBranchPort)                                                 | 109  | Arbitrum Branch Port Contract                                                                                | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/ArbitrumCoreBranchRouter](ulysses-omnichain/ArbitrumCoreBranchRouter)                                     | 74   | Arbitrum Core Branch Router Contract                                                                         | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [ulysses-omnichain/MulticallRootRouter](ulysses-omnichain/MulticallRootRouter)                                               | 298  | Multicall Root Router Contract                                                                               | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/CoreRootRouter](ulysses-omnichain/CoreRootRouter)                                                         | 238  | Core Root Router Contract                                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/RootBridgeAgentExecutor](ulysses-omnichain/RootBridgeAgentExecutor)                                       | 246  | Root Bridge Agent Executor Contract                                                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/CoreBranchRouter](ulysses-omnichain/CoreBranchRouter)                                                     | 145  | Core Branch Router Contract                                                                                  | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/RootBridgeAgent](ulysses-omnichain/RootBridgeAgent)                                                       | 737  | Root Bridge Agent Contract                                                                                   | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                      |
| [ulysses-omnichain/VirtualAccount](ulysses-omnichain/VirtualAccount)                                                         | 43   | VirtualAccount - Contract for managing a virtual user account on the Root Chain                              | [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                           |
| [ulysses-omnichain/BranchPort](ulysses-omnichain/BranchPort)                                                                 | 239  | Branch Port - Omnichain Token Management Contract                                                            | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/BranchBridgeAgent](ulysses-omnichain/BranchBridgeAgent)                                                   | 819  | Branch Bridge Agent Contract                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/BaseBranchRouter](ulysses-omnichain/BaseBranchRouter)                                                     | 94   | Base Branch Router Contract                                                                                  | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/RootPort](ulysses-omnichain/RootPort)                                                                     | 298  | Root Port - Omnichain Token Management Contract                                                              | [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                            |
| [ulysses-omnichain/BranchBridgeAgentExecutor](ulysses-omnichain/BranchBridgeAgentExecutor)                                   | 83   | Branch Bridge Agent Executor Contract                                                                        | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/token/ERC20hTokenRoot](ulysses-omnichain/token/ERC20hTokenRoot)                                           | 39   | ERC20 hToken Contract                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/token/ERC20hTokenBranch](ulysses-omnichain/token/ERC20hTokenBranch)                                       | 18   | ERC20 hToken Branch Contract                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/BranchBridgeAgentFactory](ulysses-omnichain/factories/BranchBridgeAgentFactory)                 | 90   | Branch Bridge Agent Factory Contract                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/RootBridgeAgentFactory](ulysses-omnichain/factories/RootBridgeAgentFactory)                     | 49   | Root Bridge Agent Factory Contract                                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/ERC20hTokenBranchFactory](ulysses-omnichain/factories/ERC20hTokenBranchFactory)                 | 46   | ERC20hTokenBranch Factory Contract                                                                           | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/factories/ERC20hTokenRootFactory](ulysses-omnichain/factories/ERC20hTokenRootFactory)                     | 45   | ERC20 hToken Root Factory Contract                                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory](ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory) | 68   | Arbitrum Branch Bridge Agent Factory Contract                                                                |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-omnichain/lib/AnycallFlags](ulysses-omnichain/lib/AnycallFlags)                                                     | 10   | Anycall flags library                                                                                        |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-amm/UlyssesRouter](ulysses-amm/UlyssesRouter)                                                                       | 49   | Ulysses Router - Handles routing of transactions in the Ulysses AMM                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-amm/UlyssesToken](ulysses-amm/UlyssesToken)                                                                         | 77   | Ulysses Token - tokenized Vault multi asset implementation for Ulysses pools                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-amm/UlyssesPool](ulysses-amm/UlyssesPool)                                                                           | 611  | Ulysses Pool - Single Sided Stableswap LP                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-amm/factories/UlyssesFactory](ulysses-amm/factories/UlyssesFactory)                                                 | 102  | Ulysses Pool Deployer                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [uni-v3-staker/UniswapV3Staker](uni-v3-staker/UniswapV3Staker)                                                               | 335  | Uniswap V3 Staker Interface with bHermes Boost.                                                              | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)                                                        |
| [uni-v3-staker/libraries/RewardMath](uni-v3-staker/libraries/RewardMath)                                                     | 37   | Math for computing rewards for Uniswap V3 LPs with boost                                                     | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [uni-v3-staker/libraries/NFTPositionInfo](uni-v3-staker/libraries/NFTPositionInfo)                                           | 22   | Encapsulates the logic for getting info about a NFT token ID                                                 | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [uni-v3-staker/libraries/IncentiveId](uni-v3-staker/libraries/IncentiveId)                                                   | 7    | Incentive ID hash library                                                                                    |                                                                                                                                                                                                                                                                                                                    |
| [uni-v3-staker/libraries/IncentiveTime](uni-v3-staker/libraries/IncentiveTime)                                               | 27   | Incentive Time library                                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [rewards/FlywheelCoreInstant](rewards/FlywheelCoreInstant)                                                                   | 20   | Flywheel Core Incentives Manager - Manages instant incentives distribution under the Flywheel Core system    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/FlywheelCoreStrategy](rewards/FlywheelCoreStrategy)                                                                 | 20   | Flywheel Core Incentives Manager                                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/base/BaseFlywheelRewards](rewards/base/BaseFlywheelRewards)                                                         | 20   | Flywheel Reward Module - Base contract for reward token distribution                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/base/FlywheelCore](rewards/base/FlywheelCore)                                                                       | 109  | Flywheel Core Incentives Manager                                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelBribeRewards](rewards/rewards/FlywheelBribeRewards)                                                 | 19   | Flywheel Accumulated Bribes Reward Stream                                                                    | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelGaugeRewards](rewards/rewards/FlywheelGaugeRewards)                                                 | 120  | Flywheel Gauge Reward Stream                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelInstantRewards](rewards/rewards/FlywheelInstantRewards)                                             | 19   | Flywheel Instant Rewards.                                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelAcummulatedRewards](rewards/rewards/FlywheelAcummulatedRewards)                                     | 26   | Flywheel Accumulated Rewards.                                                                                | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/booster/FlywheelBoosterGaugeWeight](rewards/booster/FlywheelBoosterGaugeWeight)                                     | 16   | Balance Booster Module for Flywheel                                                                          | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [rewards/depots/SingleRewardsDepot](rewards/depots/SingleRewardsDepot)                                                       | 17   | Single Rewards Depot - Contract for a single reward token storage                                            |                                                                                                                                                                                                                                                                                                                    |
| [rewards/depots/MultiRewardsDepot](rewards/depots/MultiRewardsDepot)                                                         | 33   | Multiple Rewards Depot - Contract for multiple reward token storage                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [rewards/depots/RewardsDepot](rewards/depots/RewardsDepot)                                                                   | 14   | Rewards Depot - Base contract for reward token storage                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/vMaia](maia/vMaia)                                                                                                     | 55   | vMaia: Yield bearing, boosting, voting, and gauge enabled MAIA                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/PartnerUtilityManager](maia/PartnerUtilityManager)                                                                     | 97   | Partner Utility Tokens Manager Contract                                                                      | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [maia/factories/PartnerManagerFactory](maia/factories/PartnerManagerFactory)                                                 | 47   | Factory for managing PartnerManagers                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/tokens/Maia](maia/tokens/Maia)                                                                                         | 11   | Maia ERC20 token - Native token for the Maia ecosystem                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/tokens/ERC4626PartnerManager](maia/tokens/ERC4626PartnerManager)                                                       | 179  | Yield bearing, boosting, voting, and gauge enabled Partner Token                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/libraries/DateTimeLib](maia/libraries/DateTimeLib)                                                                     | 21   | Library to check if it is the first Tuesday of a month.                                                      |                                                                                                                                                                                                                                                                                                                    |
| [talos/TalosManager](talos/TalosManager)                                                                                     | 58   | Talos Strategy Manager - Manages rebalancing and reranging of Talos Positions                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core)                                                                                                                                                                                                                                                             |
| [talos/TalosStrategyVanilla](talos/TalosStrategyVanilla)                                                                     | 95   | Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.                                        | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                    |
| [talos/TalosStrategyStaked](talos/TalosStrategyStaked)                                                                       | 111  | Tokenized Vault implementation for a staked Uniswap V3 Non-Fungible Positions.                               | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                    |
| [talos/TalosOptimizer](talos/TalosOptimizer)                                                                                 | 52   | Talos Optimizer - Manages optimization variables for Talos Positions                                         | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [talos/factories/BoostAggregatorFactory](talos/factories/BoostAggregatorFactory)                                             | 25   | Boost Aggregator Factory                                                                                     | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [talos/factories/TalosStrategyVanillaFactory](talos/factories/TalosStrategyVanillaFactory)                                   | 22   | Talos Strategy Vanilla Factory                                                                               | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/factories/TalosStrategyStakedFactory](talos/factories/TalosStrategyStakedFactory)                                     | 46   | Talos Strategy Staked Factory                                                                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/factories/OptimizerFactory](talos/factories/OptimizerFactory)                                                         | 32   | Optimizer Factory for Talos Optimizers                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [talos/factories/TalosBaseStrategyFactory](talos/factories/TalosBaseStrategyFactory)                                         | 41   | Talos Base Strategy Factory                                                                                  | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady)                                                                                                                                           |
| [talos/strategies/TalosStrategySimple](talos/strategies/TalosStrategySimple)                                                 | 29   | Rebalacing and reranging strategies for TALOS UniswapV3 LPs                                                  | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/boost-aggregator/BoostAggregator](talos/boost-aggregator/BoostAggregator)                                             | 92   | Boost Aggregator for Uniswap V3 NFTs                                                                         | [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                         |
| [talos/libraries/PoolVariables](talos/libraries/PoolVariables)                                                               | 157  | Pool Variables - Library for computing liquidity and ticks for token amounts and prices                      | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                    |
| [talos/libraries/PoolActions](talos/libraries/PoolActions)                                                                   | 76   | Pool Actions - Library for conducting uniswap v3 pool actions                                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                    |
| [talos/base/TalosBaseStrategy](talos/base/TalosBaseStrategy)                                                                 | 284  | Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.                                        | [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate) |
| [hermes/bHermes](hermes/bHermes)                                                                                             | 69   | bHermes: Yield bearing, boosting, voting, and gauge enabled Hermes                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/UtilityManager](hermes/UtilityManager)                                                                               | 81   | Utility Tokens Manager Contract                                                                              | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesVotes](hermes/tokens/bHermesVotes)                                                                     | 22   | bHermesVotes: Have power over Hermes' governance                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/HERMES](hermes/tokens/HERMES)                                                                                 | 11   | Hermes ERC20 token - Native token for the Hermes Incentive System                                            | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesGauges](hermes/tokens/bHermesGauges)                                                                   | 22   | bHermesGauges: Directs Hermes emissions.                                                                     | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesBoost](hermes/tokens/bHermesBoost)                                                                     | 19   | bHermesBoost: Earns rights to boosted Hermes yield                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/minters/BaseV2Minter](hermes/minters/BaseV2Minter)                                                                   | 92   | Base V2 Minter - Mints HERMES tokens for the B(3,3) system                                                   | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |

## Libraries Used

The libraries used in [lib/](lib/) are: (other libraries are for testing only)

- [solady](https://github.com/vectorized/solady)
- [solmate](https://github.com/transmissions11/solmate)
- [@uniswap/v3-core](https://github.com/Uniswap/v3-core)
- [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)
- [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [EnumerableSet](lib/EnumerableSet)

## Governance Contracts

- [GovernorBravoDelegateSeverity1](out-of-scope/governance/GovernorBravoDelegateSeverity1)
- [GovernorBravoDelegateSeverity2](out-of-scope/governance/GovernorBravoDelegateSeverity2)
- [GovernorBravoDelegateSeverity3](out-of-scope/governance/GovernorBravoDelegateSeverity3)
- [GovernorBravoDelegateSeverity4](out-of-scope/governance/GovernorBravoDelegateSeverity4)
- [GovernorBravoDelegateSeverity5](out-of-scope/governance/GovernorBravoDelegateSeverity5)
- [GovernorBravoDelegator](out-of-scope/governance/GovernorBravoDelegator)
- [GovernorBravoInterfaces](out-of-scope/governance/GovernorBravoInterfaces)

## Additional Context

### Uniswap v3 Gauges

Hermes V2 is based on solidly's ve(3,3), in order to keep the same logic for the voting and boosting power of the users, was added a new logic for the calculation of the boosted rewards for the uniswapV3 positions, which is based on the seconds per liquidty in active range to calculate rewards of the uniswapV3Staker. It is based on the original [UniswapV3Staker logic](https://docs.uniswap.org/contracts/v3/reference/periphery/staker/Design#getrewardinfo).

The original Uniswap V3 Staker awards positons based on the difference between snapshotCumulativesInside when staked vs when unstaked times the liquidity of the position. By doing this, we get how much liquidity seconds each position is awarded. In Hermes V2 case, all of hermes incentives have a duration of 1 week, so we can calculate the liquidity seconds per week for each position, 1 week being the maximum.

The original curve logic behind calculating boosted rewards for uniswapV3 positions is based on the following formula, found [here, in docs](https://v2-docs.maiadao.io/protocols/Hermes/overview/tokenomics/utility-tokens/bhermes-boost):

$Rewards Received = min(UserLiquidity,(40\%*UserLiquidity)+(60\%*TotalLiquidity*UserBoostBalance/BoostTotal))$

In order to calculate the boosted rewards for the uniswapV3 positions, we have used the following formula:

$Rewards Received = min(Position Rewards, Position Rewards * 40\% + (Total Rewards For Duration Staked * User bHERMES / Total bHERMES Supply) * 60\%)$

More information on Uniswap V3 Gauges and how boost calculation is made, can be found [here, in docs](https://v2-docs.maiadao.io/protocols/Hermes/overview/gauges/uni-v3#calculating-boost).

### Ulysses Pools AMM - Delta Algorithm

The Ulysses Pools AMM is an adaptation of the Delta Algorithm put forh by LayerZero, the original paper can be found [here](https://www.dropbox.com/s/gf3606jedromp61/Delta-Solving.The.Bridging-Trilemma.pdf?dl=0).

In short, Ulysses Pools AMM is a stableswap AMM that allows for the creation of N to N pools with different weights, and the ability to change the weights of the pools after creation. In order to make sure no pools is ever in deficit, only new pools can be added to exisitng pools, can never be removed.

Because of all of Ulysses pools are in the same network (Arbitrum), we can avoid the need to keep credits from each pool, unlike the original Delta Algorithm. This allows us to simplify the logic of the algorithm.

Adapted from: [Figure 4](https://www.dropbox.com/s/gf3606jedromp61/Ulysses-Solving.The.Bridging-Trilemma.pdf?dl=0), this is the pseudocode for the algorithm:

```
Input: Transaction amount t, destination LP ID d
 # On the source LP:
 1: aₛ ← aₛ + t
 2: bₛ,𝒹 ← bₛ,𝒹 − t
 3: for x != s do
 4:     diffₛ,ₓ ← max(0, lpₛ * wₛ,ₓ − lkbₓ,ₛ)
 5: end for
 6: Total ← ∑ₓ diffₛ,ₓ
 7: for x != s do
 8:     diffₛ,ₓ ← min(Total, t) * diffₛ,ₓ / Total
 9: end for
 10: t′ ← t - min(Total, t)
 11: for ∀x do
 12:     bₛ,ₓ ← bₛ,ₓ + diffₛ,ₓ + t′ * wₛ,ₓ
 13: end for
 14: msg = (t)
 15: Send msg to LP d

 # On the destination LP:
 16: Receive (t) from a source LP
 17: if bₛ,𝒹 < t then
 18:     Reject the transfer
 19: end if
 20: a𝒹 ← a𝒹 − t
 21: bₛ,𝒹 ← bₛ,𝒹 − t
```

### Ulysses Pools AMM - Rebalancing Fees

Renalancing fees are a way to incentivize users to rebalance Ulysses Pools. The fees are calculated based on the difference between the current bandwidth (balance dedicated to another pool) of the pool and the target bandwidth (weight \* totalsupply) of the pool. More info can be found [here, in docs](https://v2-docs.maiadao.io/protocols/Ulysses/overview/unified-liquidity/fees#rebalancing-fees). The fees are calculated as follows:

| Rebalancing Fee                                          | Condition                            |
| -------------------------------------------------------- | ------------------------------------ |
| 0                                                        | $b−t \leq \delta _1B$                |
| $\frac{\lambda_1}{(\delta_1−\delta_2)B}(\delta_1 B−b+t)$ | $\delta _2B \leq b−t \lt \delta _1B$ |
| $\lambda_1+\frac{\lambda_2}{\delta_2B}(\delta_2B−b+t)$   | $b−t \lt \delta _2 B$                |

Fee Parameters:

| Parameter   | Value  |
| ----------- | ------ |
| $\lambda_1$ | 0.40%  |
| $\lambda_2$ | 99.60% |
| $\delta_1$  | 60%    |
| $\delta_2$  | 5%     |

Because the lambda fee parameters in contract are divided by 2, the actual values used in the contract are:

| Parameter   | Value  |
| ----------- | ------ |
| $\lambda_1$ | 0.20%  |
| $\lambda_2$ | 49.80% |
| $\delta_1$  | 60%    |
| $\delta_2$  | 5%     |

```
The fee is calculated as a trapezium with a base of width and a height of height
       The formula for the area of a trapezium is (a + b) * h / 2
                          ___________
          fee1 + fee2 -->|          /|
                         |         / |
                         |________/  |
  fee1 + fee2 * amount-->|       /|  |
         -------------   |      / |  |
           max width     |     /  |  |
                         |____/   |  |
                 fee1 -->|   |    |  |
                         |   |    |  |
                         |___|____|__|_____
                             |    |  |
                    upper bound 2 |  0
                                  |
                              bandwidth

         max width = upper bound 2
         amount = upper bound 2 - bandwidth

           h = amount
           a = fee1 + (fee2 * amount / max width)
           b = fee1

           fee = (a + b) * h / 2
               = (fee1 + fee1 + (fee2 * amount / max width)) * amount / 2
               = ((fee1 * 2) + (fee2 * amount / max width)) * amount / 2

         Because lambda1 = fee1 / 2 and lambda2 = fee2 / 2

         fee = ((fee1 * 2) + (fee2 * amount / max width)) * amount / 2
             = (lambda1 * 2 * amount) + (lambda2 * amount * amount) / max width
             = amount * ((lambda1 * 2) + (lambda2 * amount / max width))


When offset (b) is 0, the trapezium is equivalent to a triangle:
       The formula for the area of a triangle is a * h / 2

                          ___________
                 fee1 -->|          /|
                         |         / |
                         |________/  |
        fee1 * amount -->|       /|  |
        -------------    |      / |  |
          max width      |     /  |  |
                         |    /   |  |
                         |___/____|__|_____
                             |    |  |
                    upper bound 1 | upper bound 2
                                  |
                              bandwidth

         max width = upper bound 1 - upper bound 2
         amount = upper bound 1 - bandwidth

           h = amount
           a = fee1 * amount / max width
           b = 0

           fee = (a + b) * h / 2
               = fee1 * amount * amount / (2 * max width)

         Because lambda1 = fee1 / 2

         fee = fee1 * amount * amount / (2 * max width)
             = lambda2 * amount * amount / max width
```

### Ulysses Omnichain Liquidity - AnycallV7 integration

Ulysses Omnichain Liquidity System uses AnycallV7 (https://github.com/anyswap/multichain-smart-contracts/tree/main/contracts/anycall/v7) for cross-chain messaging, it is integrated using the Pay on Destination flag (`0x06`), meaning execution gas fees are credited to the recipient contract (Bridge Agent) deducting the gas spent from this contract's `executionBudget` kept in the AnycallConfig contract (https://docs.multichain.org/developer-guide/anycall-v7/estimate-fee-pay-fees-on-destination-chain)