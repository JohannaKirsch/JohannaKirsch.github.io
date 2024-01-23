//overall variables
let scene3 = document.querySelector('a-marker');
let textElement = document.getElementById("text");

//scene3 variables
let scene3Over = false;
let scene3Detected = false;
var c = 1;
var text2 = ["Alle Passagiere tranken Bier auf dem Schiff. ▸"
    , "Das Wasser war nicht sauber genug. ▸"
    , "Es gab auch Wein zum Trinken. ▸"
    , "Viele tranken Zitronensaft, um die Krankheit Skorbut nicht zu bekommen. ▸"
    , "Im Getränk Cold Duck auf der Karte ist beides zu finden: Wein und Zitronensaft."];

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene3();
};

scene3.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene3Detected = true;
    document.getElementById("text").textContent = text2[0];
});

/**
 * scene3 function
 */
function startscene3() {
    if (scene3Detected && !scene3Over) {
        if (text2[c] == null) {
            document.getElementById("turnPage").style.visibility = 'visible';
            scene3Over = true;
            window.open("scene4.html", "_self");
        }
        document.getElementById("text").textContent = text2[c];
        c += 1;
    };
};