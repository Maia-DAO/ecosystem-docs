# ArbitrumBaseBranchRouter
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/ArbitrumBaseBranchRouter.sol)

**Inherits:**
[BaseBranchRouter](/src/ulysses-omnichain/BaseBranchRouter.sol/contract.BaseBranchRouter.md)

**Author:**
MaiaDAO


## State Variables
### rootPortAddress
Address for Root Port Address


```solidity
address public rootPortAddress;
```


## Functions
### initialize

Initializes the Arbitrum Base Branch Router.


```solidity
function initialize(address _localBridgeAgentAddress) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_localBridgeAgentAddress`|`address`|The address of the local Bridge Agent.|


### _transferAndApproveToken

Internal function to transfer token into a contract.


```solidity
function _transferAndApproveToken(address _hToken, address _token, uint256 _amount, uint256 _deposit)
    internal
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hToken`|`address`|The address of the hToken.|
|`_token`|`address`|The address of the token.|
|`_amount`|`uint256`|The amount of the hToken.|
|`_deposit`|`uint256`|The amount of the token.|


