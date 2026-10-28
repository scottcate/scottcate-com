---
title: "#93 Use undo to jump the cursor back to the last insertion point"
slug: "93-use-undo-to-jump-the-cursor-back-to-the-last-insertion-point"
category: "vstricks"
date: 2012-02-19T11:01:38-07:00
updated: 2012-11-20T18:33:59-07:00
description: "In a previous tip, we learned more than we ever wanted to know about go-back markers. Insertion points are slightly different. They are similar to the go-back markers, but it is anywhere you click the mouse or jump the cursor to. The go-back marker 10 line rule doesn’t apply. To give it a try, just"
wpId: 856
---

In a previous tip, we learned more than we ever wanted to know about [go-back markers](http://blogs.msdn.com/saraford/archive/2007/09/19/did-you-know-how-to-navigate-forward-and-backwards-in-the-editor-all-because-of-go-back-markers.aspx).  Insertion points are slightly different.  They are similar to the go-back markers, but it is anywhere you click the mouse or jump the cursor to.  The go-back marker 10 line rule doesn’t apply.

[![Move caret command in the undo list](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.Howtouseundotojumpthecursorbacktothe_EA65/UndoInsertionPointMovements_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.Howtouseundotojumpthecursorbacktothe_EA65/UndoInsertionPointMovements_2.jpg)

To give it a try, just click somewhere, then click somewhere else (or do a find or a goto if you’re using the keyboard), then press undo.  You’ll move back to that previous location.

The option can be found at Tools – Options – Text Editor – General

[![Include Insertion Point Movements Tools Option](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.Howtouseundotojumpthecursorbacktothe_EA65/IncludeInsertionPointMovements_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.Howtouseundotojumpthecursorbacktothe_EA65/IncludeInsertionPointMovements_2.jpg)
