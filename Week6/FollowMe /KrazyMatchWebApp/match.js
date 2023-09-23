//=======================================================================================
// ===== Activity 1 =====
// This function will be invoked when match.html loads
//    Check <body> tag in match.html
//
// By default, a "girl" (randomly selected by KrazyMatch API) and her
//   particulars will be displayed inside of <div id="today-pick-box">...</div>
//=======================================================================================
function display_default() {

    console.log("**** [START] display_default() *****")

    call_krazymatch_api("f") // 'f' for female/girl

    console.log("**** [END] display_default() *****")
}



//=======================================================================================
// ===== Activity 1 =====
// This function calls KrazyMatch API
// API endpoint
//    http://localhost/krazymatch/api/profile/random.php?g=m    (or f for female)
//=======================================================================================
function call_krazymatch_api(gender) {

    console.log("**** [START] call_krazymatch_api() *****")

    console.log("Parameter gender: " + gender)  // Expecting 'm' or 'f'

    // 1) Complete the endpoint URL with gender appended as a parameter
    let api_endpoint_url = ""

    // 2) Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // SUCCESS
        // Got an API response

    })
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })

    console.log("**** [END] call_krazymatch_api() *****")
}




//=======================================================================================
// ===== Activity 2 =====
// This function will be invoked when the user presses "Show Next Dream Person" button.
//
// If the user selected "Girl" (radio button option)
//   then show the next (randomly selected by the API) girl and her particulars
// If the user selected "Boy" (radio button option)
//   then show the next (randomly selected by the API) boy and his particulars
//
// The particulars will be displayed inside of <div id="today-pick-box">...</div>
//=======================================================================================
function show_next_person() {

    console.log("**** [START] show_next_person() *****")

    console.log("**** [END] show_next_person() *****")
}




//=======================================================================================
// ===== Activity 3 =====
// This function calls OpenWeatherMap API
// API endpoint
//    http://api.openweathermap.org/data/2.5/weather?q=cityname&appid=appid
//
//
// Retrieved weather info will be displayed inside of <div id="weather-box">...</div>
//=======================================================================================
function show_weather() {

    console.log("**** [START] show_weather() *****")

    
    // See if you can re-use your code from Activity 1 / Activity 2
    
    
    console.log("**** [END] show_weather() *****")
}