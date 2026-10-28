---
title: "Building asp.net mvc Html helper for Display.Description Data Annotation"
slug: "building-asp-net-mvc-html-helper-for-display-description-data-annotation"
category: "technology"
date: 2013-01-06T20:16:22-07:00
updated: 2013-01-06T20:18:31-07:00
description: "I wanted to use the Data Attributes in asp.net MVC, for both a label, and a description. After finding out there isn’t a build in helper for Description, I searched and found an answer on StackOverflow. Using that starter knowledge, I (copy/paste/enhanced) this little helper … @Html.DisplayFor(m => "
wpId: 1924
---

I wanted to use the Data Attributes in asp.net MVC, for both a label, and a description. After finding out there isn’t a build in helper for Description, I searched and found an answer on [StackOverflow](http://stackoverflow.com/questions/6578495/how-do-i-display-the-displayattribute-description-attribute-value). Using that starter knowledge, I (copy/paste/enhanced) this little helper …

`    @Html.DisplayFor(m => m.PropertyName, cssClassName: "desc", "tagName: "div")    `

The sample code can be found in this github gist: [https://gist.github.com/4469809](https://gist.github.com/4469809)

Hat Tip: [Jakob Gade](http://stackoverflow.com/users/10932/jakob-gade)
