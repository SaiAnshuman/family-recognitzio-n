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
    Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oHi2xWOHW/model.json',modelLoaded);
    
    function modelLoaded(){
    
      console.log("Model Has Been Loaded!.");
    
    }

    function check(){

      captured_image = document.getElementById("captured_img");
      Classifier.classify(captured_image,gotResult);
    
    }
    
    function gotResult(error , results){
    
    if (error){
    
     console.log(error);
    
    }
    
    else{
    
    console.log(results);
    document.getElementById("result_obj_name").innerHTML = results[0].label;
    document.getElementById("result_obj_acc").innerHTML = results[0].confidence.toFixed(3);
    
    }
    
    }