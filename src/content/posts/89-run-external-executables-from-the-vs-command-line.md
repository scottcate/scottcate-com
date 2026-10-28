---
title: "#89 Run external executables from the VS command line"
slug: "89-run-external-executables-from-the-vs-command-line"
category: "vstricks"
date: 2012-02-19T10:35:03-07:00
updated: 2012-11-20T18:33:59-07:00
description: "The command Tools.Shell will run an external executable out of process from VS. To run, it is basically Shell <executable> But of course, we got optional arguments… Shell [/commandwindow] [/dir:folder] [/outputwindow] <executable> [/args] /commandwindow (or /c) – to display the executable’s output i"
wpId: 871
---

The command Tools.Shell will run an external executable out of process from VS.  To run, it is basically

Shell <executable>

But of course, we got optional arguments…

Shell \[/commandwindow\] \[/dir:folder\] \[/outputwindow\] <executable> \[/args\]

/commandwindow (or /c) – to display the executable’s output in the command window

/outputwindow (or /o) – to display the executable’s output in the output window

/dir:folder – specifics the working directory

For example,

Shell /o /c xcopy.exe c:\\users\\saraf\\documents\\cmdwinlog.txt c:\\users\\saraf\\pictures

will display the xcopy output in the output window.

[![output redirected to the output window](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.HowtorunexternalexecutablesfromtheVS_114DA/CommandWindowOutputWindowOutput_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Did.HowtorunexternalexecutablesfromtheVS_114DA/CommandWindowOutputWindowOutput_2.jpg)
