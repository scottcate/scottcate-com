---
title: "#81 Replace in all files (With Undo Support)"
slug: "81-replace-in-all-files-with-undo-support"
category: "vstricks"
date: 2010-08-03T17:20:01-07:00
updated: 2012-11-20T18:33:59-07:00
description: "Global search/replace can be tricky. Often times you&rsquo;ll end up replacing something that you didn&rsquo;t realize was going to be replaced. Having an undo feature is vey helpful. This video shows you the ins and outs, of Find/Replace in all files. Just like Ctrl+H does a Quick Replace, Ctrl+Shi"
wpId: 903
---

Global search/replace can be tricky. Often times you’ll end up replacing something that you didn’t realize was going to be replaced. Having an undo feature is vey helpful. This video shows you the ins and outs, of Find/Replace in all files.

Just like Ctrl+H does a Quick Replace, Ctrl+Shift+H will bring up the Replace in Files window.  We’ve seen all these options over the past 2 weeks, but there’s just one more now that has become enabled.

**“Keep modified files open after Replace All”**

Obviously, if you check this option, all modified files will be opened in the editor.  The significance of this is that you can do an undo, if you change your mind. If you don’t have this option checked, we’ll prompt you "are you sure you don’t want to do an undo?" After you commit the Replace all with the files opened, if you decide to do an undo, just simply press Ctrl+Z on one of the newly modified / opened files.  You’ll notice that all open files will have the dirty bit \* removed, reverting to their previous contents.
