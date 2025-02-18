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
    card.setAttribute("draggable", "true")
    // card.draggable = true;
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

//    events that apply on the card
//dragstart
//dragend

card.addEventListener("dragstart",()=>{
    console.log("dragstart")
})
card.addEventListener("dragend",()=>{
    console.log("dragend")
})




})


