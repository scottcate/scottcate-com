---
title: "Windows Phone 7 App Rejected–Crashes when Offline"
slug: "windows-phone-7-app-rejected-crashes-when-offline"
category: "technology"
date: 2011-05-21T03:51:43-07:00
updated: 2012-11-20T18:39:49-07:00
description: "I wrote an application for the Windows Phone Marketplace, and it was rejected. I use the internal WebBrowser control, and I never tested it without the internet connection. Here is the hard part – the Emulator is always connected, there isn’t a way to turn it’s internet connection off (that I know o"
wpId: 280
---

I wrote an application for the Windows Phone Marketplace, and it was rejected. I use the internal WebBrowser control, and I never tested it without the internet connection. Here is the hard part – the Emulator is always connected, there isn’t a way to turn it’s internet connection off (that I know of).

So I tested it on my phone, in airplane mode, and sure enough, it crashes.

Here is some code from MSDN that I was able to use to do some checking if there was internet access.
