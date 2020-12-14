Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
    
    
    });
    
    Cam = document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function takeSnap(){
    
    Webcam.snap(function(data_uri){
    
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    
    });
     
    
    }
    
    console.log("ml5 version: " + ml5.version);
    Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JBpWijEn8/',modelLoaded);
    
    function modelLoaded(){
    
      console.log("Model Has Been Loaded!.");
    
    }