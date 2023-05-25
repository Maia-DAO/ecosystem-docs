---
id: ArbitrumBranchPort
title: ArbitrumBranchPort
---

**Inherits:**
[BranchPort](/ulysses-omnichain/BranchPort.sol/contract.BranchPort.md), [IArbitrumBranchPort](/ulysses-omnichain/interfaces/IArbitrumBranchPort.sol/interface.IArbitrumBranchPort.md)


## State Variables
### localChainId
Local Network Identifier.


```solidity
uint24 public localChainId;
```


### rootPortAddress
Address for Local Port Address where funds deposited from this chain are kept, managed and supplied to different Port Strategies.


```solidity
address public rootPortAddress;
```


## Functions
### constructor

Constructor for Arbitrum Branch Port.


```solidity
constructor(uint24 _localChainId, address _rootPortAddress, address _owner) BranchPort(_owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localChainId`|`uint24`|local chain id.|
|`_rootPortAddress`|`address`|address of the Root Port.|
|`_owner`|`address`|owner of the contract.|


### depositToPort

Function to deposit underlying / native token amount into Port in exchange for Local hToken.


```solidity
function depositToPort(address _depositor, address _recipient, address _underlyingAddress, uint256 _deposit)
    external
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying / native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying / native token address.|
|`_deposit`|`uint256`||


### withdrawFromPort

Function to withdraw underlying / native token amount into Port in exchange for Local hToken.


```solidity
function withdrawFromPort(address _depositor, address _recipient, address _globalAddress, uint256 _deposit)
    external
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying / native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_globalAddress`|`address`|global hToken address.|
|`_deposit`|`uint256`||


### withdraw

Function to withdraw underlying / native token amount into Port in exchange for Local hToken.


```solidity
function withdraw(address _recipient, address _underlyingAddress, uint256 _deposit)
    external
    override(IBranchPort, BranchPort)
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying / native token address.|
|`_deposit`|`uint256`||


### bridgeIn

Setter function to increase local hToken supply.


```solidity
function bridgeIn(address _recipient, address _localAddress, uint256 _amount)
    external
    override(IBranchPort, BranchPort)
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_localAddress`|`address`|token address.|
|`_amount`|`uint256`|amount of tokens.|


### bridgeInMultiple

Setter function to increase local hToken supply.


```solidity
function bridgeInMultiple(address _recipient, address[] memory _localAddresses, uint256[] memory _amounts)
    external
    override(IBranchPort, BranchPort)
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_localAddresses`|`address[]`|token addresses.|
|`_amounts`|`uint256[]`|amount of tokens.|


### bridgeOut

Setter function to decrease local hToken supply.


```solidity
function bridgeOut(
    address _depositor,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit
) external override(IBranchPort, BranchPort) requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_localAddress`|`address`|token address.|
|`_underlyingAddress`|`address`||
|`_amount`|`uint256`|amount of tokens.|
|`_deposit`|`uint256`||


### bridgeOutMultiple

Setter function to decrease local hToken supply.


```solidity
function bridgeOutMultiple(
    address _depositor,
    address[] memory _localAddresses,
    address[] memory _underlyingAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits
) external override(IBranchPort, BranchPort) requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|user to deduct balance from.|
|`_localAddresses`|`address[]`|local token addresses.|
|`_underlyingAddresses`|`address[]`|local token address.|
|`_amounts`|`uint256[]`|amount of local tokens.|
|`_deposits`|`uint256[]`|amount of underlying tokens.|


