// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(email){
    const fullEmail = email;
    const atDomain = (fullEmail.substring((fullEmail.indexOf("@")-fullEmail.indexOf("@"+1))));
    return atDomain
}
const domain1 =getEmailDomain("n.eeken@novi-education.nl");
const domain2 =getEmailDomain("t.mellink@novi.nl");
const domain3 =getEmailDomain("a.wiersma@outlook.com");

console.log(domain1);
console.log(domain2);
console.log(domain3);

//oplossing van Ike is veel slimmer:
// //function getEmailDomain(email) {
//     const domain = email.split("@");
//     return domain[1];
// }
//
// getEmailDomain("n.eeken@novi-education.nl");
// getEmailDomain("t.mellink@novi.nl");
// getEmailDomain("a.wiersma@outlook.com");


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email){

    if (email.includes("novi-education")) {return "Student"}
    else if(email.includes("novi.nl")) {return"Medewerker"}
    else if(email.includes("outlook.com" || "gmail.com")){return "Extern"}
    return email
}
const checkEmail = console.log(typeOfEmail("n.eeken@novi-education.nl"));
const checkEmail2 = console.log(typeOfEmail("t.mellink@novi.nl"));
const checkEmail3 = console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
const checkEmail4 = console.log(typeOfEmail("a.wiersma@outlook.com"));




/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(emailAdres){
const containsMonkeyTail = emailAdres.includes("@");
const containsComma = emailAdres.includes(",");
const containsDot = emailAdres.lastIndexOf(".");
const containsNoDotEnd = containsDot !== emailAdres.length-1;

if (containsMonkeyTail && !containsComma && containsNoDotEnd) {
    return true
} else {
    return false
}

}
const checkEmail10 = console.log(checkEmailValidity("n.eeken@novi.nl"))
const checkEmail6 = console.log(checkEmailValidity("tessmellink@novi.nl"))
const checkEmail7 = console.log(checkEmailValidity("n.eekenanovi.nl"))
const checkEmail8 = console.log(checkEmailValidity("n.eeken@novinl."))
const checkEmail9 = console.log(checkEmailValidity("tessmellink@novi,nl"))
checkEmailValidity("n.eeken@novi.nl") //geeft true - want @ en punt op de juiste plek
checkEmailValidity("tessmellink@novi.nl") //geeft true - want @ en punt op de juiste plek
checkEmailValidity("n.eekenanovi.nl") // false - want geen @
checkEmailValidity("n.eeken@novinl.") //geeft false - want de punt mag niet als laatst
checkEmailValidity("tessmellink@novi,nl") // geeft false - want er staat een komma in
