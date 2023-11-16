# DecodeBridgeInMultipleParams
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/lib/DecodeBridgeInMultipleParams.sol)

Library for decoding Ulysses cross-chain messages.

*Used for decoding of Ulysses cross-chain messages.*


## State Variables
### PARAMS_START

```solidity
uint256 internal constant PARAMS_START = 1;
```


### PARAMS_TKN_START

```solidity
uint256 internal constant PARAMS_TKN_START = 5;
```


### PARAMS_ENTRY_SIZE

```solidity
uint256 internal constant PARAMS_ENTRY_SIZE = 32;
```


### ADDRESS_END_OFFSET

```solidity
uint256 internal constant ADDRESS_END_OFFSET = 12;
```


### PARAMS_AMT_OFFSET

```solidity
uint256 internal constant PARAMS_AMT_OFFSET = 64;
```


### PARAMS_DEPOSIT_OFFSET

```solidity
uint256 internal constant PARAMS_DEPOSIT_OFFSET = 96;
```


## Functions
### decodeBridgeMultipleInfo


```solidity
function decodeBridgeMultipleInfo(bytes calldata _params)
    internal
    pure
    returns (
        uint8 numOfAssets,
        uint32 nonce,
        address[] memory hTokens,
        address[] memory tokens,
        uint256[] memory amounts,
        uint256[] memory deposits
    );
```

