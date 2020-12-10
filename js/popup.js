function yespress()
{
    document.write("Yes press!!");
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
   document.getElementById("myForm").style.display = "none";
}

document.getElementById('close').addEventListener("click", function() {
	document.getElementById('myForm').style.display = "none";
});