---
title: "WordPress ‘Press This’ BookMarklet 404 Solution"
slug: "wordpress-press-this-bookmarklet-404-solution"
category: "technology"
date: 2012-12-08T21:47:29-07:00
updated: 2012-12-08T21:48:55-07:00
description: "As you have heard (if you’re a reader) I’m new to WordPress. In the tools, there is a drag/drop bookmarklet that makes it easy to copy/paste from the site you’re reading, into a new blog post. When I tried the bookmarklet, my site was returning a 404 not found. After searching for the answer, not"
wpId: 1636
---

As you have heard (if you’re a reader) I’m new to WordPress. In the tools, there is a drag/drop bookmarklet that makes it easy to copy/paste from the site you’re reading, into a new blog post.

When I tried the bookmarklet, my site was returning a 404 not found. After searching for the answer, not only did I find/fix the problem (thanks to [qvprof](http://wordpress.org/support/profile/qvprof)) but I used it to create this post 🙂

> It has to do with the URI Encoding getting mixed up with the mod\_rewrite…
> 
> the part where it says **u=’+e(l.href)+’  
> **change it to **u=’+e(l.href.replace(/\\//g,’\\\\/’))+’**
> 
> [WordPress › Support » Press This 404 issue](http://wordpress.org/support/topic/press-this-404-issue).
