---
id: swaps
title: Swaps
---

[//]: # (TODO: Add visuals examples)
[//]: # (TODO: Adding multiple swaps examples)
[//]: # (TODO: Adding adding LP, swapping and adding liq to Ulysses Token)

To swap assets between pools they need to have an active bandwidth — when this is the case, the user can deposit or use deposited assets in the initial pool. The user can then swap their deposit to another pool by removing bandwidth in the destination LP from the source LP.

The full process is shown below in the Unified Liquidity Algorithm.

# Unified Liquidity Algorithm

Adapted from: Figure 4, https://www.dropbox.com/s/gf3606jedromp61/Delta-Solving.The.Bridging-Trilemma.pdf

| Symbol         | Definition     |
|----------------|----------------|
| t | transaction amount |
| d | destination LP ID |
| s | source LP ID |
| a<sub>d</sub> | destination LP assets |
| a<sub>s</sub> | source LP assets |
| b<sub>d,s</sub> | bandwidth from destination to source LP |
| b<sub>s,d</sub> | bandwidth from source to destination LP |
| w<sub>d,s</sub> | weight from destination to source LP |

```markdown
Input: t, d

# On the source LP:
 1: aₛ ← aₛ + t
 3: for x != s do
 4:     diffₓ,ₛ ← max(0, lpₛ * wₓ,ₛ − bₓ,ₛ))
 5: end for
 6: Total ← ∑ₓ diffₓ,ₛ
 7: for x != s do
 8:     diffₓ,ₛ ← min(Total, t) * diffₓ,ₛ / Total
 9: end for
10: t′ ← t - min(Total, t)
11: for ∀x do
12:     bₓ,ₛ ← bₓ,ₛ + diffₓ,ₛ + t′ * wₓ,ₛ
13: end for
14: msg = (t)
15: Send msg to chain d

# On the destination LP: 
16: Receive (t) from a source LP
17: if bₛ,𝒹 < t then
18:     Reject the transfer
19: end if
20: a𝒹 ← a𝒹 − t
21: b𝒹,ₛ ← b𝒹,ₛ − t
```
