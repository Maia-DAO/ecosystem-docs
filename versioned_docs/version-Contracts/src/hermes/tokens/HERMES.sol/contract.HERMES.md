# HERMES
[Git Source](https://github.com/Maia-DAO/test-env-V2/blob/84b5f9e8695c91ddb02f27bb3dfb1c652f55ced4/hermes/tokens/HERMES.sol)

**Inherits:**
ERC20, Ownable

**Author:**
Maia DAO (https://github.com/Maia-DAO)

Native token for the Hermes Incentive System.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣶⣾⡿⢻⣿⣿⣿⣟⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣟⡿⣷⣿⣿⢤⣾⣿⣻⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⡿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣻⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡛⠛⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣴⣯⣛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠟⠋⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣍⣻⣿⣿⣿⣿⣿⢧⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡏⠀⠀⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⠾⠿⠻⣿⠇⣿⣿⡿⠟⢠⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣻⣿⣧⣤⣽⣤⣯⣿⣾⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⡇⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡵⠾⢿⣿⡿⢟⣿⣿⣿⣿⣿⣿⡟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣼⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢳⠁⠀⠀⠈⠻⣿⣿⣿⣿⣿⡿⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣸⢳⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⢠⣿⣿⣿⣿⡿⣽⣿⣿⣿⣿⣿⡋⣰⡟⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻⣿⣷⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣟⣫⣾⣿⣿⣿⣿⣿⡟⣱⠟⢰⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡿⢱⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣰⡇⠉⠉⠉⠁⠀⠀⠀⠀⠀⣠⠄⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⡋⣴⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⢡⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⡇⡏⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣦⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡾⢃⣾⣿⣿⠗⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⡇⡇⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⡏⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡁⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⡿⢁⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣷⠀⠀⠀⠀⠀⢀⣀⣠⣶⣿⣿⣿⣿⣿⣷⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀⣀⠀⠀⠀
⠀⠀⣰⠟⣠⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠸⣿⣿⣷⣶⣶⣶⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣿⡾⣞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣟⣛⣛
⢠⡾⠋⣴⣿⣿⣿⣿⡿⠟⠛⠯⣵⡦⣄⣸⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣇⠈⢿⡈⢻⣿⢿⡋⠑⣷⠀⠀⠀⠀⠹⣿⣿⣿⣿⣽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⢟⣥⣾⣿⣿⣿⠋⠁⠀⠀⠀⠀⠀⠙⢮⣿⣿⢻⣿⣿⣿⣿⡇⠈⡿⣿⣿⣿⣿⣷⠤⠵⠶⠊⠑⣮⠶⠥⠀⠀⠀⠀⠀⢻⡎⠿⣿⣏⣿⣮⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⢹⣿⢸⣿⣿⣿⣿⣿⠶⢅⣽⣿⣿⣿⣿⣷⣤⡴⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠙⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⡞⢻⡼⣿⣿⣿⣿⣿⣧⠀⠈⢿⣿⣿⣿⣿⣿⣿⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣇⠀⠘⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⣼⠇⠈⣧⢹⣿⣿⣿⣿⣿⡆⠀⠀⠻⣧⠙⢿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⣀⣠⠽⣆⠀⠘⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⣠⣾⠁⢀⣿⠀⣴⡿⣿⢿⣿⣿⣿⣿⣿⡀⠀⠀⢙⣷⣄⣉⢿⣿⣿⣿⣿⣿⣿⣿⣷⣾⡛⢋⠀⠀⢻⣧⠀⠈⢿⣷⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡛⠿
⣿⠃⠀⠀⠀⠀⠀⠀⢀⡴⣹⠃⠀⣸⣹⠀⢻⢇⠘⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⢀⣻⣷⣄⡈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣠⠶⠚⠛⣦⣴⣦⡹⣿⣎⠻⣮⡛⠿⣿⣿⣿⣿⣿⣿⣷
⠇⠀⠀⠀⠀⠀⢀⡴⠋⣰⠃⠀⠀⡇⣿⠀⣾⢸⡄⠈⢿⣿⣿⣿⣿⣿⣿⣦⣠⠟⠀⢸⡇⢙⡳⢦⣽⡛⠻⢿⣿⣿⣿⣿⣿⣶⣺⡆⢹⣿⣿⣿⣿⣿⣶⡈⠻⣦⡈⠻⢿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⣠⠏⠀⣰⠃⠀⠀⣸⠀⠸⡄⣿⠈⡇⠀⠀⢿⢿⣿⣿⣿⣿⣿⣯⣀⢰⡋⠀⣟⣉⣉⣿⣿⣶⣾⠉⢻⣿⣿⣿⣿⣿⡇⢸⣿⣿⠻⣿⣿⣟⢿⣷⡈⠻⣦⣠⣿⣿⣿⣿
⠀⠀⠀⠀⡜⠁⠀⣰⠃⠀⠀⠀⡿⠀⠀⢣⡟⠀⡗⠀⠀⠸⡆⠙⢿⣿⡻⣿⣿⣿⣿⣗⡒⠚⠛⠓⠋⠉⢁⣈⣳⣾⠋⠙⢿⣿⣿⣿⣼⣿⣿⣇⠈⢿⣿⣧⣽⣿⣆⢨⣿⣿⣿⠋⠚
⠀⠀⠀⣾⠁⠀⢰⠇⠀⠀⠀⠀⡇⠀⠀⣸⣷⡞⠁⠀⠀⠀⣧⠀⠀⢽⡿⣯⠙⣿⣿⣿⣿⣦⣴⠒⠒⠋⠉⠉⠀⠙⣦⡀⠈⢹⣿⣿⣿⢿⣿⣿⣆⠀⢙⣿⣿⣿⢻⣿⣿⣟⢧⠀⠀
⠀⠀⠀⡇⠀⠉⡅⢾⡡⢖⣈⡀⣷⣶⠾⣟⠋⠙⢦⡀⠀⠀⢸⠀⠀⠈⠷⠾⢿⣇⠀⠙⠿⣿⣿⣷⣄⣤⡤⠴⠶⠚⠛⣿⠉⠉⠹⣿⣿⢸⣿⣿⣘⣶⣾⣿⣿⣿⣿⣿⡟⠈⠈⢷⣠
⠀⠀⠀⣇⠀⠀⠇⠀⠀⠀⠐⠯⠿⡄⠀⣿⡷⠀⠀⠈⠓⢤⣈⣧⣀⣀⣀⣠⠤⠿⣿⠛⠛⠉⠻⣿⣿⣧⡀⠀⠀⠀⠀⠘⣧⠀⠀⢻⣿⢸⣿⣿⡟⢁⣿⣿⣇⣿⣿⡿⡆⣀⣴⣿⡟
⠀⠀⠀⠘⠄⠀⠀⠀⠀⠀⠀⠀⠀⠳⣴⡗⠈⠀⠀⠀⠀⠀⠙⢦⣄⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⢻⣿⣿⣿⣄⠀⠀⠀⠀⢫⠃⠀⢸⣿⣿⣿⣿⣧⢸⣿⣿⢿⣿⡟⣸⣿⡿⠋⠀⣇


## Functions
### constructor


```solidity
constructor(address _owner) ERC20("Hermes", "HERMES", 18);
```

### mint

Responsible for minting new hermes tokens.

*Checks if the sender is an allowed minter.*


```solidity
function mint(address account, uint256 amount) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|account to mint tokens to.|
|`amount`|`uint256`|amount of hermes to mint.|

