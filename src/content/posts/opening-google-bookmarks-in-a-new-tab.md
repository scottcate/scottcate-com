---
title: "Opening Google Bookmarks in a New Tab"
slug: "opening-google-bookmarks-in-a-new-tab"
category: "technology"
date: 2012-12-05T16:56:26-07:00
description: "i’m sure this can be done a million ways … but I just found a pattern that I consistently … Open New Tab Then Click Bookmark Instead, it would be nice to just open the bookmark in a new tab window. To encode/decode URL’s, I use this site a lot. http://meyerweb.com/eric/tools/dencoder so I have it bo"
wpId: 1598
---

i’m sure this can be done a million ways … but I just found a pattern that I consistently …

-   Open New Tab
-   Then Click Bookmark

Instead, it would be nice to just open the bookmark in a new tab window.

To encode/decode URL’s, I use this site a lot. [http://meyerweb.com/eric/tools/dencoder](http://meyerweb.com/eric/tools/dencoder/) so I have it bookmarked.

There are two tips/tricks to use, which will both open bookmarks in a new tab.

1.  CTRL+Click it (Works on Windows and Mac) – opens the shortcut in a new tab.
2.  Edit the bookmark target, with this javascript, and everytime, it’ll open in a new tab.  
    javascript:( function(){ window.open(‘http://meyerweb.com/eric/tools/dencoder/’); } )();

Thanks to my buddy [Jonathan Kressaty](http://vuurr.com/author/kressaty/) for the javascript snippet.
