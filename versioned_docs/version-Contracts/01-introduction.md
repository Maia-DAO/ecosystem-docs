---
id: introduction
title: Introduction
sidebar_position: 1
---

Maia DAO V2 Ecossytem docs that explains the business logic and technical references, can be found [here](https://v2-docs.maiadao.io/). Docs are split into 4 protocols, in which you will find relevant information about how each of these protocols work in the system.

Maia DAO Ecosystem is made to be a significant increase in capital efficiency and utility for the Maia DAO community from the V1 ecosystem. The V2 ecosystem is made up of 4 protocols: Hermes, Maia, Talos and Ulysses.

Previous Audits by Zellic can be found in our Github. There are two audits, each for different parts of the codebase:

- [Rewards System](https://github.com/Maia-DAO/maia-ecosystem-monorepo/tree/1-audit)
- [Ulysses Protocol](https://github.com/Maia-DAO/maia-ecosystem-monorepo/tree/2-audit)

:::caution
Changes have been made to the contracts since these audits that are not reflected in this repositories. Final code is available in the [Code4rena Contest](https://github.com/code-423n4/2023-05-maia).

If you are reading this, the contest is still LIVE go over to https://discord.gg/code4rena and try to earn your share of $300k UDSC, the second largest reward pool to date!
:::

## Hermes

The new iteration of [Hermes](versioned_docs/version-Hermes/what-is-hermes.md) provides significant improvements over V1, which is a soldily fork. There are three ideas behind the revamped model:

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

## Contracts

- [gauges/UniswapV3Gauge.sol](gauges/UniswapV3Gauge.sol):
  Handles rewards for distribution, boost attaching/detaching and accruing bribes for a strategy. This gauge was designed for Uniswap V3 liquidity mining, it is responsible for creating and depositing weekly rewards in UniswapV3Staker. The minimum width represents the minimum range a UniV3 NFT must have to be illegible for staking.
- [gauges/BaseV2Gauge.sol](gauges/BaseV2Gauge.sol):
  Handles rewards for distribution, boost attaching/detaching and accruing bribes for a given strategy.
- [gauges/factories/BaseV2GaugeManager.sol](gauges/factories/BaseV2GaugeManager.sol):
  Handles the management of gauges and gauge factories.
- [gauges/factories/UniswapV3GaugeFactory.sol](gauges/factories/UniswapV3GaugeFactory.sol):
  Handles the creation of new Uniswap V3 gauges and the management of existing ones. Adds and removes gauges, and allows the bribe factory to add and remove bribes to gauges.
- [gauges/factories/BaseV2GaugeFactory.sol](gauges/factories/BaseV2GaugeFactory.sol):
  Handles the creation of new gauges and the management of existing ones. Adds and removes gauges, and allows the bribe factory to add and remove bribes to gauges.
- [gauges/factories/BribesFactory.sol](gauges/factories/BribesFactory.sol):
  Responsible for creating new bribe flywheel instances. Owner has admin rights to add bribe flywheels to gauges.
- [erc-4626/ERC4626.sol](erc-4626/ERC4626.sol):
  Minimal ERC4626 tokenized Vault implementation
- [erc-4626/ERC4626MultiToken.sol](erc-4626/ERC4626MultiToken.sol):
  Minimal ERC4626 tokenized Vault multi asset implementation
- [erc-4626/UlyssesERC4626.sol](erc-4626/UlyssesERC4626.sol):
  Minimal ERC4626 tokenized 1:1 Vault implementation
- [erc-4626/ERC4626DepositOnly.sol](erc-4626/ERC4626DepositOnly.sol):
  Minimal Deposit Only ERC4626 tokenized Vault implementation
- [erc-20/ERC20MultiVotes.sol](erc-20/ERC20MultiVotes.sol):
  an ERC20 extension that allows delegations to multiple delegatees up to a user's balance on a given block.
- [erc-20/ERC20Boost.sol](erc-20/ERC20Boost.sol):
  This contract is meant to be used to represent a token that can boost holders' rewards in other contracts. Holders can have their boost attached to gauges and cannot transfer their bHermes until they remove their boost. Only gauges can attach and detach boost from a user. The current user's boost and total supply are stored when attaching. The boost is then detached when the user removes their boost or when the gauge is removed. A "gauge" is represented by an address that distributes rewards to users periodically or continuously.
- [erc-20/ERC20Gauges.sol](erc-20/ERC20Gauges.sol):
  This contract is meant to be used to support gauge style votes with weights associated with resource allocation. Only after delegating to himself can a user allocate weight to a gauge. Holders can allocate weight in any proportion to supported gauges. A "gauge" is represented by an address that would receive the resources periodically or continuously. For example, gauges can be used to direct token emissions, similar to Curve or Hermes V1. Alternatively, gauges can be used to direct another quantity such as relative access to a line of credit.
- [governance/GovernorBravoDelegator.sol](governance/GovernorBravoDelegator.sol):
  Upgradeable Governance and on-chain execution contract.
- [governance/GovernorBravoDelegateMaia.sol](governance/GovernorBravoDelegateMaia.sol):
  Implementation of Maia Ecosystem Governance and on-chain execution.
- [governance/GovernorBravoInterfaces.sol](governance/GovernorBravoInterfaces.sol):
  Library with Governor Bravo Interfaces.
- [ulysses-omnichain/ArbitrumBranchBridgeAgent.sol](ulysses-omnichain/ArbitrumBranchBridgeAgent.sol):
  Used for interfacing with Users/Routers acting as a middleman to access Anycall cross-chain messaging and Port communication for asset management connecting Arbitrum Branch Chain contracts and the root omnichain environment.
- [ulysses-omnichain/ArbitrumBranchPort.sol](ulysses-omnichain/ArbitrumBranchPort.sol):
  Used to manage the deposit and withdrawal of underlying assets from the Arbitrum Branch Chain in response to Branch Bridge Agents' requests. Manages Bridge Agents and their factories as well as the chain's strategies and their tokens.
- [ulysses-omnichain/ArbitrumCoreBranchRouter.sol](ulysses-omnichain/ArbitrumCoreBranchRouter.sol):
  Responsible for permissionlessly adding new tokens or Bridge Agents to the system as well as key governance enabled system functions (i.e. `addBridgeAgentFactory`).
- [ulysses-omnichain/MulticallRootRouter.sol](ulysses-omnichain/MulticallRootRouter.sol):
  Root Router implementation for interfacing with third party dApps present in the Root Omnichain Environment.
- [ulysses-omnichain/CoreRootRouter.sol](ulysses-omnichain/CoreRootRouter.sol):
  Responsible for permissionlessly adding new tokens or Bridge Agents to the system as well as key governance enabled system functions (i.e. `toggleBranchBridgeAgentFactory`). Desingated for Root chain deployment in the Ulysses Omnichain Liqudity System.
- [ulysses-omnichain/RootBridgeAgentExecutor.sol](ulysses-omnichain/RootBridgeAgentExecutor.sol):
  Contract used for requesting token settlement clearance and executing transaction requests from the branch chains.
- [ulysses-omnichain/CoreBranchRouter.sol](ulysses-omnichain/CoreBranchRouter.sol):
  Allows users to permissionlessly add new tokens or Bridge Agents to the system. As well as executes key governance enabled system functions (i.e. `addBridgeAgentFactory`). Designated for Ulysses Omnichain Liquidity System branch chain deployment.
- [ulysses-omnichain/RootBridgeAgent.sol](ulysses-omnichain/RootBridgeAgent.sol):
  Contract responsible for interfacing with Users and Routers acting as a middleman to access Anycall cross-chain messaging and Port communication for asset management.
- [ulysses-omnichain/VirtualAccount.sol](ulysses-omnichain/VirtualAccount.sol):
  A Virtual Account allows users to manage assets and perform interactions remotely while allowing dApps to keep encapsulated user balance for accounting purposes.
- [ulysses-omnichain/BranchPort.sol](ulysses-omnichain/BranchPort.sol):
  This contract is used to manage the deposit and withdrawal of underlying assets from the Branch Chain in response to Branch Bridge Agents' requests. Manages Bridge Agents and their factories as well as the chain's strategies and their tokens.
- [ulysses-omnichain/BranchBridgeAgent.sol](ulysses-omnichain/BranchBridgeAgent.sol):
  Contract for deployment in Branch Chains of Omnichain System, responible for
  interfacing with Users and Routers acting as a middleman to access Anycall cross-chain messaging and requesting / depositing assets in the Branch Chain's Ports.
- [ulysses-omnichain/BaseBranchRouter.sol](ulysses-omnichain/BaseBranchRouter.sol):
  Base contract for deployment in Branch Chains of the Ulysses Omnichain System, additional logic can be implemented to perform actions before sending cross-chain requests, as well as in response to requests from the Root Omnichain Environment.
- [ulysses-omnichain/RootPort.sol](ulysses-omnichain/RootPort.sol):
  Used to manage the deposit and withdrawal of assets between the Root Omnichain Environment an every Branch Chain in response to Root Bridge Agents requests. Manages Bridge Agents and their factories as well as key governance enabled actions such as adding new chains.
- [ulysses-omnichain/BranchBridgeAgentExecutor.sol](ulysses-omnichain/BranchBridgeAgentExecutor.sol):
  Used for requesting token deposit clearance and executing transactions in response to requests from the root environment.
- [ulysses-omnichain/token/ERC20hTokenRoot.sol](ulysses-omnichain/token/ERC20hTokenRoot.sol):
  1:1 ERC20 representation of a token deposited in a Branch Chain's Port. ERC20 hToken contract deployed in the Root Chain of the Ulysses Omnichain Liquidity System
- [ulysses-omnichain/token/ERC20hTokenBranch.sol](ulysses-omnichain/token/ERC20hTokenBranch.sol): 1:1 ERC20 representation of a token deposited in a Branch Chain's Port. Is only minted upon user request otherwise underlying tokens are cleared and the matching Root hToken has been burned. Contract designated for deployment in the Branch Chains of the Ulysses Omnichain Liquidity System.
- [ulysses-omnichain/factories/BranchBridgeAgentFactory.sol](ulysses-omnichain/factories/BranchBridgeAgentFactory.sol):
  Factory contract for allowing permissionless deployment of new Branch Bridge Agents which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [ulysses-omnichain/factories/RootBridgeAgentFactory.sol](ulysses-omnichain/factories/RootBridgeAgentFactory.sol):
  Factory contract used to deploy new Root Bridge Agents responsible which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [ulysses-omnichain/factories/ERC20hTokenBranchFactory.sol](ulysses-omnichain/factories/ERC20hTokenBranchFactory.sol):
  Factory contract allowing for permissionless deployment of new Branch hTokens in Branch Chains of Ulysses Omnichain Liquidity Protocol. This contract is called by the chain's Core Branch Router.
- [ulysses-omnichain/factories/ERC20hTokenRootFactory.sol](ulysses-omnichain/factories/ERC20hTokenRootFactory.sol):
  Factory contract allowing for permissionless deployment of new Root hTokens in the Root Chain of Ulysses Omnichain Liquidity Protocol. This contract is called by the chain's Core Root Router.
- [ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory.sol](ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory.sol):
  Factory contract for allowing permissionless deployment of new Arbitrum Branch Bridge Agents which are in charge of managing the deposit and withdrawal of assets between the branch chains and the omnichain environment.
- [ulysses-omnichain/lib/AnycallFlags.sol](ulysses-omnichain/lib/AnycallFlags.sol):
  Library of Anycall Flags
- [ulysses-amm/UlyssesRouter.sol](ulysses-amm/UlyssesRouter.sol):
  This contract routes and adds/removes liquidity from Ulysses Pools deployed by the Ulysses Factory, it allows users to set maximum slippage.
- [ulysses-amm/UlyssesToken.sol](ulysses-amm/UlyssesToken.sol):
  ERC4626 multiple token implementation intended for Ulysses Pools. Balances are always 1 : 1 with the underlying assets.
- [ulysses-amm/UlyssesPool.sol](ulysses-amm/UlyssesPool.sol):
  This contract is stableswap AMM that uses it's implemention of the Delta Algorithm to manage the LP's balances and transfers between LPs.
- [ulysses-amm/factories/UlyssesFactory.sol](ulysses-amm/factories/UlyssesFactory.sol):
  This contract is responsible for creating new Ulysses Tokens and Ulysses Pools.
- [uni-v3-staker/UniswapV3Staker.sol](uni-v3-staker/UniswapV3Staker.sol):
  Allows staking non-fungible liquidity tokens in exchange for reward tokens.
- [uni-v3-staker/libraries/RewardMath.sol](uni-v3-staker/libraries/RewardMath.sol):
  Allows computing rewards given some parameters of boost, stakes and incentives.
- [uni-v3-staker/libraries/NFTPositionInfo.sol](uni-v3-staker/libraries/NFTPositionInfo.sol):
  Encapsulates the logic for getting info about a NFT token ID.
- [uni-v3-staker/libraries/IncentiveId.sol](uni-v3-staker/libraries/IncentiveId.sol):
  This library is responsible for computing the incentive identifier.
- [uni-v3-staker/libraries/IncentiveTime.sol](uni-v3-staker/libraries/IncentiveTime.sol):
  This library is responsible for computing the incentive start and end times.
- [rewards/FlywheelCoreInstant.sol](rewards/FlywheelCoreInstant.sol):
  Flywheel Instant is a general framework for managing token incentives that should be accrued atomically. It takes a single reward stream to various _strategies_ such as staking LP tokens and divides them among _users_ of those strategies.
- [rewards/FlywheelCoreStrategy.sol](rewards/FlywheelCoreStrategy.sol):
  Flywheel Strategy is a general framework for managing token incentives. It takes reward streams per _strategies_ such as staking LP tokens and divides them among _users_ of those strategies.
- [rewards/base/BaseFlywheelRewards.sol](rewards/base/BaseFlywheelRewards.sol):
  Determines how many rewards accrue to each strategy globally over a given time period.
- [rewards/base/FlywheelCore.sol](rewards/base/FlywheelCore.sol):
  Flywheel is a general framework for managing token incentives. It takes reward streams to various _strategies_ such as staking LP tokens and divides them among _users_ of those strategies.
- [rewards/rewards/FlywheelBribeRewards.sol](rewards/rewards/FlywheelBribeRewards.sol):
  Distributes rewards for allocation to voters at the end of each epoch in accordance to votes.
- [rewards/rewards/FlywheelGaugeRewards.sol](rewards/rewards/FlywheelGaugeRewards.sol):
  Distributes rewards from a stream based on gauge weights.
- [rewards/rewards/FlywheelInstantRewards.sol](rewards/rewards/FlywheelInstantRewards.sol):
  This contract is responsible for strategy rewards management. At any moment all the rewards can be accrued from any strategy from the general rewards depot for subsequent distribution. The reward depot serves as a pool of rewards.
- [rewards/rewards/FlywheelAcummulatedRewards.sol](rewards/rewards/FlywheelAcummulatedRewards.sol):
  This contract is responsible for strategy rewards management. Once every cycle all the rewards can be accrued from the strategy's corresponding rewards depot for subsequent distribution. The reward depot serves as a pool of rewards.
- [rewards/booster/FlywheelBoosterGaugeWeight.sol](rewards/booster/FlywheelBoosterGaugeWeight.sol):
  The Booster module is an optional module for virtually boosting or otherwise transforming user balances. If a booster is not configured, the strategies ERC-20 balanceOf/totalSupply will be used instead. Boosting logic can be associated with referrals, vote-escrow, or other strategies.
- [rewards/depots/SingleRewardsDepot.sol](rewards/depots/SingleRewardsDepot.sol):
  Holds rewards to be distributed by a Flywheel Rewards distributor contract.
- [rewards/depots/MultiRewardsDepot.sol](rewards/depots/MultiRewardsDepot.sol):
  Holds multiple rewards to be distributed to Flywheel Rewards distributor contracts. When `getRewards()` is called by an added flywheel rewards, it transfers its balance of the associated assets to its flywheel rewards contract.
- [rewards/depots/RewardsDepot.sol](rewards/depots/RewardsDepot.sol):
  Holds a single reward token to be distributed to Flywheel Rewards distributor contracts. When `getRewards()` is called by an added flywheel rewards, it transfers all of the its balance to the flywheel rewards contract.
- [maia/vMaia.sol](maia/vMaia.sol):
  vMaia is an ERC-4626 compliant MAIA token which: distributes bHermes utility tokens (Weight, Governance) and Maia Governance in exchange for staking MAIA. Withdraw is only allowed once per month, during the 1st Tuesday (UTC+0) of the month.
- [maia/PartnerUtilityManager.sol](maia/PartnerUtilityManager.sol):
  When implemented, this contract allows for the partner management of bHermes utility tokens.
- [maia/factories/PartnerManagerFactory.sol](maia/factories/PartnerManagerFactory.sol):
  This contract is used to manage the list of partners and vaults.
- [maia/tokens/Maia.sol](maia/tokens/Maia.sol):
  ERC20 representing a share of the Maia ecosystem.
- [maia/tokens/ERC4626PartnerManager.sol](maia/tokens/ERC4626PartnerManager.sol):
  Partner Manager is an ERC-4626 compliant Partner token which: distributes bHermes utility tokens (Weight, Boost, Governance) in exchange for staking Partner tokens.
- [maia/libraries/DateTimeLib.sol](maia/libraries/DateTimeLib.sol):
  Library for date time operations. To get the current month and check if it is the first Tuesday of the month.
- [talos/TalosManager.sol](talos/TalosManager.sol):
  TalosManager is a Uniswap V3 yield enhancement contract which acts as intermediary between the user who wants to provide liquidity to specific pools and earn fees from such actions. The contract ensures that user position is in range and earns the maximum amount of fees available at current liquidity utilization rate.
- [talos/TalosStrategyVanilla.sol](talos/TalosStrategyVanilla.sol):
  Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.
- [talos/TalosStrategyStaked.sol](talos/TalosStrategyStaked.sol):
  Tokenized Vault implementation for a staked Uniswap V3 Non-Fungible Positions.
- [talos/TalosOptimizer.sol](talos/TalosOptimizer.sol):
  Contains Optimizer variables used by Talos LPs that may only be modified by the governance.
- [talos/factories/BoostAggregatorFactory.sol](talos/factories/BoostAggregatorFactory.sol):
  This contract is responsible for creating new BoostAggregators.
- [talos/factories/TalosStrategyVanillaFactory.sol](talos/factories/TalosStrategyVanillaFactory.sol):
  This contract is used to create new TalosStrategyVanilla contracts.
- [talos/factories/TalosStrategyStakedFactory.sol](talos/factories/TalosStrategyStakedFactory.sol):
  This contract is used to create new TalosStrategyStaked contracts.
- [talos/factories/OptimizerFactory.sol](talos/factories/OptimizerFactory.sol):
  This contract is responsible for creating new Talos Optimizers.
- [talos/factories/TalosBaseStrategyFactory.sol](talos/factories/TalosBaseStrategyFactory.sol):
  This contract is used to create new TalosBaseStrategy contracts.
- [talos/strategies/TalosStrategySimple.sol](talos/strategies/TalosStrategySimple.sol):
  This contract is responsible for rebalacing and reranging strategies for TALOS UniswapV3 LPs.
- [talos/boost-aggregator/BoostAggregator.sol](talos/boost-aggregator/BoostAggregator.sol):
  This contract is used to aggregate Uniswap V3 NFTs from multiple addresses and stake them in the Uniswap V3 Staker contract, sharing the same boost. This contract allows for boost management and rewards distribution. so users can stake their NFTs and receive boosted hermes rewards.
- [talos/libraries/PoolVariables.sol](talos/libraries/PoolVariables.sol):
  Provides functions for computing liquidity and ticks for token amounts and prices.
- [talos/libraries/PoolActions.sol](talos/libraries/PoolActions.sol):
  This library is created to conduct a variety of swap, burn and add liquidity methods.
- [talos/base/TalosBaseStrategy.sol](talos/base/TalosBaseStrategy.sol):
  This contract is responsible for managing a Uniswap V3 Non Fungible Position. TalosBaseStrategy allows the implementation two managing functions: rerange and rebalance. Both these actions are performed according to Talos Optimzer's values. The underlying Uniswap V3 Pool NFT can be staked in any other contract by using internal hooks.
- [hermes/bHermes.sol](hermes/bHermes.sol):
  bHermes is a deposit only ERC-4626 for HERMES tokens which: mints bHermes utility tokens (Weight, Boost, Governance) in exchange for burning HERMES.
- [hermes/UtilityManager.sol](hermes/UtilityManager.sol):
  When implemented, this contract allows for the management of bHermes utility tokens.
- [hermes/tokens/bHermesVotes.sol](hermes/tokens/bHermesVotes.sol):
  Represents the underlying governance power of a bHermes token.
- [hermes/tokens/HERMES.sol](hermes/tokens/HERMES.sol):
  Native token for the Hermes Incentive System.
- [hermes/tokens/bHermesGauges.sol](hermes/tokens/bHermesGauges.sol):
  Represents the underlying emission direction power of a bHermes token. bHermesGauges is an ERC-4626 compliant bHermes token which: votes on bribes rewards allocation for Hermes gauges in a manipulation-resistant manner.
- [hermes/tokens/bHermesBoost.sol](hermes/tokens/bHermesBoost.sol):
  An ERC20 with an embedded attachment mechanism to keep track of boost allocations to gauges.
- [hermes/minters/BaseV2Minter.sol](hermes/minters/BaseV2Minter.sol):
  Codifies the minting rules as per b(3,3), abstracted from the token to support any ERC4626 with any token that allows minting. Responsible for minting new tokens.

## Scope

There are specific concerns that we would like to highlight for the wardens to pay special attention to. We highlighted these in the [Areas of Concern](#areas-of-concern) section above.

| Contract                                                                                                                             | SLOC | Purpose                                                                                                      | Libraries Used                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [gauges/UniswapV3Gauge.sol](gauges/UniswapV3Gauge.sol)                                                                               | 33   | Uniswap V3 Gauge - Handles liquidity provider incentives for Uniswap V3 in the Base V2 Gauge implementation. | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [gauges/BaseV2Gauge.sol](gauges/BaseV2Gauge.sol)                                                                                     | 79   | Base V2 Gauge - Base contract for handling liquidity provider incentives and voter's bribes.                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BaseV2GaugeManager.sol](gauges/factories/BaseV2GaugeManager.sol)                                                   | 84   | Base V2 Gauge Factory Manager - Manages addition/removal of Gauge Factories to bHermes.                      | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [gauges/factories/UniswapV3GaugeFactory.sol](gauges/factories/UniswapV3GaugeFactory.sol)                                             | 58   | Uniswap V3 Gauge Factory                                                                                     | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BaseV2GaugeFactory.sol](gauges/factories/BaseV2GaugeFactory.sol)                                                   | 88   | Base V2 Gauge Factory                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [gauges/factories/BribesFactory.sol](gauges/factories/BribesFactory.sol)                                                             | 58   | Gauge Bribes Factory                                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626.sol](erc-4626/ERC4626.sol)                                                                                         | 86   | Minimal ERC4626 tokenized Vault implementation                                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626MultiToken.sol](erc-4626/ERC4626MultiToken.sol)                                                                     | 184  | Minimal ERC4626 tokenized Vault multi asset implementation                                                   | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/UlyssesERC4626.sol](erc-4626/UlyssesERC4626.sol)                                                                           | 73   | Minimal ERC4626 tokenized 1:1 Vault implementation                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-4626/ERC4626DepositOnly.sol](erc-4626/ERC4626DepositOnly.sol)                                                                   | 50   | Minimal Deposit Only ERC4626 tokenized Vault implementation                                                  | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [erc-20/ERC20MultiVotes.sol](erc-20/ERC20MultiVotes.sol)                                                                             | 194  | ERC20 Multi-Delegation Voting contract                                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet.sol)                                                                                                                                                                      |
| [erc-20/ERC20Boost.sol](erc-20/ERC20Boost.sol)                                                                                       | 189  | An ERC20 with an embedded attachment mechanism to keep track of boost                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet.sol)                                                                                                                                                                      |
| [erc-20/ERC20Gauges.sol](erc-20/ERC20Gauges.sol)                                                                                     | 295  | An ERC20 with an embedded "Gauge" style vote with liquid weights                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate), [EnumerableSet](lib/EnumerableSet.sol)                                                                                                                                                                      |
| [governance/GovernorBravoDelegator.sol](governance/GovernorBravoDelegator.sol)                                                       | 53   | Governor Bravo Delegate Proxy Contract                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [governance/GovernorBravoDelegateMaia.sol](governance/GovernorBravoDelegateMaia.sol)                                                 | 338  | Governor Bravo Constants Contract                                                                            |                                                                                                                                                                                                                                                                                                                    |
| [governance/GovernorBravoInterfaces.sol](governance/GovernorBravoInterfaces.sol)                                                     | 112  | Storage for Governor Bravo Delegate                                                                          |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-omnichain/ArbitrumBranchBridgeAgent.sol](ulysses-omnichain/ArbitrumBranchBridgeAgent.sol)                                   | 111  | Manages bridging transactions between root and Arbitrum branch                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/ArbitrumBranchPort.sol](ulysses-omnichain/ArbitrumBranchPort.sol)                                                 | 109  | Arbitrum Branch Port Contract                                                                                | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/ArbitrumCoreBranchRouter.sol](ulysses-omnichain/ArbitrumCoreBranchRouter.sol)                                     | 74   | Arbitrum Core Branch Router Contract                                                                         | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [ulysses-omnichain/MulticallRootRouter.sol](ulysses-omnichain/MulticallRootRouter.sol)                                               | 298  | Multicall Root Router Contract                                                                               | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/CoreRootRouter.sol](ulysses-omnichain/CoreRootRouter.sol)                                                         | 238  | Core Root Router Contract                                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/RootBridgeAgentExecutor.sol](ulysses-omnichain/RootBridgeAgentExecutor.sol)                                       | 246  | Root Bridge Agent Executor Contract                                                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/CoreBranchRouter.sol](ulysses-omnichain/CoreBranchRouter.sol)                                                     | 145  | Core Branch Router Contract                                                                                  | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/RootBridgeAgent.sol](ulysses-omnichain/RootBridgeAgent.sol)                                                       | 737  | Root Bridge Agent Contract                                                                                   | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                      |
| [ulysses-omnichain/VirtualAccount.sol](ulysses-omnichain/VirtualAccount.sol)                                                         | 43   | VirtualAccount - Contract for managing a virtual user account on the Root Chain                              | [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                           |
| [ulysses-omnichain/BranchPort.sol](ulysses-omnichain/BranchPort.sol)                                                                 | 239  | Branch Port - Omnichain Token Management Contract                                                            | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/BranchBridgeAgent.sol](ulysses-omnichain/BranchBridgeAgent.sol)                                                   | 819  | Branch Bridge Agent Contract                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/BaseBranchRouter.sol](ulysses-omnichain/BaseBranchRouter.sol)                                                     | 94   | Base Branch Router Contract                                                                                  | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/RootPort.sol](ulysses-omnichain/RootPort.sol)                                                                     | 298  | Root Port - Omnichain Token Management Contract                                                              | [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                            |
| [ulysses-omnichain/BranchBridgeAgentExecutor.sol](ulysses-omnichain/BranchBridgeAgentExecutor.sol)                                   | 83   | Branch Bridge Agent Executor Contract                                                                        | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/token/ERC20hTokenRoot.sol](ulysses-omnichain/token/ERC20hTokenRoot.sol)                                           | 39   | ERC20 hToken Contract                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/token/ERC20hTokenBranch.sol](ulysses-omnichain/token/ERC20hTokenBranch.sol)                                       | 18   | ERC20 hToken Branch Contract                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/BranchBridgeAgentFactory.sol](ulysses-omnichain/factories/BranchBridgeAgentFactory.sol)                 | 90   | Branch Bridge Agent Factory Contract                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/RootBridgeAgentFactory.sol](ulysses-omnichain/factories/RootBridgeAgentFactory.sol)                     | 49   | Root Bridge Agent Factory Contract                                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/ERC20hTokenBranchFactory.sol](ulysses-omnichain/factories/ERC20hTokenBranchFactory.sol)                 | 46   | ERC20hTokenBranch Factory Contract                                                                           | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-omnichain/factories/ERC20hTokenRootFactory.sol](ulysses-omnichain/factories/ERC20hTokenRootFactory.sol)                     | 45   | ERC20 hToken Root Factory Contract                                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory.sol](ulysses-omnichain/factories/ArbitrumBranchBridgeAgentFactory.sol) | 68   | Arbitrum Branch Bridge Agent Factory Contract                                                                |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-omnichain/lib/AnycallFlags.sol](ulysses-omnichain/lib/AnycallFlags.sol)                                                     | 10   | Anycall flags library                                                                                        |                                                                                                                                                                                                                                                                                                                    |
| [ulysses-amm/UlyssesRouter.sol](ulysses-amm/UlyssesRouter.sol)                                                                       | 49   | Ulysses Router - Handles routing of transactions in the Ulysses AMM                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [ulysses-amm/UlyssesToken.sol](ulysses-amm/UlyssesToken.sol)                                                                         | 77   | Ulysses Token - tokenized Vault multi asset implementation for Ulysses pools                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-amm/UlyssesPool.sol](ulysses-amm/UlyssesPool.sol)                                                                           | 611  | Ulysses Pool - Single Sided Stableswap LP                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [ulysses-amm/factories/UlyssesFactory.sol](ulysses-amm/factories/UlyssesFactory.sol)                                                 | 102  | Ulysses Pool Deployer                                                                                        | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [uni-v3-staker/UniswapV3Staker.sol](uni-v3-staker/UniswapV3Staker.sol)                                                               | 335  | Uniswap V3 Staker Interface with bHermes Boost.                                                              | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)                                                        |
| [uni-v3-staker/libraries/RewardMath.sol](uni-v3-staker/libraries/RewardMath.sol)                                                     | 37   | Math for computing rewards for Uniswap V3 LPs with boost                                                     | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [uni-v3-staker/libraries/NFTPositionInfo.sol](uni-v3-staker/libraries/NFTPositionInfo.sol)                                           | 22   | Encapsulates the logic for getting info about a NFT token ID                                                 | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [uni-v3-staker/libraries/IncentiveId.sol](uni-v3-staker/libraries/IncentiveId.sol)                                                   | 7    | Incentive ID hash library                                                                                    |                                                                                                                                                                                                                                                                                                                    |
| [uni-v3-staker/libraries/IncentiveTime.sol](uni-v3-staker/libraries/IncentiveTime.sol)                                               | 27   | Incentive Time library                                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [rewards/FlywheelCoreInstant.sol](rewards/FlywheelCoreInstant.sol)                                                                   | 20   | Flywheel Core Incentives Manager - Manages instant incentives distribution under the Flywheel Core system    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/FlywheelCoreStrategy.sol](rewards/FlywheelCoreStrategy.sol)                                                                 | 20   | Flywheel Core Incentives Manager                                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/base/BaseFlywheelRewards.sol](rewards/base/BaseFlywheelRewards.sol)                                                         | 20   | Flywheel Reward Module - Base contract for reward token distribution                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/base/FlywheelCore.sol](rewards/base/FlywheelCore.sol)                                                                       | 109  | Flywheel Core Incentives Manager                                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelBribeRewards.sol](rewards/rewards/FlywheelBribeRewards.sol)                                                 | 19   | Flywheel Accumulated Bribes Reward Stream                                                                    | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelGaugeRewards.sol](rewards/rewards/FlywheelGaugeRewards.sol)                                                 | 120  | Flywheel Gauge Reward Stream                                                                                 | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelInstantRewards.sol](rewards/rewards/FlywheelInstantRewards.sol)                                             | 19   | Flywheel Instant Rewards.                                                                                    | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/rewards/FlywheelAcummulatedRewards.sol](rewards/rewards/FlywheelAcummulatedRewards.sol)                                     | 26   | Flywheel Accumulated Rewards.                                                                                | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [rewards/booster/FlywheelBoosterGaugeWeight.sol](rewards/booster/FlywheelBoosterGaugeWeight.sol)                                     | 16   | Balance Booster Module for Flywheel                                                                          | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [rewards/depots/SingleRewardsDepot.sol](rewards/depots/SingleRewardsDepot.sol)                                                       | 17   | Single Rewards Depot - Contract for a single reward token storage                                            |                                                                                                                                                                                                                                                                                                                    |
| [rewards/depots/MultiRewardsDepot.sol](rewards/depots/MultiRewardsDepot.sol)                                                         | 33   | Multiple Rewards Depot - Contract for multiple reward token storage                                          | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [rewards/depots/RewardsDepot.sol](rewards/depots/RewardsDepot.sol)                                                                   | 14   | Rewards Depot - Base contract for reward token storage                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/vMaia.sol](maia/vMaia.sol)                                                                                                     | 55   | vMaia: Yield bearing, boosting, voting, and gauge enabled MAIA                                               | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/PartnerUtilityManager.sol](maia/PartnerUtilityManager.sol)                                                                     | 97   | Partner Utility Tokens Manager Contract                                                                      | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [maia/factories/PartnerManagerFactory.sol](maia/factories/PartnerManagerFactory.sol)                                                 | 47   | Factory for managing PartnerManagers                                                                         | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/tokens/Maia.sol](maia/tokens/Maia.sol)                                                                                         | 11   | Maia ERC20 token - Native token for the Maia ecosystem                                                       | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/tokens/ERC4626PartnerManager.sol](maia/tokens/ERC4626PartnerManager.sol)                                                       | 179  | Yield bearing, boosting, voting, and gauge enabled Partner Token                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [maia/libraries/DateTimeLib.sol](maia/libraries/DateTimeLib.sol)                                                                     | 21   | Library to check if it is the first Tuesday of a month.                                                      |                                                                                                                                                                                                                                                                                                                    |
| [talos/TalosManager.sol](talos/TalosManager.sol)                                                                                     | 58   | Talos Strategy Manager - Manages rebalancing and reranging of Talos Positions                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core)                                                                                                                                                                                                                                                             |
| [talos/TalosStrategyVanilla.sol](talos/TalosStrategyVanilla.sol)                                                                     | 95   | Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.                                        | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                    |
| [talos/TalosStrategyStaked.sol](talos/TalosStrategyStaked.sol)                                                                       | 111  | Tokenized Vault implementation for a staked Uniswap V3 Non-Fungible Positions.                               | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                    |
| [talos/TalosOptimizer.sol](talos/TalosOptimizer.sol)                                                                                 | 52   | Talos Optimizer - Manages optimization variables for Talos Positions                                         | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |
| [talos/factories/BoostAggregatorFactory.sol](talos/factories/BoostAggregatorFactory.sol)                                             | 25   | Boost Aggregator Factory                                                                                     | [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                                                                              |
| [talos/factories/TalosStrategyVanillaFactory.sol](talos/factories/TalosStrategyVanillaFactory.sol)                                   | 22   | Talos Strategy Vanilla Factory                                                                               | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/factories/TalosStrategyStakedFactory.sol](talos/factories/TalosStrategyStakedFactory.sol)                                     | 46   | Talos Strategy Staked Factory                                                                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/factories/OptimizerFactory.sol](talos/factories/OptimizerFactory.sol)                                                         | 32   | Optimizer Factory for Talos Optimizers                                                                       |                                                                                                                                                                                                                                                                                                                    |
| [talos/factories/TalosBaseStrategyFactory.sol](talos/factories/TalosBaseStrategyFactory.sol)                                         | 41   | Talos Base Strategy Factory                                                                                  | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady)                                                                                                                                           |
| [talos/strategies/TalosStrategySimple.sol](talos/strategies/TalosStrategySimple.sol)                                                 | 29   | Rebalacing and reranging strategies for TALOS UniswapV3 LPs                                                  | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)                                                                                                                                                                                           |
| [talos/boost-aggregator/BoostAggregator.sol](talos/boost-aggregator/BoostAggregator.sol)                                             | 92   | Boost Aggregator for Uniswap V3 NFTs                                                                         | [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                         |
| [talos/libraries/PoolVariables.sol](talos/libraries/PoolVariables.sol)                                                               | 157  | Pool Variables - Library for computing liquidity and ticks for token amounts and prices                      | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                    |
| [talos/libraries/PoolActions.sol](talos/libraries/PoolActions.sol)                                                                   | 76   | Pool Actions - Library for conducting uniswap v3 pool actions                                                | [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                    |
| [talos/base/TalosBaseStrategy.sol](talos/base/TalosBaseStrategy.sol)                                                                 | 284  | Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.                                        | [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery), [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts), [@uniswap/v3-core](https://github.com/Uniswap/v3-core), [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate) |
| [hermes/bHermes.sol](hermes/bHermes.sol)                                                                                             | 69   | bHermes: Yield bearing, boosting, voting, and gauge enabled Hermes                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/UtilityManager.sol](hermes/UtilityManager.sol)                                                                               | 81   | Utility Tokens Manager Contract                                                                              | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesVotes.sol](hermes/tokens/bHermesVotes.sol)                                                                     | 22   | bHermesVotes: Have power over Hermes' governance                                                             | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/HERMES.sol](hermes/tokens/HERMES.sol)                                                                                 | 11   | Hermes ERC20 token - Native token for the Hermes Incentive System                                            | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesGauges.sol](hermes/tokens/bHermesGauges.sol)                                                                   | 22   | bHermesGauges: Directs Hermes emissions.                                                                     | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/tokens/bHermesBoost.sol](hermes/tokens/bHermesBoost.sol)                                                                     | 19   | bHermesBoost: Earns rights to boosted Hermes yield                                                           | [solady](https://github.com/vectorized/solady), [solmate](https://github.com/transmissions11/solmate)                                                                                                                                                                                                              |
| [hermes/minters/BaseV2Minter.sol](hermes/minters/BaseV2Minter.sol)                                                                   | 92   | Base V2 Minter - Mints HERMES tokens for the B(3,3) system                                                   | [solady](https://github.com/vectorized/solady)                                                                                                                                                                                                                                                                     |

## Libraries Used

The libraries used in [lib/](lib/) are: (other libraries are for testing only)

- [solady](https://github.com/vectorized/solady)
- [solmate](https://github.com/transmissions11/solmate)
- [@uniswap/v3-core](https://github.com/Uniswap/v3-core)
- [@uniswap/v3-periphery](https://github.com/Uniswap/v3-periphery)
- [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [EnumerableSet](lib/EnumerableSet.sol)

## Governance Contracts

- [GovernorBravoDelegateSeverity1.sol](out-of-scope/governance/GovernorBravoDelegateSeverity1.sol)
- [GovernorBravoDelegateSeverity2.sol](out-of-scope/governance/GovernorBravoDelegateSeverity2.sol)
- [GovernorBravoDelegateSeverity3.sol](out-of-scope/governance/GovernorBravoDelegateSeverity3.sol)
- [GovernorBravoDelegateSeverity4.sol](out-of-scope/governance/GovernorBravoDelegateSeverity4.sol)
- [GovernorBravoDelegateSeverity5.sol](out-of-scope/governance/GovernorBravoDelegateSeverity5.sol)
- [GovernorBravoDelegator.sol](out-of-scope/governance/GovernorBravoDelegator.sol)
- [GovernorBravoInterfaces.sol](out-of-scope/governance/GovernorBravoInterfaces.sol)

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