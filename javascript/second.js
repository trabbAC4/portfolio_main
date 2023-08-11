const rocket = document.getElementById("rocket");
let isDragging = false;
let offset = { x: 0, y: 0 };

function main() {
    rocket.addEventListener("mousedown", startDrag);
    rocket.addEventListener("mouseup", stopDrag);
    rocket.addEventListener("mousemove", dragRocket);
}

function startDrag(event) {
    isDragging = true;
    offset.x = event.clientX - rocket.getBoundingClientRect().left;
    offset.y = event.clientY - rocket.getBoundingClientRect().top;
}

function stopDrag() {
    isDragging = false;
}

function dragRocket(event) {
    if (!isDragging) return;

    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;

    const container = document.querySelector(".rocket_container");
    const maxX = container.clientWidth - rocket.clientWidth;
    const maxY = container.clientHeight - rocket.clientHeight;

    const clampedX = Math.min(Math.max(x, 0), maxX);
    const clampedY = Math.min(Math.max(y, 0), maxY);

    rocket.style.left = clampedX + "px";
    rocket.style.top = clampedY + "px";
}
window.onload = main();