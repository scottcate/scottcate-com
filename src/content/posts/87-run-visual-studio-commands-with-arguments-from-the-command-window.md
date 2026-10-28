---
title: "#87 Run Visual Studio commands with arguments from the command window"
slug: "87-run-visual-studio-commands-with-arguments-from-the-command-window"
category: "vstricks"
date: 2012-02-19T10:19:57-07:00
updated: 2012-11-20T18:33:59-07:00
description: "After the past several weeks of Find tips (i knew i would have a few tips, just not nearly a month’s worth!), let’s change things up a bit and talk about the command window. Press Ctrl+Alt+A to open the command window. Check the keybinding for View.CommandWindow if your keybindings are different. Al"
wpId: 879
---

After the past several weeks of Find tips (i knew i would have a few tips, just not nearly a month’s worth!), let’s change things up a bit and talk about the command window.

Press Ctrl+Alt+A to open the command window.  Check the keybinding for View.CommandWindow if your keybindings are different.  Also available from the View – Other Windows – Command Window.  Now you can run various Visual Studio commands without having to go through the menus. 

Examples:

\>File.Open c:\\samples\\foo.txt  //Open a file without going through the menu.   
\>Help vs.commandwindow  //open a help topic directly  
\>? i  // get the contents of the variable i  
\>? i = 10  // set the contents of the variable i

View the following help topic for a [list of commonly-used commands that include arguments in VS 2005](http://msdn2.microsoft.com/en-us/library/c338aexd\(VS.80\).aspx).  Also available in [VS 2008 documentation](http://msdn2.microsoft.com/en-us/library/c338aexd\(VS.90\).aspx).

Auto-completion is also provided for both the commands and their corresponding arguments.

[![Command Window Auto-completion for commands](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtousethecommandwindow_F087/CommandWindowStatementCompletion_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtousethecommandwindow_F087/CommandWindowStatementCompletion_2.jpg)

You can also get auto-completion for arguments. 

[![Command Window Autocomplete for Arguments](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtousethecommandwindow_F087/CommandWindowAutocompleteArguments_thumb.jpg)](http://blogs.msdn.com/blogfiles/saraford/WindowsLiveWriter/Didyouknow.Howtousethecommandwindow_F087/CommandWindowAutocompleteArguments_2.jpg)
