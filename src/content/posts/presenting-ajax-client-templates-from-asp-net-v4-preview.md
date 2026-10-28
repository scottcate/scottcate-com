---
title: "Presenting AJAX Client Templates from ASP.NET v4 Preview"
slug: "presenting-ajax-client-templates-from-asp-net-v4-preview"
category: "technology"
date: 2009-01-15T20:44:21-07:00
updated: 2012-11-20T18:45:28-07:00
description: "Tonight (Jan 13, 2008 5:30-8pm) at the Arizona.net User Group, I’ll be presenting AJAX client templates currently available in the ASP.NET v4 Preview hosted on CodePlex. Below is a quick code sample to wet your appetite. C# / Service – Not really relevant to the call, but it’s where the data comes f"
wpId: 641
---

Tonight (Jan 13, 2008 5:30-8pm) at the [Arizona.net User Group](http://www.azgroups.com), I’ll be presenting AJAX client templates currently available in the [ASP.NET v4 Preview hosted on CodePlex](http://www.codeplex.com/aspnet/).

Below is a quick code sample to wet your appetite.

#### C# / Service – Not really relevant to the call, but it’s where the data comes from

```
   1: [WebMethod]
```

```
   2: public List<Product> GetProducts()
```

```
   3: {
```

```
   4:     return GetProductsByOrderId(0);;
```

```
   5: }
```

```
   6:  
```

```
   7: [WebMethod]
```

```
   8: public List<Product> GetProductsByOrderId(int orderId)
```

```
   9: {
```

```
  10:     var productList = new List<Product>();
```

```
  11:     using (var adapter = new ProductsTableAdapter())
```

```
  12:     {
```

```
  13:         Northwind.ProductsDataTable products = null;
```

```
  14:         products = orderId > 0 ? adapter.GetDataByProductId(orderId) : adapter.GetData();
```

```
  15:         
```

```
  16:         foreach (var row in products)
```

```
  17:         {
```

```
  18:             productList.Add(new Product() { 
```

```
  19:                 Name = row["ProductName"].ToString(), 
```

```
  20:                 Id = (int) row["ProductId"]
```

```
  21:             });
```

```
  22:         }
```

```
  23:     }
```

```
  24:     return productList;
```

```
  25: }
```

#### ASPX Page

```
   1: <%@ Page Title="" Language="C#" MasterPageFile="~/Common/WebSiteMaster.master" AutoEventWireup="true" CodeBehind="A_Templates.aspx.cs" Inherits="ScottCateAjax2008.Lesson10.A_Templates" %>  
```

```
   2: <asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">  
```

```
   3:   
```

```
   4: <asp:ScriptManager id="SM1" runat="server">  
```

```
   5:     <Scripts>  
```

```
   6:         <asp:ScriptReference ScriptMode="Debug" Path="~/Common/Scripts/ASPNET4Preview3/MicrosoftAjaxTemplates.js"  />  
```

```
   7:         <asp:ScriptReference Path="~/Lesson10/A_Templates.aspx.js" />  
```

```
   8:     </Scripts>  
```

```
   9:     <Services>  
```

```
  10:         <asp:ServiceReference Path="~/Services/NorthwindService.asmx" />  
```

```
  11:     </Services>  
```

```
  12: </asp:ScriptManager>  
```

```
  13:     
```

```
  14:     <h1>ASP.NET 4.0 - Templates</h1>  
```

```
  15:   
```

```
  16:     <table id="products" border="1" class="sys-template">  
```

```
  17:         <tr>  
```

```
  18:             <td>{{ Id }}</td>  
```

```
  19:             <td>{{ Name }}</td>  
```

```
  20:         </tr>  
```

```
  21:     </table>  
```

```
  22:   
```

```
  23: </asp:Content>  
```

#### JavaScript

```
   1: function pageLoad() {   
```

```
   2:     ScottCateAjax2008.Services.NorthwindService.GetProducts(goGetProducts_Callback, errorCallback);   
```

```
   3: }   
```

```
   4:   
```

```
   5: function goGetProducts_Callback(results) {   
```

```
   6:     var products = $create(Sys.UI.DataView, {}, {}, {}, $get("products"));   
```

```
   7:     products.set_data(results);   
```

```
   8: }   
```

```
   9:        
```

```
  10: function errorCallback(error) {   
```

```
  11:     alert(error);   
```

```
  12: }  
```

#### Outcome

[![image](<

\<p\>Tonight \(Jan 13, 2008 5:30-8pm\) at the \<a href=> "image")Arizona.net User Group](/files/media/image/WindowsLiveWriter/PresentingAJAXClientTemplat.NETv4Preview_B8D6/image_2.png), I’ll be presenting AJAX client templates currently available in the [ASP.NET v4 Preview hosted on CodePlex](http://www.codeplex.com/aspnet/).

Below is a quick code sample to wet your appetite.

#### C# / Service – Not really relevant to the call, but it’s where the data comes from

```
   1: [WebMethod]
```

```
   2: public List<Product> GetProducts()
```

```
   3: {
```

```
   4:     return GetProductsByOrderId(0);;
```

```
   5: }
```

```
   6:  
```

```
   7: [WebMethod]
```

```
   8: public List<Product> GetProductsByOrderId(int orderId)
```

```
   9: {
```

```
  10:     var productList = new List<Product>();
```

```
  11:     using (var adapter = new ProductsTableAdapter())
```

```
  12:     {
```

```
  13:         Northwind.ProductsDataTable products = null;
```

```
  14:         products = orderId > 0 ? adapter.GetDataByProductId(orderId) : adapter.GetData();
```

```
  15:         
```

```
  16:         foreach (var row in products)
```

```
  17:         {
```

```
  18:             productList.Add(new Product() { 
```

```
  19:                 Name = row["ProductName"].ToString(), 
```

```
  20:                 Id = (int) row["ProductId"]
```

```
  21:             });
```

```
  22:         }
```

```
  23:     }
```

```
  24:     return productList;
```

```
  25: }
```

#### ASPX Page

```
   1: <%@ Page Title="" Language="C#" MasterPageFile="~/Common/WebSiteMaster.master" AutoEventWireup="true" CodeBehind="A_Templates.aspx.cs" Inherits="ScottCateAjax2008.Lesson10.A_Templates" %>  
```

```
   2: <asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">  
```

```
   3:   
```

```
   4: <asp:ScriptManager id="SM1" runat="server">  
```

```
   5:     <Scripts>  
```

```
   6:         <asp:ScriptReference ScriptMode="Debug" Path="~/Common/Scripts/ASPNET4Preview3/MicrosoftAjaxTemplates.js"  />  
```

```
   7:         <asp:ScriptReference Path="~/Lesson10/A_Templates.aspx.js" />  
```

```
   8:     </Scripts>  
```

```
   9:     <Services>  
```

```
  10:         <asp:ServiceReference Path="~/Services/NorthwindService.asmx" />  
```

```
  11:     </Services>  
```

```
  12: </asp:ScriptManager>  
```

```
  13:     
```

```
  14:     <h1>ASP.NET 4.0 - Templates</h1>  
```

```
  15:   
```

```
  16:     <table id="products" border="1" class="sys-template">  
```

```
  17:         <tr>  
```

```
  18:             <td>{{ Id }}</td>  
```

```
  19:             <td>{{ Name }}</td>  
```

```
  20:         </tr>  
```

```
  21:     </table>  
```

```
  22:   
```

```
  23: </asp:Content>  
```

#### JavaScript

```
   1: function pageLoad() {   
```

```
   2:     ScottCateAjax2008.Services.NorthwindService.GetProducts(goGetProducts_Callback, errorCallback);   
```

```
   3: }   
```

```
   4:   
```

```
   5: function goGetProducts_Callback(results) {   
```

```
   6:     var products = $create(Sys.UI.DataView, {}, {}, {}, $get("products"));   
```

```
   7:     products.set_data(results);   
```

```
   8: }   
```

```
   9:        
```

```
  10: function errorCallback(error) {   
```

```
  11:     alert(error);   
```

```
  12: }  
```

#### Outcome

[![image](https://scottcate.com/files/media/image/WindowsLiveWriter/PresentingAJAXClientTemplat.NETv4Preview_B8D6/image_thumb.png "image")](/files/media/image/WindowsLiveWriter/PresentingAJAXClientTemplat.NETv4Preview_B8D6/image_2.png)

” width=”467″ border=”0″ />
