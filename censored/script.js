   
   var myHeaders = new Headers();
   myHeaders.append("apikey", "iDYkB6Se93JdC1z7f3naUwNOuNy39oxR");
  


   document.getElementById("btn").onclick =()=>{
    
    const a=document.getElementById("text").value
    const raw =`${a}`
    var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: raw
         };
 
  fetch("https://api.apilayer.com/bad_words?censor_character=censor_character", requestOptions)
  .then(response => response.json())


  .then(result => {
    
    document.querySelector(".NoOFWords").textContent=`No of words censored   :${result.bad_words_total}`
    document.getElementById("resultText").value=result.censored_content
   
   })
  .catch(error => alert(error));
    document.querySelector(".result").style.display="block"
     }
   
