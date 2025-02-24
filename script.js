let blockSlider = document.querySelector(".slider")
let slideItem = document.querySelectorAll(".slider__slide")
let spanCirkel = document.querySelectorAll(".span-cirkel")
let checkIndex = 0
let colors = ["#ffa500", "#0000ff", "#000000", "#7fff00", "#35012C", "#C7E8F3", "#DC0073"]

function showSlideItem(index) {
    if (index >= slideItem.length) {
        checkIndex = 0
    } 
    else if (index < 0) {
        checkIndex = slideItem.length - 1
    } 
    else {
        checkIndex = index
    }

    // Видаляємо клас активного слайда у всіх
    slideItem.forEach(slide => slide.classList.remove("active-slide"))

    // Додаємо клас активного тільки для потрібного слайда
    slideItem[checkIndex].classList.add("active-slide")

    // Скидаємо всі кружечки в стандартний колір
    spanCirkel.forEach(span => span.style.backgroundColor = "#d9d9d9")

    // Виділяємо активний кружечок
    spanCirkel[checkIndex].style.backgroundColor = "#F04259"
}

// Додаємо клас активного слайда до першого при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
    slideItem[0].classList.add("active-slide")
    spanCirkel[0].style.backgroundColor = "#F04259"
});

// Кнопки навігації
document.querySelector(".arrow-next").addEventListener("click", () => {
    showSlideItem(checkIndex + 1)
})

document.querySelector(".arrow-prev").addEventListener("click", () => {
    showSlideItem(checkIndex - 1)
})