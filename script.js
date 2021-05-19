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
    console.log(response)

    // Displying the returned data in the results table
    const currentWeather = (response.data.data.current.weather)
    const currentAirQuality = (response.data.data.current.pollution)
    const convertedTemp = tempConverter(currentWeather.tp)
    const icon = (currentWeather.ic)
    console.log(response.data.data)
    document.getElementById('currentTemp').textContent = convertedTemp
    document.getElementById('humidity').textContent = currentWeather.hu + "%"
    document.getElementById('atmosphericPressure').textContent = currentWeather.pr
    document.getElementById('windSpeed').textContent = currentWeather.ws
    document.getElementById('airQualityUS').textContent = currentAirQuality.aqius
    document.getElementById('airQualityCH').textContent = currentAirQuality.aqicn
    document.getElementById('searchLocation').textContent = `${cityInput}, ${stateInput}, ${countryInput}`
    backgrd(icon)
    // background('13d')
    console.log('icon')
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


// Function to add weather based specific backgrounds to the results table
function backgrd(weatherData) {
  let animation = document.getElementById('background')
  if (weatherData === "01d") {
    animation.style.backgroundImage = "url('https://media.giphy.com/media/Y08HrLOUu6MqewhQHE/giphy.gif')"
  }
  else if (weatherData === "11d" || "10d" || "10n") {
    animation.style.backgroundImage = "url('https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/178162/1609762173_219689')"
  }
  else if (weatherData === "13d") {
    animation.style.backgroundImage = "url('https://acegif.com/wp-content/gif/snwflks-29.gif')"
    animation.style.backgroundSize = "330px 340px"
    animation.style.backgroundPosition = "bottom"
  }
  else if (weatherData === "02d" || "02n" || "03d" || "04d") {
    animation.style.backgroundImage = "url('http://cloudlogistics.com/wp-content/uploads/2020/10/cloudlogistics.gif')"
    animation.style.backgroundSize = "335px"
  }
  else {
    animation.style.backgroundImage = "url('https://www.catawbacountync.gov/site/assets/files/8351/weather.jpg')"
  }
}

// Function to calculate wind direction based on a 1-360 scale where N is 0
