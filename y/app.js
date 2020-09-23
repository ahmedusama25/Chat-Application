let SignupInfo = () => { 
    let messageContainer= document.getElementById("messageContainer");
    let SignupPage = document.getElementsByClassName("SignupPage")
    messageContainer.style.display="inline"
    SignupPage[0].style.visibility = "hidden"

    let Signupemail = document.getElementById("SignupEmail")
    let SignupPassword = document.getElementById("SignupPassword")

    let Info = {
        Email: Signupemail.value,
        Password : SignupPassword.value
    }

    
    
    console.log(Info)
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