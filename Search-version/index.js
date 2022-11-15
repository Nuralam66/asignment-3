let API_KEY = `bb0c93ac99755275ca9cc278616689a0`;
const SearchCity = ()=>{
   const searchText= document.getElementById('InputField')
   const cityName = searchText.value
   searchText.value ='';
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
   console.log(url)

fetch(url)
.then(res=>res.json())
.then(data=>displayTemprature(data))
}
let setInnertext = (id ,text)=>{
document.getElementById(id).innerText=text
}
 let  displayTemprature = (temprature)=>{
    console.log(temprature)
    setInnertext('city',temprature.name)
    setInnertext('temp',temprature.main.temp)
    setInnertext('condition',temprature.weather
    [0].main)

    const imgUrl =`http://openweathermap.org/img/wn/${temprature.weather[0].icon}@2x.png`;
    const weatherIcon= document.getElementById('imgIcon')
    weatherIcon.setAttribute('src',imgUrl)


}