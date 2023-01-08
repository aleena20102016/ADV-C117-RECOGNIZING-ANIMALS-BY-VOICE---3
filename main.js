function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DdGhOzPTK/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
  }

var barking = 0;
var meowing = 0;
var roaring = 0;
var mooing = 0;

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    

    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ result[0].label;
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById("ear");

    if (result[0].label=="barking") {
        img.src = 'bark.gif';
        barking = barking+1;
    } else if (result[0].label=="meowing") {
        img.src = 'cat.gif';
        meowing = meowing+1;
    } else if (result[0].label=="roaring") {
        img.src = 'roar.gif';
        roaring = roaring+1;
    } else if (result[0].label=="mooing") {
        img.src = 'mooing.gif';
        mooing = mooing+1;
    } else {
        img.src = 'ear.png';
    }


    }
}