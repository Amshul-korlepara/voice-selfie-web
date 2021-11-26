var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function speechtotext(){
document.getElementById("textbox").innerHTML="";
recognition.start();

}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speech();
        
    }
    
    };

function speech(){
synth=window.speechSynthesis;
data="taking your selfie in five seconds";
say_this=new SpeechSynthesisUtterance(data);
synth.speak(say_this);
Webcam.attach(camera);
setTimeout(function(){
    take_selfie();
    download();
},5000);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
var camera= document.getElementById("camera");

function take_selfie(){
Webcam.snap(function(clicked_image){
    document.getElementById("result").innerHTML="<img  id='selfie' src='"+clicked_image+"'>";
});
}

function download(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}

