//overall variables
let scene3 = document.querySelector('a-marker');
let textElement = document.getElementById("text");

//scene3 variables
let scene3Over = false;
let scene3Detected = false;
var c = 1;
var text3 = ["Auf dem Schiff gab es besonders haltbares Essen. ▸"
    , "Dazu gehörte gepökeltes Schweinefleisch, eingelegte Lebensmittel und sogenannte „Hard Tacks“. ▸"
    , "Auch gab es Fisch. ▸"
    , "Die meisten aßen nichts. ▸"
    , "Das Schiff machte sie seekrank. ▸"];

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene3();
};

/**
 * If marker is found, than the text for turning page disappears.
 */
scene3.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene3Detected = true;
    document.getElementById("text").textContent = text3[0];
});


/**
 * loads the different texts
 * if scene is over new side is loaded
 */
function startScene3() {
    if (scene3Detected && !scene3Over) {
        if (text3[c] == null) {
            scene3Over = true;
            window.open("scene4.html", "_self");
        }
        document.getElementById("text").textContent = text3[c];
        c += 1;
    };
};