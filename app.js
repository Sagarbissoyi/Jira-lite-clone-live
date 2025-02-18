let addTaskBtn = document.getElementById('addTask')
let toDoContainer = document.getElementById('todo')

let count = 0;
addTaskBtn.addEventListener("click", ()=>{
      
    let card = document.createElement('div');
    // card.className = 'card';
    card.setAttribute("class","card")
    card.setAttribute("id",`card-${++count}`)
    card.innerText = "Test Card"
    // card.contentEditable = true;
    card.setAttribute("contentEditable","true")
    toDoContainer.append(card)


    card.addEventListener("click",(eventDetails)=>{
        // console.log("clicked")
        // console.log(eventDetails.target)

        // console.log(card)
        if(card.innerText == "Test Card"){
            card.innerText = ""
        }
    
    })
 //// blur,focus
    card.addEventListener("blur",()=>{
        if(card.innerText.trim() == ""){
           card.remove()
        }
    })

///////////  let make a drop down 
const dropdown=document.createElement('select');
dropdown.innerHTML=`
<option value="todo">Todo </option>
<option value ="progress">In Progress</option>
<option value="done">Done</option>
`
card.append(dropdown)


dropdown.addEventListener("change",(eventDetails)=>{
    // let selectElement = eventDetails.target;
    // console.log(selectElement.value)
    // console.log(dropdown.value)
    let selectedValue = dropdown.value
    let columnToBeMoved = document.getElementById(selectedValue);
    columnToBeMoved.append(card)
})


})


