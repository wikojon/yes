song=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload()
{
    song = loadSound("music.mp3")
   
}

function setup()
{
    canvas =createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)//poseNet has 2 items in it, one is input the other one is output
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet ready")
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
    song.setVolume(1);//this will set volume to the max
    song.rate(1);//this will set speed normal
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY)
    }
}

