// Exercițiul 1: Calcularea sumei vârstelor
// Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
// Calculează suma vârstelor tuturor studenților și returnează rezultatul.

var studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 },

  getTotalAge: function () {
    var sum =
      this.student1.varsta + this.student2.varsta + this.student3.varsta;
    return sum;
  },
};

// Exercițiul 2: Concatenarea numelor de familie
// Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
// Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.

var familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" },

  concatenateNames: function () {
    var fullName1 = `${this.familie1.numeTata} ${this.familie1.numeMama}`;
    var fullName2 = `${this.familie2.numeTata} ${this.familie2.numeMama}`;

    return fullName1 + " " + fullName2;
  },
};

// Exercițiul 3: Găsirea celui mai mare punctaj
// Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
// Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.

var elevi = {
  elev1: { nume: "Maria", punctaj: 80 },
  elev2: { nume: "Alex", punctaj: 95 },
  elev3: { nume: "Andrei", punctaj: 85 },

  findMax: function () {
    return Math.max(this.elev1.punctaj, this.elev2.punctaj, this.elev3.punctaj);
  },
};

// Exercițiul 4: Verificarea existenței unui email într-un obiect
// Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
// Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.

var utilizatori = {
  utilizator1: { nume: "John", email: "john@example.com" },
  utilizator2: { nume: "Alice", email: "alice@example.com" },

  checkForEmail: function () {
    let email2 = prompt("Ce email cautati? ");

    return (
      email2 === this.utilizator1.email || email2 === this.utilizator2.email
    );
  },
};

// Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
// Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
// Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.

var angajati = {
  departament1: { nume: "John", varsta: 30 },
  departament2: { nume: "Alice", varsta: 35 },
  departament3: { nume: "Mark", varsta: 28 },
};
function totalAngajati(angajati) {
  return Object.keys(angajati).length;
}

// Exercițiul 6: Verificarea existenței unui departament într-un obiect
// Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
// Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.

var companie = {
  departamentIT: { nume: "John", vechime: 5 },
  departamentVanzari: { nume: "Alice", vechime: 3 },
};
function checkForDepartment(companie, department) {
  return department in companie;
}

// Exercițiul 7: Verificarea existenței unei calificări într-un obiect
// Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
// Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.

var candidati = {
  candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] },
};

function qualifications(candidati, calif) {
  for (let candKey in candidati) {
    const candidat = candidati[candKey];
    if (candidat.calificari.includes(calif)) {
      return true;
    }
  }
  return false;
}
