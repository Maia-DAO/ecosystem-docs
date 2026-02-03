#!/usr/bin/env node
/**
 * Script to update contract address documentation from maia-core-sdk
 *
 * Usage: node scripts/update-contract-docs.mjs
 */

import {
  // Governance addresses
  GOVERNANCE_BRAVO_ADDRESSES,
  GOVERNANCE_BRAVO_SEVERITY_1_ADDRESSES,
  GOVERNANCE_BRAVO_SEVERITY_2_ADDRESSES,
  GOVERNANCE_BRAVO_SEVERITY_3_ADDRESSES,
  GOVERNANCE_BRAVO_SEVERITY_4_ADDRESSES,
  GOVERNANCE_BRAVO_SEVERITY_5_ADDRESSES,
  // Protocol addresses
  HermesAddresses,
  MULTICALL_ADDRESSES,
  MaiaAddresses,
  NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  QUOTER_ADDRESSES,
  SupportedChainId,
  TICK_LENS_ADDRESSES,
  TIMELOCK_ADDRESS,
  TIMELOCK_SEVERITY_1_ADDRESSES,
  TIMELOCK_SEVERITY_2_ADDRESSES,
  TIMELOCK_SEVERITY_3_ADDRESSES,
  TIMELOCK_SEVERITY_4_ADDRESSES,
  TIMELOCK_SEVERITY_5_ADDRESSES,
  TalosAddresses,
  Ulysses,
  // Router addresses
  V3_CORE_FACTORY_ADDRESSES
} from 'maia-core-sdk';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DOCS_DIR = path.join(__dirname, '..', 'versioned_docs');

// Chain ID constants
const ARBITRUM_ONE = SupportedChainId.ARBITRUM_ONE; // 42161

// Chain names for display
const CHAIN_NAMES = {
  [SupportedChainId.ARBITRUM_ONE]: 'Arbitrum One',
  [SupportedChainId.MAINNET]: 'Ethereum Mainnet',
  [SupportedChainId.OPTIMISM]: 'Optimism',
  [SupportedChainId.BASE]: 'Base',
  [SupportedChainId.BSC]: 'BNB Chain',
  [SupportedChainId.AVAX]: 'Avalanche',
  [SupportedChainId.METIS]: 'Metis',
  [SupportedChainId.POLYGON]: 'Polygon',
  [SupportedChainId.SONIC]: 'Sonic',
  [SupportedChainId.FRAXTAL]: 'Fraxtal',
  [SupportedChainId.SWELL]: 'Swell',
  [SupportedChainId.BERA]: 'Berachain',
};

// Block explorer URLs for each chain
const BLOCK_EXPLORERS = {
  [SupportedChainId.ARBITRUM_ONE]: 'https://arbiscan.io/address/',
  [SupportedChainId.MAINNET]: 'https://etherscan.io/address/',
  [SupportedChainId.OPTIMISM]: 'https://optimistic.etherscan.io/address/',
  [SupportedChainId.BASE]: 'https://basescan.org/address/',
  [SupportedChainId.BSC]: 'https://bscscan.com/address/',
  [SupportedChainId.AVAX]: 'https://snowtrace.io/address/',
  [SupportedChainId.METIS]: 'https://andromeda-explorer.metis.io/address/',
  [SupportedChainId.POLYGON]: 'https://polygonscan.com/address/',
  [SupportedChainId.SONIC]: 'https://sonicscan.org/address/',
  [SupportedChainId.FRAXTAL]: 'https://fraxscan.com/address/',
  [SupportedChainId.SWELL]: 'https://explorer.swellnetwork.io/address/',
  [SupportedChainId.BERA]: 'https://berascan.com/address/',
};

// Helper to format address for markdown with explorer link
function formatAddress(addr, chainId = ARBITRUM_ONE) {
  if (!addr) return 'N/A';
  const explorer = BLOCK_EXPLORERS[chainId] || BLOCK_EXPLORERS[ARBITRUM_ONE];
  return `[\`${addr}\`](${explorer}${addr})`;
}

// Helper to get address from map
function getAddress(addressMap, chainId) {
  return addressMap?.[chainId] || null;
}

// Generate Hermes contracts markdown
function generateHermesMarkdown() {
  const arb = HermesAddresses[ARBITRUM_ONE];

  return `---
id: contracts
title: Contract Addresses
sidebar_position: 99
---

# Hermes Contract Addresses

All Hermes Protocol contracts are deployed on **Arbitrum One** (Chain ID: 42161).

## Core Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| HERMES Token | ${formatAddress(arb?.Hermes)} | The native governance and utility token |
| bHERMES | ${formatAddress(arb?.bHermes)} | Burned HERMES governance token |
| bHERMES Votes | ${formatAddress(arb?.bHermesVotes)} | Governance voting token |
| bHERMES Gauges | ${formatAddress(arb?.bHermesGauges)} | Gauge voting power token |
| bHERMES Boost | ${formatAddress(arb?.bHermesBoost)} | Boost utility token |

## Gauge Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Uniswap V3 Gauge Factory | ${formatAddress(arb?.UniswapV3GaugeFactory)} | Factory for deploying Uni V3 gauges |
| Uniswap V3 Staker | ${formatAddress(arb?.UniswapV3Staker)} | Staking contract for Uni V3 positions |
| Base V2 Gauge Manager | ${formatAddress(arb?.BaseV2GaugeManager)} | Manages gauge operations |
| Flywheel Gauge Rewards | ${formatAddress(arb?.FlywheelGaugeRewards)} | Distributes gauge rewards |
| Flywheel Booster | ${formatAddress(arb?.FlywheelBooster)} | Manages boost balances |

## Minter & Emissions

| Contract | Address | Description |
|----------|---------|-------------|
| Base V2 Minter | ${formatAddress(arb?.BaseV2Minter)} | HERMES token minter |

## Bribes & Partners

| Contract | Address | Description |
|----------|---------|-------------|
| Bribes Factory | ${formatAddress(arb?.BribesFactory)} | Factory for creating bribes |
| Partner Manager Factory | ${formatAddress(arb?.PartnerManagerFactory)} | Factory for partner vaults |

## Helper Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Rewards Info Helper | ${formatAddress(arb?.RewardsInfoHelper)} | Helper for querying rewards |
| ERC20 Boost Helper | ${formatAddress(arb?.ERC20BoostHelper)} | Helper for boost operations |
| Restake Helper | ${formatAddress(arb?.RestakeHelper)} | Helper for restaking |
| Flywheel Helper | ${formatAddress(arb?.FlywheelHelper)} | Helper for flywheel operations |

## Governance Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Governor Severity 1 | ${formatAddress(getAddress(GOVERNANCE_BRAVO_SEVERITY_1_ADDRESSES, ARBITRUM_ONE))} | Low severity proposals |
| Governor Severity 2 | ${formatAddress(getAddress(GOVERNANCE_BRAVO_SEVERITY_2_ADDRESSES, ARBITRUM_ONE))} | Medium-low severity proposals |
| Governor Severity 3 | ${formatAddress(getAddress(GOVERNANCE_BRAVO_SEVERITY_3_ADDRESSES, ARBITRUM_ONE))} | Medium severity proposals |
| Governor Severity 4 | ${formatAddress(getAddress(GOVERNANCE_BRAVO_SEVERITY_4_ADDRESSES, ARBITRUM_ONE))} | Medium-high severity proposals |
| Governor Severity 5 | ${formatAddress(getAddress(GOVERNANCE_BRAVO_SEVERITY_5_ADDRESSES, ARBITRUM_ONE))} | High severity proposals |

## Timelock Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Timelock Severity 1 | ${formatAddress(getAddress(TIMELOCK_SEVERITY_1_ADDRESSES, ARBITRUM_ONE))} | Timelock for severity 1 |
| Timelock Severity 2 | ${formatAddress(getAddress(TIMELOCK_SEVERITY_2_ADDRESSES, ARBITRUM_ONE))} | Timelock for severity 2 |
| Timelock Severity 3 | ${formatAddress(getAddress(TIMELOCK_SEVERITY_3_ADDRESSES, ARBITRUM_ONE))} | Timelock for severity 3 |
| Timelock Severity 4 | ${formatAddress(getAddress(TIMELOCK_SEVERITY_4_ADDRESSES, ARBITRUM_ONE))} | Timelock for severity 4 |
| Timelock Severity 5 | ${formatAddress(getAddress(TIMELOCK_SEVERITY_5_ADDRESSES, ARBITRUM_ONE))} | Timelock for severity 5 |

## Verifying Contracts

All contracts can be verified on [Arbiscan](https://arbiscan.io/).
`;
}

// Generate Maia contracts markdown
function generateMaiaMarkdown() {
  const arb = MaiaAddresses[ARBITRUM_ONE];

  return `---
id: contracts
title: Contract Addresses
sidebar_position: 99
---

# Maia Contract Addresses

All Maia Protocol contracts are deployed on **Arbitrum One** (Chain ID: 42161).

## Core Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| MAIA Token | ${formatAddress(arb?.Maia)} | The native governance and utility token |
| vMAIA | ${formatAddress(arb?.vMaia)} | Vote-escrowed MAIA token |
| vMAIA Votes | ${formatAddress(arb?.vMaiaVotes)} | vMAIA voting token |

## Governance Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Governor Bravo | ${formatAddress(getAddress(GOVERNANCE_BRAVO_ADDRESSES, ARBITRUM_ONE))} | Main governance contract |
| Timelock | ${formatAddress(getAddress(TIMELOCK_ADDRESS, ARBITRUM_ONE))} | Timelock controller |

## Verifying Contracts

All contracts can be verified on [Arbiscan](https://arbiscan.io/).
`;
}

// Generate Talos contracts markdown
function generateTalosMarkdown() {
  const arb = TalosAddresses[ARBITRUM_ONE];

  return `---
id: contracts
title: Contract Addresses
sidebar_position: 99
---

# Talos Contract Addresses

All Talos Protocol contracts are deployed on **Arbitrum One** (Chain ID: 42161).

## Core Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Talos Strategy Staked Factory | ${formatAddress(arb?.TalosStrategyStakedFactory)} | Factory for staked strategies |
| Optimizer Factory | ${formatAddress(arb?.OptimizerFactory)} | Factory for optimizer strategies |
| Boost Aggregator Factory | ${formatAddress(arb?.BoostAggregatorFactory)} | Factory for boost aggregators |
| Talos Manager Factory | ${formatAddress(arb?.TalosManagerFactory)} | Factory for Talos managers |

## Rewards Contracts

| Contract | Address | Description |
|----------|---------|-------------|
| Flywheel Core Instant | ${formatAddress(arb?.FlywheelCoreInstant)} | Instant rewards distribution |
| Transfer All | ${formatAddress(arb?.TransferAll)} | Batch transfer helper |

## Verifying Contracts

All contracts can be verified on [Arbiscan](https://arbiscan.io/).
`;
}

// Generate Ulysses contracts markdown
function generateUlyssesMarkdown() {
  const rootContracts = Ulysses[ARBITRUM_ONE];

  // Build branch chain sections
  const branchChains = [
    SupportedChainId.MAINNET,
    SupportedChainId.OPTIMISM,
    SupportedChainId.BASE,
    SupportedChainId.BSC,
    SupportedChainId.AVAX,
    SupportedChainId.METIS,
    SupportedChainId.POLYGON,
    SupportedChainId.SONIC,
    SupportedChainId.FRAXTAL,
    SupportedChainId.SWELL,
    SupportedChainId.BERA,
  ];

  let branchSections = '';
  for (const chainId of branchChains) {
    const branch = Ulysses[chainId];
    if (branch) {
      const chainName = CHAIN_NAMES[chainId] || `Chain ${chainId}`;
      branchSections += `
### ${chainName} (Chain ID: ${chainId})

| Contract | Address | Description |
|----------|---------|-------------|
| Branch Port | ${formatAddress(branch?.BranchPort, chainId)} | Branch hub for ${chainName} |
| Branch Bridge Agent Factory | ${formatAddress(branch?.BranchBridgeAgentFactory, chainId)} | Factory for bridge agents |
| Core Branch Router | ${formatAddress(branch?.CoreBranchRouter, chainId)} | Core routing on branch |
| Core Branch Bridge Agent | ${formatAddress(branch?.CoreBranchBridgeAgent, chainId)} | Core bridge agent |
| ERC20 hToken Branch Factory | ${formatAddress(branch?.ERC20hTokenBranchFactory, chainId)} | Factory for hTokens |
| Multicall Branch Router | ${formatAddress(branch?.MulticallBranchRouter, chainId)} | Multicall router |
| Multicall Branch Bridge Agent | ${formatAddress(branch?.MulticallBranchBridgeAgent, chainId)} | Multicall bridge agent |
`;
    }
  }

  return `---
id: contracts
title: Contract Addresses
sidebar_position: 99
---

# Ulysses Contract Addresses

Ulysses Protocol is deployed across multiple chains with the Root deployed on **Arbitrum One** (Chain ID: 42161).

## Root Contracts (Arbitrum One)

| Contract | Address | Description |
|----------|---------|-------------|
| Root Port | ${formatAddress(rootContracts?.RootPort)} | Main hub for cross-chain operations |
| Root Bridge Agent Factory | ${formatAddress(rootContracts?.RootBridgeAgentFactory)} | Factory for root bridge agents |
| Core Root Router | ${formatAddress(rootContracts?.CoreRootRouter)} | Core routing functionality |
| Core Root Bridge Agent | ${formatAddress(rootContracts?.CoreRootBridgeAgent)} | Core bridge agent |
| ERC20 hToken Root Factory | ${formatAddress(rootContracts?.ERC20hTokenRootFactory)} | Factory for root hTokens |
| Multicall Root Router | ${formatAddress(rootContracts?.MulticallRootRouter)} | Multicall router |
| Multicall Root Bridge Agent | ${formatAddress(rootContracts?.MulticallRootBridgeAgent)} | Multicall bridge agent |
| Multicall Root Router LibZip | ${formatAddress(rootContracts?.MulticallRootRouterLibZip)} | Compressed multicall router |
| Multicall Root Bridge Agent LibZip | ${formatAddress(rootContracts?.MulticallRootBridgeAgentLibZip)} | Compressed multicall bridge agent |

## Branch Contracts
${branchSections}

## Verifying Contracts

Contracts can be verified on their respective block explorers:
- Arbitrum: [Arbiscan](https://arbiscan.io/)
- Ethereum: [Etherscan](https://etherscan.io/)
- Optimism: [Optimistic Etherscan](https://optimistic.etherscan.io/)
- Base: [Basescan](https://basescan.org/)
- BNB Chain: [BscScan](https://bscscan.com/)
- Avalanche: [Snowtrace](https://snowtrace.io/)
- Metis: [Metis Explorer](https://andromeda-explorer.metis.io/)
- Polygon: [Polygonscan](https://polygonscan.com/)
- Sonic: [Sonicscan](https://sonicscan.org/)
- Fraxtal: [Fraxscan](https://fraxscan.com/)
- Swell: [Swell Explorer](https://explorer.swellnetwork.io/)
- Berachain: [Berascan](https://berascan.com/)
`;
}

// Main function
async function main() {
  console.log('Updating contract documentation from maia-core-sdk...\n');

  const updates = [
    {
      name: 'Hermes',
      path: path.join(DOCS_DIR, 'version-Hermes', 'overview', 'contracts.md'),
      content: generateHermesMarkdown(),
    },
    {
      name: 'Maia',
      path: path.join(DOCS_DIR, 'version-Maia', 'overview', 'contracts.md'),
      content: generateMaiaMarkdown(),
    },
    {
      name: 'Talos',
      path: path.join(DOCS_DIR, 'version-Talos', 'overview', 'contracts.md'),
      content: generateTalosMarkdown(),
    },
    {
      name: 'Ulysses',
      path: path.join(DOCS_DIR, 'version-Ulysses', 'overview', 'contracts.md'),
      content: generateUlyssesMarkdown(),
    },
  ];

  for (const update of updates) {
    try {
      // Ensure directory exists
      const dir = path.dirname(update.path);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(update.path, update.content);
      console.log(`✓ Updated ${update.name} contracts: ${update.path}`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.name}: ${error.message}`);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);
