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
let wylosowaneWyzwania = JSON.parse(localStorage.getItem("wylosowaneWyzwania")) || [];

// Funkcja sprawdzająca datę i resetująca historię
function sprawdzDate() {
    const dzisiaj = new Date().toDateString();
    const zapisanaData = localStorage.getItem("data");
    if (zapisanaData !== dzisiaj) {
        localStorage.setItem("data", dzisiaj);
        wylosowaneWyzwania = []; // Resetowanie wylosowanych wyzwań
        localStorage.setItem("wylosowaneWyzwania", JSON.stringify(wylosowaneWyzwania));
        historiaWyzwan = []; // Resetowanie historii ukończonych wyzwań
        localStorage.setItem("historiaWyzwan", JSON.stringify(historiaWyzwan));
    }
}

// Funkcja losująca wyzwanie
function losujWyzwanie() {
    sprawdzDate();

    // Sprawdzenie, czy wszystkie wyzwania zostały już wylosowane
    if (wylosowaneWyzwania.length >= wyzwania.length) {
        const przyciskLosowania = document.getElementById("losuj");
        przyciskLosowania.disabled = true; // Zablokowanie przycisku
        przyciskLosowania.title = "Wylosowałeś dziś już wszystkie wyzwania"; // Dodanie komunikatu
        alert("Gratulacje! Udało ci się ukończyć wszystkie zadania na dziś!"); // Wyświetlenie komunikatu
        return;
    }

    const wyzwanieElement = document.getElementById("wyzwanie");
    let czasTrwania = 2000;
    let interwal = 100;
    let czas = 0;

    // Usunięcie podkreślenia i zmiany koloru przy losowaniu nowego wyzwania
    wyzwanieElement.style.textDecoration = "none";
    wyzwanieElement.style.color = "black";

    const animacja = setInterval(() => {
        const index = Math.floor(Math.random() * wyzwania.length);
        wyzwanieElement.textContent = wyzwania[index];
        czas += interwal;

        if (czas >= czasTrwania) {
            clearInterval(animacja);
            let finalneWyzwanie;
            do {
                finalneWyzwanie = wyzwania[Math.floor(Math.random() * wyzwania.length)];
            } while (wylosowaneWyzwania.includes(finalneWyzwanie)); // Sprawdzanie, czy wyzwanie już zostało wylosowane

            wyzwanieElement.textContent = finalneWyzwanie;
            wylosowaneWyzwania.push(finalneWyzwanie); // Dodanie wyzwania do listy wylosowanych
            localStorage.setItem("wylosowaneWyzwania", JSON.stringify(wylosowaneWyzwania));
            document.getElementById("ukonczone").style.display = "inline-block";

            // Sprawdzenie ponownie, czy wszystkie wyzwania zostały wylosowane
            if (wylosowaneWyzwania.length >= wyzwania.length) {
                const przyciskLosowania = document.getElementById("losuj");
                przyciskLosowania.disabled = true; // Zablokowanie przycisku
                przyciskLosowania.title = "Wylosowałeś dziś już wszystkie wyzwania"; // Dodanie komunikatu
                alert("Gratulacje! Udało ci się ukończyć wszystkie zadania na dziś!"); // Wyświetlenie komunikatu
            }
        }
    }, interwal);
}

// Modyfikacja funkcji ukonczoneWyzwanie
function ukonczoneWyzwanie() {
    const wyzwanie = document.getElementById("wyzwanie").textContent;
    if (wyzwanie && !historiaWyzwan.includes(wyzwanie)) { // Sprawdzenie, czy wyzwanie nie jest już w historii
        historiaWyzwan.push(wyzwanie);
        localStorage.setItem("historiaWyzwan", JSON.stringify(historiaWyzwan)); // Zapis historii do localStorage
        document.getElementById("wyzwanie").style.textDecoration = "underline";
        document.getElementById("wyzwanie").style.color = "green";
        alert("Gratulacje! Wyzwanie wykonane 🎉");

        // Wyświetlenie animacji
        const animacjaElement = document.getElementById("animacja");
        animacjaElement.style.display = "block"; // Pokazanie kontenera z animacją

        // Załadowanie animacji Lottie
        const animacja = lottie.loadAnimation({
            container: animacjaElement, // Kontener na animację
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'path/Animation - 1745565383900.json' // Ścieżka do pliku JSON z animacją
        });

        // Ukrycie animacji po zakończeniu
        animacja.addEventListener('complete', () => {
            animacjaElement.style.display = "none";
        });
    } else if (wyzwanie) {
        alert("To wyzwanie zostało już ukończone.");
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