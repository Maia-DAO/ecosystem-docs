# ERC4626PartnerManager

**Inherits:**
[PartnerUtilityManager](/maia/PartnerUtilityManager.sol/abstract.PartnerUtilityManager.md), Ownable, [ERC4626](/erc-4626/ERC4626.sol/abstract.ERC4626.md), [IERC4626PartnerManager](/maia/interfaces/IERC4626PartnerManager.sol/interface.IERC4626PartnerManager.md)


## State Variables
### factory
The partner manager factory.


```solidity
PartnerManagerFactory public immutable override factory;
```


### bHermesToken
The bHermes token.


```solidity
bHermes public immutable override bHermesToken;
```


### bHermesRate
The bHermes rate is used to determine how much hermes
can be claimed by one share.


```solidity
uint256 public override bHermesRate;
```


## Functions
### constructor

Initializes the ERC4626PartnerManager token.


```solidity
constructor(
    PartnerManagerFactory _factory,
    uint256 _bHermesRate,
    ERC20 _partnerAsset,
    string memory _name,
    string memory _symbol,
    address _bhermes,
    address _partnerVault,
    address _owner
)
    PartnerUtilityManager(
        address(bHermes(_bhermes).gaugeWeight()),
        address(bHermes(_bhermes).gaugeBoost()),
        address(bHermes(_bhermes).governance()),
        address(new ERC20MultiVotes(_owner)),
        partnerVault
    )
    ERC4626(
        _partnerAsset,
        string.concat(_name, " - Burned Hermes: Aggregated Gov + Yield + Boost"),
        string.concat(_symbol, "-bHermes")
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_factory`|`PartnerManagerFactory`|The partner manager factory.|
|`_bHermesRate`|`uint256`|The rate at which bHermes underlying's can be claimed.|
|`_partnerAsset`|`ERC20`|The asset that will be used to deposit to get partner tokens.|
|`_name`|`string`|The name of the token.|
|`_symbol`|`string`|The symbol of the token.|
|`_bhermes`|`address`|The address of the bHermes token.|
|`_partnerVault`|`address`|The address of the partner vault.|
|`_owner`|`address`|The owner of this contract.|


### updateUnderlyingBalance

Updates the bHermes underlying balance.

*Claims all outstanding underlying bHermes utility tokens for this contract.*


```solidity
function updateUnderlyingBalance() public virtual;
```

### claimOutstanding

Claims all outstanding underlying bHermes utility tokens for msg.sender.


```solidity
function claimOutstanding() public virtual;
```

### totalAssets

Compute the amount of tokens available in contract.

*Never overflows since balandeOf >= userClaimed.*

*1:1 with underlying asset.*


```solidity
function totalAssets() public view override returns (uint256);
```

### convertToShares

Computes and returns the amount of shares from a given amount of assets.


```solidity
function convertToShares(uint256 assets) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|amount of assets to convert to shares|


### convertToAssets

Computes and returns the amount of assets from a given amount of shares.


```solidity
function convertToAssets(uint256 shares) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|amount of shares to convert to assets|


### previewDeposit

Simulates the amount of shares that the assets deposited are worth.


```solidity
function previewDeposit(uint256 assets) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|amount of assets to simulate the deposit.|


### previewMint

Calculates the amount of shares that the assets deposited are worth.


```solidity
function previewMint(uint256 shares) public view virtual override returns (uint256);
```

### previewWithdraw

Previews the amount of assets to be withdrawn from a given amount of shares.


```solidity
function previewWithdraw(uint256 assets) public view virtual override returns (uint256);
```

### previewRedeem

Previews the amount of assets to be redeemed from a given amount of shares.


```solidity
function previewRedeem(uint256 shares) public view virtual override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|amount of shares to convert to assets.|


### maxDeposit

Returns the maximum amount of assets that can be deposited by a user.

*Returns the remaining balance of the bHermes divided by the bHermesRate.*


```solidity
function maxDeposit(address) public view virtual override returns (uint256);
```

### maxMint

Returns the maximum amount of assets that can be deposited by a user.

*Returns the remaining balance of the bHermes divided by the bHermesRate.*


```solidity
function maxMint(address) public view virtual override returns (uint256);
```

### maxWithdraw

Returns the maximum amount of assets that can be withdrawn by a user.

*Assumes that the user has already forfeited all utility tokens.*


```solidity
function maxWithdraw(address user) public view virtual override returns (uint256);
```

### maxRedeem

Returns the maximum amount of assets that can be redeemed by a user.

*Assumes that the user has already forfeited all utility tokens.*


```solidity
function maxRedeem(address user) public view virtual override returns (uint256);
```

### migratePartnerVault

Migrates assets to new Partner Vault.

*Must be a Vault recognized by PartnerManagerFactory.*


```solidity
function migratePartnerVault(address newPartnerVault) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPartnerVault`|`address`|destination Partner Vault.|


### increaseConversionRate

Allows owner to raise the conversion rate used for deposit.
Conversion rate can only be raised. Sets the ratio
between pbHermes<\>bHermes. If the ratio is 1 it means that
1 $pbHermes has 1 $bHermes worth of voting power.

*Maximum increase of conversion rate up to:
`bHermes.balanceOf(address(partnerVault)) / totalSupply()`.*


```solidity
function increaseConversionRate(uint256 newRate) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRate`|`uint256`|new bHermes to pbHermes conversion rate. represents the value that correlates partnerToken with bHermes voting power.|


### _mint

Mints new partner bhermes tokens to a specific address.


```solidity
function _mint(address to, uint256 amount) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to mints tokens to.|
|`amount`|`uint256`|amount of tokens to mint.|


### _burn

Burns (or unstakes) the vMaia token in exchange for the underlying
Partner tokens, performing changes around bHermes tokens.


```solidity
function _burn(address from, uint256 amount) internal virtual override checkTransfer(from, amount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|account to burn the partner manager from|
|`amount`|`uint256`|amounts of vMaia to burn|


### transfer

Transfer partner manager to a specific address.


```solidity
function transfer(address to, uint256 amount)
    public
    virtual
    override
    checkTransfer(msg.sender, amount)
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|address to transfer the tokens to.|
|`amount`|`uint256`|amounts of tokens to transfer.|


### transferFrom

Transfer tokens from a given address.


```solidity
function transferFrom(address from, address to, uint256 amount)
    public
    virtual
    override
    checkTransfer(from, amount)
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`from`|`address`|address to transfer the tokens from.|
|`to`|`address`|address to transfer the tokens to.|
|`amount`|`uint256`|amounts of tokens to transfer.|


### checkWeight

*Checks available weight allows for call.*


```solidity
modifier checkWeight(uint256 amount) virtual override;
```

### checkBoost

*Checks available boost allows for call.*


```solidity
modifier checkBoost(uint256 amount) virtual override;
```

### checkGovernance

*Checks available governance allows for call.*


```solidity
modifier checkGovernance(uint256 amount) virtual override;
```

### checkPartnerGovernance

*Checks available partner governance allows for call.*


```solidity
modifier checkPartnerGovernance(uint256 amount) virtual override;
```

### checkTransfer


```solidity
modifier checkTransfer(address from, uint256 amount) virtual;
```

