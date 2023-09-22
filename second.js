//Rocket 
const rocket = document.getElementById('rocket');
let isDragging = false;

window.onload = function() {
    rocket.addEventListener('mousedown', (e) => {
        isDragging = true;
      
        // Calculate the offset between the mouse click and the rocket's position
        const offsetX = e.clientX - rocket.getBoundingClientRect().left;
        const offsetY = e.clientY - rocket.getBoundingClientRect().top;
      
        // Add event listeners for mousemove and mouseup to enable dragging
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      
        function onMouseMove(e) {
          if (!isDragging) return;
      
          // Calculate the new rocket position based on the mouse movement
          const newX = e.clientX - offsetX;
          const newY = e.clientY - offsetY;
      
          // Set the new position
          rocket.style.left = newX + 'px';
          rocket.style.top = newY + 'px';
        }
      
        function onMouseUp() {
          isDragging = false;
      
          // Remove the mousemove and mouseup event listeners
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        }
      });
}
