---
id: governance-proposal
title: Governance Proposal
---

# Phase 3: Governance Proposal

### **Objective**

The objective of Phase 3, which represents the final step of the governance process, is to solidify and formalize the community's consensus regarding a specific proposal. Should this vote achieve approval, it will result in the implementation of the proposed changes on-chain.

### **Requirements**

- Duration

  - **Waiting Period**: 2 weeks
  - **Voting Period**: 1 week to 3 weeks

- Threshold to Create Proposal: 0.5 to 5% vMaia

- Quorum: 35% vMaia

### **How To Create an On-Chain Governance Proposal**

1. Incorporate any last iterations to your proposal based on feedback prior to posting.

2. Create your proposal. This can be done either through an interface (on **[[Governance Interface](https://app.maiadao.io/governance/create-proposal)]**) or through writing the calldata for more complicated proposal logic. This calldata will be executed if and when the proposal passes. If writing the calldata yourself, please review the logic with a qualified Maia community member prior to posting the proposal.

4. Ensure that at least 2.5 million vMaia is delegated to your address in order to submit a proposal, or find a delegate who has enough delegated vMaia to meet the proposal threshold to propose on your behalf.

5. Once the proposal has been submitted (or the propose() function has been called), a two day voting delay will start. After the voting delay is finished, a seven day voting period begins. If the proposal passes successfully, the proposed code is executed.

---

### **Next Steps**

- ~~Phase 1: [Request for Comment][phase-1]~~

- ~~Phase 2: [Temperature Check][phase-2]~~

- ~~Phase 3: [Governance Proposal][phase-3]~~

Congratulations! You've made it to the end of all three phases of the Maia Governance Process. Ok, so now what? Now we await the votes to finalize and we can gauge whether or not the proposal will pass while meeting quorum, or not pass.

If a proposal does not pass, and the participants would like to submit another proposal for an additional attempt, they must wait at least two epochs before beginning the entire process again from Phase 1.

[phase-1]: ./request-for-comment
[phase-2]: ./temperature-check
[phase-3]: ./governance-proposal
