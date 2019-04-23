var username=localStorage.getItem("Curr_User");
username=JSON.parse(username);
document.getElementById("user").innerHTML="Hello "+username.name+"<br>";

var logout=document.createElement("button");
logout.setAttribute("id","logout");
logout.innerHTML="LOGOUT";
document.getElementById("user").appendChild(logout);
document.getElementById("logout").onclick=function()
{
    localStorage.setItem("Cart_Product_data","");
    location.replace("login.html");
}

var List=document.getElementById("ListOfProducts");
var Products=localStorage.getItem("Cart_Product_data");
var Id=localStorage.getItem("Cart_Product_Id");
var Cart_ID=JSON.parse(Id);
var Pay_btn=document.getElementById("Pay");
var  Cart_Product=JSON.parse(Products);
var body=document.getElementById("design");
if(Cart_Product.length==0)
{
  List.innerHTML="<font size=16px>Please Enter Some Items to Cart</font>"
}
else {
  AddtoDOM();
}
function AddtoDOM()
{
Pay_btn.addEventListener("click",function()
{
    var product_data=localStorage.getItem("Product_data");
    var id_data=localStorage.getItem("Product_Id");
    products=JSON.parse(product_data);
    productId=JSON.parse(id_data);
    for(var i=0;i<Cart_Product.length;i++)
    {
      for(var j=0;j<products.length;j++)
      {
        if(Cart_Product[i].Id===products[j].Id)
        {

          products[j].Quantity-=Cart_Product[i].Quantity;
          break;
        }
      }
    }
    var data1=JSON.stringify(products);
   localStorage.setItem("Product_data",data1);
body.innerHTML='';
  location.replace("payment.html");
});
var totalcost=0;
for(var i=0;i<Cart_Product.length;i++)
    {
        var rowp=document.createElement("tr");
        var c1=document.createElement("td");
        c1.innerHTML=Cart_Product[i].Name;
        var c2=document.createElement("td");
    c2.innerHTML=Cart_Product[i].Quantity;
        var c3=document.createElement("td");
        c3.innerHTML=(Cart_Product[i].Quantity * Cart_Product[i].Price);
        totalcost+=parseInt(c3.innerHTML);
        rowp.appendChild(c1);
        rowp.appendChild(c2);
        rowp.appendChild(c3);
        List.appendChild(rowp);
    }
    var p=document.getElementById("h3");
    var string="TOTAL COST : ";
    string+=totalcost;
    p.innerHTML=string;
 //   body.appendChild(p);
    
}
