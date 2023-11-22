const input = document.getElementById("svar");
const input1 = document.getElementById("svar1");
const output = document.getElementById("output");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const input2 = document.getElementById("svar2");
const input3 = document.getElementById("svar3");
const input4 = document.getElementById("svar4");
const btn = document.getElementById("submit");
/* I början hade jag lite svårt att få igång allting då min terminal inte 
funkade som jag ville. Jag gjorde därför grund i html/css för att använda live server
som terminal. I början försökte jag länge hitta ett sätt att göra koden mindre,
då det nu blev flera input och output. Största problemet var också med drickan, jag
hittade inte något sätt att koppla ihop drickan tillsammans med värdet som jag lät input ta in
när jag skriver detta har jag fortarande ingen lösning på det. Har endast fått in siffran
utan någon string där jag beskriver det. Annars sammanställda priset och korvarnas andelar
har inte vart något problem. Lite små funderingar här å där men det har alltid gått framåt.
Du får säga till sen hur jag ska göra med terminalen om den går och få igång,
vet inte varför sökte runt en del på internet men vill inte fastna på det utan ville börja
med uppgifterna
*/
let vanligKorv = 20.95;
let veganskKorv = 31.95;
let dryck = 13.95;
let price = 0;


function test() {
   // output.innerHTML = "Då behövs " + input.value * 2 + " korvar för dessa elever";
    //output1.innerHTML = "Då behövs " + input1.value * 3 + " korvar för dessa elever";
    //output2.innerHTML = "Då behövs " + input2.value * 2 + " korvar för dessa elever";
   // output3.innerHTML = "Då behövs " + input3.value * 3 + " korvar för dessa elever";
    output.innerHTML = "Sammanlagt blir det " + (input.value * 2 + input1.value * 3) + " vanliga korvar, "
    + " Vilket är " + (input.value * 2 + input1.value * 3) / 8 + " Förpackningar";
    output1.innerHTML = "Sammanlagt blir det " + (input2.value * 2 + input3.value * 3)
     + " Vegetariska korvar, " + " Vilket är " + (input2.value * 2 + input3.value * 3) / 8 + " Förpackningar";
    output3.innerHTML = (input4.value) + " Drickor " 
    let drickPris = (input4.value) * 13.95;
    let vanligKorvpris = (input.value * 2 + input1.value * 3) / 8 * 20.95;
    let vegKorvpris = (input2.value * 2 + input3.value * 3) / 4 * 31.95;
   // let drickPris = input.value * 13.95 + input1.value * 13.95 + input2.value * 13.95 + input3.value * 13.95;
    price = drickPris, vegKorvpris, vanligKorvpris;
    output2.innerHTML = "Priset på varorna blir " + price + " kr";
    
}

btn.addEventListener("click", test);





