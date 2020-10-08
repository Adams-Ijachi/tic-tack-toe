const value = document.querySelectorAll('[datacell]');
const winning_text_element = document.querySelector('[winning_text_message]')
const winning_message_element = document.getElementById('winning')
var turn = "x"
var val =[]
var v = ""
var tie = "TIE"
value.forEach((item  => {
  item.addEventListener('click', handle_turns ,{once : true});

}));


//handle truns between players
function handle_turns(e) {
  const val = e.target;

  val.innerHTML = turn;

  flip();




};
// flip turns between players
  function flip() {

    if (turn === "x") {
      turn = "o";
      win();
      draw()
      endgame()


    }
    else {
      turn = "x";
      win();
      draw()
      endgame()

    }

  };


 function win() {
   var box1 =  value[0].innerHTML
   var box2 =  value[1].innerHTML
   var box3 =  value[2].innerHTML
   var box4 =  value[3].innerHTML
   var box5 =  value[4].innerHTML
   var box6 =  value[5].innerHTML
   var box7 =  value[6].innerHTML
   var box8 =  value[7].innerHTML
   var box9 =  value[8].innerHTML

   if (box1 !== "_" && box1 === box2 && box1 === box3) {
     v = box1;
     return true;

   }
   else if (box4 !== "_" && box4 === box5 && box4 === box6) {
     v = box4;
     return true;
   }
   else if (box7 !== "_" && box7 === box8 && box7 === box9) {
     v = box7;
     return true;
    }
    else if (box1 !== "_" && box1 === box4 && box1 === box7) {
      v = box1;
      return true;
    }
    else if (box2 !== "_" && box2 === box5 && box2 === box8) {
      v = box2;
      return true;
    }
    else if (box3 !== "_" && box3 === box6 && box3 === box9) {
      v = box3;
      return true;
    }
    else if (box1 !== "_" && box1 === box5 && box1 === box9)  {
      v = box1;
      return true;
    }
    else if (box3 !== "_" && box3 === box5 && box3 === box7) {
      v = box3;
      return true;

    }
    return tie;

 }
   function draw() {
     var box1 =  value[0].innerHTML
     var box2 =  value[1].innerHTML
     var box3 =  value[2].innerHTML
     var box4 =  value[3].innerHTML
     var box5 =  value[4].innerHTML
     var box6 =  value[5].innerHTML
     var box7 =  value[6].innerHTML
     var box8 =  value[7].innerHTML
     var box9 =  value[8].innerHTML


     if (box1 !== "_" && box2 !=="_" && box3 !=="_" && box4 !=="_" && box5 !=="_" && box6  !=="_" && box7 !=="_" && box8 !=="_" && box9 !=="_" ) {

      check = win()
      if (check === tie){
          v = tie
      }

      }


     }
     function endgame() {
             if (v !== "" && v !== tie ) {
               winning_text_element.innerText = `${v} WINS!`
                winning_message_element.classList.add('show');
             }
             else if ( v === tie && v !=="") {
               winning_text_element.innerText = `${v} !`
                winning_message_element.classList.add('show');
             }




     }
