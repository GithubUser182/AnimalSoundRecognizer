function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5nxePW-ye/model.json",modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_no1=Math.floor(Math.random() * 255)+1
        random_no2=Math.floor(Math.random() * 255)+1
        random_no3=Math.floor(Math.random() * 255)+1
        document.getElementById("result_label").innerHTML="I can hear - "+ results[0].label
        document.getElementById("result_accuracy").innerHTML="Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result_label").style.color="rgb("+random_no1+","+random_no2+","+random_no3+")"
        document.getElementById("result_accuracy").style.color="rgb("+random_no1+","+random_no2+","+random_no3+")"

        img=document.getElementById("listen")

        if(results[0].label=="moo"){
            img.src="cow.png"
        }else if(results[0].label=="meow"){
            img.src="cat.png"
        }else if(results[0].label=="Barking"){
            img.src="dog.png"
        }else if(results[0].label=="cluck"){
            img.src="chicke.png"
        }else{
            img.src="LISTENING.gif"
        }
    }
}