function key(event) {

    if (event.which == 39) { //Arrow key right functions
        if (bw == 0) {
            bw = setInterval(B, 100);
            fl();
            lm = setInterval(logmove, 100);
            f2();
            lm2 = setInterval(logmove2, 100);
            f3();
            lm3 = setInterval(logmove3, 100);
            f4();
            lm4 = setInterval(logmove4, 100);
            f5();
            lm5 = setInterval(logmove5, 100);
            sw = setInterval(updatescore, 100);
            sc = setInterval(scorecheck, 100);
            document.getElementById("ArrowKeyPress").style.visibility = "hidden";
            brs.play();
        }
        right();
    }

    if (event.which == 37) { //Arrow key left functions
        if (bw == 0) {
            bw = setInterval(B, 100);
            fl();
            lm = setInterval(logmove, 100);
            f2();
            lm2 = setInterval(logmove2, 100);
            f3();
            lm3 = setInterval(logmove3, 100);
            f4();
            lm4 = setInterval(logmove4, 100);
            f5();
            lm5 = setInterval(logmove5, 100);
            sw = setInterval(updatescore, 100);
            sc = setInterval(scorecheck, 100);
            document.getElementById("ArrowKeyPress").style.visibility = "hidden";
            brs.play();
        }
        left();
    }

    if (event.which == 40) { //Arrow key down functions
        if (bw == 0) {
            bw = setInterval(B, 100);
            fl();
            lm = setInterval(logmove, 100);
            f2();
            lm2 = setInterval(logmove2, 100);
            f3();
            lm3 = setInterval(logmove3, 100);
            f4();
            lm4 = setInterval(logmove4, 100);
            f5();
            lm5 = setInterval(logmove5, 100);
            sw = setInterval(updatescore, 100);
            sc = setInterval(scorecheck, 100);
            document.getElementById("ArrowKeyPress").style.visibility = "hidden";
            brs.play();
        }
        forward();
    }

    if (event.which == 38) { //Arrow key up functions
        if (bw == 0) {
            bw = setInterval(B, 100);
            fl();
            lm = setInterval(logmove, 100);
            f2();
            lm2 = setInterval(logmove2, 100);
            f3();
            lm3 = setInterval(logmove3, 100);
            f4();
            lm4 = setInterval(logmove4, 100);
            f5();
            lm5 = setInterval(logmove5, 100);
            sw = setInterval(updatescore, 100);
            sc = setInterval(scorecheck, 100);
            document.getElementById("ArrowKeyPress").style.visibility = "hidden";
            brs.play();
        }
        backword();
    }

    if (event.which == 13) { //reload after crashed
        re();
    }
}

/////////////////////AUDIO FILES///////////////////////////////////////////////////////////
var brs = new Audio("Boat running3.mp3"); 
brs.loop = true;
brs.volume = 0.08;

var crs = new Audio("Crash.mp3");
crs.volume = 0.08;

var gws = new Audio("background music1.mp3");
gws.volume = 0.08;

var gos = new Audio("dead.mp3");
gos.volume = 0.08;
gos.loop = true;

var cds = new Audio("closetowin.mp3");
cds.volume = 0.08;


var bw = 0;
var y = 0;
function B() { //background movement function
    y = y - 20;
    var bw = document.getElementById("B").style.backgroundPositionY = y + "px";
}

var x = 640;
function right() { //boat right turn function
    
    if (x == 1115) {  // River Bank Crash functions
        clearInterval(bw);
        clearInterval(lm);
        clearInterval(lm2);
        clearInterval(lm3);
        clearInterval(lm4);
        clearInterval(lm5);
        clearInterval(sw);
        document.getElementById("S").src = "boat burning4.gif";
        document.getElementById("S").style.marginLeft = "1130px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;
        document.getElementById("scoreboard").style.visibility = "hidden";
        brs.pause();
        crs.play();
        gos.play();
    } else {
        x = x + 25;
        document.getElementById("S").style.marginLeft = x + "px";
    }

}

function left() { //boat left turn function
    
    if (x < 142) {  // River Bank Crash functions
        clearInterval(bw);
        clearInterval(lm);
        clearInterval(lm2);
        clearInterval(lm3);
        clearInterval(lm4);
        clearInterval(lm5);
        clearInterval(sw);
        document.getElementById("S").src = "boat burning4.gif";
        document.getElementById("S").style.marginLeft = "115px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;
        document.getElementById("scoreboard").style.visibility = "hidden";
        brs.pause();
        crs.play();
        gos.play();
    } else {
        x = x - 25;
        document.getElementById("S").style.marginLeft = x + "px";
    }
}

var n = 0;
var e = 30;
function forward() { //boat move forward function
    if (e < 460) {
        e = e + 25;
        n = n + 25; // variable used for crashing boat in middle of screen
        document.getElementById("S").style.marginTop = e + "px";
    }
}

function backword() { //boat move backward function
    if (10 < e) {
        e = e - 25;
        n = n - 25; // variable used for crashing boat in middle of screen
        document.getElementById("S").style.marginTop = e + "px";
    }
}

var a = 800; //First log's margin top
function fl() {

    for (var y = 0; y < 20; y++) { // floating logs 1 loop
        var i = document.createElement("img");

        i.src = "floating wood.gif";

        i.className = "FW1";

        i.style.marginTop = a + "px";

        a = a + 800; // distance between 2 logs 

        i.id = "a" + y;

        document.getElementById("B").appendChild(i);
    }
}

var lm = 0;
function logmove() { // floating logs 1 moving function
    for (var y = 0; y < 20; y++) {
        var d = document.getElementById("a" + y);

        var z = getComputedStyle(d);

        var p = parseInt(z.marginTop);

        p = p - 20;

        d.style.marginTop = p + "px";
        //alert(p); (125px to -10px)

        if (p <= (125 + n) & p >= (-10 + n)) { // log & boat crash range 1
            if (x > 565 & x < 760) {
                clearInterval(lm);
                clearInterval(lm2);
                clearInterval(lm3);
                clearInterval(lm4);
                clearInterval(lm5);
                clearInterval(bw);
                clearInterval(sw);
                document.getElementById("S").src = "boat burning4.gif"
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = u;
                document.getElementById("scoreboard").style.visibility = "hidden";
                brs.pause();
                crs.play();
                gos.play();
            }

        }

    }

}

var q = 1000; //First log's margin top
function f2() {

    for (var y = 0; y < 20; y++) { // floating logs2 loop
        var j = document.createElement("img");

        j.src = "floating wood.gif";

        j.className = "FW2";

        j.style.marginTop = q + "px";

        q = q + 1000; // distance between 2 logs 

        j.id = "q" + y;

        document.getElementById("B").appendChild(j);
    }
}

var lm2 = 0;
function logmove2() { // floating logs2 moving function
    for (var y = 0; y < 20; y++) {
        var d2 = document.getElementById("q" + y);

        var z2 = getComputedStyle(d2);

        var p2 = parseInt(z2.marginTop);

        p2 = p2 - 20;

        d2.style.marginTop = p2 + "px";
        //alert(p); (118px to -15px)

        if (p2 <= (118 + n) & p2 >= (-15 + n)) { // log & boat crash range 2
            if (x > 110 & x <= 290) {
                clearInterval(lm);
                clearInterval(lm2);
                clearInterval(lm3);
                clearInterval(lm4);
                clearInterval(lm5);
                clearInterval(bw);
                clearInterval(sw);
                document.getElementById("S").src = "boat burning4.gif"
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = u;
                document.getElementById("scoreboard").style.visibility = "hidden";
                brs.pause();
                crs.play();
                gos.play();
            }

        }

    }

}

var r = 1500; //First log's margin top
function f3() {

    for (var y = 0; y < 20; y++) { // floating logs3 loop
        var h = document.createElement("img");

        h.src = "floating wood.gif";

        h.className = "FW3";

        h.style.marginTop = r + "px";

        r = r + 1500; //distance between 2 logs 

        h.id = "r" + y;

        document.getElementById("B").appendChild(h);
    }
}

var lm3 = 0;
function logmove3() { // floating logs moving function
    for (var y = 0; y < 20; y++) {
        var d3 = document.getElementById("r" + y);

        var z3 = getComputedStyle(d3);

        var p3 = parseInt(z3.marginTop);

        p3 = p3 - 20;

        d3.style.marginTop = p3 + "px";
        //alert(p); (140px to -15px)
        if (p3 <= (140 + n) & p3 >= (-15 + n)) { // log & boat crash range 3
            if (x > 940 & x <= 1115) {
                clearInterval(lm);
                clearInterval(lm2);
                clearInterval(lm3);
                clearInterval(lm4);
                clearInterval(lm5);
                clearInterval(bw);
                clearInterval(sw);
                document.getElementById("S").src = "boat burning4.gif";
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = u;
                document.getElementById("scoreboard").style.visibility = "hidden";
                brs.pause();
                crs.play();
                gos.play();
            }

        }

    }

}

var s = 1800; //First rock's margin top
function f4() {

    for (var y = 0; y < 20; y++) { // floating rocks loop
        var k = document.createElement("img");

        k.src = "Rock1.png";

        k.className = "FW4";

        k.style.marginTop = s + "px";

        s = s + 1800; //distance between 2 rocks 

        k.id = "s" + y;

        document.getElementById("B").appendChild(k);
    }
}

var lm4 = 0;
function logmove4() { //  logs moving function
    for (var y = 0; y < 20; y++) {
        var d4 = document.getElementById("s" + y);

        var z4 = getComputedStyle(d4);

        var p4 = parseInt(z4.marginTop);

        p4 = p4 - 20;

        d4.style.marginTop = p4 + "px";
        //alert(p); (100px to -10px)
        if (p4 <= (100 + n) & p4 >= (-10 + n)) { // rocks & boat crash range 
            if (x > 280 & x <= 590) {
                clearInterval(lm);
                clearInterval(lm2);
                clearInterval(lm3);
                clearInterval(lm4);
                clearInterval(lm5);
                clearInterval(bw);
                clearInterval(sw);
                document.getElementById("S").src = "boat burning4.gif";
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = u;
                document.getElementById("scoreboard").style.visibility = "hidden";
                brs.pause();
                crs.play();
                gos.play();
            }

        }

    }

}

var t = 2000; //First whirlpool margin top
function f5() {

    for (var y = 0; y < 20; y++) { // whirlpool loop
        var l = document.createElement("img");

        l.src = "The Whirlpool3.gif";

        l.className = "FW5";

        l.style.marginTop = t + "px";

        t = t + 2000; //distance between 2 whirlpool

        l.id = "t" + y;

        document.getElementById("B").appendChild(l);
    }
}

var lm5 = 0;
function logmove5() { // whirlpool moving function
    for (var y = 0; y < 20; y++) {
        var d5 = document.getElementById("t" + y);

        var z5 = getComputedStyle(d5);

        var p5 = parseInt(z5.marginTop);

        p5 = p5 - 20;

        d5.style.marginTop = p5 + "px";
        //alert(p); (85px to -15px)
        if (p5 <= (85 + n) & p5 >= (-15 + n)) { // whirlpools & boat crash range 
            if (x > 750 & x <= 940) {
                clearInterval(lm);
                clearInterval(lm2);
                clearInterval(lm3);
                clearInterval(lm4);
                clearInterval(lm5);
                clearInterval(bw);
                clearInterval(sw);
                document.getElementById("S").className = "rotate linear infinite";
                brs.pause();
                gos.play();
                if (x >= 765 & x <= 940) {  // boat's margin left is assigned to be at middle of whirlpool after
                    //crashing in coner 
                    document.getElementById("S").style.marginLeft = "840px";
                }
                document.getElementById("end").style.visibility = "visible";
                document.getElementById("endscore").innerHTML = u;
                document.getElementById("scoreboard").style.visibility = "hidden";
            }

        }

    }

}

var sw = 0;
var u = 0;
function updatescore() { //score update function

    u = u + 20;
    document.getElementById("score").innerHTML = u;
}

var sc = 0;
function scorecheck() { //score check function to end game
    if (u >= 9000) { // notification for close to end
        document.getElementById("closetowin").style.visibility = "visible";
        cds.play();
    }
    if (u == 10000) { // Game Ending Score
        clearInterval(lm);
        clearInterval(lm2);
        clearInterval(lm3);
        clearInterval(lm4);
        clearInterval(lm5);
        clearInterval(bw);
        clearInterval(sw);
        brs.pause();
        gws.play();
        cds.pause();
        document.getElementById("win").style.visibility = "visible";
        document.getElementById("closetowin").style.visibility = "hidden";
        document.getElementById("S").className = "rotate linear infinite";
        document.getElementById("scoreboard").style.visibility = "hidden";
    }
}

function re() { //reload function after crash
    if (document.getElementById("end").style.visibility == "visible") {
        location.reload();
    }
}

function level1() { // level 1 reload
    location.reload();

}

function level2() { // level 2 load
    alert("Level 02 is Under Construction");
}







