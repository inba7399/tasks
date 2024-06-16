document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value=" "
})

document.querySelector("#back").addEventListener("click",()=>{
    const num=document.querySelector("#display").value.slice(0,-1)
    document.querySelector("#display").value=num
})

document.querySelector("#mod").addEventListener("click",()=>{
    document.querySelector("#display").value+="%"
})

document.querySelector("#div").addEventListener("click",()=>{
    document.querySelector("#display").value+="/"
})

document.querySelector("#sev").addEventListener("click",()=>{
    document.querySelector("#display").value+="7"
})

document.querySelector("#eig").addEventListener("click",()=>{
    document.querySelector("#display").value+="8"
})

document.querySelector("#nin").addEventListener("click",()=>{
    document.querySelector("#display").value+="9"
})

document.querySelector("#mul").addEventListener("click",()=>{
    document.querySelector("#display").value+="*"
})

document.querySelector("#six").addEventListener("click",()=>{
    document.querySelector("#display").value+="6"
})

document.querySelector("#fiv").addEventListener("click",()=>{
    document.querySelector("#display").value+="5"
})

document.querySelector("#for").addEventListener("click",()=>{
    document.querySelector("#display").value+="4"
})

document.querySelector("#min").addEventListener("click",()=>{
    document.querySelector("#display").value+="-"
})

document.querySelector("#tre").addEventListener("click",()=>{
    document.querySelector("#display").value+="3"
})

document.querySelector("#two").addEventListener("click",()=>{
    document.querySelector("#display").value+="2"
})

document.querySelector("#one").addEventListener("click",()=>{
    document.querySelector("#display").value+="1"
})

document.querySelector("#plus").addEventListener("click",()=>{
    document.querySelector("#display").value+="+"
})

document.querySelector("#z").addEventListener("click",()=>{
    document.querySelector("#display").value+="0"
})

document.querySelector("#dz").addEventListener("click",()=>{
    document.querySelector("#display").value+="00"
})

document.querySelector("#d").addEventListener("click",()=>{
    document.querySelector("#display").value+="."
})

document.querySelector("#eq").addEventListener("click",()=>{
    const result=eval(document.querySelector("#display").value)
if(result===undefined){
    alert("Please enter an calculation")
}
else if (typeof result==NaN){
    alert("Please enter only number")

}
else{
    document.querySelector("#display").value=result
}
})

