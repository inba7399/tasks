fetch('https://restcountries.com/v3.1/all')
.then(res=> res.json())
.then(data=>data.filter(a=>a.region==="Asia")) 
.then(str=>str.filter(b=>b.population<=2000000))
.then(str2=>str2.forEach(c=>console.log(`name:${c.name.common}   
capital:${c.capital}
flag:${c.flag}
region:${c.region}
 `)))