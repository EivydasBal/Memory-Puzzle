let cards = document.getElementsByTagName('img');
let click = 0;
let countCards = 6;
let prevId;
const cardBack = "https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450";
 let array=[
"http\:\/\/i.imgur.com/qK42fUu.jpg", 
"https\:\/\/images.unsplash.com/photo-1492138623748-a1b1f758a762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
"https\:\/\/images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
"https\:\/\/images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9",
"https\:\/\/images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
"https\:\/\/images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
"http\:\/\/i.imgur.com/qK42fUu.jpg", 
"https\:\/\/images.unsplash.com/photo-1492138623748-a1b1f758a762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
"https\:\/\/images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
"https\:\/\/images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9",
"https\:\/\/images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450",
"https\:\/\/images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"];
//shuffles array of cards
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}
shuffle(array);
//show 2 cards that is pressed
function showCard(id){
    document.getElementById(id).src=array[id];
    click++;
    if(click == 2){ //if cards are the same they stay shown
        disable();
        click = 0;
        setTimeout(function(){
            if(array[prevId] == array[id]){
            countCards--;
            document.getElementById(id).onclick = false;
            document.getElementById(prevId).onclick = false;
        } 
        else{                                           //else it closes
            document.getElementById(id).src=cardBack;
            document.getElementById(prevId).src=cardBack;
        }
        enable();
        }, 300);
        if(countCards == 1){
            document.write("<div id='won'\><img src='https\:\/\/image.shutterstock.com/image-vector/white-congratulations-banner-colorful-paper-260nw-753658876.jpg'\></div>"); //showing CONGRATULATIONS image after game is completed
        }
    }
    else{
        prevId = id;
    }
}
//disable all cards
function disable(){
    var eles = document.getElementsByTagName("img");
    for (var i=0; i < eles.length; i++) {
      eles[i].prev_click = eles[i].onclick; // save the previous value
      eles[i].onclick = false;
    }
}
//enable all cards
function enable(){
    var eles = document.getElementsByTagName("img");
    for (var i=0; i < eles.length; i++)
       eles[i].onclick = eles[i].prev_click;  // restore the previous value
    
}
