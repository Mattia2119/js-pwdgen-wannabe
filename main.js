let name = prompt ("Qual'è il tuo nome?")

let surname = prompt ("Qual'è il tuo cognome")

let color = prompt ("Qual'è il tuo colore preferito?")

let password = name + surname + color;

document.getElementById("pwd").innerHTML = ("La tua password è: " + password + "21");