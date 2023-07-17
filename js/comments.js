// document.onmousemove = function(e) { 
//     var x = e.clientX; 
//     var y = e.clientY; 
//     document.getElementById('background').style.marginLeft  = x+"px";
//     document.getElementById('background').style.marginTop  = y+"px";
    
// }

const cursorRounded = document.querySelector('.move');


const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)
