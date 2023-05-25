# IUniswapV3GaugeFactory

**Inherits:**
[IBaseV2GaugeFactory](/gauges/interfaces/IBaseV2GaugeFactory.sol/interface.IBaseV2GaugeFactory.md)

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Handles the creation of new Uniswap V3 gauges and the management of existing ones.
Adds and removes gauges, and allows the bribe factory
to add and remove bribes to gauges.
⠀⠀⠀⠀⠀⠀⠀⣠⠊⡴⠁⠀⠀⣰⠏⠀⣼⠃⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⡇⠙⡄⠀⠀⠳⠙⡆⠀⠀⠘⣆⠀⠀
⠀⠀⠀⠀⢀⣀⡔⠁⡞⠁⠀⠀⣴⠃⠀⣰⡏⠀⠇⠀⠀⠀⠀⠀⠀⠀⡄⠀⢻⠀⠀⠀⠀⠀⠀⠀⢸⠀⠘⡄⠀⠀⠀⢹⡄⠀⠀⠸⠀⠀
⠀⠀⠀⠀⢀⡏⠀⠜⠀⠀⠀⣼⠇⠀⢠⣿⠁⣾⢸⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⡇⠀⢢⠀⠀⠀⢆⠀⣇⠀⠘⡄⠀⠀⠘⡇⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡾⠀⠀⠀⠀⠀⣸⠏⠀⠀⡞⢹⠀⡇⡾⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⣿⡀⠈⢇⠀⠀⠈⢧⣿⡀⠀⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀
⠀⠀⠀⣼⡇⠀⠀⠀⠀⢠⡿⠀⠀⢠⠁⢸⠀⡇⢳⡇⠀⠀⠀⠀⠀⠀⢸⡀⠀⢸⣧⠀⠘⡄⠀⠀⠀⠻⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠐⢸⡇⠀⡄⠀⠀⠸⣿⠀⠀⣼⠤⠐⣇⢣⡀⠳⡀⠀⠀⢠⠀⠀⠘⣇⠀⠀⢻⣏⠉⢻⡒⠤⡀⠀⠘⠣⣄⡆⠀⠀⠀⠀⠀⠀⠀⠀
⡄⠀⠸⡌⣧⠀⢧⠀⠀⠀⢿⣧⠀⢹⠀⠀⠘⢦⠙⠒⠳⠦⠤⣈⣳⠄⠀⠽⢷⠤⠈⠨⠧⢄⠳⣄⣠⡦⡀⠀⠀⣉⣑⣲⡇⠀⠀⠀⠀⠀
⣌⢢⡀⠙⢻⠳⣬⣧⣀⠠⡈⣏⠙⣋⣥⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠾⣶⡶⣶⣧⣶⢹⣷⠚⡗⠋⢹⠉⠀⠀⠀⠀⠀⠀⠀
⠈⠳⣹⣦⡀⠀⣿⣼⠋⠉⢉⣽⣿⡋⣷⣦⣿⣿⣷⡀⠀⠀⢀⣤⣶⠭⠭⢿⣧⣀⣴⣻⣥⣾⣏⣿⠀⢸⡀⠁⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⢮⣻⡄⢿⢻⢀⣾⡿⠟⠛⢻⡽⣱⡟⣩⢿⡷⣶⣶⣾⡿⠁⢤⡖⠒⠛⣿⠟⣥⣛⢷⣿⣽⠀⠘⡿⠁⠀⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠰⡙⢿⡼⡜⢸⣿⠒⡿⢦⠎⣴⢏⡜⠀⢸⣿⠁⠀⢹⣧⠀⠘⡿⢷⡾⣅⡠⠞⠛⠿⣟⣿⡆⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠐⠒⠲⣄⢳⢈⡇⡇⠈⢿⣷⣷⢁⣾⢃⠞⠀⣠⡿⠃⠤⡀⠚⢿⣆⡠⠊⠢⡀⠀⠙⠦⣀⣴⣷⠋⣧⠀⠈⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⡀⠀⠘⢻⣾⠃⠃⠀⢸⠻⣿⣿⣥⣋⣠⣾⠟⠁⠀⠀⠀⠀⠈⢻⣧⡀⠀⠈⢲⣄⡀⠈⠛⢁⡀⠟⡄⠀⠸⡀⡀⠀⠀⠠⠀⠀⠀⠀⠀
⠀⠱⣄⠀⠈⢻⡏⠀⠀⠈⡄⢿⠈⠙⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠹⢿⠶⢚⡯⠗⠋⠲⢄⠀⠈⠒⢿⡄⠀⠱⣇⠀⢀⡇⠀⠀⠀⠀⠀
⢀⡀⠙⣧⡀⣸⡇⠀⠀⠀⠇⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠙⢦⣀⠀⠈⠲⢄⠙⣆⣸⡇⠀⠀⠀⠀⠀
⡻⣷⣦⡼⣷⣿⠃⠀⠀⠀⢸⠈⡟⢆⣀⠴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢴⠚⠉⠉⠉⠀⣀⠔⣋⠡⠽⢷⠀⠀⠀⠀⠀
⠁⠈⢻⡇⢻⣿⠀⠀⠀⠀⠀⣆⢿⠿⡓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⣽⣿⣀⡤⠎⡔⢊⠔⢊⡁⠤⠖⢚⣳⣄⠀⠀⠀
⠀⢀⢸⢀⢸⡇⠀⠀⠀⠀⠀⠸⡘⡆⢧⠀⢿⢢⣀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠒⠊⣡⢤⡏⡼⢏⠀⡜⣰⠁⡰⠋⣠⠒⠈⢁⣀⠬⠧⡀⠀
⠀⠀⢸⠈⡞⣧⠀⠀⠀⠀⠀⠀⢣⢹⣮⣆⢸⠸⡌⠓⡦⠒⠒⠊⠉⠁⠀⠀⢠⠞⠀⢠⣿⠁⣸⠻⣡⠃⡼⠀⡰⠁⣠⠞⠁⣠⠤⠐⠚⠀
⠀⠀⡸⠀⣷⢻⠀⠀⠀⠀⠀⠀⢀⢷⡈⢿⣄⡇⢹⡀⢱⠀⠀⠀⠀⠀⢀⠜⠁⠀⠀⣼⣻⣰⡏⠀⠙⢶⠀⡴⠁⡔⠁⣠⠊⢀⠔⠋⠀⠀
⠀⠀⠇⢀⡿⡼⣇⠀⠀⠸⠀⠀⠀⠻⣷⡈⢟⢿⡀⠳⣾⣀⣄⣀⡠⠞⠁⠀⢀⣀⣴⢿⡿⡹⠀⠀⠀⠀⢹⣅⡞⠀⡴⠁⡰⠃⠀⡀⠀⠀
⠀⠀⢠⡾⠀⠱⡈⢦⡀⠀⢳⡀⠀⠀⠈⢯⠿⣦⡳⣴⡟⠛⠋⣿⣴⣶⣶⣿⣿⠿⣯⡞⠀⠃⠀⠀⠀⠀⠈⣿⣑⣞⣀⡜⠁⡴⠋⠀⠀⠀
⠀⠀⢠⠇⠀⢀⣈⣒⠻⣦⣀⠱⣄⡀⠀⠀⠓⣬⣳⣽⠳⣤⠼⠋⠉⠉⠉⠀⣀⣴⣿⠁⠀⠀⠀⠀⠀⠀⢰⠋⣉⡏⡍⠙⡎⢀⡼⠁⠀⠀
⠀⣰⣓⣢⠝⠋⣠⣴⡜⠺⠛⠛⠿⠿⣓⣶⠋⠀⠤⠃⠀⠀⠀⠀⠀⢀⣤⡾⢻⠟⡏⠀⠀⠀⠀⠀⠀⡇⡝⠉⡠⢤⣳⠀⣷⢋⡴⠁⠀⠀
⠜⠿⣿⣦⣖⢉⠰⣁⣉⣉⣉⣉⣑⠒⠼⣿⣆⠀⠀⠀⠀⠀⣀⣠⣶⠿⠓⠊⠉⠉⠁⠀⠀⠀⠀⠀⠀⢠⠴⢋⡠⠤⢏⣷⣿⣉⠀⠀⠀


## Functions
### uniswapV3Staker

The uniswap v3 staker instance.


```solidity
function uniswapV3Staker() external view returns (UniswapV3Staker);
```

### flywheelGaugeRewards

Flywheel for the uniswap v3 staker, that is responsible for distributing the rewards.


```solidity
function flywheelGaugeRewards() external view returns (FlywheelGaugeRewards);
```

### setMinimumWidth

Sets the minimum width for gauge


```solidity
function setMinimumWidth(address gauge, uint24 minimumWidth) external;
```

