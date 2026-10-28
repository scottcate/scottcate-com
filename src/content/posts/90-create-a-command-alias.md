---
title: "#90 Create a command alias"
slug: "90-create-a-command-alias"
category: "vstricks"
date: 2012-02-19T10:40:13-07:00
updated: 2012-11-20T18:33:59-07:00
description: "To create an alias, open up the Command Window (or anywhere you can type in VS commands) and type in something along the lines of alias GobblesGobblesGobbles help.about and now running GobblesGobblesGobbles from the VS command window will pop up the Help About menu. I will award bonus points if you "
wpId: 868
---

To create an alias, open up the Command Window (or anywhere you can type in VS commands) and type in something along the lines of

_alias GobblesGobblesGobbles help.about_

[![Command Window creating aliases](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/CommandWindowGobbles_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/CommandWindowGobbles_2.jpg)

and now running GobblesGobblesGobbles from the VS command window will pop up the Help About menu.  I will award bonus points if you can figure out the Gobbles reference.  =)

But let’s explore a more practical application….

_alias se View.SolutionExplorer_

Now you can just type _se_ to jump to the solution explorer.  For this particular example, the idea is you can be typing in the editor, press Ctrl+/ to jump to that Find window that can act as a command window, and type in _se._

Actually, you’ve probably already used one of the predefined aliases before. Debug.Print is alias to ‘?’.  To see the full list of aliases, type in

_alias_

[![predefined aliases](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/CommandWindowAliases_thumb_1.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/CommandWindowAliases_4.jpg)

Lastly, to reset your command window aliases back to defaults, type in

_alias /reset_

[![Reset aliases warning prompt](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/resetCommandAliases_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtocreateacommandalias_EF40/resetCommandAliases_2.jpg)

or just simply use the /delete switch to delete a particular alias, like _alias se /delete._
