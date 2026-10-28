---
title: "Git Source Control: I Stopped using &ldquo;Origin&rdquo;"
slug: "git-source-control-stop-using-origin"
category: "technology"
date: 2013-10-30T21:10:37-07:00
updated: 2013-10-30T21:15:40-07:00
description: "I have source code all over the place. Over the years, I’ve used Microsoft Source Safe Source Gear Vault Subversion Mecurial and Git These days, a Git Repo is where all of my source code lives. Both for personal, and work, both for open source and private repos, and with all my Git Repos online,"
tags: ["bitbucket", "git", "github"]
wpId: 2191
---

I have source code all over the place. Over the years, I’ve used

-   Microsoft Source Safe
-   Source Gear Vault
-   Subversion
-   Mecurial
-   and Git

These days, a Git Repo is where all of my source code lives. Both for personal, and work, both for open source and private repos, and with all my Git Repos online, I’m split between Git Hub and BitBucket. Both have their pros and cons, but that’s another discussion. Every time you push or pull code, your command line needs an origin. All the samples on GitHub and BitBucket, and most books call this “origin” for lack of a better term. I have recently started renaming “origin” to “github” and “bitbucket” then when I’m pushing/pulling code, I know where it’s coming from or going to. You could argue that it doesn’t matter, it’s going external. That’s a valid point. I would argue back that tab+tab auto completes it for me so it’s the same keystrokes (assuming only one origin, which I think is most common). AND now I have mind share where the code is going, if I need to log into the admin panel.

Here is a couple of commands to clone or rename an existing repo using a destination name, instead of just origin.

-   git remote rename origin bitbucket

or

-   git remote rename origin github

and when you’re cloning an external repo, just replace origin with something more meaningful.

-   git remote add bitbucket [git@bitbucket.org:username/project.git](mailto:git@bitbucket.org:username/project.git)
-   git push –u bitbucket master
