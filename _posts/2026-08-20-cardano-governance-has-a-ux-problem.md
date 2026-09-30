---
title: "Cardano Governance Has a UX Problem Too"
description: "Delegators do not experience governance as a constitutional diagram. They experience wallets and DRep explorers, and those interfaces shape who gets chosen."
date: 2026-08-20
category: Governance
related_title: "CPS-0033 and the review behind it, on the Product page"
related_url: /product/#problem-definition
---

When people talk about blockchain governance, the conversation tends to become constitutional or technical very quickly. It turns to who can vote, what threshold applies, which governance body has authority and what the ledger permits. Those questions matter.

But the person delegating their voting power does not experience governance as a constitutional diagram. They experience a wallet, a DRep directory, a proposal page and whatever information the interface decides to put in front of them. That is why governance has a UX problem too.

Cardano's governance model gives DReps voting power based on the ada delegated to them, while DReps, SPOs and the Constitutional Committee participate in different parts of the decision making process. For that system to work well, delegators need to make meaningful choices, and that is where the interface becomes political in the small p sense of the word. It shapes what people notice.

[CPS-0033](https://github.com/cardano-foundation/CIPs/blob/master/CPS-0033/README.md){:target="_blank" rel="noopener noreferrer"} gives one very simple example. Imagine a DRep explorer that sorts representatives by voting power by default. The largest DReps appear first, so they receive more visibility precisely because they already have more delegation. A user with limited time selects somebody near the top, and their delegation then reinforces the ranking that helped them make the choice in the first place. No protocol rule told the user to choose a large DRep. The interface nudged the behaviour.

This is why I do not think Cardano can treat wallet and explorer design as something separate from governance design. If we want delegators to choose representatives based on things such as voting history, rationale quality, philosophy, activity or alignment, those things need to be easy to find.

The [State of Governance work](https://drive.google.com/file/d/1INAVHFd8MSvitdQ6oKzxqdyLqx-jhGGu/view){:target="_blank" rel="noopener noreferrer"} surfaced the same broader problem: fragmented tools, information overload, accessibility barriers and difficulties around DRep discovery make participation harder than it needs to be. A governance system can have excellent formal rules and still produce poor participation because the user experience is exhausting.

Cardano has done the difficult work of building governance into the protocol. Now we need to treat the human interface with the same seriousness.
