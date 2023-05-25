---
id: IApp
title: IApp
---

IApp interface of the application

## Functions

### anyExecute

anyExecute is the function that will be called on the destination chain to execute interaction (required).

```solidity
function anyExecute(bytes calldata _data) external returns (bool success, bytes memory result);
```

**Parameters**

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| `_data` | `bytes` | interaction arguments to exec on the destination chain. |

**Returns**

| Name      | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| `success` | `bool`  | whether the interaction was successful. |
| `result`  | `bytes` | the result of the interaction.          |

### anyFallback

anyFallback is the function that will be called on the originating chain if the cross chain interaction fails (optional, advised).

```solidity
function anyFallback(bytes calldata _data) external returns (bool success, bytes memory result);
```

**Parameters**

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| `_data` | `bytes` | interaction arguments to exec on the destination chain. |

**Returns**

| Name      | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| `success` | `bool`  | whether the interaction was successful. |
| `result`  | `bytes` | the result of the interaction.          |
