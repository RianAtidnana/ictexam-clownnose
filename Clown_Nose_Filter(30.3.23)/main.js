var canvas;
var video;
var noseX=0;
var noseY=0;

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("poseNet intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log("x ="+ results[0].pose.nose.x);
        noseX=results[0].pose.nose.x;
        console.log("y ="+ results[0].pose.nose.y);
        noseY=results[0].pose.nose.y;
    }
}
function draw() {
    image(video,0,0,600,450);
    fill(255,0,0);
    circle(noseX-20,noseY-20,40,40);
    
}

function takeSnapshot() {
    save("snapshot.jpg");

}

