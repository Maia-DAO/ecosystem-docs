# IPortStrategy
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-omnichain/interfaces/IPortStrategy.sol)

**Author:**
MaiaDAO

Base Contract for interfacing with Brach Port Strategy contracts
whitelisted by the chain's Branch Port to manage a limited amount
of one or more Strategy Tokens.


## Functions
### withdraw

Function to withdraw underlying / native token amount back into Branch Port.


```solidity
function withdraw(address _recipient, address _token, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_token`|`address`|native token address.|
|`_amount`|`uint256`|amount of tokens.|


## Errors
### UnrecognizedPort

```solidity
error UnrecognizedPort();
```

