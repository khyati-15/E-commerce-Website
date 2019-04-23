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
var Product_Id=localStorage.getItem("Product_Id");
var Product_data=localStorage.getItem("Product_data");
var Display=document.getElementById("display");
var row=document.createElement("tr");
var col1=document.createElement("th");
col1.innerHTML="Name";
row.appendChild(col1);
var col2=document.createElement("th");
col2.innerHTML="Quantity";
row.appendChild(col2);
var col3=document.createElement("th");
col3.innerHTML="Price";
row.appendChild(col3);
Display.appendChild(row);

var Payment=document.getElementById("Payment");
var productId=JSON.parse(Product_Id);
var product=JSON.parse(Product_data);
AddtoDOM();
var Clear=document.getElementById("Clear");

var Product_details;
var index;
var Cart_ID=0;
var Cart_Product=[];
Clear.addEventListener("click",function()
{
  col1.innerHTML="Name";
  col2.innerHTML="Quantity";
  console.log(Cart_Product);
  Cart_ID=0;
  for(var i=0;i<Cart_Product.length;)
  {
    Cart_Product.splice(i,1);
  }
  console.log(Cart_Product);
});
function Add_to_CartArray(i,getQuantity)
{

  	var objProduct = new Object();

  	objProduct.Id = product[i].Id;
   	objProduct.Name = product[i].Name;
  	objProduct.Price = product[i].Price;
  	objProduct.Quantity = getQuantity;

  DisplayCart(objProduct);
Cart_ID++;
      Cart_Product.push(objProduct);


}
function DisplayCart(objProduct)
{
    var rowp=document.createElement("tr");
    var c1=document.createElement("td");
    c1.innerHTML=objProduct.Name;
    var c2=document.createElement("td");
    c2.innerHTML=objProduct.Quantity;
    var c3=document.createElement("td");
    c3.innerHTML=(objProduct.Price*objProduct.Quantity);
    rowp.appendChild(c1);
    rowp.appendChild(c2);
    rowp.appendChild(c3);
  Display.appendChild(rowp);

}
function get_index(event)
{
  var arr=List.childNodes;
  for(var j=0;j<arr.length;j++)
  {
    if(arr[j]==event)
    {
      return j;
    }
  }
}
function task_to_cart(event)
{
    var row=event.target.parentNode.parentNode;
    var getQuantity=event.target.parentNode.parentNode.childNodes[3].firstChild.value;
      if(!getQuantity)
    {
      alert("Please Enter Some Value");
    }
      else if(row.childNodes[2].value==0)
      {
        alert("Not In Stock");
      }
      else if(getQuantity>row.childNodes[2].value)
      {
        console.log(getQuantity);
        alert("Please Enter the quantity appropriate to stock");
      }
      else if (getQuantity<=0) {
        alert("Please Enter the appropriate Quantity");
      }

      else {
          console.log(row.firstChild.innerHTML);
          var   i=getindex(row);
          console.log(i);
      product[i].Quantity-=getQuantity;
      var Edit_Stock=List.childNodes;
      var productQuantity=product[i].Quantity;

Add_to_CartArray(i,getQuantity);
     //   document.getElementById(id_1).value='';


      }
}
function    getindex(row)
{
    for(var i=0;i<product.length;i++)
        {
            if(product[i].Id==row.firstChild.innerHTML)
               {
                    return  i;
               }
        }
}
function create_cart(i)
{

    var rowp=document.createElement("tr");
    var sno=document.createElement("td");
    sno.innerHTML=product[i].Id;
    rowp.appendChild(sno);
    var name=document.createElement("td");
    name.innerHTML=product[i].Name;
    rowp.appendChild(name);
        var stock=document.createElement("td");
    stock.innerHTML=product[i].Quantity;
    rowp.appendChild(stock);
        var quant=document.createElement("td");
    var input=document.createElement("input");
    input.setAttribute("placeholder","Enter Quantity Required");
    input.setAttribute("type","number");
    input.setAttribute("id",product[i].Id);
    quant.appendChild(input);
    rowp.appendChild(quant);
    var price=document.createElement("td");
    price.innerHTML=product[i].Price;
    rowp.appendChild(price);
        var id_1=i;
    var button=document.createElement("td");
    var btn=document.createElement("button");
    btn.setAttribute("id",id_1);
    btn.innerHTML="Add To Cart";

  btn.addEventListener("click",task_to_cart);
    button.appendChild(btn);
    rowp.appendChild(button);
    List.appendChild(rowp);
}

function AddtoDOM()
{
  for(let i=0;i<product.length;i++)
  {
    create_cart(i);
  }
  var Payment_button=document.getElementById("Payment_Button");
Payment_button.addEventListener("click",function()
{
  var data=JSON.stringify(Cart_Product);
  localStorage.setItem("Cart_Product_data",data);
  var id=JSON.stringify(Cart_ID);
  localStorage.setItem("Cart_Product_Id",id);
    location.replace("Bill_Cart.html");
});
  console.log(Payment);

}
