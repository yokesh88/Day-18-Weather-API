
let  row=document.querySelector(".row");
let btn=document.querySelector("btn");
let url="https://restcountries.com/v3.1/all"
fetch(url).then((res)=>res.json()).then((data)=>{
    data.forEach(element => {
    let div=document.createElement("div");
    div.className="col-sm-6 col-md-4 col-lg-4 col-xl-4"
    let fileLoad=   template(element);
    div.innerHTML=fileLoad;
    row.appendChild(div)
});

})

let template=(country)=>{
    let temp=`
        <div class="card h-100" >
                <div class="card-header">${country.name.common}</div>
                <div class="card-body">
                    <img class="flag1"f src="${country.flags.png}" alt="">
                    <div class=align>
                    <p class="card-text"><b>Capital:</b>${country.capital}</p>
                    <p class="card-text"><b>Region :</b>${country.region}</p>
                    <p class="card-text"><b>Country Code :</b> ${(country.fifa!=undefined)?country.fifa:country.cca3}</p>
                    <p class="card-text"><b>Population :</b> ${(country.population)}</p>
                    <br></div>
                    <button class="btn btn-primary" onclick="weatherBtn([${country.latlng[0]},${country.latlng[1]}],'${country.name.common}')">weather</button>
                    <p id="load${country.name.common}"></p>
                    </div>
                    </div><br>
                    `;        
                    return temp
}        
let weatherBtn=(lan,name)=>{
    let [lat,lon]=lan
    let l=document.getElementById(`load${name}`)
    l.innerHTML="...Loading...please wait...";
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9bf59c67c0d408cc5e1c4877f3e4d9d5`
    fetch(url).then((res)=>res.json()).then((data)=>{
        let weatherMsg=`
        Countrty : ${data.name}
        latiture :  ${lat}   longiture :${lon}
        Weather  :  ${data.weather[0].description}
        Wind speed : ${data.wind.speed}
        temperature : ${data.main.temp} 
        `;
        
        alert(weatherMsg);
        l.innerHTML="";
    })
}