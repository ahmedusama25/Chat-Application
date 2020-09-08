function send(){
    var messageDiv = document.getElementById("messageContainer")
    var inputText= document.getElementById("inputText")
    var textElement= document.createElement("p")
    var textContent= document.createTextNode(inputText.value)
    textElement.appendChild(textContent)
    messageDiv.appendChild(textElement)
    console.log(textElement)
        
}