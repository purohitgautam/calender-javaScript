
const daysTag = document.querySelector(".days"),
currentDateTitle = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");


let date = new Date()
let currentMonth = date.getMonth()
let currentYear = date.getFullYear()

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const renderCalendar = ()=>{
    let liTag = ''
    
    let firstDayofMonth = new Date (currentYear, currentMonth, 1).getDay()
    let lastDateOfMonth = new Date (currentYear, currentMonth+1, 0).getDate()
    let lastDateOfLastMonth = new Date (currentYear, currentMonth, 0).getDate()
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay()


    for (let i = firstDayofMonth; i>0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth-i+1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
        && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDateTitle.innerHTML = `${months[currentMonth]} ${currentYear}`
    daysTag.innerHTML = liTag
}
renderCalendar()

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        if(currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth, new Date().getDate());
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar()
    });   
});
