---
title: "Offline Is a Product Requirement, Not an Edge Case"
description: "If your users have inconsistent connectivity, offline behaviour is not a feature to add later. It decides who gets the good version of your product."
date: 2026-04-21
category: Technology
related_title: "Koki, on the Product page"
related_url: /product/#koki
---

A lot of software quietly assumes that the internet exists, and not theoretically but constantly. The app launches and immediately calls an API. The user moves to another screen and another request is made. Images come from a server. Search requires a connection. Authentication requires a connection. Saving requires a connection. Then the internet disappears and the product becomes a loading spinner.

If you are building for users in places where connectivity is inconsistent, expensive or simply not something people can take for granted, this is not an edge case. It is the environment.

I have thought about this a lot while building [Koki](https://kokiafrique.com/){:target="_blank" rel="noopener noreferrer"} and while thinking through Giiyo Learn. Koki is an African recipe application, and the product made me confront a fairly obvious question that is strangely easy to ignore when developing software: what happens when somebody wants to use the app and their internet is bad? A recipe is exactly the kind of information someone may need while standing somewhere with unreliable connectivity. The useful experience cannot be “please come back when the network feels better”.

Giiyo Learn makes the issue even clearer. If you are designing a learning platform for young people and schools, especially outside environments where every learner has permanent broadband, connectivity cannot sit underneath the product as an invisible assumption. The system has to be useful even when the network is unavailable, then use connectivity when it exists for things such as updates, publishing, backups or additional assistance.

This changes architecture. Offline support is not a button you add at the end. You have to decide what data lives locally, what gets cached, what needs to sync, how conflicts are handled and what the user sees when the latest version of something cannot be fetched.

It also changes product thinking. If your product breaks every time the internet becomes unreliable, you have not merely created a technical inconvenience. You have designed a product that works better for people with better infrastructure, and that is a product decision whether you intended it to be one or not.

This is one of the things I find frustrating about conversations around “building for Africa”. The discussion often becomes aesthetic very quickly: add local languages, use African imagery, support mobile money, make the branding feel familiar. Those things can matter, but some of the most important localisation decisions are much less visible.

They are decisions about whether the app consumes too much data, whether it assumes the latest phone, whether somebody can continue what they were doing when connectivity drops, whether a teacher can still use the learning material if the school's internet is down that morning, whether information can be downloaded once rather than fetched repeatedly, and what happens when a user moves between good and bad connectivity several times in one session. None of that is glamorous, but it determines whether the product actually belongs in the environment you claim to be building for.

Cameroon makes this particularly obvious because users do not all experience technology the same way. Someone using an application from central Douala on a good device and a strong connection may have a completely different experience from a student somewhere where bandwidth is inconsistent and devices are shared. Even within one city, the assumptions can break quickly.

That does not mean every African product needs to be fully offline. Some products genuinely cannot function that way. Real time financial applications, live communication tools and other services depend on connectivity for good reasons. The point is that the decision should be deliberate. “Online by default because that is how modern apps work” is not a strategy.

I think software engineers sometimes underestimate how political architecture can become, even when nobody is discussing politics. Technical decisions decide who gets the smooth experience and who gets the degraded one. A product that survives bad connectivity is not automatically a good product, but a product intended for users with inconsistent connectivity that never seriously considered offline behaviour has missed something fundamental.

I would rather treat connectivity the way we treat screen size. We do not assume every user owns the same phone, so we should stop assuming every user owns the same internet.
