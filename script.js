document.addEventListener("DOMContentLoaded",()=>{
const cityInput=document.getElementById("city-input")
const getWetherButton=document.getElementById("get-weather-btn")
const wetherInfo=document.getElementById("weather-info")
const cityName=document.getElementById("city-name")
const cityTemperature=document.getElementById("temperature")
const cityDescription=document.getElementById("description")
const errorMessage=document.getElementById("error-message")

const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e";


getWetherButton.addEventListener("click",async ()=>{
    let city=cityInput.value.trim();
    if(city==="") return;
    try{
        let wetherData=await fetchWethweData(city)
        // console.log(wetherData)
       displayWetherData(wetherData)
    }
    catch(e){
        showError()
    }

})
async function fetchWethweData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  let data=await fetch(url);
  let data2=data.json()
  return data2;
}
function displayWetherData(wetherData){
    const {name,main,weather}=wetherData
    // let city=wetherData.name 
    // console.log(city)
    let temperature=main.temp
    let description=weather[0].description
    cityName.textContent=name
    // alert(name)
    cityTemperature.textContent=`temperature:${temperature}`
    cityDescription.textContent=`description:${description}`
    wetherInfo.classList.remove("hidden")
    

}
function showError(){
   errorMessage.classList.remove("hidden")
}

})