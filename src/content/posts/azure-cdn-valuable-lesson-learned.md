---
title: "Azure CDN: A Valuable Lesson Learned"
slug: "azure-cdn-valuable-lesson-learned"
category: "technology"
date: 2013-10-22T09:25:54-07:00
updated: 2013-10-22T09:27:06-07:00
description: "On October 21st around 6pm Pacific time, our Azure CDN was gone! It came back a few hours later, but I started digging into a solution that would help mitigate this in the future (this post). Instead of the CDN serving content, it was serving 400’s (Bad Request). When something like this happens, we"
tags: ["azure", "cdn"]
wpId: 2091
---

On October 21st around 6pm Pacific time, our Azure CDN was gone! It came back a few hours later, but I started digging into a solution that would help mitigate this in the future (this post). Instead of the CDN serving content, it was serving 400’s (Bad Request). When something like this happens, we call it an outage, though that isn’t always the case. There are millions of dependencies in Technology, and if Just one breaks, it can have catastrophic down line damages. So our goal in Cloud and Scalable software is to allow for failure, understand where/when it can happen to the best of our ability, and make backup, fallback routines to handle that failure. These could be automated, or manual, but the more you have in place, the faster your app will come back online when a failure happens. Notice I said when, not if. Plan for failure sooner than later, and you’ll be better prepared.

Technical folks, can skip to [Technical Problem and Solution](#technical)

What could make our CDN just go away? More on that later. How to solve the problem. We put our thinking caps on and …. come up with a solution.

> Hey – Azure CDN is just a front end to raw storage anyway – let’s just serve the raw storage!

### Some Non-Technical Background

Perfect idea! Azure CDN and all CDN’s generally just put a networking layer with DNS and storage magic over the raw storage. These two urls point to the same item, one is DNS magic with CDN Juice, and the other is the actual file being stored.

-   [http://az1234567.vo.msecnd.net/](http://az1234567.vo.msecnd.net/) (Fake CDN URL)
-   [http://yourstorage.blob.core.windows.net/](http://yourstorage.blob.core.windows.net/) (Fake Storage account URL)

Any file you place is a public folder in your storage account, say /myimages/home.jpg could be accessed like this (again fake URL’s)

-   [http://az1234567.vo.msecnd.net/myimages/home.jpg](http://az1234567.vo.msecnd.net/myimages/home.jpg)
-   [http://yourstorage.blob.core.windows.net/myimages/home.jpg](http://yourstorage.blob.core.windows.net/myimages/home.jpg)

When the CDN URL is called, it kicks in, pulls the image to an edge node, serves the image, and life is good. UNLESS the CDN is not alive, then instead you get a 400 – Bad Request. Now that you have a general understanding we move on to the …

 

### Technical Problem and Solution

When our application uploads an image, we upload into a Model, that is serialized with all the relevant data. Then later we can later retrieve the image that was uploaded. A partial look at that model reveals these data parts.

-   Uri
-   Path
-   FileName
-   Owner
-   Version
-   Date
-   And a bunch of other stuff.

What we want to focus on is the Uri. And here is where I think we …

-   made a mistake
-   will learn from
-   will adopt a new pattern
-   And is the reason I’m writing this blog post, to hopefully help others.

The fact is … there isn’t just one Uri, there are many. Today, we are storing the fully qualified CDN Uri. ( [http://az1234567.vo.msecnd.net/myimages/home.jpg](http://az1234567.vo.msecnd.net/myimages/home.jpg) in our example). BUT we could also get that image from the raw storage, or what if the CDN changes, and next week it’s [http://az77777777.vo.msecnd.net/myimages/home.jpg](http://az77777777.vo.msecnd.net/myimages/home.jpg) ? Instead, we should be storing the relative path of just /myimages/home.jpg, and then coupling that together with a root asset Uri that can be read in at runtime. Then we are not locked into, or storing (what might invalidate in the future) a hard coded Uri.

This luxury and art of Run Time Configuration is easy, and done a million ways.

### Bottom Line – Technical Lesson Learned

Don’t store, or rely on a hardcoded URL, that has the ability to change in the future. Instead break apart the relative path, and unite the core path to deliver a Uri on demand. Having this flexibility in configuration, means that CDN endpoints can change on a dime, and your app can start delivering valid URL’s as soon as you can update configuration, which is a lot faster than writing new code!

I hope this helps.
