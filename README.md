
# Weather App

## Description

An application that allows you to search for weather and air quality based on country, state, and city.

## API and Data Sample

I'm using AirVisual API: https://api-docs.iqair.com/?version=latest

Sample API endpoint: http://api.airvisual.com/v2/city?city=Los+Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
```json
{
    "status": "success",
    "data": {
        "city": "Los Angeles",
        "state": "California",
        "country": "USA",
        "location": {
            "type": "Point",
            "coordinates": [
                -118.2417,
                34.0669
            ]
        },
        "current": {
            "weather": {
                "ts": "2021-05-17T18:00:00.000Z",
                "tp": 17,
                "pr": 1017,
                "hu": 63,
                "ws": 1.54,
                "wd": 0,
                "ic": "04d"
            },
            "pollution": {
                "ts": "2021-05-17T19:00:00.000Z",
                "aqius": 47,
                "mainus": "p2",
                "aqicn": 16,
                "maincn": "p2"
            }
        }
    }
}
```
Sample API for list of countries: http://api.airvisual.com/v2/countries?key={{YOUR_API_KEY}}
```json
{
    "status": "success",
    "data": [
        {
            "country": "Afghanistan"
        },
        {
            "country": "Algeria"
        },
        {
            "country": "Andorra"
        },
        {
            "country": "Angola"
        },
        {
            "country": "Argentina"
        },
        {
            "country": "Armenia"
        },
        {
            "country": "Australia"
        },
```
## Wireframes

https://github.com/Lovell007/WeatherApp/tree/main/assets One is for the desktop version. The other is for mobile.

### MVP/PostMVP

#### MVP

- Add Country dropdown box and state and city text input boxes
- Accept country, state, and city user input to provide weather and air quality data.
- Fahrenheit converter for current temp.

#### PostMVP  

- Animated visual based on current weather
- Add air quality assessments (warnings and suggestions)
- Add comments on weather (ie. Bring a coat it's chilly, Perfect BBq weather, Remember your umbrella, ect)
- Add "current location" feature

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 17| Project Approval | Incomplete
|May 18| Core Application Structure (HTML, CSS, etc.)/ Pseudocode | Incomplete
|May 19| Actual code/ Results Display Box | Incomplete
|May 20| MVP | Incomplete
|May 21| Presentations | Incomplete


## Priority Matrix

https://wireframe.cc/n04juC

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
Api Code| H | 1.5 hr
HTML/CSS base Code| M | 1.5 hr
Search Input/Dropbox | H | 2.5 hr
Results Table (CSS) | H | 3 hr
Results Table (HTML/JS) | H | 3 hr
Fahrenheit Converter | H | .5 hr
Media Query (desktop and mobile) | M | 2 hr
Flexbox | M | 1 hr
Advance CSS styling (animations/backgrounds) | L | 3 hr
Results Based Info | L | 2.5 hr
Current Location Feature | L | 3 hr

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
