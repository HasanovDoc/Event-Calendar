let dayCard = document.querySelectorAll(".day__card");
let dayInf = document.querySelectorAll(".day__inf");
let close = document.querySelectorAll(".block-close");

dayCard.forEach(element => {
    element.addEventListener("click", () => {
        dayInf.forEach(day => {
            element.classList.toggle("active");
        })
    });
});