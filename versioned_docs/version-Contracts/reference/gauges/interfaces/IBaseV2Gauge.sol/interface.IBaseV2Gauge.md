# IBaseV2Gauge

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Handles rewards for distribution, boost attaching/detaching and
accruing bribes for a given strategy.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠒⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠑⠦⣄⠀⠀⢀⣠⠖⢶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢤⡈⠳⣦⡀⠀⠀⠀⠀⠀⠀⠒⢦⣀⠀⠀⠈⢱⠖⠉⠀⠀⠀⠳⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣌⣻⣦⡀⠀⠀⠀⠀⠀⠀⠈⠳⢄⢠⡏⠀⠀⠐⠀⠀⠀⠘⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠙⢿⣿⣄⠈⠓⢄⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡴⠁⠀⠀⠀⡠⠂⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⠀⠀⠀⠀⠀⠑⢄⠀⠀⠙⢿⣦⠀⠀⠑⢄⠀⠀⢰⠃⠀⠀⠀⠀⢀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⠞⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠧⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠙⢷⡀⠀⠀⠙⢦⡘⢦⠀⠀⠀⠺⢿⠇⢀⠀⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⠎⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡆⡀⠀⠀⠀⠈⣦⠀⠀⠀⠀⠀⠀⠈⢦⡀⠀⠀⠙⢦⡀⠀⠀⠑⢾⡇⠀⠀⠀⠈⢠⡟⠁⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠁⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⢳⠀⢣⣧⠀⠀⠀⠀⠘⡆⠑⡀⠀⠀⠀⠀⠐⡝⢄⠀⠀⠀⠹⢆⠀⠀⢈⡷⠀⠀⠀⢠⡟⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢸⣦⠀⠀⠀⠀⠀⢸⡄⢸⢹⣄⣆⠀⠀⠀⠸⡄⠹⡄⠀⠀⠀⠀⠈⢎⢧⡀⠀⠀⠈⠳⣤⡿⠛⠳⡀⠀⡉⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⡇⠀⢸⢸⠀⠀⠀⠀⠀⠘⣿⠀⣿⣿⡙⡄⠀⠀⠀⠹⡄⠘⡄⠀⠀⠀⠀⠈⢧⡱⡄⠀⠀⠀⠛⢷⣦⣤⣽⣶⣶⣶⣦⣤⣸⣀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⡇⠀⢸⡸⡆⠀⠀⠀⠀⠀⣿⣇⣿⣿⣷⣽⡖⠒⠒⠊⢻⡉⠹⡏⠒⠂⠀⠀⠀⠳⡜⣦⡀⠀⠀⠀⠹⣿⡟⠋⣿⡻⣯⣍⠉⡉⠛⠶⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⡇⡀⠸⡇⣧⢂⠀⠀⠀⢰⡸⣿⡿⢻⡇⠁⠹⣆⠀⠀⠈⢷⡀⠹⡾⣆⠀⠀⠀⠀⠙⣎⠟⣦⣀⣀⣴⣿⠀⣼⣿⢷⣌⠻⢷⣦⣄⣸⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢹⣇⠀⣧⢹⡟⡄⠀⠀⠀⣿⢿⠀⡀⢻⡀⠘⣎⢇⢀⣀⣨⣿⣦⠹⣾⣧⡀⠀⠀⣀⣨⠶⠾⣿⣿⣿⣿⣶⡿⣼⡞⠙⢷⣵⡈⠉⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⢠⣠⠤⠒⢺⣿⠒⢿⡼⣿⣳⡀⠀⣠⠋⢿⠆⠰⡄⢳⣤⠼⣿⣯⣶⠿⠿⠿⠿⢿⣿⣷⣶⣿⠁⠀⠀⠀⣻⣿⣿⣿⣿⣷⣿⢡⢇⣾⢻⣿⣶⣄⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣼⢾⡀⠀⠀⠸⣿⡇⠈⣧⢹⡛⢣⡴⠃⠀⠘⣿⡀⣨⠾⣿⣾⠟⢩⣷⣿⣶⣤⠀⠀⠈⢿⡿⣿⠀⠀⠀⠀⢹⢿⣿⣿⣿⣿⠋⢻⠏⢹⣸⠁⠈⠛⠿⣶⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣇⠀⠀⠀⣿⢹⡄⢻⣧⢷⠛⣧⠀⠀⠀⠈⣿⣧⣾⣿⠁⠀⣾⣿⣿⣷⣾⡇⠀⠀⡜⠀⢸⠀⠀⠀⠀⢸⡄⢻⣿⣿⠋⠀⢸⠀⠀⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⢸⣄⠠⣶⣻⣖⣷⡘⣇⠈⢧⠘⣷⠶⠒⠊⠙⣿⠟⠁⠀⠀⢹⡿⣿⣿⢿⠇⠀⠐⠁⠀⢼⠀⠀⠀⠀⡼⢸⠻⣿⣧⣀⠀⠀⢀⣼⢹⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⠟⠛⠛⣿⣿⣿⣦⡈⠠⠘⠆⠀⠀⠈⠁⠀⠀⠀⠀⠈⠛⠶⠞⠋⠀⠀⠀⡀⢠⡏⠀⠀⠀⢠⡇⣼⢸⣿⡟⠉⢣⣠⢾⡇⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣨⢿⡿⣟⢿⡄⠀⠀⣿⣿⣯⣿⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⣼⡿⢱⣿⣿⠁⠀⠈⡇⢸⡇⢠⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢋⠁⠈⡇⠘⣆⠑⢄⠀⠘⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠇⠀⠀⢠⢿⣷⣿⣿⣿⡄⠀⠰⠃⣼⡇⢸⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢻⠀⢹⣆⠀⠁⢤⡌⠓⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⢠⡏⢸⣿⣿⣿⡿⠻⡄⣠⣾⣿⡇⢸⠦⠀⠀⠀ ⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⢸⡆⢸⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⡏⠀⢀⡟⠀⣾⣿⣿⣿⠀⠀⣽⠁⢸⣿⣷⢸⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⡇⢸⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠁⢠⡟⠀⢰⣿⣿⣿⣿⠀⢠⠇⢠⣾⡇⢿⡈⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠈⠃⢸⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡏⢀⠎⠀⠀⡼⣽⠋⠁⠈⢀⣾⣴⣿⣿⡇⠸⡇⢱⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⢸⣿⠑⢹⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠋⢠⠟⠀⠀⣸⣷⠃⠀⢀⡞⠁⢸⣿⣿⣿⣧⠀⢿⣸⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⠃⠀⠀⠀⣿⡇⠀⣼⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⠇⡴⠃⠀⠀⣰⣟⡏⠀⡠⠋⢀⣠⣿⣿⡏⠈⣿⡇⠘⣏⣆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⢠⣿⠀⠀⣿⣿⡿⢹⣿⡿⠷⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣷⢧⡞⠁⠀⠀⣸⣿⠼⠷⢶⣶⣾⣿⡿⣿⡿⠀⠀⠘⣷⠀⠸⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠊⠀⠀⠀⠀⣼⠇⠀⣸⣿⡿⢡⣿⡟⠀⣠⣾⣿⣿⣿⣷⣦⣤⣀⣠⣾⣿⣿⣿⣿⣛⣋⣀⣀⣠⢞⡟⠀⣀⡠⢾⣿⣿⡟⠀⢿⣧⠀⠀⠀⠘⡆⠀⠙⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⢠⣿⠟⢀⣿⡟⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠁⠀⠉⠉⠉⠑⠻⢭⡉⠉⠀⢸⡆⢿⡗⠀⠈⢿⡀⠀⠀⠀⠹⡄⠀⢱⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⢀⡞⠉⢠⡿⣌⣴⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⣄⢸⡇⠘⡇⠀⠀⠈⢧⠀⠀⠀⠀⢱⡀⠈⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⣠⠏⠀⣰⣿⣿⣿⡿⠟⠿⠛⣩⣾⡿⠛⠁⠀⢀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡇⠀⠸⡄⠀⠀⠈⢇⠀⠀⠀⠀⢻⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⣠⠇⣠⣾⣿⠿⠛⠁⢀⣠⣴⣿⠟⠁⠀⠀⠀⢰⠋⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡀⠀⠹⡄⠀⠀⠘⢆⠀⠀⠀⠀⠳⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣫⡾⠟⠋⢁⣀⣤⣶⣿⡟⠋⠀⠀⣀⣠⣤⣾⡿⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⢹⡄⠀⠀⠈⢧⡀⠀⠀⠀⠙⣔⡄⠀


## Functions
### rewardToken

the reward token paid


```solidity
function rewardToken() external returns (address);
```

### flywheelGaugeRewards

the flywheel core contract


```solidity
function flywheelGaugeRewards() external returns (FlywheelGaugeRewards);
```

### isActive

mapping of whitelisted bribe tokens.


```solidity
function isActive(FlywheelCore flywheel) external returns (bool);
```

### added

if bribe flywheel was already added.


```solidity
function added(FlywheelCore flywheel) external returns (bool);
```

### strategy

the gauge's strategy contract


```solidity
function strategy() external returns (address);
```

### multiRewardsDepot

the gauge's rewards depot


```solidity
function multiRewardsDepot() external returns (MultiRewardsDepot);
```

### epoch

the current epoch / cycle number


```solidity
function epoch() external returns (uint256);
```

### getBribeFlywheels

returns all bribe flywheels


```solidity
function getBribeFlywheels() external view returns (FlywheelCore[] memory);
```

### newEpoch

function responsible for updating current epoch

*should be called once per week, or any outstanding rewards will be kept for next cycle*


```solidity
function newEpoch() external;
```

### attachUser

attaches a gauge to a user

*only the strategy can call this function*


```solidity
function attachUser(address user) external;
```

### detachUser

detaches a gauge to a users

*only the strategy can call this function*


```solidity
function detachUser(address user) external;
```

### accrueBribes

accrues bribes for a given user

*ERC20Gauges calls this on every vote change*


```solidity
function accrueBribes(address user) external;
```

### addBribeFlywheel

adds a new bribe flywheel

*only owner can call this function*


```solidity
function addBribeFlywheel(FlywheelCore bribeFlywheel) external;
```

### removeBribeFlywheel

removes a bribe flywheel

*only owner can call this function*


```solidity
function removeBribeFlywheel(FlywheelCore bribeFlywheel) external;
```

## Events
### Distribute
Emitted when weekly emissions are distributed


```solidity
event Distribute(uint256 indexed amount, uint256 indexed epoch);
```

### AddedBribeFlywheel
Emitted when adding a new bribe flywheel


```solidity
event AddedBribeFlywheel(FlywheelCore indexed bribeFlywheel);
```

### RemoveBribeFlywheel
Emitted when removing a bribe flywheel


```solidity
event RemoveBribeFlywheel(FlywheelCore indexed bribeFlywheel);
```

## Errors
### StrategyError
thrown when caller is not the strategy


```solidity
error StrategyError();
```

### FlywheelAlreadyAdded
thrown when trying to add an existing flywheel


```solidity
error FlywheelAlreadyAdded();
```

### FlywheelNotActive
thrown when trying to add an existing flywheel


```solidity
error FlywheelNotActive();
```

