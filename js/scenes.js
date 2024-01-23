//overall variables
let scenes = document.querySelectorAll('a-marker');
let textElement = document.getElementById("text");

//scene1 variables
let scene1Over = false;
let scene1Detected = false;
let scene1 = scenes[0];
var a = 0;
var text1 = ["Das Ziel war Amerika. ▸"
    , "102 Passagiere hofften auf einen Neuanfang im neuen Land. ▸"
    , "Auf dem Schiff waren Familien, Männer, Frauen aber auch elternlose Kinder. ▸"
    , "Diese Gruppe legte die Grundlage für die heutige USA."];

//scene2 variables
let scene2Over = false;
let scene2Detected = false;
let scene2 = scenes[1];
var b = 1;
var text2 = ["Alle Passagiere tranken Bier auf dem Schiff. ▸"
    , "Das Wasser war nicht sauber genug. ▸"
    , "Es gab auch Wein zum Trinken. ▸"
    , "Viele tranken Zitronensaft, um die Krankheit Skorbut nicht zu bekommen. ▸"
    , "Im Getränk Cold Duck auf der Karte ist beides zu finden: Wein und Zitronensaft."];

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene1();
    startScene2();
};

scene1.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene1Detected = true;
});

scene2.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene2Detected = true;
    document.getElementById("text").textContent = text2[0];
});

/**
 * scene1 function
 */
function startScene1() {
    if (scene1Detected && !scene1Over) {
        console.log("heyho");
        if (text1[a] == null) {
            scene1.removeChild(scene1.firstElementChild);
            document.getElementById("turnPage").style.visibility = 'visible';
            scene1Over = true;
        }
        if (a == 1) {
            scene1.removeChild(scene1.firstElementChild);
            scene1.removeChild(scene1.firstElementChild);
            scene1.removeChild(scene1.firstElementChild);
            let group = document.createElement('a-entity');
            group.setAttribute('position', '0 0 0');
            group.setAttribute('rotation', '0 0 0');
            group.setAttribute('scale', '1 1 1');
            group.setAttribute('animation-mixer', 'clip: *; loop:repeat');
            group.setAttribute('gltf-model', '#group');
            scene1.appendChild(group);
        }
        document.getElementById("text").textContent = text1[a];
        a += 1;
    };
};

/**
 * scene2 function
 */
function startScene2() {
    if (scene2Detected && !scene2Over) {
        if (text2[b] == null) {
            document.getElementById("turnPage").style.visibility = 'visible';
            scene2Over = true;
        }
        document.getElementById("text").textContent = text2[b];
        b += 1;
    };
};