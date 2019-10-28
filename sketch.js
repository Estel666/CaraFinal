let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('white');
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {

    micLevel = mic.getLevel();

    mov = map(micLevel, 0, 1, 10, 300);

    push();

    rectMode(CENTER);
    translate

    //cara
    fill('#FCF0D7');
    noStroke();
    ellipse(windowWidth / 2, windowHeight / 2, width, height);

    //ull esquerre
    fill('#607DFF')
    noStroke();
    ellipse(windowWidth / 3, windowHeight / 3, 160, 240 + mov);
    fill('white')
    noStroke();
    ellipse(windowWidth / 3, windowHeight / 3, 120, 200 + mov);
    fill('#2E2E2E');
    noStroke();
    ellipse(windowWidth / 3, windowHeight / 3, 52, 140);

    //ull dret
    fill('#607DFF');
    noStroke();
    ellipse(windowWidth / 1.5, windowHeight / 3, 160, 240 + mov);
    fill('white');
    noStroke();
    ellipse(windowWidth / 1.5, windowHeight / 3, 120, 200 + mov);
    fill('#2E2E2E');
    noStroke();
    ellipse(windowWidth / 1.5, windowHeight / 3, 52, 140);

    //nas
    fill('#BB0000');
    ellipse(windowWidth / 2, windowHeight / 2, 130, 120);
    fill('#FF2929');
    ellipse(windowWidth / 2, windowHeight / 2, 110, 100);

    //cella dreta
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(windowWidth / 1.5, windowHeight / 5, 120, 100 + mov, PI, 0);
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(windowWidth / 1.5, windowHeight / 5, 120, 120 + mov, PI, 0);

    //cella esquerre
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(windowWidth / 3, windowHeight / 5, 120, 100 + mov, PI, 0);
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(windowWidth / 3, windowHeight / 5, 120, 120 + mov, PI, 0);

    //boca
    stroke('#FF2929');
    strokeWeight(80);
    arc(windowWidth / 2, windowHeight / 1.5, 320, 200 + mov, 0, PI);

    //dents
    stroke(255);
    strokeWeight(30);
    arc(windowWidth / 2, windowHeight / 1.5, 310, 200 + mov, 0, PI);


    //pel esquerre
    fill('#FF2929');
    noStroke();
    ellipse(windowWidth / 5, windowHeight / 10, 100, 100)
    ellipse(windowWidth / 7, windowHeight / 7, 100, 100)
    ellipse(windowWidth / 6, windowHeight / 13, 100, 100)

    //pel dret
    fill('#FF2929');
    noStroke();
    ellipse(windowWidth / 1.25, windowHeight / 10, 100, 100)
    ellipse(windowWidth / 1.2, windowHeight / 13, 100, 100)
    ellipse(windowWidth / 1.17, windowHeight / 7, 100, 100)

    //galta esquerre
    fill('#FF2929');
    noStroke();
    ellipse(windowWidth / 4.4, windowHeight / 1.8, 40, 60);

    //galta dreta
    fill('#FF2929');
    noStroke();
    ellipse(windowWidth / 1.3, windowHeight / 1.8, 40, 60);
    pop();
}

function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
