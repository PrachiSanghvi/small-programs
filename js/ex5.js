
var anslabel=document.getElementById("printans");
var btn=document.getElementById("btnans");
var count = 0;
function Count3s() {
  var num=document.getElementById("number").value;
  //debugger
    for (var i = 0; i <= num; i++) {
        var x = i;
        while (x > 0) {
            x = Math.floor(x);
            if (x % 10 == 3) {
                count++;
            }
            x = x / 10;
        }
    }
    anslabel.innerHTML=count;
}

// Count3s(num);
// document.write("Number 3 appear " + count + " times from 0 to 1000");

