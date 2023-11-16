# BranchPort
[Git Source](https://github.com/Maia-DAO/2023-09-maia-remediations/blob/main/src/BranchPort.sol)

**Inherits:**
Ownable, [IBranchPort](/src/ulysses-omnichain/interfaces/IBranchPort.md), [BridgeAgentConstants](/src/ulysses-omnichain/interfaces/BridgeAgentConstants.sol/BridgeAgentConstants.md)

**Author:**
MaiaDAO


## State Variables
### coreBranchRouterAddress
Local Core Branch Router Address.


```solidity
address public coreBranchRouterAddress;
```


### isBridgeAgent
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address bridgeAgent => bool isActiveBridgeAgent) public isBridgeAgent;
```


### bridgeAgents
Branch Routers deployed in branch chain.


```solidity
address[] public bridgeAgents;
```


### isBridgeAgentFactory
Mapping from Underlying Address to isUnderlying (bool).


```solidity
mapping(address bridgeAgentFactory => bool isActiveBridgeAgentFactory) public isBridgeAgentFactory;
```


### isStrategyToken
Returns true if Strategy Token Address is active for usage in Port Strategies.


```solidity
mapping(address token => bool allowsStrategies) public isStrategyToken;
```


### getStrategyTokenDebt
Returns a given token's total debt incurred by Port Strategies.


```solidity
mapping(address token => uint256 debt) public getStrategyTokenDebt;
```


### getMinimumTokenReserveRatio
Returns the minimum ratio of a given Strategy Token the Port should hold.


```solidity
mapping(address token => uint256 minimumReserveRatio) public getMinimumTokenReserveRatio;
```


### isPortStrategy
Returns true if Port Strategy is allowed to manage a given Strategy Token.


```solidity
mapping(address strategy => mapping(address token => bool isActiveStrategy)) public isPortStrategy;
```


### getPortStrategyTokenDebt
The amount of Strategy Token debt a given Port Strategy has.


```solidity
mapping(address strategy => mapping(address token => uint256 debt)) public getPortStrategyTokenDebt;
```


### lastManaged
The last time a given Port Strategy managed a given Strategy Token.


```solidity
mapping(address strategy => mapping(address token => uint256 lastManaged)) public lastManaged;
```


### strategyReserveRatioManagementLimit
The reserves ratio limit a given Port Strategy must wait before managing a Strategy Token.


```solidity
mapping(address strategy => mapping(address token => uint256 reserveRatioManagementLimit)) public
    strategyReserveRatioManagementLimit;
```


### strategyDailyLimitAmount
The time limit a given Port Strategy must wait before managing a Strategy Token.


```solidity
mapping(address strategy => mapping(address token => uint256 dailyLimitAmount)) public strategyDailyLimitAmount;
```


### strategyDailyLimitRemaining
The amount of a Strategy Token a given Port Strategy can manage.


```solidity
mapping(address strategy => mapping(address token => uint256 dailyLimitRemaining)) public strategyDailyLimitRemaining;
```


### _unlocked
Reentrancy lock guard state.


```solidity
uint256 internal _unlocked = 1;
```


### DIVISIONER

```solidity
uint256 internal constant DIVISIONER = 1e4;
```


### MIN_RESERVE_RATIO

```solidity
uint256 internal constant MIN_RESERVE_RATIO = 7e3;
```


## Functions
### constructor

Constructor for the Branch Port Contract.


```solidity
constructor(address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|Address of the Owner.|


### receive


```solidity
receive() external payable;
```

### initialize

Initializes the Branch Port.


```solidity
function initialize(address _coreBranchRouter, address _bridgeAgentFactory) external virtual onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreBranchRouter`|`address`|Address of the Core Branch Router.|
|`_bridgeAgentFactory`|`address`|Address of the Bridge Agent Factory.|


### manage

Allows active Port Strategy addresses to withdraw assets.


```solidity
function manage(address _token, uint256 _amount) external override requiresPortStrategy(_token);
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
function replenishReserves(address _token, uint256 _amount) external override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address|
|`_amount`|`uint256`|uint|


### replenishReserves

allow approved address to repay borrowed reserves with reserves

*must be called by the port strategy itself*


```solidity
function replenishReserves(address _strategy, address _token) external override lock;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_strategy`|`address`||
|`_token`|`address`|address|


### withdraw

Function to withdraw underlying/native token amount into Port in exchange for Local hToken.


```solidity
function withdraw(address _recipient, address _underlyingAddress, uint256 _deposit)
    public
    virtual
    override
    lock
    requiresBridgeAgent;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|hToken receiver.|
|`_underlyingAddress`|`address`|underlying/native token address.|
|`_deposit`|`uint256`||


### bridgeIn

Setter function to increase local hToken supply.


```solidity
function bridgeIn(address _recipient, address _localAddress, uint256 _amount) external override requiresBridgeAgent;
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
) external override requiresBridgeAgent;
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
) external override lock requiresBridgeAgent;
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
) external override lock requiresBridgeAgent;
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
function addBridgeAgent(address _bridgeAgent) external override requiresBridgeAgentFactory;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bridgeAgent`|`address`|address of the bridge agent to add to the Port|


### toggleBridgeAgentFactory

Toggle a given bridge agent factory. If it's active, it will de-activate it and vice-versa.


```solidity
function toggleBridgeAgentFactory(address _newBridgeAgentFactory) external override requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_newBridgeAgentFactory`|`address`||


### toggleStrategyToken

Toggle a given strategy token. If it's active, it will de-activate it and vice-versa.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function toggleStrategyToken(address _token, uint256 _minimumReservesRatio) external override requiresCoreRouter;
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
function updateStrategyToken(address _token, uint256 _minimumReservesRatio) external override requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address of the token to add to the Strategy Tokens|
|`_minimumReservesRatio`|`uint256`|minimum reserves ratio for the token|


### _setStrategyTokenMinimumReservesRatio


```solidity
function _setStrategyTokenMinimumReservesRatio(address _token, uint256 _minimumReservesRatio) internal;
```

### togglePortStrategy

Add or Remove a Port Strategy.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function togglePortStrategy(
    address _portStrategy,
    address _token,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) external override requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_token`|`address`||
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|


### updatePortStrategy

Updates a Port Strategy.

*Must be between 7000 and 10000 (70% and 100%). Can be any value if the token is being de-activated.*


```solidity
function updatePortStrategy(
    address _portStrategy,
    address _token,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) external override requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_portStrategy`|`address`|Address of the Port Strategy to be added for use in Branch strategies.|
|`_token`|`address`||
|`_dailyManagementLimit`|`uint256`|Daily management limit of the given token for the Port Strategy.|
|`_reserveRatioManagementLimit`|`uint256`|Total reserves management limit of the given token for the Port Strategy.|


### _setPortStrategySettings


```solidity
function _setPortStrategySettings(
    address _portStrategy,
    address _token,
    uint256 _dailyManagementLimit,
    uint256 _reserveRatioManagementLimit
) internal;
```

### setCoreBranchRouter

Sets the core branch router and bridge agent for the branch port.


```solidity
function setCoreBranchRouter(address _coreBranchRouter, address _coreBranchBridgeAgent)
    external
    override
    requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_coreBranchRouter`|`address`|address of the new core branch router|
|`_coreBranchBridgeAgent`|`address`|address of the new core branch bridge agent|


### sweep

Allows governance to claim any native tokens accumulated from failed transactions.


```solidity
function sweep(address _recipient) external override requiresCoreRouter;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address to transfer ETH to.|


### _enforceReservesLimit

Internal function to check if a Port Strategy has reached its reserves management limit.


```solidity
function _enforceReservesLimit(
    address _token,
    uint256 _amount,
    uint256 _strategyTokenDebt,
    uint256 _portStrategyTokenDebt
) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|Address of a given Strategy Token.|
|`_amount`|`uint256`|Amount of tokens to be bridged in.|
|`_strategyTokenDebt`|`uint256`|Total token debt incurred by a given Port Token.|
|`_portStrategyTokenDebt`|`uint256`|Total token debt incurred by a given Port Strategy for a Token.|


### _reservesLacking

Returns amount of Strategy Tokens needed to reach minimum reserves


```solidity
function _reservesLacking(address _token, uint256 _currBalance, uint256 _strategyTokenDebt)
    internal
    view
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|Address of a given Strategy Token.|
|`_currBalance`|`uint256`|Current balance of a given Strategy Token.|
|`_strategyTokenDebt`|`uint256`|Total token debt incurred by Port Strategies.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 excess reserves|


### _minimumReserves

Internal function to return the minimum amount of reserves of a given Strategy Token the Port should hold.


```solidity
function _minimumReserves(address _token, uint256 _totalTokenBalance) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|Address of a given Strategy Token.|
|`_totalTokenBalance`|`uint256`|Total balance of a given Strategy Token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 minimum reserves|


### _strategyReserveManagementLimit

Internal function to return the maximum amount of reserves management limit.


```solidity
function _strategyReserveManagementLimit(address _token, uint256 _totalTokenBalance) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address being managed.|
|`_totalTokenBalance`|`uint256`|Total balance of a given Strategy Token.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|uint256 Maximum reserves amount management limit|


### _enforceTimeLimit

Internal function to check and update the Port Strategy's daily management limit.


```solidity
function _enforceTimeLimit(address _token, uint256 _amount) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|address being managed.|
|`_amount`|`uint256`|of token being requested.|


### _bridgeIn

Internal function to bridge in hTokens.


```solidity
function _bridgeIn(address _recipient, address _localAddress, uint256 _amount) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_recipient`|`address`|address of the recipient.|
|`_localAddress`|`address`|address of the hToken.|
|`_amount`|`uint256`|amount of hTokens to bridge in.|


### _bridgeOut

Internal function to bridge out hTokens and underlying tokens.


```solidity
function _bridgeOut(
    address _depositor,
    address _localAddress,
    address _underlyingAddress,
    uint256 _amount,
    uint256 _deposit
) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_depositor`|`address`|address of the depositor.|
|`_localAddress`|`address`|address of the hToken.|
|`_underlyingAddress`|`address`|address of the underlying token.|
|`_amount`|`uint256`|total amount of tokens to bridge out.|
|`_deposit`|`uint256`|amount of underlying tokens to bridge out.|


### requiresCoreRouter

Modifier that verifies msg sender is the Branch Chain's Core Root Router.


```solidity
modifier requiresCoreRouter();
```

### requiresBridgeAgent

Modifier that verifies msg sender is an active Bridge Agent.


```solidity
modifier requiresBridgeAgent();
```

### requiresBridgeAgentFactory

Modifier that verifies msg sender is an active Bridge Agent Factory.


```solidity
modifier requiresBridgeAgentFactory();
```

### requiresPortStrategy

Modifier that require msg sender to be an active Port Strategy


```solidity
modifier requiresPortStrategy(address _token);
```

### lock

Modifier for a simple re-entrancy check.


```solidity
modifier lock();
```

