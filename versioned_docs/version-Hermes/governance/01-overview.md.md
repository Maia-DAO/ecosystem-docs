---
id: overview
title: Overview
---

Hermes Protocol’s governance is carried out solely by community members that hold the vote-locked version of the token.

Governance proposals are ranked in different severity levels depending on the magnitude of short, mid and long term effects changes they can have on the protocols functionality and sustainability. 

| Level | Min Proposal Threshold | Max Proposal Threshold | Min Voting Period | Max Voting Period | Min Voting Delay | Max Voting Delay | Quorum Votes | Proposal Max Operations | Actions |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0.1% GovToken | 1% GovToken | ~24 hours | ~1 week | 1 block | ~1 week | 4,000,000 (4%) | 10 actions | Adding/Removing Bribes |
| 2 | 0.25% GovToken | 2.5% GovToken | ~2 days | ~2 weeks | ~2 days | ~1 week | 12,500,000 (12.5%) | 10 actions | Adding/Removing Gauges, Adding/Removing Partners from Incentives Program |
| 3 | 0.5% GovToken | 5,000,000 GovToken | ~1 week | ~3 weeks | ~4 days | ~1 week | 25,000,000 (25%) | 10 actions | Add/Remove Gauge System, Add Ulysses Port to new chain |
| 4 | 0.75% GovToken | 7.5% GovToken | ~2 weeks | ~4 weeks | ~1 week | ~2 weeks | 35,000,000 (35%) | 10 actions | Change Weight Ulysses Pool, Change Weight Ulysses Token |
| 5 | 1% GovToken | 10,000,000 GovToken | ~2 weeks | ~6 weeks | ~1 week | ~2 weeks | 50,000,000 (50%) | 10 actions | Add/Remove New Ulysses Root Router, Add Destinations to Ulysses Pool, Add/Remove LP Ulysses Token, Hermes Minter |

## Severity Levels Overview

This level’s proposals are the least severe among the five levels, suitable for minor changes not affecting user funds, such as updating tokens eligibility to be deposited as bribes that do not significantly impact the platform's functioning.
These proposals require a minimum threshold of 0.1% and a maximum threshold of 1% of GovToken for voting eligibility. The quorumVotes required is 4% of GovToken, and the voting period ranges from 24 hours to 1 week.

### Severity 2

This level’s proposals have a moderate severity level and are appropriate for proposals that have a slightly more significant impact on the platform, such as adding or removing gauges or partners from incentive programs. Users can lose unclaimed rewards at the time of the update.
These proposals require a minimum threshold of 0.25% and a maximum threshold of 2.5% of GovToken. The quorumVotes required is about 12.5% of GovToken, and the voting period ranges from 2 days to 2 weeks.

### Severity 3

Any proposal on architectural changes to our system that may hinder utilization for a given period. These are more severe and are suitable for proposals that impact the gauge system significantly, such as adding or removing it from the platform
These proposals require a minimum threshold of 0.5% and a maximum threshold of 5% GovToken. The quorum required is about 25% of GovToken, and the voting period is about 1 week to 3 weeks.

### Severity 4

Proposals found on this level are more critical and require a higher minimum threshold of 0.75% and a maximum threshold of 7.5% of GovToken. 
These proposals have a more significant impact on the platform and/or protocols bottom line, such as changing the weight in a Ulysses pool or adding a Hermes Minter (emission allocation), capital applications up to 10% of the treasury.

The quorum required is about 35% of GovToken, and the voting period ranges from 2 weeks to 4 weeks.

### Severity 5

proposals are the most severe, requiring a minimum threshold of 1% and a maximum threshold of 10% GovToken. These proposals have a considerable impact on the platform, or protocols token supply such as adding or removing new Ulysses root router, LP Ulysses tokens, or  

The quorum required is about 50% of GovToken, and the voting period ranges from 2 weeks to 6 weeks.

In conclusion, the severity level categorization is a crucial aspect of the platform's proposal voting system. Each level has unique characteristics and requirements, designed to ensure that proposals are given the appropriate level of scrutiny and their impact on the platform is thoroughly evaluated. It is essential to carefully consider the severity level when proposing changes to the platform.

## Governance Processes

To help our own and our partner’s communities better position themselves to finish this process until V2 launch, partner on-boarding prior to V2 will only consist of Phase 1 and Phase 2. Because of that, Phase 2 will need to include the information that would be included in the on-chain proposal, like requested actions, that would be included in Phase 3.

### **Phase 1: Request for Comment (POP-RFC)**

**Timeframe:** Minimum 3 days

**Form:** [Governance Forum](https://commonwealth.im/hermes-omnichain/discussions) Post

The first phase of the governance process is meant to allow the community to digest a proposal, comment, and ask questions about the new partner in question and how it will benefit the ecosystem.

In their proposal, the partner should clearly specify the desired tier they are applying for and provide detailed, verifiable information on how they plan to meet the associated requirements. They must also outline a transparent framework that allows any community member to easily track and evaluate their progress towards achieving the milestones set by the partner. This framework should include measurable objectives and verifiable data sources.

To post a RFC, label your post “POP-RFC - [Your Title Here]”. Prior to moving to Phase 2, give the community at least 3 days to read and comment on the RFC. Please respond to questions in the comments, and take feedback into account in the next iteration of the proposal posted in Phase 2.

### **Phase 2: Temperature Check (POP-TC)**

**Timeframe:** 5 days

**Quorum:** 10M bHERMES

**Form:** [Snapshot poll](https://snapshot.org/#/hermesprotocol.eth/)

The purpose of the Temperature Check is to signal community sentiment on the new partner on-boarding proposal prior to moving towards an on-chain vote.

To create a Temperature Check:

1. Incorporate the community feedback from the RFC phase into the proposal.
2. Create and post this version of the proposal in the [Governance Forum](https://commonwealth.im/hermes-omnichain/discussions) with the following title “POP-TC - [Your Title Here]”. Include a link to the POP-RFC post. You will update the post to include a link to the Snapshot poll after you’ve posted that.
3. Create a [Snapshot poll](https://snapshot.org/#/hermesprotocol.eth/). The voting options should consist of those which have gained support in the POP-RFC Phase. This poll can be either binary or multiple choice but must include a “Nay” option. Set the poll duration to 5 days. Include a link to the Forum Partnering On-boarding Proposal Temperature Check post.
4. Update the Forum post with a link to the Snapshot Poll.

At the end of 5 days, the option with the majority of votes wins. There must be at least 10M bHERMES yes votes to move onto Phase 3. If the “Nay” option wins, the proposal will not move onto the Phase 3.

Until V2 launch that will have full on-chain governance, proposals that pass Phase 2 don’t need to continue to Phase 3. They are considered passed and will be executed when migrating from V1 to V2.

### **Phase 3: Governance Proposal**

**Timeframe:** 2 day waiting period, 7 day voting period

Proposal creation threshold: 2.5M bHERMES

**Quorum:** 12.5M bHERMES

**Form:** [TBD]

Phase 3 is the final step of the governance process. If this vote passes, then a change will be enacted on-chain.

To create an on-chain Governance Proposal:

1. Incorporate any last iterations to your proposal based on feedback prior to posting.
2. Create a topic in the [TBD] titled “POP - Governance Proposal — [Your Title Here]” and link to previous forum posts and the Partnering On-boarding Proposal Temperature Check Snapshot poll.
3. Create your proposal. This can be done either through an interface (on [TBD]) or through writing the calldata for more complicated proposal logic. This calldata will be executed if and when the proposal passes. If writing the calldata yourself, please review the logic with a qualified Hermes community member prior to posting the proposal.
4. Ensure that at least 2.5 million bHERMES is delegated to your address in order to submit a proposal, or find a delegate who has enough delegated bHERMES to meet the proposal threshold to propose on your behalf.
5. Once the proposal has been submitted (or the propose() function has been called), a two day voting delay will start. After the voting delay is finished, a seven day voting period begins. If the proposal passes successfully, the proposed code is executed.

## Gauge Addition/Removal proposal (GAP)

---

To help our own and our partner’s communities better position themselves to finish this process until V2 launch, partner on-boarding prior to V2 will only consist of Phase 1 and Phase 2. Because of that, Phase 2 will need to include the information that would be included in the on-chain proposal, like requested actions, that would be included in Phase 3.

### **Phase 1: Request for Comment**

**Timeframe:** Minimum 3 days

**Form:** [Governance Forum](https://commonwealth.im/hermes-omnichain/discussions) Post

The first phase of the governance process is meant to allow the community to digest a proposal, comment, and ask questions about the new partner in question and how it will benefit the ecosystem.

In their proposal, the partner should clearly specify the desired tier they are applying for and provide detailed, verifiable information on how they plan to meet the associated requirements. They must also outline a transparent framework that allows any community member to easily track and evaluate their progress towards achieving the milestones set by the partner. This framework should include measurable objectives and verifiable data sources.

To post a RFC, label your post “POP-RFC - [Your Title Here]”. Prior to moving to Phase 2, give the community at least 3 days to read and comment on the RFC. Please respond to questions in the comments, and take feedback into account in the next iteration of the proposal posted in Phase 2.

### **Phase 2: Temperature Check (POP-TC)**

**Timeframe:** 5 days

**Quorum:** 10M bHERMES

**Form:** [Snapshot poll](https://snapshot.org/#/hermesprotocol.eth/)

The purpose of the Temperature Check is to signal community sentiment on the relevance of adding or removing that gauge.

To create a Temperature Check:

1. Incorporate the community feedback from the RFC phase into the proposal.
2. Create and post this version of the proposal in the [Governance Forum](https://commonwealth.im/hermes-omnichain/discussions) with the following title “POP-TC - [Your Title Here]”. Include a link to the POP-RFC post. You will update the post to include a link to the Snapshot poll after you’ve posted that.
3. Create a [Snapshot poll](https://snapshot.org/#/hermesprotocol.eth/). The voting options should consist of those which have gained support in the POP-RFC Phase. This poll can be either binary or multiple choice but must include a “Nay” option. Set the poll duration to 5 days. Include a link to the Forum Partnering On-boarding Proposal Temperature Check post.
4. Update the Forum post with a link to the Snapshot Poll.

At the end of 5 days, the option with the majority of votes wins. There must be at least 10M bHERMES yes votes to move onto Phase 3. If the “Nay” option wins, the proposal will not move onto the Phase 3.

Until V2 launch that will have full on-chain governance, proposals that pass Phase 2 don’t need to continue to Phase 3. They are considered passed and will be executed when migrating from V1 to V2.

### **Phase 3: Governance Proposal**

**Timeframe:** 2 day waiting period, 7 day voting period

Proposal creation threshold: 2.5M bHERMES

**Quorum:** 12.5M bHERMES

**Form:** [TBD]

Phase 3 is the final step of the governance process. If this vote passes, then a change will be enacted on-chain.

To create an on-chain Governance Proposal:

1. Incorporate any last iterations to your proposal based on feedback prior to posting.
2. Create a topic in the [TBD] titled “POP - Governance Proposal — [Your Title Here]” and link to previous forum posts and the Partnering On-boarding Proposal Temperature Check Snapshot poll.
3. Create your proposal. This can be done either through an interface (on [TBD]) or through writing the calldata for more complicated proposal logic. This calldata will be executed if and when the proposal passes. If writing the calldata yourself, please review the logic with a qualified Hermes community member prior to posting the proposal.
4. Ensure that at least 2.5 million bHERMES is delegated to your address in order to submit a proposal, or find a delegate who has enough delegated bHERMES to meet the proposal threshold to propose on your behalf.
5. Once the proposal has been submitted (or the propose() function has been called), a two day voting delay will start. After the voting delay is finished, a seven day voting period begins. If the proposal passes successfully, the proposed code is executed.