---
title: "The Hard Part of a Problem Statement Is Refusing to Solve It Too Soon"
description: "What writing CPS-0033 taught me about scope, assumptions and why good product work starts before the roadmap."
date: 2026-09-30
category: Product
related_title: "CPS-0033 and the review behind it, on the Product page"
related_url: /product/#problem-definition
---

I like solutions. That is probably an occupational hazard of being a software engineer. When someone describes a problem, my brain immediately starts thinking about what could be built, changed or automated to fix it. That instinct is useful when it is time to make something. It is less useful when you are still trying to understand what the problem actually is, and working on CPS-0033 made that distinction much clearer to me.

[CPS-0033](https://github.com/cardano-foundation/CIPs/blob/master/CPS-0033/README.md){:target="_blank" rel="noopener noreferrer"} is a Cardano Problem Statement about DRep voting power concentration. The concern itself was not difficult to find. People in the ecosystem could see concentration happening, and there were already discussions around delegation behaviour, incentives, wallets, metadata, visibility and the mechanics that influence how people choose representatives.

There was no shortage of opinions about what should change, and that was part of the problem. When people care about an issue, they usually arrive with solutions attached. One person thinks the answer is a protocol change. Another thinks wallets should behave differently. Someone else believes the problem is information. Another person thinks incentives are wrong. All of those ideas might be worth discussing later, but if you put one of them inside the problem statement too early, you quietly decide the direction of the solution before the problem has been properly defined. That sounds like a small distinction until you try to write a document that other people need to review and act on.

If I write that voting power concentration should be solved by placing a limit on delegation, I am no longer simply describing the problem. I have already chosen a mechanism. If I say wallets should promote smaller DReps, I have done the same thing. The wording may still sound like analysis, but it already contains a preferred answer, and a useful problem statement has to resist that temptation.

Our work on CPS-0033 went through a [29 commit public GitHub review cycle](https://github.com/cardano-foundation/CIPs/pull/1211){:target="_blank" rel="noopener noreferrer"}. That process included editor feedback, changes to scope, technical reframing, structural revisions, references, Markdown and repeated discussion about what belonged in the statement and what did not.

Some of the most useful changes made the document narrower rather than broader. That surprised me at first because there is a natural instinct to make an important document comprehensive. You want to include every relevant issue so nobody can say something was ignored. The problem is that a document that tries to contain every surrounding concern can quickly stop being useful. If a problem statement becomes an inventory of everything that is wrong with a system, it becomes much harder for anyone to understand what should actually be investigated.

Working through the review process made me appreciate scope in a different way. Scope is not just an administrative boundary. It is part of the thinking.

A good scope forces you to become precise about what you are talking about. In product work, saying “users are struggling with onboarding” may be true, but it is not enough to make a good decision. You need to understand where they stop, what they misunderstand, which users are affected and what conditions are producing the behaviour. The more specific the problem becomes, the easier it is to investigate and eventually decide whether it is worth solving.

> Scope is not just an administrative boundary. It is part of the thinking.
{: .pull-quote aria-hidden="true"}

The same thing happened with stakeholder input. The work around CPS-0033 grew from governance research, stakeholder interviews, workshops and wider ecosystem discussion. People did not arrive with neatly separated observations and evidence. They arrived with concerns, explanations, suggested fixes, assumptions and personal experiences all mixed together, which is normal.

The job is not to copy those opinions into a document and call it synthesis. The useful part is working out which concerns are describing the same underlying issue, which ones belong somewhere else, where the evidence is strong and where people are filling gaps with assumptions. That process is one of the reasons I have become increasingly interested in product work.

People often focus on the visible parts of product development, such as what gets built, what gets prioritised and what makes it onto a roadmap. But a large amount of product quality is determined much earlier. Before deciding what to build, you need to understand what problem you are actually dealing with, who is experiencing it, what evidence supports it and which assumptions are being made. You also need to understand the constraints around the problem and be disciplined about what does not belong in the scope. If that foundation is weak, a very good engineering team can still spend months building something beautifully that does not solve the right problem.

Public review also changed the way I think about writing. A document sitting on your own computer can feel very clear because your brain automatically fills in everything that is missing. Once the document is public, other people do not have that context. They can question the meaning of a sentence, ask why a piece of evidence is included, challenge an assumption or point out that something you thought was obvious is not obvious at all. That can be uncomfortable, but it is useful.

One of the easiest traps when receiving feedback is to assume that the reader simply misunderstood what you meant. Sometimes they did. But if an informed reader misunderstands the document, there is still a good chance the document could be clearer.

That does not mean accepting every comment. Public review is not a vote on every sentence. It does mean being willing to separate your attachment to what you wrote from the actual usefulness of the document. I think that is also part of good product work. The goal is not to defend the first version of your thinking. The goal is to improve the quality of the decision that comes afterwards.

As a builder, I still like moving towards solutions quickly. I like the moment when an idea stops being theoretical and becomes something real enough to use. I do not think every problem needs months of research before anyone can act, but I have much more respect now for the stage before building.

Sometimes the most useful thing you can do is spend a little longer making the problem smaller, clearer and more honest. Challenge the assumptions around it. Work out what the evidence actually supports. Remove the things that do not belong. Make sure the people discussing the issue are actually discussing the same issue, and then build.
