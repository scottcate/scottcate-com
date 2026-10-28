---
title: "#83 Search from the command line"
slug: "83-search-from-the-command-line"
category: "vstricks"
date: 2010-08-23T17:17:40-07:00
updated: 2012-11-20T18:33:59-07:00
description: "Did you know Visual Studio has a Command mode? This isn’t cmd.exe – but it’s virutally the same concept, inside of visual studio. This command window will let you type commands for virtually any command in Visual Studio. This video will show you how to search from the Command Line. Additional Comman"
wpId: 896
---

Did you know Visual Studio has a Command mode? This isn’t cmd.exe – but it’s virutally the same concept, inside of visual studio. This command window will let you type commands for virtually any command in Visual Studio. This video will show you how to search from the Command Line.

**Additional Command Line options:**  
Edit.Find /options – Shows which options are currently set  
Edit.Find /reset – clears all options

**Some examples:**  
Edit.Find MainForm /case / proc (Quick Find, match case, in current procedure – )  
Edit.Find MainForm /o /m /u /h /l (Quick Find, open documents, match whole word, mark matches, search up, search hidden)  
Edit.Replace /doc /all (Quick Replace, replace all, current document)  
Edit.FindInFiles btnCancel /lookin:"c:\\users\\saraf\\documents\\visual studio 2008\\projects\\vb samples" /ext:\*.vb /text2 (Find In Files, look in the VB Samples folder with files of .vb extension, and show results in Find Results 2 Window)
