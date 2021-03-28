img = "";
status = "";

function setup() {
    canvas = createCanvas(540, 320);
    canvas.position(370, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
}

function preload() {
    img = loadImage("bed.jpg");
}

function draw() {
    image(img, 0, 0, 540, 320);

    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    rect(150, 160, 50, 75);
    text("Chair", 155, 170);

    fill("#013220");
    stroke("#013220");
    noFill();
    rect(175, 100, 290, 210);
    text("Bed", 180, 120);
}

function modelLoaded() {
    console.log("OBJECT DETECTOR NAME : COCOSSD, STATUS : MODEL SUCCESSFULY LOADED");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(results, error) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}