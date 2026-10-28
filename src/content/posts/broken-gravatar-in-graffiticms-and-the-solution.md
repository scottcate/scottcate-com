---
title: "Broken Gravatar in GraffitiCMS and the Solution"
slug: "broken-gravatar-in-graffiticms-and-the-solution"
category: "technology"
date: 2009-01-29T20:39:18-07:00
updated: 2012-11-20T18:44:45-07:00
description: "Somewhere along the path of setting up my blog using GraffitiCMS, I found that you can enable gravatars in the comments. The sample code I picked up looked like this. $macros.gravatar($comment.Email, $comment.Username, $comment.IPAddress, \"%{size =’60’}\") and it was working great for me until today."
wpId: 622
---

Somewhere along the path of setting up my blog using GraffitiCMS, I found that you can enable [gravatars](http://en.gravatar.com/) in the comments. The sample code I picked up looked like this.

```
$macros.gravatar($comment.Email, $comment.Username, $comment.IPAddress, "%{size ='60'}")
```

and it was working great for me until today.

I knew [Rory](http://rorybecker.blogspot.com/) had a gravatar setup, but it wasn’t rendering. He suggested (on twitter) that I wasn’t asking for his gravatar with a lower case email, which I wasn’t. A quick script change (adding ToLower()) to the code above fixed the solution.

```
$macros.gravatar($comment.Email.ToLower(), $comment.Username, $comment.IPAddress, "%{size ='60'}")
```

Lesson 1: Gravatar’s require lower case emails.

Lesson 2: Graffiti Chalk allows for string calls inside the $() methods, like the ToLower() call. While I didn’t try the others, I imagine that ToUpper(), SubString() and others will work just fine.
