---
title: "I Learned More About Software by Shipping Than by Studying It"
description: "Tutorials teach you how to make something work. Shipping Koki taught me how much harder it is to make something keep working."
date: 2026-08-11
category: Technology
related_title: "Koki, on the Product page"
related_url: /product/#koki
---

There is a stage of learning software development where everything feels wonderfully controlled. You follow a tutorial, the instructor already knows the architecture, the database behaves, the API response looks exactly like the example, and the user is usually you. Then you ship something.

Real software is rude. Users click things in orders you did not expect. Internet connections disappear. Data arrives in forms you did not plan for. A platform rejects your release. Something that worked yesterday breaks because another part of the system changed.

This is not an argument against studying. I learned to code by learning the fundamentals, practising and spending a lot of time understanding how things work, and good engineering absolutely requires knowledge. But shipping changed the kind of knowledge I valued. Before shipping products, I was much more interested in whether I could make something work. After shipping products, I became much more interested in whether I could make something keep working, and those are very different problems.

Building [Koki](https://kokiafrique.com/){:target="_blank" rel="noopener noreferrer"} made that difference particularly obvious. The app had to work across iOS and Android. It needed a real backend, real data, offline behaviour, bilingual content, releases and actual people using it outside the conditions in which I built it. There is no tutorial moment where someone says, “Now a user will do something you did not imagine.” They simply do it.

Shipping also changed my relationship with technical elegance. As developers, we can spend enormous amounts of time discussing the cleanest architecture for a system that has not yet survived contact with users. Sometimes that work is important, and sometimes you are polishing the foundations of a building nobody has moved into.

Production teaches you which technical problems are real. Performance suddenly matters because somebody is waiting. Error handling matters because nobody is standing next to the user explaining what went wrong. Logs matter because the bug happened on somebody else's device. Database decisions matter because you now have data you cannot casually reset. Backwards compatibility matters because people are still running an older version. The software stops being an exercise and starts having consequences.

I think this is also why I became less impressed by complicated code over time. Complexity is expensive once you own it. Every clever abstraction is something somebody may need to understand later, every dependency can change and every service can fail. The best solution is not always the technically most interesting solution. Often it is the solution you can understand six months later when something breaks at the worst possible time.

Shipping also teaches humility very efficiently. There is nothing quite like spending hours perfecting something users barely notice while discovering that the tiny thing you considered obvious is confusing everyone. Real users reorder your priorities.

That is one of the reasons I think learning software through projects matters so much. I do not mean toy projects that reproduce exactly what a tutorial built. I mean things somebody actually expects to use. Even a small real project introduces ambiguity: someone has to decide what the requirement means, something changes, a deadline appears and a person misunderstands the interface. Those experiences are part of engineering too.

The syntax, the frameworks and the theory all matter. But software only becomes truly interesting when another human being starts depending on what you built.
