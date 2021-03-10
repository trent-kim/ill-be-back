

// let backgrounds = [$("#gondry")];
// let sounds = [$("#notFeelingWell")];


// function playAudio(){
//     let ambience = backgrounds[0]
//     let soundOne = sounds[0]

//     ambience.playAudio();
//     soundOne.playAudio();
// }


function playAudio(){
    let gondry = document.getElementById('gondry');
    let goodFortune = document.getElementById('goodFortune');
    
    let notFeelingWell = document.getElementById('notFeelingWell');
    let lateForSchool = document.getElementById('lateForSchool')
    let whereAreYouGoing = document.getElementById('whereAreYouGoing');
    let areYouSleeping = document.getElementById('areYouSleeping');
    
    let backgrounds = [gondry, goodFortune];
    let sounds = [notFeelingWell, lateForSchool, whereAreYouGoing, areYouSleeping];

    // $("button").html("working");
    // console.log($("#audio1"));
    // console.log(document.getElementById('audio1'));
    

    backgrounds[Math.round(Math.random() * backgrounds.length)].play();
    sounds[Math.round(Math.random() * sounds.length)].play();

    setTimeout(function(){
        sounds[Math.round(Math.random() * sounds.length)].play();
    }, 80000);
}

