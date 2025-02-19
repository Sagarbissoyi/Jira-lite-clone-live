let addTaskBtn = document.getElementById("addTask");
let toDoContainer = document.getElementById("todo");

let count = 0;
addTaskBtn.addEventListener("click", () => {
  let card = document.createElement("div");
  // card.className = 'card';
  card.setAttribute("class", "card");
  card.setAttribute("id", `card-${++count}`);
  card.innerText = "Test Card";
  // card.contentEditable = true;
  card.setAttribute("contentEditable", "true");
  card.setAttribute("draggable", "true");
  // card.draggable = true;
  toDoContainer.append(card);

  card.addEventListener("click", (eventDetails) => {
    // console.log("clicked")
    // console.log(eventDetails.target)

    // console.log(card)
    if (card.innerText == "Test Card") {
      card.innerText = "";
    }
  });


  //// blur,focus
  card.addEventListener("blur", () => {
    if (card.innerText.trim() == "") {
      card.remove();
    }
  });

  //    events that apply on the card
  //dragstart
  //dragend

  card.addEventListener("dragstart", (eventDetails) => {
    console.log("dragstart");
    card.style.opacity = "0.5";
       eventDetails.dataTransfer.setData("text",card.id)

  });
  card.addEventListener("dragend", () => {
    console.log("dragEnd");
    card.style.opacity = "1";
  });

  //these events apply on area where the card is to be dragged

  //dragover
  //dragend
  //drop

  //  let todo = document.getElementById('todo');
  //  let progress = document.getElementById('progress')
  // let done = document.getElementById('done')

  // todo.addEventListener("dragover",(eventDetails)=>{
  //     eventDetails.preventDefault()

  // })
  // todo.addEventListener("dragenter",(eventDetails)=>{
  //     eventDetails.preventDefault()

  // })
  // todo.addEventListener("drop",(eventDetails)=>{
  //     eventDetails.preventDefault()
  // })

  let dragEvents = ['drag over', 'dragenter', 'drop'];

  dragEvents.forEach((eventsOfDrag) => {
    let columns = document.getElementsByClassName("column");
    //todo, progress, done
    for (let col of columns) {
      col.addEventListener(eventsOfDrag, (eventDetails) => {
        eventDetails.preventDefault();

        if(eventsOfDrag == "drop"){
              let cardId=eventDetails.dataTransfer.getData("text")
              let draggedCard = document.getElementById(cardId)
              console.log(eventDetails)
              let columnToBeMoved = eventDetails.target
             columnToBeMoved.append(draggedCard)
        }


      });

    }
  });
});
