

let haveOneValue = (id) => document.getElementById(id).value




for (let index = 0; index < tab.length; index++) {
    
    
    document.getElementById("datalistOptions").innerHTML += '<option value='+tab[index].nom+'>'+tab[index].nom+'</option>'
   

    
}

document.getElementById("formulaire").addEventListener("submit", 
function submitForm(e) {
    e.preventDefault()

    let nom = haveOneValue("nom"), 
    prenom = haveOneValue("prenom"),
    mail = haveOneValue("email"),
    telephone = haveOneValue("telephone"),
    cpf = haveOneValue("cpf"), 
    datalistOptions = haveOneValue("datalistOptions")


    
    saveInscription(nom, prenom, mail, telephone, cpf, datalistOptions)
    document.getElementById("successBox").classList.replace("invisible", "visible")
}
)


