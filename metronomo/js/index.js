const compass = document.getElementById("beat");
const beat = compass.getElementsByTagName("span");
const playbtn = document.getElementById("play");
const out_bpm = document.getElementById("out-bpm");
const in_bpm = document.getElementById("in-bpm");
const timesig = document.getElementsByClassName("timesig");
const hcolor = "#eee", bcolor = "#222", icolor = "#444";
var time = 500;
var num = 4, den = 4;
var ticker;
var current = 0;
let isPlaying = false;

function plus(arg){
  in_bpm.value = parseInt(in_bpm.value)+arg;
  showTempo()
}
in_bpm.oninput = showTempo;
function showTempo(){
  out_bpm.innerText = in_bpm.value;
}
function setTempo(){
  time = (60000.0 / parseFloat(in_bpm.value)) * (4/den)
}
function start(){
  isPlaying = true;
  setTempo()
  ticker = setInterval(tick,time);
  playbtn.innerText = "\u25a0";
}
function stop(){
  clearInterval(ticker)
  isPlaying = false;
  playbtn.innerText = "\u25b6";
}
function resetStyle(){
  for(e of beat){
    e.style.backgroundColor= hcolor}
  beat[0].style.backgroundColor= isPlaying ? bcolor : hcolor;
  current=0;
}
function changeCompass(){
  if(isPlaying) return;
  num = parseInt(timesig[0].value);
  den = parseInt(timesig[1].value);
  if(num > beat.length){
    for(let b = beat.length;b < num;b++){
      let span = document.createElement('span');
      span.innerText=b+1;
      compass.appendChild(span);
    }
  }
  else if(num < beat.length){
    while(beat.length > num){
      beat[beat.length-1].remove()
    }
  }
  for(let e of beat) {e.style.width = `${144/den}px`;}
  setTempo()
}
function tick() {
  current++;
  if(current >= num) resetStyle();
  beat[current].style.backgroundColor=bcolor;
}
playbtn.onclick = function() {
  isPlaying ? stop() : start();
  resetStyle();
}
timesig[0].onchange = timesig[1].onchange = changeCompass;