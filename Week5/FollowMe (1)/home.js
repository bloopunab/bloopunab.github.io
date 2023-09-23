// console.log("hello world")

// get at <h1 id=title//
//if this exisits, we should get element object//

// let title_elem = document.getElementById('title')

// console.log(title_elem)

// console.log(
//     title_elem.innerHTML
// )


// title_elem.innerHTML = '<span style = "colour: red;"> Home Sweet Home</span>'


// function change_title(){
//     let title_elem = document.getElementById('title')
//     console.log(title_elem)
//     console.log(
//         title_elem.innerHTML
// )
//     title_elem.innerHTML = "<span style = 'colour: red;'> Home Sweet Home</span>"
//     console.log("[END] change_title")

// }

// ask dom to get all the  <p> elements objects 
// let p_elements = document.getElementsByTagName("p")
// console.log(p_elements)

// //html collection is an array so use for loop 
// for (elem of p_elements){
//     //elem is an element object
//     console.log(
//         elem.innerText 
//     )
// }

// let title_elem = document.getElementById('title')


// title_elem.style.marginTop = "150px"


// let photo_elem = document.getElementById("photo")

// console.log(photo_elem)

// let photo_attributes_names = photo_elem.getAttributeNames(
//     console.log(photo_attributes_names)

// for(attr of photo_attributes_names){
//         console.log("attr: " + attr)
//         let attribute_value = photo_element.getAttribute(attr)
//         console(attribute_value)
//     }
// )


// function show_guy(){
//     let photo_element = document.getElementById('photo')
//     console.log(photo_element)
//     photo_element.setAttribute("src", "images/kevin.jpg")

// }
// let hasBeenclicked = false;

// function show_guy(){

//     if (!hasBeenclicked){
//         let photo_element = document.getElementById("photo")
        
//         photo_element.setAttribute("src", "images/kevin.jpg");
//         hasBeenClicked = true;
        
//     }else{
//         photo_element.setAttribute("src", "images/emily.jpg");
//     }
// }

// function show_next_person(){
//     console.log("==============")


// // Step 1

// let person_button = document.getElementById("person_button")
// let person_button_value = person_button.innerText
// console.log(person_button_value)

// let photo_element = document.getElementById("photo")

// if (person_button_value == "Show me a guy"){
//     photo_element.setAttribute("src", "images/kevin.jpg")
//     person_button.innerText = "Show me a girl"
// }else{
//     photo_element.setAttribute("src","images/emily.jpg")
//     person_button.innerText = "Show me a guy"
// }

// console.log("[END] show_next_person" )

// }


function change_message(){
    document.getElementById("message").innerText ="Bye Bye world"

}

function change_message_two(){
    document.getElementById("message").innerText ="How are you?"

}

function change_message_three(){
    document.getElementById("message").innerText ="What's wrong with you?"

}
//add click event listener
document.getElementById("message-button").addEventListener("click", change_message)
//acheive same effeoct as onclick on home.html

document.getElementById("message-button").addEventListener("mouseover", change_message_two)

document.getElementById("message-button").addEventListener("mouseout", change_message_three)


//or 
// document.getElementById("message-button").addEventListener("mouseout",function(){
//     document.getElementById("message").innerText="whats wrong wit hyou"
// })

//when "add new pet" button is pressed
//prompt usser what is the name of the pet
// add the new animal to the list and the bottom of the list//

function add_pet(){
    let new_animal = prompt("What is the name of your animal pet?")


    //Step 1: Prompting user

    //Step 2: create and construct new <p> element object

    let para_elem = document.getElementById("p")
    //return the element object

    //Step 3: Creat TEXT NOTE which is an object which will have the value of the animal
    let text_node = document.createTextNode(new_animal)

    
    //Step 4: Append text note as a child to the new <p> </p>
    para_elem.appendChild(text_node) //this the child of parent p

    //outcome: <p> Monkey</p>

    // Step 5: Append the money to the parent (div box id pet box)
    document.getElementById("pet-box").appendChild(para_elem)
}



function add_pet_another(){
    let new_animal = prompt("What is the name of your animal pet?")
    console.log(new_animal)


    //Step 1: Prompting user

    //Step 2: Take the parent innerHTML 
    //<div id = pet-box >
    //add one more <p> to the parent's existing innerHTML

    let cur_innerhtml = document.getElementById("pet-box").innerHTML
    console.log(cur_innerhtml)

    cur_innerhtml += `
    <p> 
    ${new_animal}
    </p>
    
    `

    document.getElementById("pet-box").innerHTML = cur_innerhtml


   
}
