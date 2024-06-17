//Dice 1 code logic
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimg="dice"+randomNumber1+".png";
var randdicesou="./images/"+randomdiceimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randdicesou);

//Dice 2 code logic
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimg1="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimg1)


if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 wins 🎉";
    }
    else if (randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 wins 🎉";
    }
    else{
        document.querySelector("h1").innerHTML="Draw 🤣";
    }

        