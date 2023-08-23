
const date = document.querySelector('.date')
const time = document.querySelector('.time')

// date

function displayDate() {
    const now = new Date()
    const today = now.getDay() < 10 ? '0' + now.getDay() : now.getDay()
    const month = now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()
    const year = now.getFullYear() 
    date.innerText = `${year}-${month}-${today}`
    console.log(`${year}-${month}-${today}`)
}

setInterval(displayDate, 1000);

// time

function displayTime() {
    const now = new Date()
    const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    time.innerText = `${hour} : ${minutes} : ${seconds}`
    console.log(`${hour} : ${minutes} : ${seconds}`)
}

setInterval(displayTime, 1000);

