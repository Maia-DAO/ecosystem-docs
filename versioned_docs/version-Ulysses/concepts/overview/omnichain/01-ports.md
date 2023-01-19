---
id: ports
title: Ports
---

[//]: # (TODO: create some segway into the Ports and Virtual Liquidity sections, making use of some links to respenctive docs pages)
[//]: # (TODO: Add better examples)


The protocol's omnichain architecture has its foundations set around the Ports. These constitute the liquidity repositories which are in charge of retaining and managing capital deposited in each different chain where Ulysses is present.

## How do they work?

In short, a Port is in play whenever assets are deposited into or withdrawn from the Ulysses Omnichain Liquidity System, in effect serving as a vault with a single-asset pool for each omnichain token active in a given chain. When interacting with a Port to perform any of these actions, no protocol fees will be charged from user's assets.   

There are two types of Ports:

### 1. Branch Ports
For each chain there must be one Branch Port which serves all the Branch Routers which may there be present, in response to both user requests and system responses a Router performs calls to the Port requesting the withdrawal, depositing or as well as interacting with the virtualized token contracts accordingly.

### 2. Root Port
Is present in the Root Chain and communicates with all connected Root Routers. This Port is responsible for maintaining the global state of the Virtualized Tokens, having a registry of all the mappings from underlying to local addresses,as well as from local to global addresses. Any action that envolves the addition, removal or verification of tokens and their balances has to go thorugh this contract.

## Architecture Overview

![Omnichain_Architecture](./images/Ulysses_Omnichain_Layout.png)


