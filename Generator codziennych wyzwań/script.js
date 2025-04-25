// Tablica z predefiniowanymi wyzwaniami
const wyzwania = [
    "Zrób 10 pompek",
    "Napisz komuś miły komentarz",
    "Spędź godzinę bez telefonu",
    "Przeczytaj 10 stron książki",
    "Zrób 15 przysiadów",
    "Wyjdź na spacer na 30 minut",
    "Naucz się 5 nowych słów w obcym języku",
    "Zrób porządek na biurku",
    "Wypij 2 litry wody",
    "Zaplanuj swój dzień",
    "Zadzwoń do bliskiej osoby",
    "Zrób 20 brzuszków",
    "Pomóż komuś w potrzebie",
    "Zjedz zdrowy posiłek",
    "Zrób coś kreatywnego",
    "Posprzątaj jeden pokój",
    "Zrób 5 minut medytacji",
    "Zapisz 3 rzeczy, za które jesteś wdzięczny",
    "Wyłącz telefon na godzinę",
    "Zrób coś, co odkładałeś od dawna"
];

// Przechowywanie historii ukończonych wyzwań
let historiaWyzwan = JSON.parse(localStorage.getItem("historiaWyzwan")) || [];

// Funkcja sprawdzająca datę i resetująca historię
function sprawdzDate() {
    const dzisiaj = new Date().toDateString();
    const zapisanaData = localStorage.getItem("data");
    if (zapisanaData !== dzisiaj) {
        localStorage.setItem("data", dzisiaj);
        localStorage.removeItem("wyzwanieDnia");
        historiaWyzwan = [];
        localStorage.setItem("historiaWyzwan", JSON.stringify(historiaWyzwan));
    }
}


// Modyfikacja funkcji losujWyzwanie
function losujWyzwanie() {
    sprawdzDate();
    if (localStorage.getItem("wyzwanieDnia")) {
        alert("Wyzwanie na dziś zostało już wylosowane!");
        document.getElementById("wyzwanie").textContent = localStorage.getItem("wyzwanieDnia");
        document.getElementById("ukonczone").style.display = "inline-block";
        return;
    }

    const wyzwanieElement = document.getElementById("wyzwanie");
    let czasTrwania = 2000;
    let interwal = 100;
    let czas = 0;

    const animacja = setInterval(() => {
        const index = Math.floor(Math.random() * wyzwania.length);
        wyzwanieElement.textContent = wyzwania[index];
        czas += interwal;

        if (czas >= czasTrwania) {
            clearInterval(animacja);
            const finalneWyzwanie = wyzwania[Math.floor(Math.random() * wyzwania.length)];
            wyzwanieElement.textContent = finalneWyzwanie;
            localStorage.setItem("wyzwanieDnia", finalneWyzwanie);
            document.getElementById("ukonczone").style.display = "inline-block";
        }
    }, interwal);
}

// Funkcja oznaczająca wyzwanie jako ukończone
function ukonczoneWyzwanie() {
    const wyzwanie = document.getElementById("wyzwanie").textContent;
    if (wyzwanie) {
        historiaWyzwan.push(wyzwanie);
        localStorage.setItem("historiaWyzwan", JSON.stringify(historiaWyzwan)); // Zapis historii do localStorage
        document.getElementById("wyzwanie").style.textDecoration = "underline";
        document.getElementById("wyzwanie").style.color = "green";
        alert("Gratulacje! Wyzwanie wykonane 🎉");
    }
}

// Funkcja pokazująca historię ukończonych wyzwań
function pokazHistorie() {
    if (historiaWyzwan.length > 0) {
        alert("Historia ukończonych wyzwań:\n" + historiaWyzwan.join("\n"));
    } else {
        alert("Brak ukończonych wyzwań.");
    }
}

// Sprawdzenie daty przy załadowaniu strony
sprawdzDate();