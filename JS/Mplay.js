
  var x = document.getElementById("myAudio"); 

  const playBtn = document.getElementById("playbt");
  playBtn.addEventListener("click", playAudio);
  const pauseBtn = document.getElementById ("pausebt");
  pauseBtn.addEventListener("click", pauseAudio)

  function playAudio() { 
    x.play(); 
  } 
  
  function pauseAudio() { 
    x.pause(); 
  } 
 