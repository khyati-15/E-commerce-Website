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


var cod=document.getElementById("COD");
var debit=document.getElementById("Debit");
var abc=document.getElementById("abc");
//var net=document.getElementById("NetBanking");
cod.onclick=function()
{
    abc.innerHTML='';
    document.getElementById("display").innerHTML='';
var create=document.createElement("h1");
    var today = new Date();
var dd = String(today.getDate()+3).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
create.innerHTML="Your order will be delivered by "+today+".";
    document.getElementById("display").setAttribute('style','background-color:pink');
    document.getElementById("display").appendChild(create);
    localStorage.setItem("Cart_Product_data",'');
    localStorage.setItem("Cart_Product_Id",'');
}

document.getElementById("back").onclick=function()
{
location.replace("Bill_Cart.html");    
}

debit.onclick=function()
{
    abc.innerHTML='';
   // disp.innerHTML='';
    var name=document.createElement('input');
    name.setAttribute("id","name");
    name.setAttribute("type","text");
    var accno=document.createElement('input');
    accno.setAttribute("id","accno");
    accno.setAttribute("type","number");
    var cvv=document.createElement('input');
    cvv.setAttribute("id","cvv");
    cvv.setAttribute("type","number");
    var exp=document.createElement('input');
    exp.setAttribute("id","exp");
    exp.setAttribute("type","text");
var submit=document.createElement('button');
    submit.setAttribute("id","btn");
    submit.innerHTML="SUBMIT";
    var disp=document.getElementById("display");
    var br=document.createElement('br');
    var p=document.createElement('p');
    var p1=document.createElement('p');
    var p2=document.createElement('p');
    var p3=document.createElement('p');
    disp.setAttribute('style','background-color:pink');
    disp.innerHTML='';
    p.innerHTML="<br>Full Name : ";
    disp.appendChild(p);
    disp.appendChild(name);
    //disp.innerHTML="<br>";
    p1.innerHTML="Account No : ";
    disp.appendChild(p1);
    disp.appendChild(accno);
    //disp.innerHTML="<br>";
    p2.innerHTML="CVV : ";
    disp.appendChild(p2);
    disp.appendChild(cvv);
    //disp.innerHTML="<br>";
    p3.innerHTML="Expiry Date(mm/yy) : ";
    disp.appendChild(p3);
    disp.appendChild(exp);
    disp.innerHTML+="<br><br>";
    disp.appendChild(submit);
    disp.innerHTML+="<br>";
submit.onclick=function()
{
    console.log(name.value);
    if(document.getElementById("name").value=='' || document.getElementById("cvv").value=='' || document.getElementById("accno").value=='' || document.getElementById("exp").value=='')
        alert("ENTER CORRECTLY");
    else{
            disp.innerHTML='';
var create=document.createElement("h1");
    var today = new Date();
var dd = String(today.getDate()+3).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
create.innerHTML="Paid Successfully.\nYour order will be delivered by "+today+".";
        disp.appendChild(create);
    }
}
    
}