# UlyssesPool
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/ulysses-amm/UlyssesPool.sol)

**Inherits:**
[UlyssesERC4626](/erc-4626/UlyssesERC4626.sol/abstract.UlyssesERC4626.md), Ownable, [IUlyssesPool](/ulysses-amm/interfaces/IUlyssesPool.sol/interface.IUlyssesPool.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)


## State Variables
### factory
ulysses factory associated with the Ulysses LP


```solidity
UlyssesFactory public immutable factory;
```


### id
ID of this Ulysses LP


```solidity
uint256 public immutable id;
```


### bandwidthStateList
List of all added LPs


```solidity
BandwidthState[] public bandwidthStateList;
```


### destinations
destinations[destinationId] => bandwidthStateList index


```solidity
mapping(uint256 => uint256) public destinations;
```


### destinationIds
destinationIds[address] => destinationId


```solidity
mapping(address => uint256) public destinationIds;
```


### totalWeights
Sum of all weights


```solidity
uint256 public totalWeights;
```


### MIN_SWAP_AMOUNT
The minimum amount that can be swapped


```solidity
uint256 private constant MIN_SWAP_AMOUNT = 1e4;
```


### MAX_TOTAL_WEIGHT
The maximum sum of all weights


```solidity
uint256 private constant MAX_TOTAL_WEIGHT = 256;
```


### MAX_DESTINATIONS
The maximum destinations that can be added


```solidity
uint256 private constant MAX_DESTINATIONS = 15;
```


### MAX_PROTOCOL_FEE
The maximum protocol fee that can be set (1%)


```solidity
uint256 private constant MAX_PROTOCOL_FEE = 1e16;
```


### MAX_LAMBDA1
The maximum lambda1 that can be set (10%)


```solidity
uint256 private constant MAX_LAMBDA1 = 1e17;
```


### MIN_SIGMA2
The minimum sigma2 that can be set (1%)


```solidity
uint256 private constant MIN_SIGMA2 = 1e16;
```


### DIVISIONER
The divisioner for fee calculations


```solidity
uint256 private constant DIVISIONER = 1 ether;
```


### protocolFee

```solidity
uint256 public protocolFee = 1e14;
```


### fees
The current rebalancing fees


```solidity
Fees public fees = Fees({lambda1: 20e14, lambda2: 4980e14, sigma1: 6000e14, sigma2: 500e14});
```


## Functions
### constructor


```solidity
constructor(uint256 _id, address _asset, string memory _name, string memory _symbol, address _owner, address _factory)
    UlyssesERC4626(_asset, _name, _symbol);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_id`|`uint256`|the Ulysses LP ID|
|`_asset`|`address`|the underlying asset|
|`_name`|`string`|the name of the LP|
|`_symbol`|`string`|the symbol of the LP|
|`_owner`|`address`|the owner of this contract|
|`_factory`|`address`|the Ulysses factory|


### totalAssets


```solidity
function totalAssets() public view override returns (uint256);
```

### maxRedeem


```solidity
function maxRedeem(address owner) public view override returns (uint256);
```

### getBandwidth

Gets the available bandwidth for the given pool's ID, if it doesn't have a connection it will return 0


```solidity
function getBandwidth(uint256 destinationId) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`destinationId`|`uint256`|The ID of a Ulysses LP|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|bandwidth The available bandwidth for the given pool's ID|


### getBandwidthStateList

Gets the bandwidth state list

*bandwidthStateList first element has always 0 bandwidth
so this line will never fail and return 0 instead*


```solidity
function getBandwidthStateList() external view returns (BandwidthState[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`BandwidthState[]`|bandwidthStateList The bandwidth state list|


### getProtocolFees

Calculates the amount of tokens that can be redeemed by the protocol.


```solidity
function getProtocolFees() public view returns (uint256);
```

### claimProtocolFees

Sends all outstanding protocol fees to factory owner

*Anyone can call this function*


```solidity
function claimProtocolFees() external nonReentrant returns (uint256 claimed);
```

### addNewBandwidth

Adds a new Ulysses LP with the requested weight

*Can't remove a destination, only add new ones*


```solidity
function addNewBandwidth(uint256 poolId, uint8 weight) external nonReentrant onlyOwner returns (uint256 index);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`poolId`|`uint256`|The ID of the destination Ulysses LP to be added|
|`weight`|`uint8`|The weight to calculate the bandwidth for the given pool's ID|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`index`|`uint256`|The index of bandwidthStateList of the newly added Ulysses LP|


### setWeight

Changes the weight of a exisiting Ulysses LP with the given ID


```solidity
function setWeight(uint256 poolId, uint8 weight) external nonReentrant onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`poolId`|`uint256`|The ID of the destination Ulysses LP to be removed|
|`weight`|`uint8`|The new weight to calculate the bandwidth for the given pool's ID|


### setFees

Sets the protocol and rebalancing fees


```solidity
function setFees(Fees calldata _fees) external nonReentrant onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_fees`|`Fees`|The new fees to be set|


### setProtocolFee

Sets the protocol fee

*Only factory owner can call this function*


```solidity
function setProtocolFee(uint256 _protocolFee) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_protocolFee`|`uint256`|The new protocol fee to be set|


### getBandwidthUpdateAmounts

Calculates the bandwidth increase/decrease amount.
Is called when a user is doing a swap or adding/removing liquidity.


```solidity
function getBandwidthUpdateAmounts(
    bool roundUp,
    bool positiveTransfer,
    uint256 amount,
    uint256 _totalWeights,
    uint256 _totalSupply
) private view returns (uint256[] memory bandwidthUpdateAmounts, uint256 length);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`roundUp`|`bool`|Whether to round up or down|
|`positiveTransfer`|`bool`|Whether the transfer is positive or negative|
|`amount`|`uint256`|The amount to transfer|
|`_totalWeights`|`uint256`|The total weights|
|`_totalSupply`|`uint256`|The total supply|


### updateBandwidth

Updates the bandwidth of the destination Ulysses LP


```solidity
function updateBandwidth(
    bool depositFees,
    bool positiveTransfer,
    BandwidthState storage destinationState,
    uint256 difference,
    uint256 _totalWeights,
    uint256 _totalSupply,
    uint256 _newTotalSupply
) private returns (uint256 positivefee, uint256 negativeFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositFees`|`bool`|Whether to deposit fees or not|
|`positiveTransfer`|`bool`|Whether the transfer is positive or negative|
|`destinationState`|`BandwidthState`|The state of the destination Ulysses LP|
|`difference`|`uint256`|The difference between the old and new total supply|
|`_totalWeights`|`uint256`|The total weights of all Ulysses LPs|
|`_totalSupply`|`uint256`|The total supply of the Ulysses LP|
|`_newTotalSupply`|`uint256`| The new total supply of the Ulysses LP|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positivefee`|`uint256`|The positive fee|
|`negativeFee`|`uint256`||


### _calculateRebalancingFee

Calculates the positive or negative rebalancing fee for a bandwidth change


```solidity
function _calculateRebalancingFee(uint256 bandwidth, uint256 targetBandwidth, bool roundDown)
    internal
    view
    returns (uint256 fee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bandwidth`|`uint256`|The new bandwidth, after decreasing or increasing the current bandwidth|
|`targetBandwidth`|`uint256`|The ideal bandwidth according to weight and totalSupply|
|`roundDown`|`bool`|Whether to round down or up|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`fee`|`uint256`|The rebalancing fee for this action|


### calcFee

Calculates outstanding rebalancing fees for a specific bandwidth

*The fee is calculated as a trapezium with a base of width and a height of height
The formula for the area of a trapezium is (a + b) * h / 2
___________
fee1 + fee2 -->|          /|
|         / |
|________/  |
fee1 + fee2 * amount-->|       /|  |
-------------   |      / |  |
max width     |     /  |  |
|____/   |  |
fee1 -->|   |    |  |
|   |    |  |
|___|____|__|_____
|    |  |
upper bound 2 |  0
|
bandwidth
max width = upper bound 2
amount = upper bound 2 - bandwidth
h = amount
a = fee1 + (fee2 * amount / max width)
b = fee1
fee = (a + b) * h / 2
= (fee1 + fee1 + (fee2 * amount / max width)) * amount / 2
= ((fee1 * 2) + (fee2 * amount / max width)) * amount / 2
Because lambda1 = fee1 / 2 and lambda2 = fee2 / 2
fee = ((fee1 * 2) + (fee2 * amount / max width)) * amount / 2
= (lambda1 * 2 * amount) + (lambda2 * amount * amount) / max width
= amount * ((lambda1 * 2) + (lambda2 * amount / max width))
When offset (b) is 0, the trapezium is equivalent to a triangle:
___________
fee1 -->|          /|
|         / |
|________/  |
fee1 * amount -->|       /|  |
-------------    |      / |  |
max width      |     /  |  |
|    /   |  |
|___/____|__|_____
|    |  |
upper bound 1 | upper bound 2
|
bandwidth
max width = upper bound 1 - upper bound 2
amount = upper bound 1 - bandwidth
h = amount
a = fee1 * amount / max width
b = 0
fee = (a + b) * h / 2
= fee1 * amount * amount / (2 * max width)
Because lambda1 = fee1 / 2
fee = fee1 * amount * amount / (2 * max width)
= lambda2 * amount * amount / max width*


```solidity
function calcFee(
    uint256 feeTier,
    uint256 maxWidth,
    uint256 upperBound,
    uint256 bandwidth,
    uint256 offset,
    bool roundDown
) private pure returns (uint256 fee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feeTier`|`uint256`|The fee tier of the bandwidth|
|`maxWidth`|`uint256`|The maximum width of the bandwidth|
|`upperBound`|`uint256`|The upper bound of the bandwidth|
|`bandwidth`|`uint256`|The bandwidth of the bandwidth|
|`offset`|`uint256`|The offset of the bandwidth|
|`roundDown`|`bool`|Whether to round down or up|


### ulyssesSwap

Adds assets to bandwidths and returns the assets to be swapped to a destination pool


```solidity
function ulyssesSwap(uint256 assets) private returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The assets to be distributed between all bandwidths|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The assets of assets to be swapped to a destination pool|


### ulyssesAddLP

Adds amount to bandwidths and returns assets to deposit or shares to mint


```solidity
function ulyssesAddLP(uint256 amount, bool depositFees) private returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount to be distributed between all bandwidths|
|`depositFees`|`bool`|True when called from deposit, false when called from mint|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The output amount to be minted or deposited|


### ulyssesRemoveLP

Removes shares from bandwidths and returns assets to withdraw


```solidity
function ulyssesRemoveLP(uint256 shares) private returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The shares to be removed between all bandwidths|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The shares of assets to withdraw|


### swapIn

Swaps from this Ulysses LP's underlying to the destination Ulysses LP's underlying.
Distributes amount between bandwidths in the source, having a positive rebalancing fee
Calls swapDestination of the destination Ulysses LP


```solidity
function swapIn(uint256 assets, uint256 poolId) external nonReentrant returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`||
|`poolId`|`uint256`|The ID of the destination Ulysses LP|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The output amount transfered to user from the destination Ulysses LP|


### swapFromPool

Swaps from the caller (source Ulysses LP's) underlying to this Ulysses LP's underlying.
Called from swapIn of the source Ulysses LP
Removes amount from the source's bandwidth, having a negative rebalancing fee

*Only Ulysses LPs added as destinations can call this function*


```solidity
function swapFromPool(uint256 assets, address user) external nonReentrant returns (uint256 output);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`||
|`user`|`address`|The user to be transfered the output|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`output`|`uint256`|The output amount transfered to user|


### beforeDeposit

Performs the necessary steps to make after depositing.


```solidity
function beforeDeposit(uint256 assets) internal override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|to be deposited|


### beforeMint

Performs the necessary steps to make after depositing.


```solidity
function beforeMint(uint256 shares) internal override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`||


### afterRedeem

Performs the necessary steps to take before withdrawing assets


```solidity
function afterRedeem(uint256 shares) internal override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|to be burned|


