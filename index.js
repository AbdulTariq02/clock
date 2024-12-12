
// const clock = document.querySelector('#hour')
// const clock1 = document.querySelector('#min')
// const clock2 = document.querySelector('#sec')
// const clock3 = document.querySelector('#am')
// //  const day = document.querySelector('#day')
// const date1 = document.querySelector('#date1')
// const date2 = document.querySelector('#date2')
// const date3 = document.querySelector('#date3')

// setInterval(function () {
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     //   clock.innerHTML = date.toLocaleTimeString();
//     clock.innerHTML = date.getHours()

//     clock1.innerHTML = date.getMinutes()
//     clock2.innerHTML = date.getSeconds()
//     if (clock === 12) {
//         clock3.innerHTML = 'PM'
//     } else {
//         clock3.innerHTML = 'AM'
//     }


//     date1.innerHTML = date.getDate()
//     date2.innerHTML = date.getMonth()
//     date3.innerHTML = date.getFullYear()
//     if (min >= 1 && min <= 9) {
//         clock1.innerHTML = "0" + date.getMinutes(); // Add leading zero
//     } else {
//         clock1.innerHTML = date.getMinutes(); // Display minutes as-is
//     }
// }, 1000);

let clock = document.querySelector('#hour');
let clock1 = document.querySelector('#min');
let clock2 = document.querySelector('#sec');
let clock3 = document.querySelector('#am');
let day = document.querySelector('#day')
let date1 = document.querySelector('#date1');
let date2 = document.querySelector('#date2');
let date3 = document.querySelector('#date3');

setInterval(function () {
    let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
 let formattedHours = hours % 12 || 12;
 let period = hours >= 12 ? 'PM' : 'AM';
let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
clock.innerHTML = formattedHours;
clock1.innerHTML = formattedMinutes;
clock2.innerHTML = formattedSeconds;
 clock3.innerHTML = period;
 date1.innerHTML = date.getDate();
 date2.innerHTML = date.getMonth() + 1;
  date3.innerHTML = date.getFullYear();
 let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let dayName = days[date.getDay() - 1]
day.innerHTML = dayName
}, 1000);
