# BridgeAgentConstants
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/BridgeAgentConstants.sol)

**Author:**
MaiaDAO

Constants for use in Bridge Agent and Bridge Agent Executor contracts.

*Used for encoding and decoding of the cross-chain messages.*


## State Variables
### STATUS_READY

```solidity
uint8 internal constant STATUS_READY = 0;
```


### STATUS_DONE

```solidity
uint8 internal constant STATUS_DONE = 1;
```


### STATUS_RETRIEVE

```solidity
uint8 internal constant STATUS_RETRIEVE = 2;
```


### STATUS_SUCCESS

```solidity
uint8 internal constant STATUS_SUCCESS = 0;
```


### STATUS_FAILED

```solidity
uint8 internal constant STATUS_FAILED = 1;
```


### SIGNED_DEPOSIT

```solidity
uint8 internal constant SIGNED_DEPOSIT = 1;
```


### UNSIGNED_DEPOSIT

```solidity
uint8 internal constant UNSIGNED_DEPOSIT = 0;
```


### PARAMS_START

```solidity
uint256 internal constant PARAMS_START = 1;
```


### PARAMS_START_SIGNED

```solidity
uint256 internal constant PARAMS_START_SIGNED = 21;
```


### PARAMS_TKN_START

```solidity
uint256 internal constant PARAMS_TKN_START = 5;
```


### PARAMS_TKN_START_SIGNED

```solidity
uint256 internal constant PARAMS_TKN_START_SIGNED = 25;
```


### PARAMS_ENTRY_SIZE

```solidity
uint256 internal constant PARAMS_ENTRY_SIZE = 32;
```


### PARAMS_ADDRESS_SIZE

```solidity
uint256 internal constant PARAMS_ADDRESS_SIZE = 20;
```


### PARAMS_TKN_SET_SIZE

```solidity
uint256 internal constant PARAMS_TKN_SET_SIZE = 109;
```


### PARAMS_TKN_SET_SIZE_MULTIPLE

```solidity
uint256 internal constant PARAMS_TKN_SET_SIZE_MULTIPLE = 128;
```


### PARAMS_END_OFFSET

```solidity
uint256 internal constant PARAMS_END_OFFSET = 6;
```


### PARAMS_END_SIGNED_OFFSET

```solidity
uint256 internal constant PARAMS_END_SIGNED_OFFSET = 26;
```


### PARAMS_SETTLEMENT_OFFSET

```solidity
uint256 internal constant PARAMS_SETTLEMENT_OFFSET = 129;
```


### MAX_TOKENS_LENGTH

```solidity
uint256 internal constant MAX_TOKENS_LENGTH = 255;
```


### BASE_FALLBACK_GAS

```solidity
uint256 internal constant BASE_FALLBACK_GAS = 50_000;
```


### BRANCH_BASE_CALL_OUT_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_GAS = 100_000;
```


### BRANCH_BASE_CALL_OUT_DEPOSIT_SINGLE_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_DEPOSIT_SINGLE_GAS = 150_000;
```


### BRANCH_BASE_CALL_OUT_DEPOSIT_MULTIPLE_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_DEPOSIT_MULTIPLE_GAS = 200_000;
```


### BRANCH_BASE_CALL_OUT_SIGNED_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_SIGNED_GAS = 100_000;
```


### BRANCH_BASE_CALL_OUT_SIGNED_DEPOSIT_SINGLE_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_SIGNED_DEPOSIT_SINGLE_GAS = 150_000;
```


### BRANCH_BASE_CALL_OUT_SIGNED_DEPOSIT_MULTIPLE_GAS

```solidity
uint256 internal constant BRANCH_BASE_CALL_OUT_SIGNED_DEPOSIT_MULTIPLE_GAS = 200_000;
```


### ROOT_BASE_CALL_OUT_GAS

```solidity
uint256 internal constant ROOT_BASE_CALL_OUT_GAS = 100_000;
```


### ROOT_BASE_CALL_OUT_DEPOSIT_SINGLE_GAS

```solidity
uint256 internal constant ROOT_BASE_CALL_OUT_DEPOSIT_SINGLE_GAS = 150_000;
```


### ROOT_BASE_CALL_OUT_DEPOSIT_MULTIPLE_GAS

```solidity
uint256 internal constant ROOT_BASE_CALL_OUT_DEPOSIT_MULTIPLE_GAS = 200_000;
```


