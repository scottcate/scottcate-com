---
title: "Windows Phone: Working with MediaLibrary.GetPictureFromToken"
slug: "windows-phone-working-with-medialibrary-getpicturefromtoken"
category: "technology"
date: 2011-05-10T03:52:36-07:00
updated: 2012-11-20T18:39:54-07:00
description: "I struggled with this for a while, so I thought I would throw up a post, to help out people running into this is in the future. From MSDN: Here is the code sample you’re lead to, to use the Extras item in the photo hub. Add the Extras.xml file … 1: <?xml version=1.0 encoding=utf-8"
wpId: 283
---

I struggled with this for a while, so I thought I would throw up a post, to help out people running into this is in the future.

[From MSDN](http://msdn.microsoft.com/en-us/library/ff402546\(v=VS.92\).aspx): Here is the code sample you’re lead to, to use the Extras item in the photo hub.

Add the Extras.xml file …

```
   1: <?xml version=1.0 encoding=utf-8 ?>
```

```
   2: <Extras>
```

```
   3:   <PhotosExtrasApplication>
```

```
   4:     <Enabled>true</Enabled>
```

```
   5:   </PhotosExtrasApplication>
```

```
   6: </Extras>
```

and then use the OnNavigatedTo method.

```
   1: protected override void OnNavigatedTo(NavigationEventArgs e)
```

```
   2: {
```

```
   3:     //Gets a dictionary of query string keys and values
```

```
   4:     IDictionary<string, string> queryStrings = this.NavigationContext.QueryString;
```

```
   5:  
```

```
   6:  
```

```
   7:     //This code ensures that there is at least one key in the query string, and check if the "token" key is present.
```

```
   8:     if (queryStrings.ContainsKey("token"))
```

```
   9:     {
```

```
  10:         
```

```
  11:         //This code retrieves the picture from the local Zune Media Database using the token passed to the application.
```

```
  12:         MediaLibrary library = new MediaLibrary();
```

```
  13:         Picture picture = library.GetPictureFromToken(queryStrings["token"]);
```

```
  14:  
```

```
  15:         //Creates WriteableBitmap object and adds to the Image control Source property.
```

```
  16:         BitmapImage bitmap = new BitmapImage();
```

```
  17:         bitmap.SetSource(picture.GetImage());
```

```
  18:         WriteableBitmap picLibraryImage = new WriteableBitmap(bitmap);
```

```
  19:         retrievePic.Source = picLibraryImage;
```

```
  20:     }
```

```
  21: }
```

The problem is …. well there are a couple problems.

When you run this code (or when I ran it), I was getting an “An Unknown Exception has Occurred” error. Great – thanks for that. Inner Exception was null, so no help there. The error was happening on line 13, where the photo was trying to be fetched.

First. You can’t debug this. Because you can’t see pictures on your phone, while it’s connected to Zune, which it must be to have the debugger attached. So you unplug your phone, and then you can see your pictures, and the Extras in the application bar, but … if it fails you don’t know why.

Here are the steps I took, and then finally solved the problem.

First, I wrote the token (which is a GUID) to a text box. Once I knew the GUID, I could run the code outside of OnNavigatedTo, and then I noticed in the Quick Watch window that Library was instantiated, but had no photos, saved photos, genres, nothing. Everything was zero count. Then it hit me. The App Cap’s weren’t turned on.

# So the answer is …..

**Make sure you have the ID\_CAP\_MEDIALIB turned on in your WMAppManifest.xml file, like line 6 below.**

```
   1: <Capabilities>
```

```
   2:   <Capability Name="ID_CAP_LOCATION"/>
```

```
   3:   <Capability Name="ID_CAP_NETWORKING"/>
```

```
   4:   <Capability Name="ID_CAP_WEBBROWSERCOMPONENT"/>
```

```
   5:   <Capability Name="ID_CAP_GAMERSERVICES"/>
```

```
   6:   <Capability Name="ID_CAP_MEDIALIB"/>
```

```
   7: </Capabilities>
```
