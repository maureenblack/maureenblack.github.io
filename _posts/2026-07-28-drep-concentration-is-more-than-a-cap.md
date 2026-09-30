---
title: "DRep Voting Power Concentration Is More Complicated Than “Cap the Big DReps”"
description: "A cap sounds like the obvious fix for concentrated DRep voting power. Without identity, it is easy to route around, and some concentration is legitimate choice."
date: 2026-07-28
category: Governance
related_title: "CPS-0033 and the review behind it, on the Product page"
related_url: /product/#problem-definition
---

When people hear that DRep voting power is becoming concentrated, one of the most obvious responses is to put a cap on it. I understand the instinct. If one representative has too much voting power, limit how much they can receive and the problem disappears. Unfortunately, Cardano governance does not become that simple just because the solution fits neatly into one sentence, and [CPS-0033](https://github.com/cardano-foundation/CIPs/blob/master/CPS-0033/README.md){:target="_blank" rel="noopener noreferrer"} exists partly because the problem is more interesting than that.

Cardano DReps receive voting power in proportion to the ada delegated to them. The current ledger rules do not impose an upper bound on how much stake can be delegated to one DRep credential. Research referenced in CPS-0033 found increasing concentration over the period studied, including a declining Nakamoto coefficient and an increasing Gini coefficient for DRep voting power.

So why not cap it? The first problem is identity. Suppose we say no DRep can hold more than a particular amount of voting power. Nothing currently stops the same person or organisation from creating several DRep credentials, and without some mechanism for knowing that those credentials belong to the same entity, the cap can become something participants route around instead of a real limit. CPS-0033 explicitly identifies multi credential circumvention as one of the vulnerabilities any solution needs to address.

The second problem is that concentration is not automatically bad. If thousands of ada holders independently choose the same representative because that DRep consistently votes, publishes strong rationales, communicates clearly and aligns with their preferences, some concentration is simply the result of people exercising choice.

The difficult question is not whether concentration exists but when it becomes unhealthy: when the system becomes dependent on too few representatives, when visibility becomes self reinforcing, and when smaller DReps stop participating because gaining meaningful delegation appears impossible. Those are harder questions than whether there should be a cap.

The interface matters too. If wallets and explorers continue making the largest DReps the easiest to discover, protocol level mechanisms may be fighting against the behaviour encouraged by the product layer. The [State of Governance Report](https://drive.google.com/file/d/1INAVHFd8MSvitdQ6oKzxqdyLqx-jhGGu/view){:target="_blank" rel="noopener noreferrer"} found that voting power concentration was increasing and also identified practical problems around governance tooling, information overload, accessibility and DRep discovery.

This is why I wanted CPS-0033 to remain a problem statement instead of pretending we already knew the answer. Possible approaches exist. Saturation mechanisms, metadata signals, wallet behaviour, incentives and delegation distribution ideas all deserve investigation, and CPS-0033 deliberately opens that investigation rather than declaring one of them the winner.

Cardano has an unusual governance architecture. There are DReps, SPOs and a Constitutional Committee, delegation exists, and identity is not currently a requirement for governance participation. That means we should not assume the solution used by another governance system can simply be copied. The interesting question is whether Cardano can manage unhealthy concentration without destroying legitimate stakeholder choice and without introducing a mechanism that is trivial to circumvent.

“Cap the big DReps” is an answer. I am much more interested in whether it is the right one.
