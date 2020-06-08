var randomNumber1 = Math.floor(Math.random(1,6) * (7 - 1))+ 1;
var dice1= ("images/dice"+ randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random(1,6) * (7 - 1))+ 1;
var dice2= ("images/dice"+ randomNumber2 + ".png");
document.getElementsByTagName("img")[0].setAttribute("src", dice1);
document.getElementsByTagName("img")[1].setAttribute("src", dice2);
if(dice1 > dice2){
     document.querySelector("h1").innerHTML="player 1 wins"
   }
else if(dice1 < dice2){
   document.querySelector("h1").innerHTML="player 2 wins"
        }
else {
   document.querySelector("h1").innerHTML="draw"
        }
