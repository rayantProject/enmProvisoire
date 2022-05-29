const firebaseConfig = {
    apiKey: "AIzaSyAhsfI1qQ3Mp_EnzIInhVPlpGyh1VLzB_g",
    authDomain: "enmpreinscription.firebaseapp.com",
    databaseURL: "https://enmpreinscription-default-rtdb.firebaseio.com",
    projectId: "enmpreinscription",
    storageBucket: "enmpreinscription.appspot.com",
    messagingSenderId: "148758047740",
    appId: "1:148758047740:web:dceb85edde06362effe079",
    measurementId: "G-1PK4VT0V30"
};



const app = firebase.initializeApp(firebaseConfig);




let inscription = firebase.database().ref('inscriptions');


function saveInscription(nom, prenom, mail ,telephone, cpf, cours) 
{
    let newInscription = inscription.push()
    newInscription.set(
        {
            nom:nom,
            mail: mail,
            prenom: prenom,
            telephone: telephone,
            cpf: cpf,
            cours: cours
        }

    )
}

let message = firebase.database().ref('messages');

function saveMessage(nom,prenom,mail, message) 
{
    let newMessage = firebase.database().ref('messages').push()
    newMessage.set(
        {
            nom:nom,
            prenom: prenom,
            mail: mail,
            message: message
        }

    )
}

