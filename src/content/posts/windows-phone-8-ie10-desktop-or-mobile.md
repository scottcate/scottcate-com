---
title: "Windows Phone 8: IE10 Desktop or Mobile"
slug: "windows-phone-8-ie10-desktop-or-mobile"
category: "technology"
date: 2012-12-19T16:04:00-07:00
updated: 2012-12-20T00:24:59-07:00
description: "Windows Phone 8 has a very nice version of Internet Explorer v10 built in, and does an amazing job with HTML5, video, pinch/zoom, tabs, pinned tiles, and a bunch of other great features. One nice feature is that under Settings, you can tell IE10 on Windows Phone 8, to pretend to be the full desktop"
tags: ["winphone"]
image:
  src: "/wp-content/uploads/2012/12/thumb_500_True_FF000015.jpg"
  alt: ""
wpId: 1742
---

Windows Phone 8 has a very nice version of Internet Explorer v10 built in, and does an amazing job with HTML5, video, pinch/zoom, tabs, pinned tiles, and a bunch of other great features. One nice feature is that under Settings, you can tell IE10 on Windows Phone 8, to pretend to be the full desktop version of IE10. This is done simply by switching a user agent for every request.

This video shows ([using Fiddler as a reverse proxy](/technology/windows-phone-reverse-proxy-with-fiddler/ "Windows Phone: Reverse Proxy with Fiddler")) exactly what happens to the user agent when you switch between Mobile and Desktop mode.

**Mobile User Agent:** (Notice the IEMobile/10.0)  
Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)

**Desktop:** (Notice the WPDesktop)  
Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)
