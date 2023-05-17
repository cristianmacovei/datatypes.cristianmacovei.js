//Operatori aritmetici

//  1. Scrieți un program JavaScript care adună două numere și afișează rezultatul în consolă.

// var num1 = 2;
// var num2 = 3;
// var result = num1+num2;
// console.log(result);

//  SAU 

function add(num1, num2) {
    var result = num1 + num2;
    console.log(result);
    return result;
}

//  2. Scrieți un program JavaScript care calculează media a trei numere și afișează rezultatul în consolă.

// var num1 = 2;
// var num2 = 24;
// var num3 = 25;
// var result = (num1+num2+num3)/3;

// SAU
function avg(num1,num2,num3) {
    var average = (num1 + num2 + num3)/3;
    console.log(axverage);
    return average;
}

//Operatori de atribuire

//  1. Scrieți un program JavaScript care adaugă 5 la o variabilă numită "x" și afișează rezultatul în consolă.

    // var constanta = 1243144;
    // var rezultat = 5 + constanta;
    // console.log(rezultat);

//  SAU
function addFive(constant) {
    var fiveAdded = 5 + constant;
    console.log(fiveAdded);
    return fiveAdded;
}

//  2. Scrieți un program JavaScript care atribuie valoarea 10 variabilei "y" și apoi adaugă 2 la aceasta utilizând operatorul "+=".

function func1(y) {
    var x = y + 10;
    x += 2;
    console.log(`${x}`);
    return x; 
}

//Operatori de comparare

//  1. Scrieți un program JavaScript care compară două numere și afișează "A este mai mare decât B" dacă primul număr este mai mare decât al doilea, sau "B este mai mare sau egal cu A" dacă al doilea număr este mai mare sau egal cu primul.

function compare(a,b) {
    return a > b ? `A este mai mare decat B` : `B este mai mare sau egal cu A`;
}

//2. Scrieți un program JavaScript care verifică dacă o variabilă numită "varsta" este mai mare sau egală cu 18 și afișează un mesaj corespunzător în consolă, în funcție de rezultat.

function canVote(age) {
    return age > 18 ? `Can vote and drink beer` : `Sorry, you can only buy guns`;
}

//Operatori logici

//  1. Scrieți un program JavaScript care verifică dacă două condiții sunt adevărate utilizând operatorul "&&" (și logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.

function getsComplicated(g) {
    while (g != null) {
        return ((g%2==0) && (g%5==0)) ? `Is even and mult. of 5` : `Is either not even or not a mult. of 5`;
    }
    
}

//  2. Scrieți un program JavaScript care verifică dacă o condiție este adevărată utilizând operatorul "!" (nu logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.

function returnTrue() {
    return true;
}

function checkIfNot() {
    return !returnTrue;
}
