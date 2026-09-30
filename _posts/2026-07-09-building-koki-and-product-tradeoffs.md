---
title: "Building Koki Mostly Alone Changed How I Think About Product Work"
description: "When you are the engineer, designer, product person and QA team, every nice idea eventually has to compete with reality."
date: 2026-07-09
category: Building
related_title: "Koki, from idea to App Store and Play Store, on the Product page"
related_url: /product/#koki
---

There is a version of building a product alone that sounds very romantic. You have an idea, open your laptop, design it, code it, launch it and casually mention that you built the entire thing yourself. The reality is mostly making hundreds of decisions with nobody else available to blame.

[Koki](https://kokiafrique.com/){:target="_blank" rel="noopener noreferrer"} is a bilingual African recipe app that I built mostly independently and eventually launched on both iOS and Android. I worked across the React Native frontend, Supabase and Node.js backend, database architecture, UI/UX, testing, app releases and the website. That list makes the work sound mainly technical, but the harder part was deciding what deserved to exist.

When you work in a larger team, different kinds of constraints usually have people attached to them. Engineering can tell you that a feature is expensive. Design can tell you that an interaction is confusing. Product can argue that the feature is not important enough yet. QA can tell you that the thing everyone thought was finished is definitely not finished. When you are doing most of those jobs yourself, all of those arguments happen inside one brain, and that creates a strange problem because your own brain is very good at negotiating with itself.

You can convince yourself that a feature is essential because it would be fun to build. You can spend too much time polishing something users may barely notice. You can avoid an annoying bug because the new screen is more interesting. You can keep adding things before launch because every new idea feels easier than deciding that the current version is enough. There is nobody sitting beside you asking why this feature needs to exist right now, so building Koki forced me to ask that question myself, and much more often.

The product had real constraints from the beginning. It needed to support both English and French. Offline behaviour mattered. The content structure had to work for African recipes rather than simply copying assumptions from another recipe product. The interface needed to be clear without becoming heavy. Data architecture decisions affected what would be easy or painful later, and every decision touched something else.

That taught me something simple that I think is easy to forget: a product is not a collection of good ideas. It is a collection of decisions about which good ideas survive the constraints. There are always more things worth building than there is time to build them, and once I understood that more clearly, product work started to look less like coming up with features and more like deciding what not to do.

A feature can be useful and still be wrong for the current release. A design improvement can be worthwhile and still not deserve another week. A technically clever idea can be interesting and still have almost no effect on whether users get value from the product. Those decisions are uncomfortable because there is rarely a perfect answer, and you are usually working with incomplete information.

> A product is not a collection of good ideas. It is a collection of decisions about which good ideas survive the constraints.
{: .pull-quote aria-hidden="true"}

The relationship between product and engineering also became much clearer to me while building Koki. From the outside, people sometimes talk about those roles as if product decides what should exist and engineering simply builds it. Real products do not work that neatly.

Technical architecture changes what is cheap or expensive. Data models affect what becomes easy to support later. App Store and Play Store requirements affect what can actually ship. Performance affects user experience. Offline behaviour changes implementation decisions. A feature that sounds tiny in a conversation can require changes across several parts of the system.

The opposite is also true, because something can be technically easy and still be a bad product decision. That is why I became much more interested in tradeoffs. The useful question is often not whether something can be built. It is whether building it is the best use of time and complexity right now.

Koki also changed how I think about the word “done”. As a developer, it is easy to feel that something is done when the code works, but a product has a much more annoying definition of done.

Something can work perfectly on your machine and still fail on a real device. A screen can make perfect sense to you because you already know what it does. A flow can look complete until somebody loses internet access halfway through it. A release can be technically finished and still not be accepted by a platform. There is a large distance between “I built this” and “a person can reliably use this”, and crossing that distance is where a lot of product work lives.

Launching also changed the quality of the information I had. Before launch, many decisions remain theoretical. You can argue about what users might want, what they might understand and how they might behave. Once real people use the product, the conversation changes.

They ignore things you thought were important. They use features in ways you did not expect. They ask questions that suddenly make a design flaw obvious. They hit edge cases you never encountered during testing because you already know how the app is supposed to work. That feedback is not always pleasant, but it is much more useful than imagining the perfect user indefinitely.

Building Koki mostly alone did not convince me that products should be built by one person. It did the opposite, and made me appreciate how many different kinds of thinking a good product requires.

It also changed how I understand product ownership. Product ownership is not having the most ideas. It is being responsible for the choices that survive: what problem matters, what gets built now, what waits, what gets removed, what evidence changes your mind and when the product is good enough to ship. Those decisions are not separate from building the product. They are part of the product, and that is probably the biggest thing Koki taught me.

I still enjoy writing the code. I still care about engineering quality. But I am just as interested now in the work that happens before the code and around the code, because that is often where the difference between a working product and a useful product is decided.
