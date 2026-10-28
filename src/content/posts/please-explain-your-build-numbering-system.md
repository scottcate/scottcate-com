---
title: "Please explain your build numbering system"
slug: "please-explain-your-build-numbering-system"
category: "technology"
date: 2009-02-10T20:30:03-07:00
updated: 2012-11-20T18:43:56-07:00
description: "Build numbers are tricky. Just a set of digits, that we all try so hard to make more valuable than 1.0.0.0, which isn&rsquo;t helpful at all. Our build servers build. That&rsquo;s all they do is build. Well I guess they also package. It&rsquo;s nice to know that the packages are without having to th"
wpId: 594
---

Build numbers are tricky. Just a set of digits, that we all try so hard to make more valuable than 1.0.0.0, which isn’t helpful at all. Our build servers build. That’s all they do is build. Well I guess they also package.

It’s nice to know that the packages are without having to think to hard about it, so here is the build numbering system we came up with. (Notice the dots at EOL).

\[Major\].

\[4 DigitYear\].

\[Minor\]\[WeekNumber(zero srtart)\]  
\[DayofWeekNumber1=Monday\].

\[24Hour\]\[Minute(zero start)\]

A the final build number of looks like this …

-   **_1.2009.30402.1010_**

 Which interprets as …

-   **_Version 1.3_**
-   **_Built on Tuesday = 02_**
-   **_During the fourth week = 04_**
-   **_2009_**
-   **_10:10 AM_**

With many product builds, building all day long, and so many versions in the wild, I can look at an assembly version number (that match this) from last year, on a product that I may not be familiar with, and immediately know everything I need to know about it’s original and life span. It’s also very easy in my head to know if there is a newer version.

This is all the information we need from the build number, and it’s nice and sortable in the file system.

We prefixed the MMDD with a Minor build number, because when the week is < 10, the 0 is truncated, which breaks the sort.

Do you have another build number idea?

This work is licensed under a [Creative Commons license.](http://creativecommons.org/licenses/by/3.0/)
