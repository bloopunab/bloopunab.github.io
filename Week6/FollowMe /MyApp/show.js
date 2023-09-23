function show_all() {
    // index array -> let friends_array=["riss","bizz"]//

    

    // let student_object ={
    //     "name":"Ross Gellar",
    //     "age":35,
    //     "Girlfriend":false
    //     }
    //     console.log(student_object.name)
    //     console.log(student_object.age)


    console.log("*** [START] show_all() ***")
    
    //response comes in {} which is an object
    //data comes in []
    // Call KrazyMatch API and get ALL persons

    let api_endpoint_url = "http://localhost/krazymatch/api/profile/read.php"
    let div_person_innerHTML_str =" "
    //Asynchronous API Call allows to make many asynchrous calls and get responses asap
    axios.get(api_endpoint_url)
    .then(response => {

        let array_of_person_objects= response.data.records
        console.log(array_of_person_objects)

        let div_person_innerHTML_str=  `
        
        <table border='1'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupuation</th>
            <th>Photo</th>

        `

        for (person_object of array_of_person_objects){

            console.log(person_object.name)
            console.log(person_object.age)
            console.log(person_object.occupation)
            console.log(person_object.photo_url)

            div_person_innerHTML_str+= `
            <tr> 
            <td>${person_object.name}</td>
            <td>${person_object.age}</td>
            <td>${person_object.occupation}</td>
            <td> 
            <img src="${person_object.photo_url}" width="100">
            </td>

            </tr>



            
            
            
            `
        }

        div_person_innerHTML_str +="</table>"

        //DOM manipulation 
        document.getElementById("persons").innerHTML = div_person_innerHTML_str
    })
        //response is an object then data will be an object by itself then response.data.records will be arrays
        //console.log(response.data.records)

        
        
        
            


        

        // SUCCESS
        // Got an API response

    
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })

    console.log("*** [END] show_all() ***")
}

function show_all_by_gender() {
    
    
    let div_person_innerHTML_str =" "
    axios.get(api_endpoint_url)
    .then(response => {
        
    
    let gender = document.getElementsByName('gender') 
    console.log(gender[0]).checked
    console.log(gender[1]).checked

    let array_of_person_objects= response.data.records
        console.log(array_of_person_objects)

        let div_person_innerHTML_str=  `
        
        <table border='1'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupuation</th>
            <th>Photo</th>

        `

        for (person_object of array_of_person_objects){

            console.log(person_object.name)
            console.log(person_object.age)
            console.log(person_object.occupation)
            console.log(person_object.photo_url)

            div_person_innerHTML_str+= `
            <tr> 
            <td>${person_object.name}</td>
            <td>${person_object.age}</td>
            <td>${person_object.occupation}</td>
            <td> 
            <img src="${person_object.photo_url}" width="100">
            </td>

            </tr>
`
        }
    
    })
    
    
    
    



    console.log("*** [START] show_all_by_gender() ***")

    //Step 1: Figure out which radio button was chosen
    let gender_girl =document.getElementById("gender_girl").checked
    let gender_boy =document.getElementById("gender_boy").checked

    
    //Step 2: Figure out whether m or f as parameter value
    let selected_gender='f'
    if(gender_boy){
        selected_gender='m'
    }

    console.log("*** [END] show_all_by_gender() ***")

    //step 3 api
    axios.get(api_endpoint_url)
    let api_endpoint_url = "http://localhost/krazymatch/api/profile/random.php?g="+ selected_gender




}
