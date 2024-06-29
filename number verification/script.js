var myHeaders = new Headers();
myHeaders.append("apikey", "ZY2lsGt3CR8GDTraZSWxk0Lj8cTuwoWX");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

btn=document.querySelector(".btn").addEventListener("click",()=>{
  
  
  fetch("https://api.apilayer.com/number_verification/validate?number="+document.getElementById("number").value, requestOptions)
  .then(response => response.json())
  .then(result => {
     const location=result.location
     const country=result.country_name 
     const carrier=result.carrier

if(result.valid){
  document.querySelector(".verificationStat").innerHTML="Verified"
  document.querySelector(".verificationImg").src="img/Verified.png"
  document.getElementById("Location").value=location
  document.getElementById("Cuntry").value=country
  document.getElementById("Carrier").value=carrier
}
else{
  document.querySelector(".verificationStat").innerHTML="Not Verified"
  document.querySelector(".verificationImg").src="img/NotVerified.png"
  document.getElementById("Location").value="--no info--"
  document.getElementById("Cuntry").value="--no info--"
  document.getElementById("Carrier").value="--no info--"
}


  }
  )
  document.querySelector(".info").style.display="block"
  
})
