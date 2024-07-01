const gl = document.getElementById('gallery');
const gi = document.getElementsByClassName('gitem');
function scrollGl() {
  
}

const ganim = document.getElementsByClassName('anim');
var showed = false;
function hideG(){
  for(let g of ganim) {
    g.style.opacity = 0.1
  }
}
function scrollAnim() {
  var scr = window.scrollY;
  var ih = window.innerHeight;
  for(let g of ganim) {
    if(g.offsetTop < scr + ih - 300) {
      g.style.opacity = '1.0';
    }
    else{return}
  }
}
window.onload = () => {
  hideG()
}
document.onscroll = scrollAnim;