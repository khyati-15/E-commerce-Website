var login=document.getElementById("login");
var register=document.getElementById("register");
var div=document.getElementById("log");
var rpopup=document.getElementById("registerpopup");
var lpopup=document.getElementById("loginpopup");
var opened_panel=0;
register.onclick=function()
{
    opened_panel=1;
    lpopup.innerHTML="";
    rpopup.innerHTML="";
    var br=document.createElement('br');
    var name=document.createElement('input');
    name.setAttribute("id","name");
    name.setAttribute("type","text");
    name.setAttribute("placeholder","Enter Full Name");
    
    var email=document.createElement('input');
    email.setAttribute("id","email");
    email.setAttribute("type","text");
    email.setAttribute("placeholder","Enter Email");
    
    var password=document.createElement('input');
    password.setAttribute("id","pass");
    password.setAttribute("type","password");
    password.setAttribute("placeholder","Enter Password");
    
    var confirm=document.createElement('input');
    confirm.setAttribute("id","confirm");
    confirm.setAttribute("type","password");
    confirm.setAttribute("placeholder","Re-enter Password");
    
     var address=document.createElement('input');
    address.setAttribute("id","address");
    address.setAttribute("type","text");
    address.setAttribute("placeholder","Complete Address");
    
     var state=document.createElement('input');
    state.setAttribute("id","state");
    state.setAttribute("type","text");
    state.setAttribute("placeholder","Enter State");
    
    var cnt=document.createElement('input');
    cnt.setAttribute("id","cnt");
    cnt.setAttribute("type","text");
    cnt.setAttribute("placeholder","Enter Country");
    
      var submit=document.createElement('button');
    submit.setAttribute("id","sub");
    
    submit.innerHTML="REGISTER";
    rpopup.innerHTML+="<br><br>Name&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ";
    rpopup.appendChild(name);
    rpopup.innerHTML+="<br><br>Email&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ";
    rpopup.appendChild(email);
    rpopup.innerHTML+="<br><br>Password : ";
    rpopup.appendChild(password);
    rpopup.innerHTML+="<br><br>Password : ";
    rpopup.appendChild(confirm);
    rpopup.innerHTML+="<br><br>Country&nbsp&nbsp&nbsp: ";
    rpopup.appendChild(cnt);
    rpopup.innerHTML+="<br><br>State&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ";
    rpopup.appendChild(state);
    rpopup.innerHTML+="<br><br>Address&nbsp&nbsp&nbsp: ";
    rpopup.appendChild(address);
    rpopup.innerHTML+="<br>";
    rpopup.innerHTML+="<br>";
    rpopup.appendChild(submit);
    rpopup.innerHTML+="<br>";
    rpopup.innerHTML+="<br>";
    div.appendChild(rpopup);
    //div.appendChild(submit);
     
}

login.onclick=function()
{
    opened_panel=1;
    lpopup.innerHTML="";
    rpopup.innerHTML="";
    var br=document.createElement('br');
    var email=document.createElement('input');
    email.setAttribute("id","email");
    email.setAttribute("type","text");
    email.setAttribute("placeholder","Enter Email");
    
    var password=document.createElement('input');
    password.setAttribute("id","pass");
    password.setAttribute("type","password");
    password.setAttribute("placeholder","Enter Password");
    
    var submit=document.createElement('button');
    submit.setAttribute("id","sub");
    
    submit.innerHTML="LOGIN";
    lpopup.innerHTML+="<br><br>Email&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ";
    lpopup.appendChild(email);
    lpopup.innerHTML+="<br><br>Password : ";
    lpopup.appendChild(password);
    lpopup.innerHTML+="<br><br>";
    lpopup.appendChild(submit);
    lpopup.innerHTML+="<br>";
    lpopup.innerHTML+="<br>";
    div.appendChild(lpopup);
    //div.appendChild(submit);

}
var customers=[];

var myVar = setInterval(myTimer, 10000);
function    myTimer()
{
if(opened_panel==1)
    {
    document.getElementById("sub").onclick=function()
    {
        if(document.getElementById("sub").innerHTML=="LOGIN")
            { 
           if(document.getElementById("email").value==''   ||  document.getElementById("pass").value=='')
            alert("Fill both the fields");
        else{
          var   users=localStorage.getItem("Users");
            customers=JSON.parse(users);
            console.log(customers);
                        //console.log(customers[0].email);
                        //console.log(customers[0].pass);


                var find=0;
                for(var i=0;i<customers.length;i++)
                    {
                        if(customers[i].email==document.getElementById("email").value)
                        {
                            find=1;
                            if(customers[i].pass==document.getElementById("pass").value)
                                { var currentuser=new Object();
                                    currentuser.name=customers[i].name;
                                    currentuser.address=customers[i].address;
                                    currentuser.email=customers[i].email;
                                    var data=JSON.stringify(currentuser);
                                    localStorage.setItem("Curr_User",data);
                                location.replace("shopping_cart.html");
                                }
                            else
                                {
                                   
                                alert("Password Not Matched");
                                }
                        }                    
                    }
                if(find==0)
                    alert("USER not registered");
            //location.replace("shopping_cart.html");
                    }
            }
        
       
        else{
       if(document.getElementById("name").value==''   ||  document.getElementById("email").value==''  ||  document.getElementById("pass").value==''  ||   document.getElementById("confirm").value==''    ||  document.getElementById("address").value=='' || document.getElementById("state").value==''  ||  document.getElementById("cnt").value=='')
            alert("Fill all the fields");
        
        else    if(document.getElementById("pass").value!=document.getElementById("confirm").value)
        alert("Password Not Matched");
                  
    else{
        var newobject=new Object();
            newobject.name=document.getElementById("name").value;
            newobject.email=document.getElementById("email").value;
            newobject.pass= document.getElementById("pass").value;
            newobject.address=document.getElementById("address").value;
            newobject.state=document.getElementById("state").value;
            newobject.cnt=document.getElementById("cnt").value;
        var users=localStorage.getItem("Users");
        customers=JSON.parse(users);
        var find=0;
        for(var i=0;i<customers.length;i++)
            if(newobject.email==customers[i].email)
                find=1;
        if(find==0)
            {                 
        customers.push(newobject);
        var data=JSON.stringify(customers);
        localStorage.setItem("Users",data);
        rpopup.innerHTML='';
        rpopup.innerHTML="<h1>Registered Successfully</h1>";
            }
        else
            rpopup.innerHTML="<h1>Already Registered. Kindly login</h1>";
 
    }
        }
    }
    }
    }
  //  }
//}