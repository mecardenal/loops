var sketchProc = function(processing) {
  
  const music_bg = new Audio("sound/Tratak - Jesse Gallagher.mp3");

  const sound_alert = new Audio("sound/alert.wav");
  var thought = " ";
  var first_load = 1;
  // Override draw function, by default it will be called 60 times per second
  processing.draw = function() {
    music_bg.play();

    //The following code is only exceuted if the input text is changing
    if((thought != document.getElementById('write_thought').value ) || (first_load == 1)) {
      //console.log(document.getElementById('write_thought').value);    



     //We draw the encrypted image
             
        size(1300,1200);

        // Type YOUR MESSAGE (capitals and numbers only)
        if(first_load == 1)
        {
            var message = "WRITE YOUR THOUGHT HERE";
            first_load = 0;
        } else {
            var message=document.getElementById('write_thought').value.toUpperCase(); 
        }

        // Select size of a pixel
        var pixel=8;

        // Select the distance between edge of the image and the text
        var padding=25;

        // Select difficulty
        var difficulty=4; 
        //0=easy, 4=ballanced, 10=difficult, 20=impossible, 50=random

        var line_h = 20;
        var line_w = 142;

        //----- CODE -----

        //coor intervals for red and cyan spectrum
        colorMode(HSB);
        var redTop = 55;
        var blueLow = 75;
        var blueTop = 190;
        var purpleLow = 200;

        //initial cursor position
        var typingPos = [padding+4, padding-line_h];

        var odstin=random()*255;
        var satur=255;

        noStroke();

        var MessageX=[];
        var MessageY=[];

        //Symbols graphics
        {
        var Ax=[-4, -3, -2, -1, -1, -1, 0, 0, 0, 1, 1, 1, 1];
        var Ay=[ 4,  3,  3,  2,  4,  7, 2, 5, 6, 1, 2, 3, 4];
        var Bx=[-4, -3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 1, 1, 2, 2];
        var By=[ 4,  3,  5,  2,  6,  1,  3,  6, 0, 4, 5, 1, 4, 2, 3];
        var Cx=[-3, -3, -3, -2, -2, -1, -1, 0, 1, 2, 2];
        var Cy=[ 3,  4,  5,  2,  6,  1,  6, 1, 1, 2, 3];
        var Dx=[-4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2];
        var Dy=[ 4,  3,  5,  2,  6,  1,  6, 0, 5, 1, 4, 2, 3];
        var Ex=[-4, -3, -3, -2, -2, -1, -1, -1, 0, 0, 1, 2, 3];
        var Ey=[ 4,  3,  5,  2,  6,  1,  3,  7, 0, 4, 1, 2, 3];
        var Fx=[-4, -3, -2, -1, -1, 0, 0, 1, 2, 3];
        var Fy=[ 4,  3,  2,  1,  3, 0, 4, 1, 2, 3];
        var Gx=[-3, -3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 1, 2, 2];
        var Gy=[ 3,  4,  5,  2,  6,  1,  4,  6, 1, 5, 6, 1, 2, 3];
        var Hx=[-4, -3, -2, -2, -1, -1, -1, 0, 0, 1, 2];
        var Hy=[ 4,  3,  2,  6,  1,  3,  5, 0, 4, 3, 2];
        //Straight I
        //var Ix=[ 2, 2, 2, 2, 2];
        //var Iy=[ 4,  3,  2,  1, 0];
        var Ix=[-4, -3, -2, -1, 0];
        var Iy=[ 4,  3,  2,  1, 0];
        var Jx=[-3, -3, -3, -2, -1, 0, 0, 1, 1, 2, 2, 3];
        var Jy=[ 3,  4,  5,  6,  6, 0, 6, 1, 5, 2, 4, 3];
        var Kx=[-4, -3, -2, -2, -1, -1, -1, -1, 0, 0, 1, 2];
        var Ky=[ 4,  3,  2,  6,  1,  3,  4,  5, 0, 3, 3, 2];
        var Lx=[-4, -3, -3, -2, -2, -1, 0];
        var Ly=[ 4,  3,  5,  2,  6,  1, 0];
        var Mx=[-4, -3, -2, -1, -1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3];
        var My=[ 4,  3,  2,  1,  7, 0, 1, 2, 3, 6, 3, 5, 3, 4, 3];
        var Nx=[-4, -3, -2, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 1, 2, 3];
        var Ny=[ 4,  3,  2,  1,  4,  5,  6,  7, 0, 1, 2, 3, 6, 5, 4, 3];
        var Ox=[-3, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 2];
        var Oy=[ 3,  4,  5,  2,  6,  1,  6, 1, 6, 1, 5, 2, 3, 4];
        var Px=[-4, -3, -2, -1, -1, 0, 0, 1, 1, 2, 2];
        var Py=[ 4,  3,  2,  1,  3, 0, 4, 1, 4, 2, 3];
        var Qx=[-3, -3, -3, -2, -2, -1, -1, -1, -1, 0, 0, 1, 1, 2, 2, 2];
        var Qy=[ 3,  4,  5,  2,  6,  1,  5,  6,  7, 1, 6, 1, 5, 2, 3, 4];
        var Rx=[-4, -3, -2, -1, -1, -1, -1, -1, -1, 0, 0, 1, 1, 2, 2];
        var Ry=[ 4,  3,  2,  1,  3,  4,  5,  6,  7, 0, 4, 1, 4, 2, 3];
        var Sx=[-3, -3, -2, -1, -1, -1, -1, 0, 0, 0, 0, 1, 2, 2];
        var Sy=[ 4,  5,  6,  1,  2,  3,  6, 1, 4, 5, 6, 1, 2, 3];
        var Tx=[-3, -2, -1, 0, 0, 1, 2];
        var Ty=[ 5,  4,  3, 0, 2, 1, 2];
        var Ux=[-3, -3, -3, -2, -2, -1, -1, 0, 0, 1, 2, 3];
        var Uy=[ 3,  4,  5,  2,  6,  1,  6, 0, 6, 5, 4, 3];
        var Vx=[-2, -2, -2, -2, -1, -1, -1, -1, 0, 0, 1, 2, 3];
        var Vy=[ 3,  4,  5,  6,  1,  2,  3,  5, 0, 5, 4, 4, 3];
        var Wx=[-3, -3, -2, -2, -1, -1, -1, -1, 0, 0, 0, 1, 2, 3];
        var Wy=[ 3,  4,  2,  4,  1,  4,  5,  6, 0, 3, 6, 5, 4, 3];
        var Xx=[-4, -3, -3, -2, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 1, 2, 2, 3];
        var Xy=[ 4,  3,  4,  3,  1,  2,  3,  6,  7, 0, 1, 4, 5, 6, 4, 3, 4, 3];
        var Yx=[-3, -2, -1, 0, 0, 0, 0, 1, 2, 3];
        var Yy=[ 5,  4,  4, 0, 1, 2, 3, 3, 3, 3];
        var Zx=[-4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3];
        var Zy=[ 4,  4,  5,  4,  6,  4,  7, 0, 3, 1, 3, 2, 3, 3];
        var n0x=[-4, -3, -3, -3, -2, -2, -2, -1, -1, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3];
        var n0y=[ 4,  3,  4,  5,  2,  4,  6,  1,  4,  6, 1, 3, 6, 1, 3, 5, 2, 3, 4, 3];
        var n1x=[-3, -2, -1, -1, -1, 0, 0, 1, 1, 2];
        var n1y=[ 5,  6,  2,  5,  7, 2, 4, 2, 3, 2];
        var n2x=[-4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2];
        var n2y=[ 4,  4,  5,  4,  6,  4,  7, 1, 4, 1, 4, 2, 3];
        var n3x=[-3, -3, -2, -1, 0, 0, 0, 0, 1, 1, 2, 2, 2];
        var n3y=[ 4,  5,  6,  6, 1, 4, 5, 6, 1, 4, 2, 3, 4];
        var n4x=[-2, -2, -1, -1, -1, 0, 0, 1, 2];
        var n4y=[ 2,  6,  1,  3,  5, 0, 4, 3, 2];
        var n5x=[-4, -3, -2, -2, -1, -1, -1, 0, 0, 0, 1, 2];
        var n5y=[ 4,  5,  2,  6,  1,  3,  6, 0, 4, 5, 1, 2];
        var n6x=[-3, -3, -3, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 1, 2, 2];
        var n6y=[ 3,  4,  5,  2,  3,  6,  1,  3,  6, 1, 4, 5, 6, 1, 2, 3];
        var n7x=[-3, -2, -1, 0, 0, 1, 1, 2];
        var n7y=[ 5,  4,  3, 0, 3, 1, 3, 2];
        var n8x=[-3, -3, -2, -2, -1, -1, -1, 0, 0, 0, 1, 1, 2, 2];
        var n8y=[ 4,  5,  3,  6,  2,  3,  6, 1, 4, 5, 1, 4, 2, 3];
        var n9x=[-3, -3, -2, -1, -1, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2];
        var n9y=[ 4,  5,  6,  2,  3,  6, 1, 4, 6, 1, 4, 5, 2, 3, 4];
        }

        var line = 1;
        var addSymbol=function(symbolX, symbolY){
            var symbolSize=0;
        
            for(var i=0; i<symbolX.length; i++){
                MessageX.push(symbolX[i]+typingPos[0]);
                MessageY.push(symbolY[i]+typingPos[1]);
                symbolSize=max(symbolSize, symbolX[i]+symbolY[i]);
            }

 

              if((typingPos[0] > line_w)&&(line == 1)){
                console.log("FINAL DE LINIA 1");
                typingPos= [padding-5, padding-14];
                line++;
              }else if((typingPos[0] > line_w)&&(line == 2)){
                console.log("FINAL DE LINIA 2");
                typingPos= [padding-11, padding-8];
                line++;
              }else if((typingPos[0] > (line_w-10))&&(line == 3)){
                console.log("FINAL DE LINIA 3");
                typingPos= [padding-16, padding+2];
                line++;
              }else if((typingPos[0] > (line_w-19))&&(line == 4)){
                console.log("FINAL DE LINIA 4");
                sound_alert.play();
                document.getElementById('write_thought').value = message.slice(0, -1);
                line++;
              }
              else{
                 typingPos=[typingPos[0]+round(symbolSize/2)+2, typingPos[1]+round(symbolSize/2)+2];
              }

        };


     // if(line < 4){ 
        //Message construtcion
        for(var i=0; i<message.length; i++){

            switch(message[i]){
                case "A":
                    addSymbol(Ax,Ay);
                    break;
                case "B":
                    addSymbol(Bx,By);
                    break;
                case "C":
                    addSymbol(Cx,Cy);
                    break;
                case "D":
                    addSymbol(Dx,Dy);
                    break;
                case "E":
                    addSymbol(Ex,Ey);
                    break;
                case "F":
                    addSymbol(Fx,Fy);
                    break;
                case "G":
                    addSymbol(Gx,Gy);
                    break;
                case "H":
                    addSymbol(Hx,Hy);
                    break;
                case "I":
                    addSymbol(Ix,Iy);
                    break;
                case "J":
                    addSymbol(Jx,Jy);
                    break;
                case "K":
                    addSymbol(Kx,Ky);
                    break;
                case "L":
                    addSymbol(Lx,Ly);
                    break;
                case "M":
                    addSymbol(Mx,My);
                    break;
                case "N":
                    addSymbol(Nx,Ny);
                    break;
                case "O":
                    addSymbol(Ox,Oy);
                    break;
                case "P":
                    addSymbol(Px,Py);
                    break;
                case "Q":
                    addSymbol(Qx,Qy);
                    break;
                case "R":
                    addSymbol(Rx,Ry);
                    break;
                case "S":
                    addSymbol(Sx,Sy);
                    break;
                case "T":
                    addSymbol(Tx,Ty);
                    break;
                case "U":
                    addSymbol(Ux,Uy);
                    break;
                case "V":
                    addSymbol(Vx,Vy);
                    break;
                case "W":
                    addSymbol(Wx,Wy);
                    break;
                case "X":
                    addSymbol(Xx,Xy);
                    break;
                case "Y":
                    addSymbol(Yx,Yy);
                    break;
                case "Z":
                    addSymbol(Zx,Zy);
                    break;
                case "0":
                    addSymbol(n0x,n0y);
                    break;
                case "1":
                    addSymbol(n1x,n1y);
                    break;
                case "2":
                    addSymbol(n2x,n2y);
                    break;
                case "3":
                    addSymbol(n3x,n3y);
                    break;
                case "4":
                    addSymbol(n4x,n4y);
                    break;
                case "5":
                    addSymbol(n5x,n5y);
                    break;
                case "6":
                    addSymbol(n6x,n6y);
                    break;
                case "7":
                    addSymbol(n7x,n7y);
                    break;
                case "8":
                    addSymbol(n8x,n8y);
                    break;
                case "9":
                    addSymbol(n9x,n9y);
                    break;
                default:
                    typingPos[0]+=4;
                    typingPos[1]+=4;
            }
                
        }
        //}
        //Message typing
        var hledej=function(pozX, pozY){
            for(var k=0; k<MessageX.length; k++){
                if(MessageX[k]===pozX && MessageY[k]===pozY){
                    return true;
                }
            }
            return false;
        };
        var selectCyan=function(){
            odstin=random()*255;
            satur=255;
            while(odstin<blueLow || odstin>blueTop){
                odstin=random()*255;
            }
        };
        var selectRed=function(){
            odstin=random()*255;
            while(odstin>redTop && odstin<purpleLow){
                odstin=random()*255;
            }
            satur=random()*8;
            if(satur>1) {satur=255;}
        };
        var pom=0;
        for(var i=0; i<width/pixel; i++){
            for(var j=0; j<width/pixel; j++){
                odstin=random()*255;
                satur=255;
                pom=random()*100;
                if(hledej(i,j)){
                    //Texto
                    if (pom>difficulty){
                        selectCyan();
                    } else {
                        selectRed();
                    }
                } else if((abs(i-j)<30 && abs(i*pixel+j*pixel-width)<(width-1.9*pixel*(padding-10)))|| odstin<155) { 
                    //Fondo texto
                    if (pom>difficulty){
                        selectRed();
                    } else {
                        selectCyan();
                    }
                } else{
 /*
                    if (pom>difficulty){
                        selectRed();
                    } else {
                        selectCyan();
                    }
                     codigo original:*/
                    //Fondo canvas
                    if(pom<50) {
                        selectCyan();
                    } else {
                        selectRed();
                    }
                    
                }
                fill(odstin,satur,255);
                rect(pixel*i,pixel*j,pixel,pixel);
            }
        }
    //}




    }

    //We update the input text
    thought = document.getElementById('write_thought').value;



    /*


    // determine center and max clock arm length
    var centerX = processing.width / 2, centerY = processing.height / 2;
    var maxArmLength = Math.min(centerX, centerY);

    function drawArm(position, lengthScale, weight) {      
      processing.strokeWeight(weight);
      processing.line(centerX, centerY, 
        centerX + Math.sin(position * 2 * Math.PI) * lengthScale * maxArmLength,
        centerY - Math.cos(position * 2 * Math.PI) * lengthScale * maxArmLength);
    }

    // erase background
    processing.background(224);

    var now = new Date();

    // Moving hours arm by small increments
    var hoursPosition = (now.getHours() % 12 + now.getMinutes() / 60) / 12;
    drawArm(hoursPosition, 0.5, 5);

    // Moving minutes arm by small increments
    var minutesPosition = (now.getMinutes() + now.getSeconds() / 60) / 60;
    drawArm(minutesPosition, 0.80, 3);

    // Moving hour arm by second increments
    var secondsPosition = now.getSeconds() / 60;
    drawArm(secondsPosition, 0.90, 1);
 
*/

  };




};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processing = new Processing(canvas, sketchProc);

