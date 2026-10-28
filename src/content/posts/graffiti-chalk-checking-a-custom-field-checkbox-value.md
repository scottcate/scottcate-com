---
title: "Graffiti Chalk – Checking a Custom Field CheckBox Value"
slug: "graffiti-chalk-checking-a-custom-field-checkbox-value"
category: "technology"
date: 2009-01-08T20:52:22-07:00
updated: 2012-11-20T18:46:06-07:00
description: "If you create a custom field in GraffitiCMS &ndash; can can use chalk to check if the field is turned on or not with the following chalk code snippet 1: #if($post.Custom(\"fieldNameCheckBox\") == \"on\") 2: <div style=\"padding-top:10px;\"> 3: Write something here when checkbox is clicked 4: </div> 5: #en"
wpId: 663
---

If you create a custom field in GraffitiCMS – can can use chalk to check if the field is turned on or not with the following chalk code snippet

```
   1:  #if($post.Custom("fieldNameCheckBox") == "on")
```

```
   2:  <div style="padding-top:10px;">
```

```
   3:     Write something here when checkbox is clicked
```

```
   4:  </div>
```

```
   5:  #end
```
