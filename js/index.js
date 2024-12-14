"use strict";

const happyContainer = document.querySelector('.happy__content'); 
const countdownContainer = document.querySelector('.countdown__content'); 
const settingIcon = document.querySelector('.setting-icon');
const subline = document.querySelector('.subline h2');
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');


const a="19";
const b="December";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];


/**Important Variable */
const d = new Date();
const oneYearFromNow = new Date(d.setFullYear(d.getFullYear() + 1));
let birthday;
let distanceOfTime;

//Interval for Countdown
let interval = setInterval(() => {

  const date = new Date(birthday),
        seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60,
        days = hours * 24;
  
  // console.log(date);
  
  let countDown = date.getTime();
  let now = new Date().getTime();
    
  distanceOfTime =   countDown - now;
    

    day.textContent = Math.floor(distanceOfTime /  (days))
    hour.textContent = Math.floor((distanceOfTime %  (days))  / (hours));
    minute.textContent = Math.floor((distanceOfTime %  (hours))  / (minutes));
    second.textContent = Math.floor((distanceOfTime %  (minutes))  / (seconds));

    // console.log(birthday);


    if(distanceOfTime < 0){
      countdownContainer.style.display = 'none';
      happyContainer.style.display = 'block';

    }else{
      countdownContainer.style.display = 'block';
      happyContainer.style.display = 'none';
    }

    
}, 0);



settingIcon.addEventListener("click", () =>{
  const styleModalbox = getComputedStyle(modalbox);
   
  (styleModalbox.display === 'none') ? modalbox.style.display  = "flex" : modalbox.style.display  = "none";

  birthdayInput.focus()
  

  
})




/**Utils */

/**For checking the date is in the past or in the future and do something when either one happen*/
function checkPastOrFuture(date, month, year){
  const data = new Date(date + ' ' +  month + ' ' + new Date().getFullYear()).setHours(0, 0, 0, 0);

  const now = new Date().setHours(0, 0, 0, 0);

  const lastDateInThisYear = new Date('31 December' + new Date().getFullYear());

  console.log(date + ' ' +  month + ' ' + new Date().getFullYear())
  console.log(new Date(date + ' ' +  month + ' ' + new Date().getFullYear()))

  if(data  < now){
    console.log('past')
    birthday = `${date} ${month} ${oneYearFromNow.getFullYear()} 00:00:00`;
    subline.textContent =  `From this day until ${date} ${month} ${oneYearFromNow.getFullYear()}`;

    
  }else if(data <= lastDateInThisYear){
    console.log('_______________________________')
    console.log('not until last date')
    birthday = `${date} ${month} ${new Date().getFullYear()} 00:00:00`;
    subline.textContent  = `From this day until ${date} ${month} ${new Date().getFullYear()}`;
  }
}

checkPastOrFuture(a,b);