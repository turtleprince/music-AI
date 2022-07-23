var song = "";
var leftWristScore = "";
var rightWristScore = "";
var leftWrist = "";
var rightWrist = "";


function preload(){
    song = loadSound("music.mp3");
    
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', got_results);
}


function modelloaded() {
    console.log("modelloaded");
}


function got_results(results) {

    if (results.length > 0) {
        //console.log(results);

        leftWrist_Score = results[0].pose.keypoints[9].score;
        rightWrist_Score = results[0].pose.keypoints[10].score;
        console.log("keypoints Score : " + leftWrist_Score + " , "+ rightWrist_Score);

        X_leftWrist = results[0].pose.leftWrist.x;
        Y_leftWrist = results[0].pose.leftWrist.y;
        console.log("leftWrist : " + X_leftWrist +" , " + Y_leftWrist);

        
        X_rightWrist = results[0].pose.rightWrist.x;
        Y_rightWrist = results[0].pose.rightWrist.y;
        console.log("RightWrist : " + X_rightWrist +" , " + Y_rightWrist);

    }


}


function draw(){
    
    image(video,0,0,600,500);
}

function music_play(){
    song.play();
}