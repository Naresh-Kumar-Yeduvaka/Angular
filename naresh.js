var rupee="Rs.";
var tot="Total: Rs."
function Calculate() 
{ 
        num1 = document.getElementById("Price1").value;
        num2 = document.getElementById("Quantity1").value;
        num3 = document.getElementById("Price2").value;
        num4 = document.getElementById("Quantity2").value;
document.getElementById("result1").innerHTML += ( PharseInt(num1) * num2);
document.getElementById("result2").innerHTML +=( num3 * num4);
document.getElementById("result").innerHTML += ((num1*num2)+(num3*num4))
}
function reseting(){
document.getElementById('naresh').reset();
var obj = document.getElementById('result1'); 
if(obj) obj.innerHTML = rupee;
var obj = document.getElementById('result2'); 
if(obj) obj.innerHTML = rupee;
var obj = document.getElementById('result'); 
if(obj) obj.innerHTML = tot;
}
