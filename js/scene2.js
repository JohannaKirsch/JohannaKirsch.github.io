//overall variables
let scene2 = document.querySelector('a-marker');
let textElement = document.getElementById("text");

//scene2 variables
let scene2Over = false;
let scene2Detected = false;
var b = 1;
var text2 = ["Alle Passagiere tranken Bier auf dem Schiff. ▸"
    , "Das Wasser war nicht sauber genug. ▸"
    , "Es gab auch Wein zum Trinken. ▸"
    , "Viele tranken Zitronensaft, um die Krankheit Skorbut nicht zu bekommen. ▸"
    , "Im Getränk Cold Duck auf der Karte ist beides zu finden: Wein und Zitronensaft. ▸"];

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene2();
};

/**
 * If marker is found, than the text for turning page disappears.
 */
scene2.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene2Detected = true;
    document.getElementById("text").textContent = text2[0];
});

/**
 * loads the different texts
 * if scene is over turn page appears and new side is loaded
 */
function startScene2() {
    if (scene2Detected && !scene2Over) {
        if (text2[b] == null) {
            document.getElementById("turnPage").style.visibility = 'visible';
            scene2Over = true;
            window.open("scene3.html", "_self");
        }
        document.getElementById("text").textContent = text2[b];
        b += 1;
    };
};