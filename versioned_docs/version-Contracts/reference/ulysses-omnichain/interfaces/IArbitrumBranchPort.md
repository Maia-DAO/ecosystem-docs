# IArbitrumBranchPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IArbitrumBranchPort.sol)

**Inherits:**
[IBranchPort](/src/ulysses-omnichain/interfaces/IBranchPort.md)

**Author:**
MaiaDAO

Ulysses `Port` implementation for Arbitrum Branch Chain deployment.
This contract is used to manage the deposit and withdrawal of underlying assets
from the Arbitrum Branch Chain in response to Branch Bridge Agents' requests.
Manages Bridge Agents and their factories as well as the chain's strategies and
their tokens.


## Functions
### rootChainId

Local Network Identifier.


```solidity
function rootChainId() external view returns (uint16);
```

### rootPortAddress

Address for Root Port Address


```solidity
function rootPortAddress() external view returns (address);
```

### depositToPort

Function to deposit underlying/native token amount into Port in exchange for Local hToken.


```solidity
function depositToPort(address _depositor, address _recipient, address _underlyingAddress, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying/native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying/native token address.|
|`_amount`|`uint256`|amount of tokens.|


### withdrawFromPort

Function to withdraw underlying/native token amount into Port in exchange for Local hToken.


```solidity
function withdrawFromPort(address _depositor, address _recipient, address _globalAddress, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|underlying/native token depositor.|
|`_recipient`|`address`|hToken receiver.|
|`_globalAddress`|`address`|global hToken address.|
|`_amount`|`uint256`|amount of tokens.|


## Errors
### UnknownGlobalToken

```solidity
error UnknownGlobalToken();
```

### UnknownUnderlyingToken

```solidity
error UnknownUnderlyingToken();
```

