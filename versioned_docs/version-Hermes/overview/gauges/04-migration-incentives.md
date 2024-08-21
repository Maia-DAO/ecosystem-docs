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
|WuL1s-USDT                  |             25k           |
|WuMETIS / arbWETH           |             25k           |
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
|    WuOPs-ETH               |     [ETH from OP](https://app.maiadao.io/#/deposit?inputCurrency=ETH&chain=optimism)           |   [ETH from BASE](https://app.maiadao.io/#/deposit?inputCurrency=ETH&chain=base)           |
|    WuOPs-USDC              |    [USDC from OP](https://app.maiadao.io/#/deposit?inputCurrency=0x446C123628194826110Fac2e18496a161d277b0F&chain=optimism)           |   [USDC from BASE](https://app.maiadao.io/#/deposit?inputCurrency=0xD5FAE1D23693d2f0090cD101b79892661c539366&chain=base)          |
|    WuL1s-USDT              |    [USDT from BSC](https://app.maiadao.io/#/deposit?inputCurrency=0xd972c72fb7e2a6f8F947f6cc000Fe409Fd746137&chain=bsc)          |   [USDT from AVAX](https://app.maiadao.io/#/deposit?inputCurrency=0x0B8A98B0FD31Fc92B7dF5592a78B83aE455d2C44&chain=avax)          |
|    WuL1s-USDC              |    [USDC from BSC](https://app.maiadao.io/#/deposit?inputCurrency=0x9F0DD7B477dE824c6b2f7EE141fC8656C6EA0582&chain=bsc)          |   [USDC from AVAX](https://app.maiadao.io/#/deposit?inputCurrency=0xa81CCd479d23529151e25808C591bd0d8556eD2d&chain=avax)          |
|    WuMETIS                 |    [Metis from Andromeda](https://app.maiadao.io/#/deposit?inputCurrency=ETH&chain=metis)   |    [Metis from Mainnet](https://app.maiadao.io/#/deposit?inputCurrency=0x90364aA61234B85251aD943681433904c35FA5ce&chain=mainnet)     |

#### 2. **Add Liquidity via Balancer:**
- Use the Balancer protocol to provide liquidity.

|   Wrapped Ulysses Token    |  Deposit into BPT using Balancer  |
|----------------------------|--------------------|
|    WuOPs-ETH               |    [uOPs-ETH](https://balancer.fi/pools/arbitrum/v2/0x0829380A1101B3D129DFF56163BCB60F6DD7CD4E000000000000000000000599/add-liquidity)        |
|    WuOPs-USDC              |    [uOPs-USDC](https://balancer.fi/pools/arbitrum/v2/0xc71fae5853fa2416b37728d73b51e17a32691e45000000000000000000000598/add-liquidity)       |
|    WuL1s-USDT              |    [uL1s-USDT](https://balancer.fi/pools/arbitrum/v2/0xdc4bbb8928e97e913ba13f6a737caa45e8070e7d00000000000000000000059e/add-liquidity)       |
|    WuL1s-USDC              |    [uL1s-USDC](https://balancer.fi/pools/arbitrum/v2/0x18B9B9897F0C5A7F2D9424C058211C2EF218F1A300000000000000000000059C/add-liquidity)       |
|    WuMETIS                 |    [uMETIS](https://balancer.fi/pools/arbitrum/v2/0xDDEED1A20169658C1F20F338B8158E89C78A0C2200000000000000000000059A/add-liquidity)          |

#### 3. **Wrap your BPT via Hermes UI:**
- Deposit into our Balancer Pool Token Wrapper.

|   Wrapped Ulysses Token    |  Deposit into BPT Wrapper  |
|----------------------------|--------------------|
|    WuOPs-ETH               |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0x0829380A1101B3D129DFF56163BCB60F6DD7CD4E&outputCurrency=0x0B52D7bc036f6F74d8eA5Ea02A9fa4CDd12EA784&chain=arbitrum)        |
|    WuOPs-USDC              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0xc71fae5853fa2416b37728d73b51e17a32691e45&outputCurrency=0x9fa578DBf15C86b1eE599aa4507251311fd6FD37&chain=arbitrum)       |
|    WuL1s-USDT              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0xdc4bbb8928e97e913ba13f6a737caa45e8070e7d&outputCurrency=0x6284885cC2b1934A53E92d01BF55995314190C19&chain=arbitrum)       |
|    WuL1s-USDC              |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0x18b9b9897f0c5a7f2d9424c058211c2ef218f1a3&outputCurrency=0xD4FcbADA835D5A2814Db6D4521a668ab0773D3f3&chain=arbitrum)       |
|    WuMETIS                 |    [Deposit](https://app.maiadao.io/#/swap?inputCurrency=0xdDeeD1A20169658c1F20F338b8158E89c78a0C22&outputCurrency=0x59D93dedD5Ca3526811FbcD5BcaC99743Bb47319&chain=arbitrum)          |

#### 4. **Add Liquidity via HermesV2 UI:**
- Complete the liquidity process using the HermesV2 UI.
   
|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    WuOPs-ETH / arbWETH     |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x0B52D7bc036f6F74d8eA5Ea02A9fa4CDd12EA784?chain=arbitrum)        |
|    WuOPs-USDC / arbUSDC    |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0x9fa578DBf15C86b1eE599aa4507251311fd6FD37?chain=arbitrum)       |
|    WuL1s-USDT / arbUSDT    |    [Add Liquidity](https://app.maiadao.io/#/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0x6284885cC2b1934A53E92d01BF55995314190C19?chain=arbitrum)       |
|    WuL1s-USDC / arbUSDC    |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0xD4FcbADA835D5A2814Db6D4521a668ab0773D3f3?chain=arbitrum)       |
|    WuMETIS / arbWETH       |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x59D93dedD5Ca3526811FbcD5BcaC99743Bb47319?chain=arbitrum)          |


---

### Gauges with ETH from Arbitrum (e.g. mainnetWETH / arbWETH)

**How to add seed Liquidity:**

1. **Wrap your Arbitrum WETH [here](https://app.maiadao.io/#/swap?inputCurrency=ETH&outputCurrency=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    mainnetWETH / arbWETH   |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0xec32aAd0e8fc6851f4bA024B33dE09607190Ce9b?chain=mainnet)        |
|    metisWETH / arbWETH    |    [Add Liquidity](https://app.maiadao.io/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x86E8d85b46A5Ed5fB7b97F2AdaeAf702cA9929bC)       |


---

### Gauges with one Arbitrum token (e.g. mainnetUSDC / arbUSDC)

**How to add seed Liquidity from Both Chains:**

1. **Ensure you have enough balance of the Arbitrum Token [here](https://app.maiadao.io/#/swap?chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    opUSDT / arbUSDT   |    [Add Liquidity](https://app.maiadao.io/#/add/0x172357103cAbb55fee31fC7f34faf5Bc2c22181A/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9?chain=optimism)       |
|    mainnetUSDC / arbUSDC   |    [Add Liquidity](https://app.maiadao.io/#/add/0xaf88d065e77c8cC2239327C5EDb3A432268e5831/0x7600b276b65B16AF569b34cb6fDBFCBCc7F910c7?chain=mainnet)       |
|    mainnetUSDT / arbUSDT   |    [Add Liquidity](https://app.maiadao.io/#/add/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/0xf56feaA4460feA03A6d70f168D905f96390DC592?chain=mainnet)       |
|    metisUSDC / arbUSDC       |    [Add Liquidity](https://app.maiadao.io/#/add/0x4C321Dc94787B73CCf3f0CC0e9430a0d35D48C9F/0xaf88d065e77c8cC2239327C5EDb3A432268e5831?chain=metis)          |
|    metisUSDT / arbUSDT       |    [Add Liquidity](https://app.maiadao.io/#/add/0xf69525E7B7aA0212E1AeE9528ddF73941236BE7b/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9?chain=metis)          |

---

### Gauges with tokens from the same chain (e.g. HERMES / arbWETH)

1. **Ensure you have enough balance of the Arbitrum Token [here](https://app.maiadao.io/#/swap?chain=arbitrum).**

2. **Add Liquidity on Uniswap:**
- connect to the branch chain (e.g. Ethereum Mainnet) and add liquidity:

|      Uniswap V3 Pool       |  Add Liquidity Into Pool  |
|----------------------------|--------------------|
|    HERMES / arbWETH        |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x00000000000451f49c692Bfc24971cAcEA2dB678?chain=arbitrum)        |
|    MAIA / arbWETH          |    [Add Liquidity](https://app.maiadao.io/#/add/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1/0x00000000702749f73E5210B08b0a3D440078f888?chain=arbitrum)       |
