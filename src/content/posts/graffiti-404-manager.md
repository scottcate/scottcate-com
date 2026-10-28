---
title: "Graffiti 404 Manager"
slug: "graffiti-404-manager"
category: "technology"
date: 2009-01-31T20:32:11-07:00
updated: 2012-11-20T18:44:27-07:00
description: "If you’ve been following my blog recently, you know I just switched from a mix of my old school home grown solution and the Microsoft ASP.NET welblogs to GraffitiCMS. One thing I started wondering was …. did I get all my traffic? This was pretty easy, because most of my old content is actually in"
wpId: 601
---

If you’ve been following my blog recently, you know I just switched from a mix of my old school home grown solution and the Microsoft ASP.NET welblogs to [GraffitiCMS](http://graffiticms.com).

One thing I started wondering was …. did I get all my traffic? This was pretty easy, because most of my old content is actually in a myKB.com knowledge base, found at [http://ScottCate.myKB.com](http://ScottCate.myKB.com). I decided to let the old posts live where they are, and just start a new blog here on ScottCate.com.

After reading: [MadProps.org Custom 404 Page for Graffiti](http://www.madprops.org/blog/a-custom-404-page-for-graffiti/), I was able to setup ASP.NET, IIS, and the 404 Post Page.

But still, what was I missing? Where is that 404 report? What resources are missing, to cause the 404 in the first place? I once sifted through IIS logs; but I am not doing that again?

Everyone is raving about how easy GraffitiCMS is to install, use, configure, and extend. So I decided to try it myself. And today I’m releasing a beta version to get some feedback.

This posts will cover these ordered topics.

1.  Download the 404 Manager
2.  Install the 404 Manager
3.  Create the 404 Post
4.  Create the 404 View template
5.  Setup ASP.NET to utilize the 404 Manager
6.  Setup IIS6 to utilize the 404 Manager
7.  Setup the 404Manager Widget to display the goods

## Step 1. Download the 404 Manager.

[https://scottcate.com/files/downloads/ScottCate.Graffiti.zip](/files/downloads/ScottCate.Graffiti.zip)

## Step 2. Install the 404 Manager.

This zip has a single ScottCate.Graffiti.dll file in it. This file needs to be uploaded to your /bin directory. You can do this in the Graffiti control panel under Site Options | Utilities | File Browser | bin | Add Files. Please note that you must unzip the downloaded zip file and extract the dll to your local machine. You want to upload the ScottCate.Graffiti.dll \*\*NOT\*\* the ScottCate.Graffiti.zip file. You’ll know if this doesn’t work, because the rest of these steps #4 will fail. The first two lines of the view, are dependant on this DLL file being in your bin directory. If you want to know right away if it worked, navigate to Presentation | Widgets, and you should see a **_ScottCate 404Widget_** in your list. Don’t do anything with this just yet, we’ll get to explaining it in Step 7.

## Step 3. Create the 404 Post.

Create a new post from GraffitiCMS control panel, Live Writer (my favorite) or any other way you do it. Create this post with a slug of 404. This will render the URL for your 404 page as /404/Default.aspx. This only by convention, it can still work no matter what you name the page, but I think 404 as a slug name is appropriate.

## Step 4. Create the 404 View file for rendering.

Here is my code for 404.View file. It uses my standard layout.view page (kind of like the default master page in Graffiti) so I just post a nice little message, and then display the results from my last 15 posts, and my 15 most popular posts. The view sets the 404 status code, so robots will know not to scan this page ([this trick was also found on MapProps.org](http://www.madprops.org/blog/does-your-404-404/)), and also logs the 404 URL into graffiti custom data.

Just so you feel comfortable, only unique entries are stored in the Graffiti custom object database, and each time the missing page is requested, a counter is increased, so we’re not using very much bandwidth from the database. You’ll see this in the final results.

```
   1: $SCProps.SetResponseStatusCode(404)
```

```
   2: $SC404.Log404URL()
```

```
   3:  
```

```
   4: <h1>$post.Title</h1>
```

```
   5: <p>$post.Body</p>
```

```
   6:  
```

```
   7: <h2>15 Most Popular Posts</h2>
```

```
   8: #foreach ($post in $data.PopularPosts(15))
```

```
   9: #beforeall
```

```
  10: <ul>
```

```
  11: #each
```

```
  12: <li class="links404"><a href="$post.Url">$post.Title</a></li>
```

```
  13: #afterall
```

```
  14: </ul>
```

```
  15: #end
```

```
  16:  
```

```
  17: <h2>15 Most Recent Posts</h2>
```

```
  18: #foreach ($post in $data.RecentPosts(15))
```

```
  19: #beforeall
```

```
  20:   <ul>
```

```
  21: #each
```

```
  22:     <li class="links404"><a href="$post.Url">$post.Title</a></li>
```

```
  23: #afterall
```

```
  24:   </ul>
```

```
  25: #end
```

## Step 5. Setup ASP.NET to utilize the 404 Post for 404’s

Add this line to your web.config inside the <system.web></system.web> node. Your customErrors node may have attributes that vary from mine, but what’s important here is the inner statusCode 404 node that points to your post page.

```
   1: <!-- Ignore customErrors attributes - yours may vary -->
```

```
   2: <customErrors mode="RemoteOnly" defaultRedirect="error.htm">
```

```
   3:     <error statusCode="404" redirect="/404/default.aspx" />
```

```
   4: </customErrors>
```

## Step 6. Setup IIS to utilize the 404 Post for 404’s

Changing the web.config will direct missing pages to your 404 page, \*\*IF\*\* the request was handled by ASP.NET. There are lots of requests handled by ASP.NET, and a lot that are not. If you request **_/Scott.aspx_**, and that page is not on your server, Step 5 has you covered. the request is processed by ASP.NET and the 404 redirect will kick in for you. BUT .. if you request /Scott without an extension (like all the post names on Graffiti) then IIS will show your tradition 404 page. Depending on your hosting, IIS, and operating system this technique will vary. If you’re in charge of it, you probably already know how to do it. If you’re hosting with a company, just open a support ticket, and have them setup IIS for you to show your custom 404 handler.

## Step 7. Setup the 404 Manager widget to display your 404’s

If you made it past Step 4, and your 404 page is working, you’re in good shape because the 404 Manager is already collecting data on your behalf. Now you want to be able to see what pages are missing, and what resources are being asked for that are causing 404’s on your site. That’s where the 404Manager widget comes in.

Log into the control panel and navigate to Presentation | Widgets and Select the **_ScottCate 404Manager_** from the (Configure Widgets) drop down list. Once this widget is added to the Configurable Widget Column, click edit. You will then be prompted with this form.

![image](/wp-content/uploads/2012/11/man1.png "image")

**_Widget Title:_** This is what the widget will render as the group header on your site.

**_Post ID of the 404 Page to Display:_** This is only used for clearing your 404 stats. This needs explanation. You know when you look at your Graffiti dashboard, there is a a stats record of your daily post views? There is also a report. You’ll be amazed at how often your dish out 404’s and now you have a post being displayed that will dramatically skew your reports. By supplying the Post ID of your 404 page here, when the Widget is displayed the stats for that Post ID will be cleared. To find your 404 Page Post ID, Edit the 404 post in the Control Panel, and you’ll see the Post ID in the query string of the URL.

**_Minimum number of hits before display:_** This defaults to 1, and you’ll have many more 404’s that you care about to see. I set mine to 5 or 10. The onesie twosies are probably typos and I don’t really care about them.

**_Clear Statistics for 404 Page Views:_** This is the On | Off (values are true or false) switch for clearing the 404 page view results. Originally these were both combined into a single field. If you supplied the Post ID, the stats were removed, but having a separated on|off switch means that in the future you won’t have to lookup the Post ID of your 404 page.

it’s important for you to know that **_THIS IS AN ADMIN ONLY WIDGET_**. Now that your widget is configured, add it to your Left or Right sidebar. Now the fun begins. Navigate back to you site, and watch the 404’s grow. I’m sure you have results to display, because you were originally setting up your 404 page with ASP.NET and IIS, and you tested it right? I wouldn’t be surprised if you already have more 404’s above the test pages you used.

Here is what the final result will look like. Obviously your CSS / Theme will dictate style, but as far as functionality, here is what you can expect to see.

![image](/wp-content/uploads/2012/11/man2.png "image")

The title, you supplied in the widget, and a link back to my blog, with tagged posts related to the 404 Manager. I figured this would be a nice way to let people ask quesitons and read FAQ’s about the Add-In / Widget.

Then a counter summary. Mine says showing 16 of 217 > 5 hits. 16 entries currently qualify for my > 5 hits, with 217 total entries.

And the meat of the widget is a list of the 404 entries. Each is preceded with a **_\[X,Y\]_** number couple. **_X_** = the number of hits, and **_Y_** = the number of referring sites that were tracked. This is a nice feature to show you where the traffic came from. The URL is truncated to be short enough to give you the gist of what the URL is. But if you click it, a simple JavaScript popup will show you what the full URL is. Here is a sample of the JavaScript popup.

![image](/wp-content/uploads/2012/11/man3.png "image")

Here is the xml structure that ends up being stored in the dbo.graffiti\_objectStore. (Click for larger view)

[![image](/wp-content/uploads/2012/11/man4.png "image")](/files/media/image/WindowsLiveWriter/Graffiti404Manager_7F42/image_2.png)

Which you can find with the following SQL Query

```
   1: SELECT * FROM [dbo].[graffiti_ObjectStore]
```

```
   2: WHERE [Type] = 'ScottCate.Graffiti.SC404Storage'
```

Enjoy!
