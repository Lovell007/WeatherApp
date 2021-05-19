const countryList = document.querySelector('#countryList')
const form = document.querySelector('form')

// Get weather and air quality data from Air Visual API
const getData = async () => {
  try {
    // Taking user inputs to create a url for axios to access
    let countryInput = document.getElementById('countryList').value
    let stateInput = document.getElementById('state').value
    let cityInput = document.getElementById('city').value
    const response = await axios.get(`http://api.airvisual.com/v2/city?city=${cityInput}&state=${stateInput}&country=${countryInput}&key=a8d5eef1-08b6-4154-a079-74103b291102`)

    // Displying the returned data in the results table
    const currentWeather = (response.data.data.current.weather)
    const currentAirQuality = (response.data.data.current.pollution)
    const convertedTemp = tempConverter(currentWeather.tp)
    console.log(response.data.data)
    document.getElementById('currentTemp').textContent = convertedTemp
    document.getElementById('humidity').textContent = currentWeather.hu + "%"
    document.getElementById('atmosphericPressure').textContent = currentWeather.pr
    document.getElementById('windSpeed').textContent = currentWeather.ws
    document.getElementById('airQualityUS').textContent = currentAirQuality.aqius
    document.getElementById('airQualityCH').textContent = currentAirQuality.aqicn
    document.getElementById('searchLocation').textContent = `${cityInput}, ${stateInput}, ${countryInput}`

    return response
  } catch (error) {
    console.error(error)
  }
}
//Get country data for dropdown box
const countryData = async () => {
  try {
    const response2 = await axios.get(`http://api.airvisual.com/v2/countries?key=a8d5eef1-08b6-4154-a079-74103b291102`)
    const countries = (response2.data.data)
    // console.log(countries)
    setOptions(countries)
    return response2
  } catch (error) {
    console.error(error)
  }
}
countryData()
//Create function to turn countryData into option elements for dropdown box
function setOptions(list) {
  list.forEach((eachCountry) => {
    let optionTag = document.createElement('option')
    optionTag.textContent = eachCountry.country
    // optionTag.value = country
    countryList.append(optionTag)
    // console.log(eachCountry)
  })
}
// Create event listener to call getData when search button is click
form.addEventListener('submit', (e) => {
  e.preventDefault()
  getData()
})

// Create function that converts celcius to fahrenheit
function tempConverter(celcius) {
  return celcius * 9 / 5 + 32
}


