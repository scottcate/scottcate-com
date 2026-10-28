---
title: "Silverlight of Yesterday&ndash;Saves me today!"
slug: "silverlight-of-yesterdaysaves-me-today"
category: "technology"
date: 2013-10-27T15:57:35-07:00
updated: 2013-10-28T10:10:41-07:00
description: "Silverlight is an awesome product. As Flash is awesome and it’s glory. Silverlight is nicer for me, as I think in C# v. Action Script. That said, at work, we use the Adobe plug in model for quite a bit, it’s just not something I am personally familiar with. I have always been a fan"
tags: ["silverlight", "webcam"]
wpId: 2151
---

Silverlight is an awesome product. As Flash is awesome and it’s glory. Silverlight is nicer for me, as I think in C# v. Action Script. That said, at work, we use the Adobe plug in model for quite a bit, it’s just not something I am personally familiar with.

I have always been a fan of screen casts, and over the last few years, I have been using the LoopLogic screen recorder. ON a few screen casts, I wanted to record my printer printing, using my Desktop web cam. So I started looking for a web site, that simple turned on my web cam. There are  lot out there, but that meant I had to show that website, inside my screen cast, just to show my camera.

And then I remembered …. Silverlight? I could write some C#, to turn on my web cam, and fill a canvas with my camera. I can even write it so that it’s out of browser, chromeless (no borders), and sizable. What? What? Yes, and it was easy.

With that I deployed what I call SilverCam. Uploaded the XAP file, and wrapped an html page around it, and that page is hosted here on [Windows Azure](http://scottcate.azurewebsites.net/cam.html). It’s PC and MAC compat, assuming you have the Silverlight plugin installed.

**UDPATE: Oct 28, 2013**

The Twitterverse has asked for this source code, so I uploaded the project to [GitHub](https://github.com/scottcate/SilverWebCam). Enjoy!
