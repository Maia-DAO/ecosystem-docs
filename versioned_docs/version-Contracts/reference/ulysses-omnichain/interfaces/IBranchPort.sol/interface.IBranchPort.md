# IBranchPort

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


```solidity
function replenishReserves(address _strategy, address _token, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`||
|`_token`|`address`|address|
|`_amount`|`uint256`|uint|


### withdraw

Function to withdraw underlying / native token amount into Port in exchange for Local hToken.


```solidity
function withdraw(address _recipient, address _underlyingAddress, uint256 _amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying / native token address.|
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
function bridgeInMultiple(address _recipient, address[] memory _localAddresses, uint256[] memory _amounts) external;
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
) external;
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


### setCoreRouter

Sets the core router address for the branch port.


```solidity
function setCoreRouter(address _newCoreRouter) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newCoreRouter`|`address`|address of the new core router|


### addBridgeAgentFactory

Adds a new bridge agent factory address to the branch port.


```solidity
function addBridgeAgentFactory(address _bridgeAgentFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgentFactory`|`address`|address of the bridge agent factory to add to the Port|


### toggleBridgeAgentFactory

Reverts the toggle on the given bridge agent factory. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgentFactory(address _newBridgeAgentFactory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentFactory`|`address`|address of the bridge agent factory to add to the Port|


### toggleBridgeAgent

Reverts thfe toggle on the given bridge agent  If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgent(address _bridgeAgent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to add to the Port|


### addStrategyToken

Adds a new strategy token.


```solidity
function addStrategyToken(address _token, uint256 _minimumReservesRatio) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|
|`_minimumReservesRatio`|`uint256`||


### toggleStrategyToken

Reverts the toggle on the given strategy token. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleStrategyToken(address _token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|


### addPortStrategy

Adds a new Port strategy to the given port


```solidity
function addPortStrategy(address _portStrategy, address _token, uint256 _dailyManagementLimit) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|address of the bridge agent factory to add to the Port|
|`_token`|`address`||
|`_dailyManagementLimit`|`uint256`||


### togglePortStrategy

Reverts the toggle on the given port strategy. If it's active, it will de-activate it and vice-versa.


```solidity
function togglePortStrategy(address _portStrategy, address _token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|address of the bridge agent factory to add to the Port|
|`_token`|`address`||


### updatePortStrategy

Updates the daily management limit for the given port strategy.


```solidity
function updatePortStrategy(address _portStrategy, address _token, uint256 _dailyManagementLimit) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|address of the bridge agent factory to add to the Port|
|`_token`|`address`|address of the token to update the limit for|
|`_dailyManagementLimit`|`uint256`|new daily management limit|


## Events
### DebtCreated

```solidity
event DebtCreated(address indexed _strategy, address indexed _token, uint256 _amount);
```

### DebtRepaid

```solidity
event DebtRepaid(address indexed _strategy, address indexed _token, uint256 _amount);
```

### StrategyTokenAdded

```solidity
event StrategyTokenAdded(address indexed _token, uint256 _minimumReservesRatio);
```

### StrategyTokenToggled

```solidity
event StrategyTokenToggled(address indexed _token);
```

### PortStrategyAdded

```solidity
event PortStrategyAdded(address indexed _portStrategy, address indexed _token, uint256 _dailyManagementLimit);
```

### PortStrategyToggled

```solidity
event PortStrategyToggled(address indexed _portStrategy, address indexed _token);
```

### PortStrategyUpdated

```solidity
event PortStrategyUpdated(address indexed _portStrategy, address indexed _token, uint256 _dailyManagementLimit);
```

### BridgeAgentFactoryAdded

```solidity
event BridgeAgentFactoryAdded(address indexed _bridgeAgentFactory);
```

### BridgeAgentFactoryToggled

```solidity
event BridgeAgentFactoryToggled(address indexed _bridgeAgentFactory);
```

### BridgeAgentToggled

```solidity
event BridgeAgentToggled(address indexed _bridgeAgent);
```

## Errors
### InvalidMinimumReservesRatio

```solidity
error InvalidMinimumReservesRatio();
```

### InsufficientReserves

```solidity
error InsufficientReserves();
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

