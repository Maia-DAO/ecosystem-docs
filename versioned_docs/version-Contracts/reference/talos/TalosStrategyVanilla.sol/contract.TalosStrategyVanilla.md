# TalosStrategyVanilla

**Inherits:**
[TalosStrategySimple](/talos/strategies/TalosStrategySimple.sol/abstract.TalosStrategySimple.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Tokenized Vault implementation for Uniswap V3 Non Fungible Positions.


## State Variables
### protocolFee
The protocol's fee in hundredths of a bip, i.e. 1e-6


```solidity
uint24 private constant protocolFee = 2 * 1e5;
```


### GLOBAL_DIVISIONER

```solidity
uint24 private constant GLOBAL_DIVISIONER = 1e6;
```


## Functions
### constructor

Constructs a new TalosStrategyVanilla contract.


```solidity
constructor(
    IUniswapV3Pool _pool,
    ITalosOptimizer _optimizer,
    INonfungiblePositionManager _nonfungiblePositionManager,
    address _strategyManager,
    address _owner
) TalosStrategySimple(_pool, _optimizer, _nonfungiblePositionManager, _strategyManager, _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_pool`|`IUniswapV3Pool`|The Uniswap V3 pool to manage.|
|`_optimizer`|`ITalosOptimizer`|The optimizer contract to use.|
|`_nonfungiblePositionManager`|`INonfungiblePositionManager`|The Uniswap V3 Non Fungible Position Manager contract.|
|`_strategyManager`|`address`|The strategy manager contract.|
|`_owner`|`address`|The owner of the contract.|


### beforeRedeem

Performs the necessary actions before a withdraw can take place


```solidity
function beforeRedeem(uint256 _tokenId, address) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user is trying to withdraw from|
|`<none>`|`address`||


### afterRedeem

Performs the necessary actions after a withdraw takes place


```solidity
function afterRedeem(uint256 _tokenId) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user is trying to withdraw from|


### beforeDeposit

Performs the necessary actions before a deposit can take place


```solidity
function beforeDeposit(uint256 _tokenId, address) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to deposit in|
|`<none>`|`address`||


### afterDeposit

Performs the necessary actions after a deposit takes place


```solidity
function afterDeposit(uint256 _tokenId) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to deposit in|


### beforeRerange

Performs the necessary actions before a re-range can take place


```solidity
function beforeRerange(uint256 _tokenId) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to re-range|


### afterRerange

Performs the necessary actions after a re-range takes place


```solidity
function afterRerange(uint256 _tokenId) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to deposit in|


### _earnFees

Collects fees from the pool to the protocol.


```solidity
function _earnFees(uint256 _tokenId) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to collect fees from|


### _compoundFees

Compounds fees from the pool from a user prespective


```solidity
function _compoundFees(uint256 _tokenId) internal returns (uint256 amount0, uint256 amount1);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_tokenId`|`uint256`|position id that the user wants to compound fees from|


## Events
### CollectFees
Emitted when fees was collected from the pool


```solidity
event CollectFees(uint256 feesFromPool0, uint256 feesFromPool1, uint256 usersFees0, uint256 usersFees1);
```

### CompoundFees
Emitted when fees was compuonded to the pool


```solidity
event CompoundFees(uint256 amount0, uint256 amount1);
```

