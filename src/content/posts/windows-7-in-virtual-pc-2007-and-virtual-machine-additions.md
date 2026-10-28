---
title: "Windows 7 In Virtual PC 2007 and Virtual Machine Additions"
slug: "windows-7-in-virtual-pc-2007-and-virtual-machine-additions"
category: "technology"
date: 2009-01-15T20:45:51-07:00
updated: 2012-11-20T18:45:23-07:00
description: "I just installed my 3rd version of Windows7 (this time into a VPC Image) and I remember hearing online that there was a problem with Win7 running in VirtualPC2007. Something about the Virtual Machine Additions causing a blue screen on startup. A quick search found this post, and in the comments I no"
wpId: 646
---

I just installed my 3rd version of Windows7 (this time into a VPC Image) and I remember hearing online that there was a problem with Win7 running in VirtualPC2007. Something about the Virtual Machine Additions causing a blue screen on startup.

A quick search [found this post](http://blogs.msdn.com/jmanning/archive/2009/01/08/windows-7-beta-in-virtual-pc-2007-bsod-in-fs-rec-sys-after-adding-vm-additions.aspx), and in the comments I noticed the solution.

[Update Virtual PC2007 to SP1](http://www.microsoft.com/downloads/details.aspx?FamilyId=28C97D22-6EB8-4A09-A7F7-F6C7A1F000B5&displaylang=en). I didn’t even know there was an SP1 for Virtual PC, and maybe you didn’t either. I was running 6.0.156.0 (the old version). Check your VPC Version (Help|About) and make sure you’re updated to 6.0.192.0, and the Virtual Machine Additions should load and run fine in your Windows 7 VPC.

![image](/wp-content/uploads/2012/11/virtual-pc.png "image")
