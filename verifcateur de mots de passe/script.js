//definir les variables
var myInput= document.getElementById('psw');
var letter= document.getElementById('letter');
var capital= document.getElementById('capital');
var number= document.getElementById('number');
var length= document.getElementById('length');

//lorsque l'utlisateur clique sur le champ
//du mot de passe ,afficher la boite message

myInput.onfocus = function(){
    document.getElementById("message").style.display= "block"
}

//lorsque l'utilisateur tape en dehors du champ de mots de passe masquer la boite message

myInput.onblur = function(){
    document.getElementById('message').style.display='none'
}

//lorsque l'utilisateur commence a taper quelque chose dans le champ de passe

myInput.onkeyup = function(){
    //valider les lettres minuscule
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)) {
        //si le mot de passe contient une lettre minuscule,enlever la classe "invalid et ajouter la classe valid"
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        //si non, enlever la class "valid" et ajouter la classe "invalid"
        letter.classList.remove('invalid'),
        letter.classList.add('valid');
    }

    //valider les lettre majuscules
    var upperCaseLetters = /[A-Z]/g
    if(myInput.value.match(upperCaseLetters)) {
        //si le mot de passe contient une lettre majuscule,enlever la classe "invalid et ajouter la classe "valid"
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        //si non, enlever la class "valid" et ajouter la classe "invalid"
        capital.classList.remove('invalid'),
        capital.classList.add('valid');
    }

     //valider les lettre majuscules
     var numbers = /[0-9]/g
     if(myInput.value.match(numbers)) {
         //si le mot de passe contient un chiffre,enlever la classe "invalid et ajouter la classe "valid"
         number.classList.remove('invalid');
         number.classList.add('valid');
     }else{
         //si non, enlever la class "valid" et ajouter la classe "invalid"
         number.classList.remove('invalid'),
         number.classList.add('valid');
     }

}
