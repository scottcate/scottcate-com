---
title: "Screencast video hosting services compared"
slug: "screencast-video-hosting-services-compared"
category: "technology"
date: 2009-11-22T18:39:50-07:00
updated: 2012-11-20T18:42:21-07:00
description: "Running the Visual Studio Tips and Tricks video blog, I have a lot of screen casts to share. In order to do this, I need to host the videos somewhere. When you think video, first you think of YouTube, at least I do. But there are other options, that are also free, or close to"
wpId: 429
---

Running the Visual Studio Tips and Tricks video blog, I have a lot of screen casts to share. In order to do this, I need to host the videos somewhere. When you think video, first you think of YouTube, at least I do. But there are other options, that are also free, or close to free, and I’m trying them all (or as many as I can).

Because the Video Tips/Tricks are pretty bandwidth heavy, I’m looking for low cost video hosting options. Maybe there are others, but I’ve narrowed my hosting choices down to …

-   Silverlight Streaming
-   Amazon Cloud Front
-   YouTube
-   Vimeo.com
-   Screencast.com

You know, I say they’re bandwidth heavy, but let’s put that into perspective. The screen casts range in size from 5mb to 100mb. Today, in most parts of the world, that is no longer bandwidth heavy. An hour long HD movie can easily turn into Gigs and Gigs of space, so maybe I’m putting too much weight on my bandwidth constraints.

Currently all of my video blog video sources are hosted on both [Silverlight Streaming](http://silverlight.live.com/), and [Amazon Cloud Front](http://aws.amazon.com/cloudfront/). I’ve posted a few on YouTube, but until recently I couldn’t figure out the magic of HD on YouTube, so YouTube wasn’t originally an option. Now I’m kind of stuck, because the original content wasn’t recorded to the YouTube spec, and they just look crappy.

So Below, I’ll divide this post into two parts. First, a pro/con list of each of the services I’m considering, followed by an embedded player from the service, if there is one.

### Silverlight Streaming …

If I could have my way, I would change nothing. As I mentioned the video’s are currently being served from Silverlight Streaming. And while there is no termination date, [Microsoft has announced that the Silverlight Streaming services are not going to be around forever](http://bit.ly/5OwADu), and they’re recommending moving away from the service. Surprisingly (and confusing to me …) is that as of today (Nov, 2009) you can still sign up for a free account, with 10gig of storage space. I would think that if the service is going away, they would not be accepting new accounts. But, that’s another story …

### Amazon Cloud Front …

This really shouldn’t be in the list, but since it’s part of my current solution I’m throwing it out there. This is just a storage service. Nothing more. Could be [SkyDrive](http://bit.ly/4vnhVH), Box.net, or any Hosting company like [DiscountASP.net](http://bit.ly/4vmKLl). In several instances the Microsoft Silverlight Streaming services has been out of service, so I was throwing the video content up on the Amazon Cloud. The video player that I’m using is a custom Silverlight player, and the only thing I really need is a URL to the WMV file. So in reality, I don’t even need a video hosting solution, just a hosting solution. The problem with the hosting is that it usually comes along with a pay for usage. I’m not against paying for bandwidth, but if there are better services, I’m up for not paying as well 🙂

### Vimeo …

Also, Vimeo is a contender. I’ve paid the $60/annual for their premium account, but Vimeo re-encodes the video content and it just doesn’t have the clarity of the original screen capture. You’ll see in the content comparison below, that the quality is MUCH better than event the YouTube HD, but it’s still not close to the original recoding. If I was not recording screen captures, I think Vimeo would be my winner because of the quality. But because my video content is almost always under 100mb in size, I’m looking for perfect quality, which Video doesn’t give me since it goes through a magical re-encoding process.

### YouTube …

My biggest problem with YouTube is the pre-production that needs to be done. I really have to jump through hoops to get the content recorded properly, so that after the video is uploaded, it can be rendered in HD. In order to embed the video on my site, I’ve decided that the perfect content size is 900X480. This video size is not conducive to HD playback. I don’t care about the size, this isn’t going to DVD or ever mean to be played on a television. It’s meant to be played on ScottCate.com. Now, the argument could be made that YouTube has enough traffic that I should bend over backwards to get the content uploaded. The argument goes … maybe it would be worth the extra troubles just to get a YouTube channel. So if I chose YouTube, I’m still stuck with looking for a solution for the original content I have, that isn’t YouTube render friendly. YouTube also has not-so-easy sizing options. If I want to play the video back at a certain size, I can’t, unless it lines up with the players they choose. I’m sure this could be hacked, but I don’t wanna think that much about it, just work for me please!

### TechSmith Screencast.com …

I record all the content using [Camtasia from TechSmith.com](http://bit.ly/7YgVQl). They offer a nice solution of hosting the video output on [ScreenCast.com](http://bit.ly/5EKdFN). The premium service is $99 a year, which is well within my “Cheap enough for blogging” price point. A nice part of ScreenCast.com is that there are output options baked into the Camtasia product to upload the final product. In fairness, the product has uploads built for other services, and FTP, and I even think they can be customized to any service. Also, [ScreenCast.com](http://bit.ly/5EKdFN) doesn’t re-encode the uploaded content, it just streams it out.

### And the winner is …

[Screencast.com](http://bit.ly/4vmKLl)! After typing all this, and thinking about my real problem, I’ve realized that what I need isn’t a video hosting solution to save on bandwidth costs. What I really need is a hosting service that doesn’t re-encode the content that I upload. With that, all I really need is any old hosting service right? But, once you couple the convenience of the upload being built into [Camtasia](http://bit.ly/7YgVQl), the service becomes my winner and is a perfect solution for Screencasts.

Below is the same video uploaded to three services, Screencast.com, Vimeo, and YouTube. You tell me the quality difference. Keep in mind that my goal is to play the content back at full size, 900X480, or as close as the player will let me.

### ScreenCast.com …

_(A legacy Flash/Windows Media embed was here and is no longer playable.)_

### YouTube …

<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/o66R-KRrh_c" title="YouTube video" loading="lazy" allowfullscreen></iframe></div>

### Vimeo …

_(A legacy Flash/Windows Media embed was here and is no longer playable.)_
