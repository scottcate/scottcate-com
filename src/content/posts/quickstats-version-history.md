---
title: "QuickStats Version History"
slug: "quickstats-version-history"
category: "technology"
date: 2011-08-14T03:39:28-07:00
updated: 2012-11-20T18:39:10-07:00
description: "Welcome to the QuickStats wiki! I’m @ScottCate and I created and am maintaining the QuickStats applications. Here I will write a few notes regarding the code for Quick Stats. Quick Stats is a sports reporting engine built on top of the FanFeedr API. The code is used for individual apps for each team"
wpId: 266
---

**Welcome to the QuickStats wiki!**

I’m @ScottCate and I created and am maintaining the QuickStats applications. Here I will write a few notes regarding the code for Quick Stats. Quick Stats is a sports reporting engine built on top of the FanFeedr API. The code is used for individual apps for each team in the following leagues: NBA, NFL, and NBA. In the futures, more leagues may be considered.

**Version History Follows (newest on top)**

* * *

**August 14, 2011** – I’m still waiting for FanFeedR to load the NFL preseason. Once this is done, I can test the app with live data. Today, as a test, i’m updating the MLB Arizona Diamondbacks. Currently the MLB League is set to not support Pre/Post seasons, so theoretically the app will only have minor layout differences. If this app runs, then I konw the new code is sound. You’ll know what version you have becuase post Version 1.3, the version number is supported in the top right of the home page of the application.

-   Minor UI: Made team name larger on welcome screen (edges off right side – no wrap)
-   Minor UI: Added ads tothe game pivot control, so there is a unique advert on each pivot page
-   System: Added league supprot for Preseason
-   System: Added league support for Postseason
-   System: Currently only NFL is set to post season true, so NFL teams are the ony that should be affected.
-   Minor UI: Change Version number (currently 1.4) to Hyperlink, linking to this page.

* * *

**August 6, 2011** – NFL season is almost here and people are asking about the preseason schedule. Today I added support to display the preseason schedule in the application, but there are a few things you should know. FanFeedr has a distinct API call for preseason data. This means the preseason games do not come back with the regular season games. Because it’s a second call, I didn’t want to automatically make the call because after preseason, this will hardly ever be used. So I created a flag on the league to support Pre and Post season calls. If this is supported (by the league), then the screen adds a button to manually load the pre and post season games. So for now, the NFL league has Preseason turned on, but there is no data coming back from the FanFeedr API. When this data becomes available for NFL, I’ll do some more testing, and release an update for all the NFL applications. And that will be the version 1.4 (Sometime in August 2011)

The software has an update to version 1.3 with several crashing bug fixes. As of version 1.3, the version number is displayed on the home screen, when you start the software, on the very top right. If you don’t see this version number, look for an update in your Windows Phone Marketplace.
