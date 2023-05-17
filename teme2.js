//  1. Scrie o funcție care primește un număr și
//  returnează true dacă este par, altfel false.

function iseven(number) {
  return true ? number % 2 == 0 : false;
}

//  2. Scrie o funcție care primește două numere și
//  returnează suma lor inmultita cu 0.1

function timesPointOne(number1, number2) {
  return (number1 + number2) * 0.1;
}

//  3. Scrie o functie care calculeaza procentajul dintr-un numar.
//  Procentajul si numarul se introduc ca parametrii.

function perCent(number3, percent) {
  return percent * 0.01 * number3;
}

//  4. Scrie o funcție care primește trei numere și
//  returnează cel mai mare dintre ele.

function greatestNumber(number4, number5, number6) {
  return number4 > number5 && number4 > number6
    ? number4
    : number5 > number6
    ? number5
    : number6;
}

//  5. Scrie o funcție care primește un număr și
//  returnează suma tuturor numerelor întregi de la 0 până la acel număr.

function sumUntil(number7) {
  var sum = 0;
  for (let i = 0; i <= number7; i++) {
    sum += i;
  }
  return sum;
}

//  6. Scrie o funcție care primește un număr și
//  returnează true dacă este prim, altfel false.

function isPrime(number8) {
  if (number8 <= 0) {
    return false;
  }

  for (let i = 2; i * i <= number8; i++) {
    if (number8 % i == 0) {
      return false;
    }
  }
  return true;
}

// 7. Scrie o funcție care primește ca parametru o valoare numerica,
//  iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0.
//  Funcția trebuie să returneze un mesaj diferit în fiecare caz.

function compTonull(number9) {
  var str1 = "mai mic decat zero";
  var str2 = "mai mare sau egal cu zero";
  return number9 < 0 ? str1 : str2;
}

//  8. Scrie o functie care afiseaza toate numerele
//  pare dintre un min si maxim dat ca parametru

function showEven(minim, maxim) {
  if (minim >= maxim) {
    console.log("eroare");
  }
  for (let i = minim; i <= maxim; i++) {
    if (i % 2 == 0) {
      console.log(`${i} - `);
    }
  }
}

//  9. Scrie o functie care primeste 3 numere si
//  afiseaza sir crescator cu acele numere.

function orderAscending(a, b, c) {
  if (a > b) {
    if (b > c) {
      return [c, b, a];
    } else if (a > c) {
      return [b, c, a];
    } else {
      return [b, a, c];
    }
  } else {
    if (a > c) {
      return [c, a, b];
    } else if (b > c) {
      return [a, c, b];
    } else {
      return [a, b, c];
    }
  }
}

//  10. Scrie o functie care primeste 3 numere si
//  afiseaza sir descrescator cu acele numere.

function orderDescending(a, b, c) {
  if (a < b) {
    if (b < c) {
      return [c, b, a];
    } else if (a < c) {
      return [b, c, a];
    } else {
      return [b, a, c];
    }
  } else {
    if (a < c) {
      return [c, a, b];
    } else if (b < c) {
      return [a, c, b];
    } else {
      return [a, b, c];
    }
  }
}

//  11. Scrie o functie care primeste 1 numar si
//  afiseaza tabla inmultirii pentru acel numar.

function multTable(number) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

//  12. Scrie o functie care primeste 3 parametrii:
//  nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera,
//  iar la final afiseaza cate locuri libere au ramas (total).

function seatAtTable(persoane, locuri, mese) {
  if (persoane == locuri || (persoane <= locuri && mese <= persoane)) {
    console.log(
      `Persoane: ${persoane} / Mese: ${mese} = ${
        persoane / mese
      } Persoane per masa`
    );
    console.log(`Au ramas: ${persoane % mese} locuri libere`);
  } else if (locuri <= persoane) {
    console.log(
      `Sunt ${locuri} locuri la ${mese} mese. Numarul de persoane per masa este de ${locuri} persoane per masa`
    );
  }
}

//  13. Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata.
//  Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.

function funcToCall(num) {
  if (num <= 0 || num > 12) {
    console.log(`Numar incorect.`);
  }
  switch (num) {
    case 1:
      console.log(iseven());
      break;
    case 2:
      console.log(timesPointOne(4, 5));
      break;
    case 3:
      console.log(perCent(3, 5));
    default:
      break;
  }
}

//  14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.

function age(yearOfBirth) {
  return 2023 - yearOfBirth;
}

//  15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru
//  (caine sau pisica / daca alegi si altceva, go for it).

function dogYears(age) {
  console.log(`Your dog is ${age * 7} years old`);
}
