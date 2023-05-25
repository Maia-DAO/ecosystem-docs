# BranchPort

**Inherits:**
Ownable, [IBranchPort](/ulysses-omnichain/interfaces/IBranchPort.sol/interface.IBranchPort.md)


## State Variables
### coreBranchRouterAddress
Local Core Branch Router Address.


```solidity
address public coreBranchRouterAddress;
```


### isBridgeAgent
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address => bool) public isBridgeAgent;
```


### bridgeAgents
Branch Routers deployed in branc chain.


```solidity
address[] public bridgeAgents;
```


### bridgeAgentsLenght
Number of Branch Routers deployed in current chain.


```solidity
uint256 public bridgeAgentsLenght;
```


### isBridgeAgentFactory
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address => bool) public isBridgeAgentFactory;
```


### bridgeAgentFactories
Branch Routers deployed in branc chain.


```solidity
address[] public bridgeAgentFactories;
```


### bridgeAgentFactoriesLenght
Number of Branch Routers deployed in current chain.


```solidity
uint256 public bridgeAgentFactoriesLenght;
```


### isStrategyToken
Strategy Tokens

Mapping returns true if Strategy Token Address is active for usage in Port Strategies.


```solidity
mapping(address => bool) public isStrategyToken;
```


### strategyTokens
List of Tokens whitelisted for usage in Port Strategies.


```solidity
address[] public strategyTokens;
```


### strategyTokensLenght
Number of Port Strategies deployed in current branch chain.


```solidity
uint256 public strategyTokensLenght;
```


### getStrategyTokenDebt
Mapping returns a given token's total debt incurred by Port Strategies.


```solidity
mapping(address => uint256) public getStrategyTokenDebt;
```


### getMinimumTokenReserveRatio
Mapping returns the minimum ratio of a given Strategy Token the Port should hold.


```solidity
mapping(address => uint256) public getMinimumTokenReserveRatio;
```


### isPortStrategy
Port Strategies

Mapping returns true if Port Startegy is allowed to manage a given Strategy Token. Strategy => Token => bool.


```solidity
mapping(address => mapping(address => bool)) public isPortStrategy;
```


### portStrategies
Port Strategy Addresses deployed in current branch chain.


```solidity
address[] public portStrategies;
```


### portStrategiesLenght
Number of Port Strategies deployed in current branch chain.


```solidity
uint256 public portStrategiesLenght;
```


### getPortStrategyTokenDebt
Mapping returns the amount of Strategy Token debt a given Port Startegy has.  Strategy => Token => uint256.


```solidity
mapping(address => mapping(address => uint256)) public getPortStrategyTokenDebt;
```


### lastManaged
Mapping returns the last time a given Port Strategy managed a given Strategy Token. Strategy => Token => uint256.


```solidity
mapping(address => mapping(address => uint256)) public lastManaged;
```


### strategyDailyLimitAmount
Mapping returns the time limit a given Port Strategy must wait before managing a Strategy Token. Strategy => Token => uint256.


```solidity
mapping(address => mapping(address => uint256)) public strategyDailyLimitAmount;
```


### strategyDailyLimitRemaining
Mapping returns the amount of a Strategy Token a given Port Strategy can manage.


```solidity
mapping(address => mapping(address => uint256)) public strategyDailyLimitRemaining;
```


### DIVISIONER

```solidity
uint256 internal constant DIVISIONER = 1e4;
```


### MIN_RESERVE_RATIO

```solidity
uint256 internal constant MIN_RESERVE_RATIO = 3e3;
```


### _unlocked
Modifier for a simple re-entrancy check.


```solidity
uint256 internal _unlocked = 1;
```


## Functions
### constructor


```solidity
constructor(address _owner);
```

### initialize


```solidity
function initialize(address _coreBranchRouter, address _bridgeAgentFactory) external virtual onlyOwner;
```

### renounceOwnership

Function being overrriden to prevent mistakenly renouncing ownership.


```solidity
function renounceOwnership() public payable override onlyOwner;
```

### _excessReserves

Returns amount of Strategy Tokens


```solidity
function _excessReserves(address _token) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|Address of a given Strategy Token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 excess reserves|


### _reservesLacking

Returns amount of Strategy Tokens needed to reach minimum reserves


```solidity
function _reservesLacking(address _token) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|Address of a given Strategy Token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 excess reserves|


### _minimumReserves

Internal function to return the minimum amount of reserves of a given Strategy Token the Port should hold.


```solidity
function _minimumReserves(uint256 _currBalance, address _token) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_currBalance`|`uint256`|Current balance of a given Strategy Token.|
|`_token`|`address`|Address of a given Strategy Token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 minimum reserves|


### manage

Allows active Port Strategy addresses to withdraw assets.


```solidity
function manage(address _token, uint256 _amount) external requiresPortStrategy(_token);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|token address.|
|`_amount`|`uint256`|amount of tokens.|


### replenishReserves

allow approved address to repay borrowed reserves with reserves


```solidity
function replenishReserves(address _strategy, address _token, uint256 _amount) external lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`||
|`_token`|`address`|address|
|`_amount`|`uint256`|uint|


### _checkTimeLimit

Internal function to check if a Port Strategy has reached its daily management limit.


```solidity
function _checkTimeLimit(address _token, uint256 _amount) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address being managed.|
|`_amount`|`uint256`|of token being requested.|


### withdraw

Function to withdraw underlying / native token amount into Port in exchange for Local hToken.


```solidity
function withdraw(address _recipient, address _underlyingAddress, uint256 _deposit)
    external
    virtual
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
function bridgeIn(address _recipient, address _localAddress, uint256 _amount) external virtual requiresBridgeAgent;
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
    virtual
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
) external virtual requiresBridgeAgent;
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
) external virtual requiresBridgeAgent;
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
function addBridgeAgent(address _bridgeAgent) external requiresBridgeAgentFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to add to the Port|


### setCoreRouter

Sets the core router address for the branch port.


```solidity
function setCoreRouter(address _newCoreRouter) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newCoreRouter`|`address`|address of the new core router|


### addBridgeAgentFactory

Adds a new bridge agent factory address to the branch port.


```solidity
function addBridgeAgentFactory(address _newBridgeAgentFactory) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentFactory`|`address`||


### toggleBridgeAgentFactory

Reverts the toggle on the given bridge agent factory. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgentFactory(address _newBridgeAgentFactory) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentFactory`|`address`|address of the bridge agent factory to add to the Port|


### toggleBridgeAgent

Reverts thfe toggle on the given bridge agent  If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgent(address _bridgeAgent) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to add to the Port|


### addStrategyToken

Adds a new strategy token.


```solidity
function addStrategyToken(address _token, uint256 _minimumReservesRatio) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|
|`_minimumReservesRatio`|`uint256`||


### toggleStrategyToken

Reverts the toggle on the given strategy token. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleStrategyToken(address _token) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|


### addPortStrategy

Adds a new Port strategy to the given port


```solidity
function addPortStrategy(address _portStrategy, address _token, uint256 _dailyManagementLimit)
    external
    requiresCoreRouter;
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
function togglePortStrategy(address _portStrategy, address _token) external requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|address of the bridge agent factory to add to the Port|
|`_token`|`address`||


### updatePortStrategy

Updates the daily management limit for the given port strategy.


```solidity
function updatePortStrategy(address _portStrategy, address _token, uint256 _dailyManagementLimit)
    external
    requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|address of the bridge agent factory to add to the Port|
|`_token`|`address`|address of the token to update the limit for|
|`_dailyManagementLimit`|`uint256`|new daily management limit|


### _denormalizeDecimals

Internal function that denormalizes an input from 18 decimal places.


```solidity
function _denormalizeDecimals(uint256 _amount, uint8 _decimals) internal pure returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_amount`|`uint256`|amount of tokens|
|`_decimals`|`uint8`|number of decimal places|


### requiresCoreRouter

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresCoreRouter();
```

### requiresBridgeAgent

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresBridgeAgent();
```

### requiresBridgeAgentFactory

Modifier that verifies msg sender is an active bridgeAgent.


```solidity
modifier requiresBridgeAgentFactory();
```

### requiresPortStrategy

require msg sender == active port strategy


```solidity
modifier requiresPortStrategy(address _token);
```

### lock


```solidity
modifier lock();
```

