// JavaScript source code

$( document ).ready(function() {

    //Creating grid for background

    for(let i = 0; i< 15; i++){
        $( "#square_ref" ).clone().appendTo( "#grid_container" ).show();
    }
         (function() {
			[].slice.call(document.querySelectorAll('.grid--effect-vega > .grid__item')).forEach(function(stackEl) {
				new VegaFx(stackEl);
			});

		})();
    /*
    //Test
    popUpStart = new PopUp1('Pop up 1',  { my: "center", at: "left"}, "Ignore", function(){$( this ).dialog( "close" ); });
    popUpStart.showPopUp();
    
    popUpStart = new PopUp2('Pop up 2',  { my: "center", at: "center"}, "Ignore", function(){$( this ).dialog( "close" ); }, "Ignore", function(){$( this ).dialog( "close" ); });
    popUpStart.showPopUp();

    popUpStart = new PopUp3('Pop up 3',  { my: "center", at: "right"}, "Ignore", function(){$( this ).dialog( "close" ); });
    popUpStart.showPopUp();
    */
        
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
          popUpStart = new PopUp1('But is it actually going well?',  { my: "center", at: "center"}, "Sure", function(){$( this ).dialog( "close" ); });
          //popUpStart.showPopUp();
      }

      //popup x times
      //if ((n % 5 == 0)&&(n/10 > 2)&&(n/10 < 4))
      if (n == 25)
      {
          popUpStart = new PopUp1('You should be taking care of more important stuff, but still here you are',  { my: "center", at: "center"}, "Ignore", function(){$( this ).dialog( "close" ); });
         
         // popUpStart.showPopUp();
          //  popUpStart = new PopUp2('Something is not right',  { my: "center", at: "center"});
          //  popUpStart.showPopUp();
   
      }

      if(n == 40){
         // popUpStart = new PopUp3('You should be taking care of more important stuff, but still here you are',  { my: "center", at: "center"}, "Ignore", function(){$( this ).dialog( "close" ); });

      }
      //Loop intensifies
     // if ((n % 10 == 0)&&(n/20 > 2)&&(n/20 < 4))

     // }


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


var numLoops = 0;
//PopUp1: with closing button (X) and 1 button
//Closing button generates new popups
class PopUp1 {
  constructor(message, position) 
  {
    this.message = message;
    this.position = position;

    this.showPopUp = function() {
        $('#popups').prepend('<div id="dialog" title="ERROR"><p>' + message + '</p></div>');    
        $("#dialog").dialog({
          //modal: true,
          hide: { effect: "slide", duration: 500 },
          show: { effect: "bounce", duration: 400 },
          draggable: true,
          position: position,

        }).prev(".ui-dialog-titlebar").css("background","red").children(".ui-dialog-titlebar-close").on("click",function(event, ui)
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
              for(var i = 0; (i <= 30) ; i++)
              {
                  setTimeout(replicatePopUp,1000,message); 
              }
              setTimeout(blueScreen,4000); 
                //console.log("MAUYOR QUE 5");
               // replicatePopUp(message,"30");  
            }
              
          

          }); 
      };


  }
}

//PopUp2: with closing button (X) and 2 buttons
class PopUp2 {
  constructor(message, position, button1text, button1function, button2text, button2function) {
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
                  click: button1function
                },
                {
                  text: button2text,
                 // icon: "ui-icon-heart",
                  click: button2function
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","red");
      };


  }
}



//PopUp3: No closing button (X), 1 button
class PopUp3 {
  constructor(message, position, button1text, button1function) {
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
                  click: button1function
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","red").children(".ui-dialog-titlebar-close").hide(); 
      };


  }
}


function blueScreen() 
{
    $(".ui-dialog").hide();
    $("#blue_screen").show();
}

function replicatePopUp(message)
{

        var posR = Math.floor(Math.random() * (150 - (-250)) ) + (-250);
        var posT = Math.floor(Math.random() * (100 - (0)) ) + (0);

        var repeatPU = new PopUp1(message, {my: "left+" + posR + "%", at: "bottom-" + posT + "%"});
        repeatPU.showPopUp();

              
}

//Disable right click
//document.addEventListener('contextmenu', event => event.preventDefault());
