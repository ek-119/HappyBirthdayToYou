$(document).ready(function() {
  

  var media = document.getElementById('420');

  $("#play").click(function() {
    media.play();
  });

  $("#pause").click(function() {
    media.pause();
  });

  $("#seek-bar").on('input', function() {
    var time = media.duration * $("#seek-bar").val() / 100;
    media.currentTime = time;
  });

  media.ontimeupdate = function() {
    var time = (100 / media.duration) * media.currentTime;
    console.log(time);
    $("#seek-bar").val(time);

    var parsedCurrentTime = new Date(media.currentTime * 1000).toISOString().substr(11, 8);

    $("#player-current-time").html(parsedCurrentTime);
    var parsedDuration = new Date(media.duration * 1000).toISOString().substr(11, 8);
    $("#player-duration").html(parsedDuration);

   // if (media.ended){
    //  $("#seek-bar").val(0);
  // }
  };
  
  $("#stop").click(function(){
    
    media.pause(); 
    media.currentTime = 0;
    
    
  })
  
  
  $("#media-player").draggable({
    handle: ".window-header"
  });
  
  $("#media-player").resizable({
     handles: "n, e, s, w, ne, se, sw, nw",
  minHeight: 150,
  minWidth: 200,
  });
    
  

});