
let api_key = '89583b953555ef203b5af0807afaae43';
console.log('click')
let searchCity = ()=>{
    let selectCity = document.getElementById('select-field');
    let myCity= selectCity.value
    //  console.log(myCity)
    selectCity.value='';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${api_key}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayWeatherInfo(data))


}
const setInnertext =(id,text)=>{
 document.getElementById(id).innerText=text
}

const displayWeatherInfo =(Temp) =>{
console.log(Temp)
setInnertext('city-name',Temp.name)
setInnertext('temprature',Temp.main.temp)
setInnertext('condition',Temp.weather[0].main)
}