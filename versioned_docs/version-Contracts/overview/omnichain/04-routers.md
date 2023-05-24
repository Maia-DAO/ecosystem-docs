---
id: routers
title: Routers
---

[//]: # (TODO: Add some Router implementation examples)

On our platform, users typically interact with **Routers**, which are key infrastructure components that enable customized actions before, during and after omnichain interactions.

## Overview

There are two types of Routers:

### 1. Branch Routers
Branch Routers serve as user-facing entry and exit points within the omnichain system. Upon receiving a user request, they perform necessary state changes to the origin Branch Chain's contract and communicate with the connected [Branch Bridge Agent](./03-bridge-agents.md) for transmitting and receiving cross-chain messages.

### 2. Root Routers
Located in the Root Chain, Root Routers connect to a [Root Bridge Agent](./03-bridge-agents.md) for seamless request reception and response transmission. They interact any application in the Root Chain, such as UniswapV3, Maia Vaults, and Hermes Gauges, along with their respective voting systems, to accommodate user requests.

## Conclusion
These Routers ensure composable and customizable cross-chain interactions, providing users with a smooth and versatile experience. By implementing Branch and Root Routers, our platform empowers users to engage with diverse third-party applications while leveraging our system's secure and plug and play communication channels between chains.
