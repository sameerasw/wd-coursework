
const background = document.getElementById("background");
const cursor = document.getElementById("cursor");

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  background.style.transform = `translate3d(${mouseX/50}px, ${mouseY/50}px, 0)`;
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)
