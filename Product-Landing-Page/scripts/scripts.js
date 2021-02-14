function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myFunction1() {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }

  myAudio=document.getElementById('audio1');
  myAudio.addEventListener('canplaythrough', function() {
    this.play();
  });

  window.onscroll = function() { 
    scroll() 
}; 

function scroll() { 
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    { 
        document.getElementById("header").style.top 
                    = "0"; 
    } 
    else { 
        document.getElementById("header").style.top 
                    = "50px"; 
    } 
} 

(function(){
  
  //YT Video Holder
    let ytVid = [];
    
    //load YouTube API script
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        
        //when iframe is ready, bind click event to thumb div (custom play button)
        window.onYouTubeIframeAPIReady = function() {
          $(document).on('click', '.thumb', function() {
            const $this = $(this);
            const $iframe = $this.parent().find('iframe');
            $($iframe).each(function() {
              var v = new YT.Player($($iframe).attr('id'), {
                events: {
                  'onReady': onPlayerReady($this)
                }
              });
              ytVid.push(v);
            });
          });
        }
  
        //hide thumb div and play video
        window.onPlayerReady = function(thumb) {
          return function(e) {
            for (var i = 0; i < ytVid.length; i++) {
              if (ytVid[i].a.src == e.target.a.src) {
                $(thumb).fadeOut();
                ytVid[i].playVideo();
              }
            }
          }
        }
  
  })

  window.onload = function() {
    var mapOptions {disableDefaultUI: true} 
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
}
