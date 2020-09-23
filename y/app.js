let SignupInfo = () => { 
    let messageContainer= document.getElementById("messageContainer");
    let SignupPage = document.getElementsByClassName("SignupPage")
    messageContainer.style.display="inline"
    SignupPage[0].style.display="none";

    
    
    //console.log("")
}



function send(){
   
    var inputText= document.getElementById("inputText")
    var textElement= document.createElement("p")
    var textContent= document.createTextNode(inputText.value)
    textElement.appendChild(textContent)
    var messageDiv = document.getElementById("messageContainer")
    messageDiv.insertBefore(textElement,messageDiv.childNodes[1])
    console.log(textElement)
    inputText.value=""


}