let addTaskBtn = document.getElementById('addTask')
let toDoContainer = document.getElementById('todo')


addTaskBtn.addEventListener("click", ()=>{
      
    let card = document.createElement('div');
    // card.className = 'card';
    card.setAttribute("class","card")
    card.innerText = "Test Card"
    // card.contentEditable = true;
    card.setAttribute("contentEditable","true")
    toDoContainer.append(card)


    card.addEventListener("click",(eventDetails)=>{
        // console.log("clicked")
        // console.log(eventDetails.target)

        console.log(card)
    
    })


})