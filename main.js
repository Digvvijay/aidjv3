lwy=0;
rwy=0;
bo="";
be="";
function preload()
{
    bo=loadSound("Bones.mp3");
    be=loadSound("Believer.mp3");
}
function setup()
{
    cv=createCanvas(550,500);
    cv.position(560,100);
    video=createCapture(VIDEO);
    video.center();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw()
{
    image(video,560,500,550,500);
}

function modelLoaded()
{
    console.log('posenet is initialised');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lwy=results[0].pose.leftWrist.y;
        rwy=results[0].pose.rightWrist.y;
    }
}
