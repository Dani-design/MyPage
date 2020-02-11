/* 
Create by Daniela Lipčika
dl18033
 */
function formSubmit() {
    document.forms["forma"].submit();
    }
function About (){
    document.getElementById("Health").style.display='none';
    document.getElementById("Travel").style.display='none';
    document.getElementById("Positivity").style.display='none';
    document.getElementById("About").style.display='block';
        document.getElementById("login").style.display='none';
            var paragrafs = document.createElement("p");
var node = document.createTextNode("Few inspiring things for traveling. Don't forget to click the button!");
paragrafs.appendChild(node);
var piemers = document.getElementById("Travel");
piemers.appendChild(paragrafs);
}
function Health (){
    document.getElementById("About").style.display='none';
    document.getElementById("Travel").style.display='none';
    document.getElementById("Positivity").style.display='none';
    document.getElementById("Health").style.display='block';
        document.getElementById("login").style.display='none';
    }
    function Travel (){
    document.getElementById("Health").style.display='none';
    document.getElementById("About").style.display='none';
    document.getElementById("Positivity").style.display='none';
    document.getElementById("Travel").style.display='block';
        document.getElementById("login").style.display='none';
}
    function Positivity (){
    document.getElementById("Health").style.display='none';
    document.getElementById("Travel").style.display='none';
    document.getElementById("About").style.display='none';
    document.getElementById("Positivity").style.display='block';
    document.getElementById("login").style.display='none';
}
function login (){
    document.getElementById("About").style.display='none';
    document.getElementById("Travel").style.display='none';
    document.getElementById("Positivity").style.display='none';
    document.getElementById("login").style.display='block';
    document.getElementById("Health").style.display='none';
    }
  function parbaude(){ 
     var x=document.getElementById("vards").value;
     var y=true;
     var g=document.getElementById("gadi").value;
     var t=document.getElementById("teksts").value;
     var o=document.getElementById("tips").value;
     var o1=document.getElementById("default").value;
     if(x!=="")
     {
         for(var i=0;i<11;i++)
     {
       if(x[i]>="0" && x[i]<="9") 
      { 
       alert("Please do not enter numbers in your name");y=false;
       break;}
     }
 }
     if (g<=0){
         alert("Please eneter valid age");
         y=false;
     }
     if (t==="")
     {alert("Please enter story text");
     y=false;
      }
      if (o===o1)
      {
          alert("Please select theme of story");
          y=false;
      }
 
         
       if(x===""){ alert("Please enter your name"); y=false;}
      if (y===true) formSubmit();
}

      function explore() {
  var x = document.getElementById("saraksts");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$(document).ready(function (){
$(".navigacija").hide(0).show(1000);  
$("#title").html("Healthy lifestyle");
$("#tips2").on("click", function(){
   $("#saraksts1").slideToggle(500);
});
});


    
