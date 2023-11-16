# ArbitrumBranchPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/ArbitrumBranchPort.sol)

**Inherits:**
[BranchPort](/src/ulysses-omnichain/BranchPort.md), [IArbitrumBranchPort](/src/ulysses-omnichain/interfaces/IArbitrumBranchPort.md)

**Author:**
MaiaDAO


## State Variables
### rootChainId
Local Network Identifier.


```solidity
uint16 public immutable override rootChainId;
```


### rootPortAddress
Address for Root Port Address


```solidity
address public immutable override rootPortAddress;
```


## Functions
### constructor

Constructor for Arbitrum Branch Port.


```solidity
constructor(uint16 _rootChainId, address _rootPortAddress, address _owner) BranchPort(_owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rootChainId`|`uint16`|arbitrum layer zero chain id.|
|`_rootPortAddress`|`address`|address of the Root Port.|
|`_owner`|`address`|owner of the contract.|


### depositToPort

Function to deposit underlying/native token amount into Port in exchange for Local hToken.


```solidity
function depositToPort(address _depositor, address _recipient, address _underlyingAddress, uint256 _deposit)
    external
    override
    lock
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying/native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying/native token address.|
|`_deposit`|`uint256`||


### withdrawFromPort

Function to withdraw underlying/native token amount into Port in exchange for Local hToken.


```solidity
function withdrawFromPort(address _depositor, address _recipient, address _globalAddress, uint256 _amount)
    external
    override
    lock
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying/native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_globalAddress`|`address`|global hToken address.|
|`_amount`|`uint256`|amount of tokens.|


### _bridgeIn

Internal function to bridge in assets from the Root Chain.


```solidity
function _bridgeIn(address _recipient, address _localAddress, uint256 _amount) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|recipient of the bridged assets.|
|`_localAddress`|`address`|address of the local token.|
|`_amount`|`uint256`|amount of the bridged assets.|


### _bridgeOut

Internal function to bridge out assets to the Root Chain.


```solidity
function _bridgeOut(
    address _depositor,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit
) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|depositor of the bridged assets.|
|`_localAddress`|`address`|address of the local token.|
|`_underlyingAddress`|`address`|address of the underlying token.|
|`_amount`|`uint256`|amount of the bridged assets.|
|`_deposit`|`uint256`|amount of the underlying assets to be deposited.|


