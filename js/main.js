"use strict"
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
   weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
giveaway = document.querySelector(".text-date"),
items = document.querySelectorAll(".format h4")

let currentDate = new Date(),
tempYear = currentDate.getFullYear(),
tempMonth = currentDate.getMonth(),
tempDay = currentDate.getDate();

const futureData = new Date(tempYear, tempMonth, tempDay + 10  , 11, 30, 0),
year = futureData.getFullYear(),
date = futureData.getDate(),
month = months[futureData.getMonth()],
hours = futureData.getHours(),
weekday = weekdays[futureData.getDay()],
minutes = futureData.getMinutes(),
futureTime = futureData.getTime();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
function getRemainingTime() {
const today = new Date().getTime(),
diff = futureTime - today,
oneDay = 24*60*60*1000,
oneHour = 60 * 60 * 1000,
oneMinute = 60 * 1000;
let days = Math.floor(diff/oneDay),
hours = Math.floor((diff%oneDay)/oneHour),
minutes = Math.floor((diff%oneHour)/oneMinute),
seconds = Math.floor((diff%oneMinute) / 1000);
const values = [days, hours, minutes, seconds];
function format(item) {
if(item < 10) return `0${item}`
else return item
}
items.forEach((item,index) => {
    item.innerHTML = format(values[index])
})
let countdown = setTimeout(getRemainingTime,1000);

if(diff < 0)
{
    clearTimeout(countdown);
    document.querySelector(".countdown-container").innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;

}
}

getRemainingTime()


