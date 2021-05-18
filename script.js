const countryList = document.querySelector('#countryList')

// Get weather and air quality data from Air Visual API
const getData = async (url) => {
  try {
    const response = await axios.get(url)
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
    console.log(countries)
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
    console.log(eachCountry)
  })
}