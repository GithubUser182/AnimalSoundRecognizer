function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gPyqU_5x-/model.json",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(){
    window.alert("This is not finished yet. Reload to stop this message.")
}