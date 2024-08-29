// Select Send Button

let sendButton = document.querySelector(".send");
let chatBox = document.querySelector(".links")
let my_date;


async function generateResponse(textMassage , updateElement) {
    await fetch("data.json").then(res => res.json()).then(data => my_date = data)

    if(my_date && my_date[textMassage]) {

        updateElement.textContent = my_date[textMassage]

    }else {

        updateElement.textContent = "I don’t understand that question."

    }
}




function createChatBot() {

    let linksUl = document.querySelector(".links")

    let createLi = document.createElement("li")

    createLi.className = "incoming";

    let CreateIcon = document.createElement("i")

    CreateIcon.className = "fa-brands fa-airbnb";

    let createDivTextIncome = document.createElement("div");

    createDivTextIncome.className = "text-income";

    createDivTextIncome.textContent = "Thinking...";

    createLi.appendChild(CreateIcon)  
    createLi.appendChild(createDivTextIncome)
    linksUl.appendChild(createLi)
    
    return createDivTextIncome
}

function sendMassage() {
    let texture = document.querySelector(".texture")
    
    let textAreaValue = texture.value;

    if(texture.value.trim() != "") {
        let linksUl = document.querySelector(".links")

        let createLi = document.createElement("li")
    
        createLi.className = "out-coming";
    
        let CreateP = document.createElement("p")
         
        CreateP.className = "user-text";
        let textP = document.createTextNode(textAreaValue)
    
        CreateP.appendChild(textP)
    
        createLi.appendChild(CreateP)
    
        linksUl.appendChild(createLi)
    
        texture.value = "";

        let ThinkingElement = createChatBot()

        setTimeout(() => {
            generateResponse(textAreaValue.trim() , ThinkingElement)
        }, 1000);
        chatBox.scroll(0 , chatBox.scrollHeight)
    }else {

        alert("Please Enter Your Massage")
        texture.value = "";
    }


}


// Click on send button

sendButton.addEventListener("click" , sendMassage)


document.querySelector(".texture").addEventListener("keydown" , e => {
    if(e.key == "Enter") {
        e.preventDefault()
        sendMassage()
    } 
})


let button = document.querySelector(".chat-toggler");


button.addEventListener("click" , () => {
    document.body.classList.toggle("show-chat")
    
})

document.querySelector(".chat-toggler .close").addEventListener("click" , () => {
    document.querySelector(".container").classList.toggle("show")
})

