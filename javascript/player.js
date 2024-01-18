$(document).ready(function(){

    var controls = { // Переменные
      video: $("#myvideo"),
      playpause: $("#playpause"),
      total: $("#total"),
      buffered: $("#buffered"),
      progress: $("#current"),
      duration: $("#duration"),
      currentTime: $("#currenttime"),
      dynamic: $('#dynamic'),
      hasHours: false                 
    };
            
    var video = controls.video[0];
    var volumeControl = document.getElementById('sound');
    const seekBar = document.getElementById('videoSeekBar');

    controls.playpause.click(function(){ // Обработчик клика по кнопке play
      if (video.paused) {
        video.play();    
      } else {
        video.pause();
      }    
      $(this).toggleClass("player__paused");
      $(this).toggleClass("player__start");  
    });

    video.addEventListener("ended", function() { // Обработка события окончания видео
      video.pause();
      controls.playpause.toggleClass("player__paused");
      controls.playpause.toggleClass("player__start");
    });

    controls.video.click(function() { // Обработчик клика по видео
      if (video.paused) {
        video.play();   
      } else {
        video.pause();
      }
        controls.playpause.toggleClass("player__paused");
        controls.playpause.toggleClass("player__start"); 
    });

    function updateTime() { // Обработчик события "timeupdate"
      const currentTime = video.currentTime;
      const duration = video.duration;
      
      seekBar.value = currentTime / duration;
    }

    video.addEventListener('timeupdate', updateTime);

    seekBar.addEventListener('input', () => { // Обработчик события передвижения ползунка
      const duration = video.duration;
      const currentTime = seekBar.value * duration;

      video.currentTime = currentTime;
    });


    controls.dynamic.click(function() { // Обработчик клика по кнопке mute
      var classes = this.getAttribute("class");

      if (new RegExp('\\boff\\b').test(classes)) {
        classes = classes.replace(" off", "");
      } else {
        classes = classes + " off";
      }

      this.setAttribute("class", classes);
                
      video.muted = !video.muted;
    });

    volumeControl.addEventListener('input', function () { // Обработчик события передвижения ползунка volume
      video.volume = volumeControl.value;
    }, false);

}); 
