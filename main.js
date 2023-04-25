function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rtf7bKjBc/model.json', modelReady);
}


function modelReady(){
  classifier.classify( gotResults);
}


function gotResults(error, results) {
 console.log("resultados")
 if (error){
console.error(error)
}
else{
console.log (results) 
var r = Math.floor (Math.random()*255)+1
var b = Math.floor (Math.random()*255)+1
var g = Math.floor (Math.random()*255)+1
document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


img = document.getElementById('alien1')
img1 = document.getElementById('alien2')
img2 = document.getElementById('alien3')
img3 = document.getElementById('alien4')


yoda= 'the one and only 50 year old child.png';
yoda_gif="grogu.gif";
cat= "don pepe el ll.png";
cat_gif ="NeOONKaTTTttT.gif"
seaOtter="Sea-Otter-photo.jpg"
seaOtter_gif="sea otttttter.gif"


if (results[0].label == "") {
  img.src = yoda_gif;
  img1.src = cat;
  img2.src = seaOtter;
 
} else if (results[0].label == "") {
  img.src = yoda;
  img1.src = cat_gif;
  img2.src = maggie;
 
} else {
  img.src = yoda;
  img1.src = cat;
  img2.src = seaOtter_gif;
 
}



}
}

