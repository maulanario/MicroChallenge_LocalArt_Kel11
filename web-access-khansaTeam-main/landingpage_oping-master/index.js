let currentIndex = 0;
const items = document.querySelectorAll(".item");

function showItem(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});
