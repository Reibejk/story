//Setup website here
let hero = document.querySelector("#hero");
let villain = document.querySelector("#villain");
let lightning = document.querySelector("#lightning");

//Setup animation code here
let lightningStart = {"left": "290px"};
let lightningEnd = {"left": "900px"};
let options = {"duration": 1000};

let hitTheVillain = () => {
    let villainStart = {
        transform: 'scale(1)',
    };
    let villainEnd = {
        transform: 'scale(0)',
    };
    let options = {"duration": 1500};
    villain.animate([villainStart, villainEnd], options);
}

//Run animation code here
lightning.animate([lightningStart, lightningEnd], options).onfinish = hitTheVillain;

