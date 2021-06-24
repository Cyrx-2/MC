var canvas = new fabric.Canvas("mcCanvas");

playerX = 10;
playerY = 10;

blockHeight= 30;
blockWidth= 30;

var blockIMG = "";
var playerIMG = "";

function player(){

    fabric.Image.fromURL("player.png",function(img){
        playerIMG = img;

        playerIMG.scaleToWidth(150);
        playerIMG.scaleToHeight(150);

        playerIMG.set({

            top:playerY,
            left:playerX
        });

        canvas.add(playerIMG);

    });
}


function block(getImage){


    fabric.Image.fromURL(getImage,function(img){
        
    blockIMG= img;
    blockIMG.scaleToHeight(blockHeight);
    blockIMG.scaleToWidth(blockWidth);

    blockIMG.set({

    top:playerY,
    left:playerX
        
    });
    canvas.add(blockIMG);
    });
}



window.addEventListener("keydown" , KeyPressDown);

function KeyPressDown(e){
KeyPressed = e.keyCode;
console.log(KeyPressed);

if(e.shiftKey == true && KeyPressed == "80"){
console.log("P+Shift");

blockHeight = blockHeight + 10;
blockWidth = blockWidth + 10;

document.getElementById("currentHeight").innerHTML = blockHeight;
document.getElementById("currentWidth").innerHTML = blockWidth;
}
if(e.shiftKey == true && KeyPressed == "77"){
    console.log("M+Shift");
    
    blockHeight = blockHeight - 10;
    blockWidth = blockWidth - 10;
    
    document.getElementById("currentHeight").innerHTML = blockHeight;
    document.getElementById("currentWidth").innerHTML = blockWidth;
}

if(KeyPressed == "38"){
    Up();
    console.log("Up");
}

if(KeyPressed == "40"){
    Down();
    console.log("down");
}

if(KeyPressed == "37"){
    Left();
    console.log("Left");
}

if(KeyPressed == "39"){
    Right();
    console.log("Right");
}



if(KeyPressed == "87"){
    block("wall.jpg");
    console.log("Wall");
}

if(KeyPressed == "71"){
    block("ground.png");
    console.log("Ground");
}

if(KeyPressed == "76"){
    block("light_green.png");
    console.log("Lgreen");
}

if(KeyPressed == "84"){
    block("trunk.jpg");
    console.log("Trunk");
}

if(KeyPressed == "82"){
    block("roof.jpg");
    console.log("Roof");
}

if(KeyPressed == "89"){
    block("yellow_wall.png");
    console.log("YWall");
}

if(KeyPressed == 68){
    block("dark_green.png");
    console.log ("DGreen");
}

if(KeyPressed == 85){
    block("unique.png");
    console.log ("Unique");
}

if(KeyPressed == 67){
    block("cloud.jpg");
    console.log ("Cloud");
}
}



function Up(){
    
        if(playerY >=0){
            playerY = playerY - blockHeight;
            console.log("up" + playerX + "," + playerY);
            canvas.remove(playerIMG);
            player();
        }
    }    

function Down(){
    
        if(playerY <=420){
            playerY = playerY + blockHeight;
            console.log("Down " + playerX + "," + playerY);
            canvas.remove(playerIMG);
            player();
        }
    }    

function Right(){
    
        if(playerX <=850){
            playerX = playerX + blockWidth;
            console.log("Right " + playerX + "," + playerY);
            canvas.remove(playerIMG);
            player();
        }
    }    

    function Left(){
    
        if(playerX >0){
            playerX = playerX - blockWidth;
            console.log("left " + playerX + "," + playerY);
            canvas.remove(playerIMG);
            player();
        }
    }    
