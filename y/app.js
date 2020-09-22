function send(){
   
    var inputText= document.getElementById("inputText")
    var textElement= document.createElement("p")
    var textContent= document.createTextNode(inputText.value)
    textElement.appendChild(textContent)
    var messageDiv = document.getElementById("messageContainer")
    messageDiv.appendChild(textElement)
    console.log(textElement)
    inputText.value=""
        
}