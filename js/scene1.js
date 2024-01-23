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

/**
 * Overall function for Clickevent
 */
function myFunction() {
    startScene1();
    //startScene2();
};

scene1.addEventListener("markerFound", (e) => {
    document.getElementById("turnPage").style.visibility = 'hidden';
    scene1Detected = true;
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
            location.open("scene2.html");
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
 
function startScene2() {
    if (scene2Detected && !scene2Over) {
        if (text2[b] == null) {
            document.getElementById("turnPage").style.visibility = 'visible';
            scene2Over = true;
        }
        document.getElementById("text").textContent = text2[b];
        b += 1;
    };
};*/