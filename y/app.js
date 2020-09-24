let FirstPage=document.getElementById("FirstPage")
let Signupemail = document.getElementById("SignupEmail")
let SignupPassword = document.getElementById("SignupPassword")
let SignupName= document.getElementById("SignupName")
let SignupPage = document.getElementsByClassName("SignupPage");
let messageDiv = document.getElementById("messageContainer")
let inputText= document.getElementById("inputText")




let SigninButton= () =>{
    
    FirstPage.style.display= "none"

}



let SignupInfo = () => {     
    let Info = {
        Email: Signupemail.value,
        Password : SignupPassword.value,
        Name : SignupName.value
    }
    firebase.auth().createUserWithEmailAndPassword(SignupEmail.value, SignupPassword.value)
    .then((data) =>{ 
        console.log(data);
        
        SignupPage[0].style.visibility = "hidden";   
        firebase.database().ref(Info.Name).set(Info) 
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
      });
    
    
    
    console.log(Info)
}



function send(){
   

    var textElement= document.createElement("p")
    var textContent= document.createTextNode(inputText.value)
    textElement.appendChild(textContent)
    
    messageDiv.insertBefore(textElement,messageDiv.childNodes[1])
    console.log(textElement)
    inputText.value=""


}