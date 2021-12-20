// JavaScript source code

$( document ).ready(function() {

    for(let i = 0; i<= 10; i++){
       popUp1 = new PopUp('Lailololeilo lala',  { my: "right+" + i*10 + " top-" + i*10 + "%"});
       popUp1.showPopUp();

    }
    
});

class PopUp {
  constructor(message, position) {
    this.message = message;
    this.position = position;

    this.showPopUp = function() {
        $('#popups').prepend('<div id="dialog" title="ERROR"><p>' + message + '</p></div>');    
         $("#dialog").dialog({
         // modal: true,
          hide: { effect: "explode", duration: 1000 },
          show: { effect: "blind", duration: 800 },
          draggable: true,
          position: position,
          buttons: 
            [
                {
                  text: "OK",
                  click: function() {
                    $( this ).dialog( "close" );
                  }
                },
                {
                  text: "NOT OK",
                  icon: "ui-icon-heart",
                  click: function() {
                   // $( this ).dialog( "close" );
                   // newPopupA("This is going wrong " + i);
                  }
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","red"); 
      };
  }
}


