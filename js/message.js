let haveOneValue = (id) => document.getElementById(id).value

document.getElementById("messageForm").addEventListener("submit", 
function submitForm(e) {
    e.preventDefault()

    let nom = haveOneValue("nom"), 
    prenom = haveOneValue("prenom"),
    mail = haveOneValue("email"),
    message = haveOneValue("message")
    


    
    saveMessage(nom, prenom, mail, message)
    document.getElementById("msgSend").classList.replace("invisible", "visible")
    
    // setTimeout(document.getElementById("msgSend").classList.replace("visible", "invisible"), 5000);
}
)