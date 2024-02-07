//overall variables
let scenes = document.querySelectorAll('a-marker'); //gets all models from attached marker
let textElement = document.getElementById("text");

//scene1 variables
let scene1Over = false;
let scene1Detected = false;
let scene1 = scenes[0];
var a = 0;
var text1 = ["Das Ziel war Amerika. ▸"
    , "102 Passagiere hofften auf einen Neuanfang im neuen Land. ▸"
    , "Auf dem Schiff waren Familien, Männer, Frauen aber auch elternlose Kinder. ▸"
    , "Diese Gruppe legte die Grundlage für die heutige USA. ▸"];

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene1();
};

/**
 * If marker is found, than the text for turning page disappears.
 */
scene1.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene1Detected = true;
});

/**
 * Exchanges differents models at specific text parts
 */
function startScene1() {
    if (scene1Detected && !scene1Over) {
        //if scene is over turn page appears and new side is loaded
        if (text1[a] == null) {
            scene1.removeChild(scene1.firstElementChild);
            document.getElementById("turnPage").style.visibility = 'visible';
            scene1Over = true;
            window.open("scene2.html", "_self");
        }

        //after second text it exchanges the models of the marker
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