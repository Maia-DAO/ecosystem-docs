# IBranchPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/interfaces/IBranchPort.sol)

**Author:**
MaiaDAO

Ulyses `Port` implementation for Branch Chain deployment. This contract
is used to manage the deposit and withdrawal of underlying assets from
the Branch Chain in response to Branch Bridge Agents' requests.
Manages Bridge Agents and their factories as well as the chain's strategies and
their tokens.


## Functions
### isBridgeAgent

Returns true if the address is a Bridge Agent.


```solidity
function isBridgeAgent(address _bridgeAgent) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|Bridge Agent address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool.|


### isStrategyToken

Returns true if the address is a Strategy Token.


```solidity
function isStrategyToken(address _token) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|token address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool.|


### isPortStrategy

Returns true if the address is a Port Strategy.


```solidity
function isPortStrategy(address _strategy, address _token) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`|strategy address.|
|`_token`|`address`|token address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool.|


### isBridgeAgentFactory

Returns true if the address is a Bridge Agent Factory.


```solidity
function isBridgeAgentFactory(address _bridgeAgentFactory) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|Bridge Agent Factory address.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|bool.|


### manage

Allows active Port Strategy addresses to withdraw assets.


```solidity
function manage(address _token, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|token address.|
|`_amount`|`uint256`|amount of tokens.|


### replenishReserves

allow approved address to repay borrowed reserves with reserves

*must be called by the port strategy itself*


```solidity
function replenishReserves(address _token, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address|
|`_amount`|`uint256`|uint|


### replenishReserves

allow approved address to repay borrowed reserves and replenish a given token's reserves

*can be called by anyone to ensure availability of service*


```solidity
function replenishReserves(address _strategy, address _token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`|address|
|`_token`|`address`|address|


### withdraw

Function to withdraw underlying/native token amount into Port in exchange for Local hToken.


```solidity
function withdraw(address _recipient, address _underlyingAddress, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying/native token address.|
|`_amount`|`uint256`|amount of tokens.|


### bridgeIn

Setter function to increase local hToken supply.


```solidity
function bridgeIn(address _recipient, address _localAddress, uint256 _amount) external;
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
function bridgeInMultiple(
    address _recipient,
    address[] memory _localAddresses,
    address[] memory _underlyingAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_localAddresses`|`address[]`|token addresses.|
|`_underlyingAddresses`|`address[]`||
|`_amounts`|`uint256[]`|amount of tokens.|
|`_deposits`|`uint256[]`||


### bridgeOut

Setter function to decrease local hToken supply.


```solidity
function bridgeOut(
    address _depositor,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`||
|`_localAddress`|`address`|token address.|
|`_underlyingAddress`|`address`||
|`_amount`|`uint256`|amount of tokens.|
|`_deposit`|`uint256`|amount of underlying tokens.|


### bridgeOutMultiple

Setter function to decrease local hToken supply.


```solidity
function bridgeOutMultiple(
    address _depositor,
    address[] memory _localAddresses,
    address[] memory _underlyingAddresses,
    uint256[] memory _amounts,
    uint256[] memory _deposits
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|user to deduct balance from.|
|`_localAddresses`|`address[]`|local token addresses.|
|`_underlyingAddresses`|`address[]`|local token address.|
|`_amounts`|`uint256[]`|amount of local tokens.|
|`_deposits`|`uint256[]`|amount of underlying tokens.|


### addBridgeAgent

Adds a new bridge agent address to the branch port.


```solidity
function addBridgeAgent(address _bridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to add to the Port|


### toggleBridgeAgentFactory

Toggle a given bridge agent factory. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgentFactory(address _bridgeAgentFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to add to the Port|


### toggleStrategyToken

Toggle a given strategy token. If it's active, it will de-activate it and vice-versa.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function toggleStrategyToken(address _token, uint256 _minimumReservesRatio) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|
|`_minimumReservesRatio`|`uint256`|minimum reserves ratio for the token|


### updateStrategyToken

Update an active strategy token's minimum reserves ratio. If it is not active, it will revert.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function updateStrategyToken(address _token, uint256 _minimumReservesRatio) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|
|`_minimumReservesRatio`|`uint256`|minimum reserves ratio for the token|


### togglePortStrategy

Add or Remove a Port Strategy.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function togglePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|


### updatePortStrategy

Updates a Port Strategy.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function updatePortStrategy(
    address _portStrategy,
    address _underlyingToken,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_underlyingToken`|`address`|Address of the underlying token to be added for use in Branch strategies.|
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|


### setCoreBranchRouter

Sets the core branch router and bridge agent for the branch port.


```solidity
function setCoreBranchRouter(address _coreBranchRouter, address _coreBranchBridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreBranchRouter`|`address`|address of the new core branch router|
|`_coreBranchBridgeAgent`|`address`|address of the new core branch bridge agent|


### sweep

Allows governance to claim any native tokens accumulated from failed transactions.


```solidity
function sweep(address _recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address to transfer ETH to.|


## Events
### DebtCreated

```solidity
event DebtCreated(address indexed _strategy, address indexed _token, uint256 _amount);
```

### DebtRepaid

```solidity
event DebtRepaid(address indexed _strategy, address indexed _token, uint256 _amount);
```

### StrategyTokenUpdated

```solidity
event StrategyTokenUpdated(address indexed _token, uint256 indexed _minimumReservesRatio);
```

### PortStrategyUpdated

```solidity
event PortStrategyUpdated(
    address indexed _portStrategy,
    address indexed _token,
    uint256 indexed _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
);
```

### BridgeAgentFactoryToggled

```solidity
event BridgeAgentFactoryToggled(address indexed _bridgeAgentFactory);
```

### BridgeAgentToggled

```solidity
event BridgeAgentToggled(address indexed _bridgeAgent);
```

### CoreBranchSet

```solidity
event CoreBranchSet(address indexed _coreBranchRouter, address indexed _coreBranchBridgeAgent);
```

## Errors
### AlreadyAddedBridgeAgent

```solidity
error AlreadyAddedBridgeAgent();
```

### AlreadyAddedBridgeAgentFactory

```solidity
error AlreadyAddedBridgeAgentFactory();
```

### InvalidMinimumReservesRatio

```solidity
error InvalidMinimumReservesRatio();
```

### InvalidInputArrays

```solidity
error InvalidInputArrays();
```

### InsufficientReserves

```solidity
error InsufficientReserves();
```

### ExceedsReserveRatioManagementLimit

```solidity
error ExceedsReserveRatioManagementLimit();
```

### UnrecognizedCore

```solidity
error UnrecognizedCore();
```

### UnrecognizedBridgeAgent

```solidity
error UnrecognizedBridgeAgent();
```

### UnrecognizedBridgeAgentFactory

```solidity
error UnrecognizedBridgeAgentFactory();
```

### UnrecognizedPortStrategy

```solidity
error UnrecognizedPortStrategy();
```

### UnrecognizedStrategyToken

```solidity
error UnrecognizedStrategyToken();
```

### NotEnoughDebtToRepay

```solidity
error NotEnoughDebtToRepay();
```

### InvalidUnderlyingAddress
Error emitted when an invalid underlying token address is provided.


```solidity
error InvalidUnderlyingAddress();
```

