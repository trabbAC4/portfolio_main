
function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

function createStars() {
    const container = document.getElementById("container3");
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${getRandomPosition(0, container.clientWidth - 50)}px`;
        star.style.top = `${getRandomPosition(0, container.clientHeight - 50)}px`;
        star.innerHTML = "<h1><i class='fa-sharp fa-regular fa-star fa-2xs' style='color: #d9d9d9;'></i></h1>";
        const unlighted = star.innerHTML;

        star.onclick = function() {
            if (star.innerHTML == unlighted) {
                star.innerHTML = "<h1><i class='fa-sharp fa-regular fa-star fa-2xs' style='color: #e8eb1e;'></i></h1>";
        }
            else {
                star.innerHTML = unlighted;
            }
        };
        container.appendChild(star);
    }
}

window.onload = function() {
    createStars();
    draggableElements.forEach(element => {
        element.style.left = getRandomPosition(0, 200) + "px";
        element.style.top = getRandomPosition(0, 200) + "px";
});
};




