const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

// converting second , minute, hour , day in miliseconds 
const second =  1000, minute = 60*second, hour = 60*minute,day = 24* hour;

const timerFunction =()=>{

   // Generating cuurent date in mm/dd/yyy
    let now = new Date(),
        dd = String(now.getDate()).padStart(2,"0"),
        mm  = String(now.getMonth() + 1 ).padStart(2,"0"),
        yyyy =  now.getFullYear();
        now =`${mm}/${dd}/${yyyy}`;

    // Taking Target Date  from User 
    const enteredDay = prompt("EnterDay").padStart(2, "0");
    const enteredMonth = prompt("Entermonth").padStart(2, "0");
   
    // homework complete
    if (enteredDay > 31 ){
        alert("write the value under the 31");
    }
    if (enteredMonth > 12 ){
        alert("write the value under the 12");
    }

    let  targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    
   // checking if target date is for next year  
    if(now>targetDate){
        targetDate =  `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }

    const intervalId = setInterval( ()=> {
    // converting targetdate in milliseconds    
    const timer = new Date(targetDate).getTime();
    // taking  current date in milliseconds 
    const today = new Date().getTime();

    //finding difference  target Date and today's date
    const difference = timer-today;
    //finding left days, hour, minutes , seconds 
    const leftDay = (Math.floor(difference /day));
    const leftHour = (Math.floor((difference %day)/hour));
    const leftminute = (Math.floor((difference %hour)/minute));
    const leftsecond = (Math.floor((difference %minute)/second));
    //showing timer in Dom
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftminute;
    secondsElement.innerText = leftsecond;
   // console.log(`${leftDay}:${leftHour}:${leftminute}:${leftsecond}`)
   // stop set Interval after reaching the target time
   if(difference < 0 ){
    counterTimer.style.display = "none";
    heading.innerText = "Time's up";
    clearInterval(intervalId);
   }
    },0);
};

timerFunction();
