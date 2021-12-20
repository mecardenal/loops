$(document).ready(function(){

    var i = 0;

    var newPopupA = function(Message){

        $('#popups').prepend('<div id="dialog" id="'+ i +'" title="ERROR"><p>' + Message + '</p></div>');    

        $("#dialog").dialog({
         // modal: true,
          hide: { effect: "explode", duration: 1000 },
          draggable: true,
          position: { my: "right+" + 10*i + " top-" + 10*i + "%", at: "center" },
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
                    newPopupA("This is going wrong " + i);
                  }
                }
            ]

        }).prev(".ui-dialog-titlebar").css("background","red"); 
    
        i++;
    }

    newPopupA("Good Morning bitch");

});