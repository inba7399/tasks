var submit=document.getElementById("button")
var row=1
submit.onclick=()=>{
   var FirstName=document.getElementById("FirstName").value
   var LastName=document.getElementById("LastName").value
   var Email=document.getElementById("Email").value
   var Address=document.getElementById("Address").value
   var Pincode=document.getElementById("Pincode").value
   var State=document.getElementById("State").value
   var Country=document.getElementById("Country").value
   var Gender=document.getElementById("gender").value

   if(!FirstName||!LastName||!Email||!Address||!Pincode||!State||!Country||!Gender)
  {  alert("Please fill all the boxes")
return}
var food=[]
if(document.getElementById("JapaneseCuisine").checked){
 food.push("Japanese Cuisine ")
}
 if(document.getElementById("ItalianCuisine").checked){
  food.push("Italian Cuisine ")
 }
 if(document.getElementById("ThaiCuisine").checked){
  food.push("Thai Cuisine ")
 }
 if(document.getElementById("IndianCuisine").checked){
  food.push("Indian Cuisine ")
 }
 if(document.getElementById("MexicanCuisine").checked){
  food.push("Mexican Cuisine ")
 }
  if(food.length>3){
    alert("Please select only 3 food preference")
  }
  else{
   var table=document.getElementById("tb")
   var NewRow=table.insertRow(row)
   NewRow.insertCell(0).innerHTML=FirstName
   NewRow.insertCell(1).innerHTML=LastName
   NewRow.insertCell(2).innerHTML=Email
   NewRow.insertCell(3).innerHTML=Address
   NewRow.insertCell(4).innerHTML=Pincode
   NewRow.insertCell(5).innerHTML=Gender
   NewRow.insertCell(6).innerHTML=food
   NewRow.insertCell(7).innerHTML=State
  NewRow.insertCell(8).innerHTML=Country
  }
document.getElementById("form").reset()
}




