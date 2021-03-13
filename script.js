let x = 1;
let y = 1;
let easing = 0.005;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
  }
  
  function draw() {
    background(100);
    
    let dx = mouseX - x - width / 2;
    x += dx * easing;
  
    let dy = mouseY - y - height / 2;
    y += dy * easing;
    
    spotLight(224, 27, 93, x, y, 6000, 0, 0, -1);
    
    rect(windowWidth / -2, windowHeight / -2, windowWidth, windowHeight);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }


let message = "(put on headphones...)";

setTimeout(function() {
    $(".hidden").html(message).fadeIn(1200).removeClass("hidden");
    console.log(message);
    let messageTimer = setInterval(function() {
        if (message == "(put on headphones...)") {
            message = "(...click play)"
            $(".closeYourEyes").fadeOut(1200, function() {
                $(".closeYourEyes").html(message).fadeIn(1200)});
        } else if (message == "(...click play)") {
            message = "(...and close your eyes)"
            $(".closeYourEyes").fadeOut(1200, function() {
                $(".closeYourEyes").html(message).fadeIn(1200)});
        } else if (message == "(...and close your eyes)") {
            message = "stop"
            $(".closeYourEyes").fadeOut(1200);
        } else {
            clearInterval(messageTimer);
        }
    }, 5000);
    messageTimer;
 }, 3000)


function playAudio(){
    $("button").prop("disabled", true);

    // Background audio
    let gondry = document.getElementById('gondry');
    let goodFortune = document.getElementById('goodFortune');
    let kimchiJigae = document.getElementById('kimchiJigae');
    let shower = document.getElementById('shower');

    // Sound clips
    let notFeelingWell = document.getElementById('notFeelingWell');
    let lateForSchool = document.getElementById('lateForSchool')
    let whereAreYouGoing = document.getElementById('whereAreYouGoing');
    let areYouSleeping = document.getElementById('areYouSleeping');
    let subwayInKorea = document.getElementById('subwayInKorea');
    let dinnerIsReady = document.getElementById('dinnerIsReady');
    let eating = document.getElementById('eating');
    let needRice = document.getElementById('needRice');
    let learningKorean = document.getElementById('learningKorean');
    let goodFortune2 = document.getElementById('goodFortune2');
    let kimchiJigae2 = document.getElementById('kimchiJigae2');
    let shower2 = document.getElementById('shower2');
    
    // Background and Sound Arrays
    // Extra backgrounds: goodFortune, kimchiJigae, shower
    let backgrounds = [gondry]; 
    let sounds = [notFeelingWell, lateForSchool, whereAreYouGoing, areYouSleeping, subwayInKorea, dinnerIsReady, eating, needRice, learningKorean, goodFortune2, kimchiJigae2, shower2];

    // Minute one
    let minOneSound = Math.floor(Math.random() * sounds.length);
    backgrounds[Math.floor(Math.random() * backgrounds.length)].play();
    sounds[minOneSound].play();
    console.log(sounds.length);

    sounds.splice(minOneSound, 1);
    console.log(sounds.length);

    // Minute two
    let minTwoWait = (Math.floor(Math.random() * 50) + 51) * 1000;
    setTimeout(function(){
        let minTwoSound = Math.floor(Math.random() * sounds.length);
        sounds[minTwoSound].play();
        console.log("two");
        sounds.splice(minTwoSound, 1);
    }, minTwoWait);
    
    
    // Minute three
    let minThreeWait = (Math.floor(Math.random() * 50) + 101) * 1000;
    setTimeout(function(){
        let minThreeSound = Math.floor(Math.random() * sounds.length);
        sounds[minThreeSound].play();
        console.log("three");
        sounds.splice(minThreeSound, 1);
    }, minThreeWait);
    

    // Minute four
    let minFourWait = (Math.floor(Math.random() * 50) + 151) * 1000;
    
    setTimeout(function(){
        let minFourSound = Math.floor(Math.random() * sounds.length);
        sounds[minFourSound].play();
        console.log("four");
        sounds.splice(minFourSound, 1);
    }, minFourWait);
    

    // Minute five
    let minFiveWait = (Math.floor(Math.random() * 50) + 201) * 1000;
    setTimeout(function(){
        let minFiveSound = Math.floor(Math.random() * sounds.length);
        sounds[minFiveSound].play();
        console.log("five");
        sounds.splice(minFiveSound, 1);
    }, minFiveWait);

    // Minute six
    let minSixWait = (Math.floor(Math.random() * 50) + 251) * 1000;
    setTimeout(function(){
        let minSixSound = Math.floor(Math.random() * sounds.length);
        sounds[minSixSound].play();
        console.log("six");
        sounds.splice(minSixSound, 1);
        $("button").prop("disabled", false);
    }, minSixWait);
};

