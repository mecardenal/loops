// JavaScript source code

$( document ).ready(function() {

    GeneratePuzzlePieces();
    chufle();
        // (function() {
		//	[].slice.call(document.querySelectorAll('.grid--effect-vega > .grid__item')).forEach(function(stackEl) {
		//		new VegaFx(stackEl);
		//	});

		//})();
    
    //Test
    //popUpStart = new PopUp1('Pop up 1',  { my: "center", at: "left"}, "Ignore", function(){$( this ).dialog( "close" ); });
    //popUpStart.showPopUp();
    
    //popUpStart = new PopUp2('Pop up 2',  { my: "center", at: "center"}, "Ignore", function(){$( this ).dialog( "close" ); });
   // popUpStart.showPopUp();

    //popUpStart = new PopUp3('Pop up 3',  { my: "center", at: "right"});
    //popUpStart.showPopUp();
    
        
    //Counts how many times mouse is over a square    
    var n = 0;
    
    $( "div.stack" )
      .mouseenter(function() {
      
      
      n += 1;
   
      //Popups every n times

      //First popup
      if (n == 9)
      {
          popUpStart = new PopUp1('This is going well. So far.',  { my: "center", at: "center"}, "Ok", function(){$( this ).dialog( "close" ); });
          popUpStart.showPopUp();
      }

      //First popup
      if (n == 19)
      {
          popUpStart = new PopUp2('But is it actually going well?',  { my: "center", at: "center"}, "Sure");
          popUpStart.showPopUp();
      }

      //popup x times
      //if ((n % 5 == 0)&&(n/10 > 2)&&(n/10 < 4))
      if (n == 25)
      {
          popUpStart = new PopUp3("Oh you are trying to ignore me, that's cute <3",  { my: "center", at: "center"}, "Ignore", function(){$( this ).dialog( "close" ); });
          popUpStart.showPopUp();
   
      }


     // console.log("n: " + n );
     });



 



    //let n = 0;

    //for(let i = 0; i<= 5; i++){
     //  popUpStart = new PopUp1('Lailololeilo lala',  { my: "center", at: "bottom-" + n+ "%"});
    //   popUpStart.showPopUp();
    //   n = n+10;
      // popUpStart2 = new PopUp2('Lailololeilo lala NO X',  { my: "right+" + n*10 + " top-" + n*10 + "%"});
      // popUpStart2.showPopUp();
   // }
    



});



//PopUp1: No closing button (X), 1 button
class PopUp1 {
  constructor(message, position, button1text, button1function) {
    this.message = message;
    this.position = position;

    this.showPopUp = function() {
        $('#popups').prepend('<div id="dialog" title="System Message"><p>' + message + '</p></div>');    
         $("#dialog").dialog({
          modal: true,
          hide: { effect: "slide", duration: 500 },
          show: { effect: "bounce", duration: 400 },
          draggable: true,
          position: position,
          buttons: 
            [
                {
                  text: button1text,
                  click: button1function
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","#ff3e30").css("color","white"); 
      };


  }
}




//PopUp2: with closing button (X) and 2 buttons
class PopUp2 {
  constructor(message, position, button1text) {
    this.message = message;
    this.position = position;

    this.showPopUp = function() {
        $('#popups').prepend('<div id="dialog" title="ERROR"><p>' + message + '</p></div>');    
        $("#dialog").dialog({
          modal: true,
          hide: { effect: "slide", duration: 500 },
          show: { effect: "bounce", duration: 400 },
          draggable: true,
          position: position,
          buttons: 
            [
                {
                  text: button1text,
                  click: function(){}
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","#ff3e30").css("color","white").next().next().children().mouseover(function()
            {
                 $( this ).parent().css("float","left");
            }).mouseout(function()
            {
                 $( this ).parent().css("float","right");
            });
     
      };


  }
}

              

var numLoops = 0;
//PopUp1: with closing button (X) and 1 button
//Closing button generates new popups
class PopUp3 {
  constructor(message, position) 
  {
    this.message = message;
    this.position = position;

    this.showPopUp = function() {
        $('#popups').prepend('<div id="dialog" title="FATAL ERROR"><div class="popup_content"><img src="img/Flat_cross_icon.svg" width="30px" class="error_icon"><div class="error_message">' + message + '</div></div></div>');    
        $("#dialog").dialog({
          modal: true,
          hide: { effect: "slide", duration: 500 },
          show: { effect: "bounce", duration: 400 },
          //draggable: true,
          position: position
          
        }).prev(".ui-dialog-titlebar").css("background","#ff3e30").css("color","#ffff30").children(".ui-dialog-titlebar-close").on("click",function(event, ui)
          {


            if(numLoops < 5)
            {
              for(var i = 0; ((i <= numLoops) && (i < 5)) ; i++)
              {
                  setTimeout(replicatePopUp,1000,message); 
              }
              numLoops++;
            }
            else
            {
              for(var i = 0; (i <= 40) ; i++)
              {
//                  setTimeout(replicatePopUp,1000,message); 
                    replicatePopUp(message);
              }
              setTimeout(blueScreen,4000); 
                //console.log("MAUYOR QUE 5");
               // replicatePopUp(message,"30");  
            }
              
          
          }); 
      };


  }
}


function blueScreen() 
{
    $(".ui-dialog").remove();
    $("#blue_screen").show();
}

function replicatePopUp(message)
{

        var posR = Math.floor(Math.random() * (150 - (-250)) ) + (-250);
        var posT = Math.floor(Math.random() * (100 - (0)) ) + (0);

        var repeatPU = new PopUp3(message, {my: "left+" + posR + "%", at: "bottom-" + posT + "%"});
        repeatPU.showPopUp();

              
}

//Restart game in safe mode on clicking the button
$("#safemode_button").on("click",function(){
    $("#blue_screen").remove();
    $(".safemode").show();
});

function GeneratePuzzlePieces()
{
    //Creating grid for puzzle

    var numH = 0;
    var idPiece = 1;
    var leftPX = 0;
    var topPX = 0;

    for(let i = 0; i< 28; i++){
        
        //Creates pieces of puzzle 
        $( "#square_ref" ).clone().appendTo( "#grid_container" ).show().find(".puzzle_piece").css("background-image","url(img/sketch_brainloop.png)").css("background-position","left "+ leftPX +"px top "+ topPX +"px").parent().parent().parent().attr('id', idPiece);
       
        //Starts horizontal iteration
        if(numH < 6) 
        {
            leftPX = leftPX - 110;
            numH++;
        }
        else //Line break
        {
            numH = 0;
            leftPX = 0;
            topPX = topPX -110;
        }
       
        idPiece++;
    }
}

//Shuffle the pieces of the grid
function chufle() {
    var parent = $("#grid_container");
    var divs = parent.children();
    while (divs.length) {
       parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}


//Disable right click
//document.addEventListener('contextmenu', event => event.preventDefault());

//hide close button
//.children(".ui-dialog-titlebar-close").hide(); 