---
id: migration-incentives
title: Migration Incentives
---

From August 14th to August 21st, join us for Migration Week! During this period, users can claim their migrated balances on Arbitrum. Additionally, POL has been added to the UniswapV3 MAIA/WETH pool, and all functionalities related to bridging, swapping, liquidity provision, Hermes burning, and Maia staking are available through the UI.

To support liquidity during this transition, we’ll be distributing retroactive liquidity incentives at the end of the week. These incentives will be allocated proportionally based on the active liquidity provided, following the model of our Uniswap V3 Staker.

Starting August 21st, the full system will be online, allowing you to vote, stake, and boost UniswapV3 NFT positions in exchange for Hermes rewards.

Learn more in-depth information about the DAO migration steps [here](https://commonwealth.im/hermes-omnichain/discussion/24358-hip21-governance-proposal-for-migration-to-v2).

## Reward Calculations

The rewards will be distributed according to our improved Uniswap V3 Staker version, modified from the original that was based on a Paradigm research about [Liquidity Mining on Uniswap V3](https://www.paradigm.xyz/2021/05/liquidity-mining-on-uniswap-v3). This makes the first week retroactive incentives work like the original Uniswap V3 Staker as there will be no minimum width and no boosted emissions from bHermes Boost Utility Token.

To avoid the gaming of rewards by adding very little liquidity to unused pools, the minimum TVL for rewards calculation for each pool is 100k USD. This means that if a pool has less than 100k USD, it will not distribute all of it's rewards for that period. For example, if there is only 10k liquidity in a pool it will only receive 10% of the rewards for that duration.

## Launch Initial Gauges

We are excited to announce the launch of our initial liquidity gauges, designed to kickstart the HermesV2 ecosystem and reward active participants. Below is a list of the available pools and the corresponding bootstrap incentive amounts in $HERMES.

|          Pool Name         | Incentive Amount ($HERMES)|
|----------------------------|---------------------------|
|mainnetWETH / arbWETH       |             50k           |
|mainnetUSDC / arbUSDC       |             50k           |
|mainnetUSDT / arbUSDT       |             50k           |
|WuOPs-ETH / arbWETH         |             35k           |
|WuOPs-USDC / arbUSDC        |             35k           |
|opUSDT / arbUSDT            |             35k           |
|WuL1s-USDT / arbUSDT        |             30k           |
|WuL1s-USDC / arbUSDC        |             30k           |
|metisWETH / arbWETH         |             30k           |
|metisUSDC / arbUSDC         |             25k           |
|metisUSDT / arbUSDT         |             25k           |
|HERMES / arbWETH            |             45k           |
|MAIA / arbWETH              |             35k           |

Learn more about initial liquidity set up [here](https://commonwealth.im/hermes-omnichain/discussion/16558-hip19-launch-parameters-ulysses-chains-and-hermes-gauges).

Access V2 liquidity page [here](https://app.maiadao.io/#/liquidity).


Here's an expanded version of the generic guides that includes the extra scenarios you mentioned:

## Generic Guides for Gauges

***Note: These guides only feature initial liquidity instructions, once liquidity is acquired zapping into BPTs from one of the udnerlying assets will be possible.***

### Gauges with a Wrapped Ulysses Token (e.g. WuOPs-ETH / arbWETH)

**How to add seed Liquidity:**

#### 1. **Deposit Wrapped Ulysses *Underlying Tokens* from their origin chain:**
1. Deposit *Underlying Tokens* A from your desired BPT from the link in the table below.
2. Deposit *Underlying Tokens* B from your desired BPT from the link in the table below.

|   Wrapped Ulysses Token    |  Deposit Underlying A     |   Deposit Underlying B    |
|----------------------------|---------------------------|---------------------------|
|    WuOPs-ETH               |     [ETH from OP](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=ETH&chain=optimism)                                             |   [ETH from BASE](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=ETH&chain=base)           |
|    WuOPs-USDC              |    [USDC from OP](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0xE839360768881d1bECC05Bff2CC82176F4304D77&chain=optimism)      |   [USDC from BASE](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0x57D627b04e397Bd8c32C4aAA05Ec02AD20F0F033&chain=base)          |
|    WuL1s-USDT              |    [USDT from BSC](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0xb654cB02aB0318985B10CCE2C0027Ef36a3DB55B&chain=bsc)          |   [USDT from AVAX](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0xfD4785566143dc5108333de609ac4E8E0A52D00A&chain=avax)          |
|    WuL1s-USDC              |    [USDC from BSC](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0x8Ff53B87fEdde6A7dD8Ce4F94865eb826a616e1b&chain=bsc)          |   [USDC from AVAX](https://app.maiadao.io/#/ulysses/deposit?inputCurrency=0xf108A590BF86972B9BeaB03d6174AD7907554905&chain=avax)          |

#### 2. **Add Liquidity via Balancer:**
- Use the Balancer protocol to provide liquidity.

|   Wrapped Ulysses Token    |  Deposit into BPT using Balancer  |
|----------------------------|--------------------|
|    WuOPs-ETH               |    [uOPs-ETH](https://balancer.fi/pools/arbitrum/v2/0x9ECF98B64986277D53E8C8DBFA1B48B1D4A3DF750000000000000000000005BD/add-liquidity)       |
|    WuOPs-USDC              |    [uOPs-USDC](https://balancer.fi/pools/arbitrum/v2/0xACDD57300F214E2530DB0F5283036686BB85D67C0000000000000000000005BE/add-liquidity)       |
|    WuL1s-USDT              |    [uL1s-USDT](https://balancer.fi/pools/arbitrum/v2/0xF4D4D470C8BA20FF97FDAFC2DFA0E744A8D904670000000000000000000005BF/add-liquidity)       |
|    WuL1s-USDC              |    [uL1s-USDC](https://balancer.fi/pools/arbitrum/v2/0x72DF281E860117DBF60400D7C5EA770D2379072C0000000000000000000005C1/add-liquidity)       |

#### 3. **Wrap your BPT via Hermes UI:**
- Deposit into our Balancer Pool Token Wrapper.

|   Wrapped Ulysses Token    |  Deposit into BPT Wrapper  |
|----------------------------|--------------------|
|    WuOPs-ETH               |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0x9ECF98B64986277D53E8C8DBFA1B48B1D4A3DF75&outputCurrency=0x3e926849b99dfCCEA2D1527d86f1ce6102ab11e8&chain=arbitrum)        |
|    WuOPs-USDC              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0xACDD57300F214E2530DB0F5283036686BB85D67C&outputCurrency=0xc6e54f2a194D8f08DFD5a19D012D5A80A1Cc9395&chain=arbitrum)       |
|    WuL1s-USDT              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0xF4D4D470C8BA20FF97FDAFC2DFA0E744A8D90467&outputCurrency=0x12c9aBDf9493ab84ccDBbBBEF885753f42f59c42&chain=arbitrum)       |
|    WuL1s-USDC              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0x72DF281E860117DBF60400D7C5EA770D2379072C&outputCurrency=0x984CcfafE1426342D24258a72E2dbEBa1660A386&chain=arbitrum)       |

#### 4. **Add Liquidity via HermesV2 UI:**
- Complete the liquidity process using the HermesV2 UI.
   
|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    WuOPs-ETH / arbWETH     |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x3e926849b99dfCCEA2D1527d86f1ce6102ab11e8?chain=arbitrum)        |
|    WuOPs-USDC / arbUSDC    |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0xc6e54f2a194D8f08DFD5a19D012D5A80A1Cc9395?chain=arbitrum)       |
|    WuL1s-USDT / arbUSDT    |    [Add Liquidity](https://app.maiadao.io/#/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0x12c9aBDf9493ab84ccDBbBBEF885753f42f59c42?chain=arbitrum)       |
|    WuL1s-USDC / arbUSDC    |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0x984CcfafE1426342D24258a72E2dbEBa1660A386?chain=arbitrum)       |

---

### Gauges with ETH from Arbitrum (e.g. mainnetWETH / arbWETH)

**How to add seed Liquidity:**

1. **Wrap your Arbitrum WETH [here](https://app.maiadao.io/#/swap?inputCurrency=ETH&outputCurrency=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    mainnetWETH / arbWETH   |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x4bbfdd5c35566a6cd3e4b9ac8f05b7e7a98c16c6?chain=mainnet)        |
|    metisWETH / arbWETH    |    [Add Liquidity](https://app.maiadao.io/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0xF7200F9c75c7D553a82F7400f5c8B431694e10bb)       |


---

### Gauges with one Arbitrum token (e.g. mainnetUSDC / arbUSDC)

**How to add seed Liquidity from Both Chains:**

1. **Ensure you have enough balance of the Arbitrum Token [here](https://app.maiadao.io/#/swap?chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    opUSDT / arbUSDT   |    [Add Liquidity](https://app.maiadao.io/#/add/0x390D857082b406f06b4d5c8377EC0aD36713aC33/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9?chain=optimism)       |
|    mainnetUSDC / arbUSDC   |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0x82ab9B2398217bF0200Bc8b18f2A995C1eFb975a?chain=mainnet)       |
|    mainnetUSDT / arbUSDT   |    [Add Liquidity](https://app.maiadao.io/#/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0x0f2944ff2566Aa405ea7A9522ff5cD0cD5EF1797?chain=mainnet)       |
|    metisUSDC / arbUSDC       |    [Add Liquidity](https://app.maiadao.io/#/add/0xd7654107697D484c0070F6d71C699B6a1A9A9795/0xaf88d065e77c8cC2239327C5EDb3A432268e5831?chain=metis)          |
|    metisUSDT / arbUSDT       |    [Add Liquidity](https://app.maiadao.io/#/add/0xE18b9c05E3Bb22652812e3eD43459Ad8A8bB6A70/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9?chain=metis)          |

---

### Gauges with tokens from the same chain (e.g. HERMES / arbWETH)

1. **Ensure you have enough balance of the Arbitrum Token [here](https://app.maiadao.io/#/swap?chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    HERMES / arbWETH        |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x45940000009600102A1c002F0097C4A500fa00AB?chain=arbitrum)        |
|    MAIA / arbWETH          |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x00000000ea00F3F4000e7Ed5Ed91965b19f1009B?chain=arbitrum)       |
