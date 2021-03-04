const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const search = document.getElementById('search').value;
    if(!search){
        document.getElementById('cityName').innerHTML = "Please Enter the City Name"
        document.getElementById("degree").innerHTML = ""
    }
    else{
        document.getElementById('cityName').innerHTML = "Loading..."
        document.getElementById("degree").innerHTML = ""
        fetch(`https://api.weatherapi.com/v1/current.json?key=49c2a525642243ea9be112829201311&q=${search}&aqi=no
        `)
        
        .then((res)=>res.json())
        .then((data)=>{
            let country = data.location.country;
            let name = data.location.name;
            let tem_c = data.current.temp_c;
            document.getElementById('cityName').innerHTML = `${name}, ${country}`;
            document.getElementById('degree').innerHTML =  `${tem_c} &deg;c`
        })
        
    }
  
    
})