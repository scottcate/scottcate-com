---
title: "#74 How to not automatically search for the currently selected word"
slug: "74-how-to-not-automatically-search-for-the-currently-selected-word"
category: "vstricks"
date: 2010-05-24T17:48:53-07:00
updated: 2012-11-20T18:34:00-07:00
description: "When you press [CTRL]+[F] for find, one of the nice features of Visual Studio is the context find that happens. The word/phrase that your cursor is currently on is forwarded to the &ldquo;Find What&rdquo; section of the dialog box. The thinking here is pretty simple, which is, you&rsquo;re probably "
wpId: 1008
---

When you press **\[CTRL\]+\[F\]** for find, one of the nice features of Visual Studio is the context find that happens. The word/phrase that your cursor is currently on is forwarded to the “Find What” section of the dialog box. The thinking here is pretty simple, which is, you’re probably going to search for another instance of the word/phrase you’re currently on. Well if you use **\[CTRL\]+\[F3\]** like in [VSTricks #070](/tricks/070/), you wouldn’t be doing that 🙂 VSTricks #074 is about **_not_** auto populating the current text in the “Find What” field. This video shows you how to turn it off, which is much nicer if you’re mainly wanting to do a custom search, or search again.

Go to the Tools – Options – Environment – Find and Replace, and uncheck the “Automatically populate Find What with text from the editor”.  Now, when you hit **\[CTRL\]+\[F\]** (Quick Find) or **\[CTRL\]+\[CHIFT\]+\[F\]** (Find in Files) or **\[CTRL\]+\[H\]** (Quick Replace), and so forth… the Find what combo field will not be auto populated with the current word or phrase.
