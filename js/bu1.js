//function
// checkCookie();
// setCookie("yesbtn",true,30);
// getCookie("yesbtn");



$(document).ready(function () {
    checkCookie();
    // Showpopup();
  });
  
  // Popup shows 
  function Showpopup() {
    // document.getElementById("myBtn").addEventListener("click", myFunction);
    document.getElementById("myForm").style.display = "block";
  
  }
  
  //When yes button press
  function Whensayyes() {
    debugger;
    document.getElementById("main-content").style.display = "block";
    document.getElementById("myForm").style.display = "none";
    setCookie("yesbtn", true, 30);
  
  }
  
  //When No button press
  function Whensayno() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("main-content").style.display = "none";
    document.getElementById("align").style.display = "none";
  }
  
  // Get yesbtn id
  // var yesbtn = document.getElementById("yesbtn").value;
  // document.write(yesbtn);
  
  // SetCookie function
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // getcookie function
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // Check cookie present or not
  function checkCookie() {
    //debugger
      var user = getCookie("yesbtn");
     if (!user) {
      Showpopup();
  
    }
  
  }
  
  document.getElementById('close').addEventListener("click", function () {
    document.getElementById('myForm').style.display = "none";
    document.getElementById("align").style.display = "block";
  
  });