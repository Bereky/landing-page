                    /* Resposive Landing Page */
                    /* Written by Bereket L.*/

// variables
const time_hour = document.querySelector('.time-hour');
const date = document.querySelector('.date');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const greeting = document.querySelector('.greet');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let days = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturaday', 'Sunday'];
let quoteCount = 0;

// quotes
let quotes = [
    {
        author: 'Marcus Aurelius',
        quote: "Our life is what our thought make it"
    },
    {
        author: 'Fredrich Nietzsche',
        quote: "What doesn't destroy me makes me stronger"
    },
    {
        author: 'Albert Einstien',
        quote: 'Imagination is most important than knowledge'
    },
    {
        author: 'Abrahom Lincoln',
        quote: 'The best thing about the future is that it comes one day at a time'
    },
    {
        author: 'Henry Ford',
        quote: "Don't find fault, find a remedy; anybody can complain"
    },
];

// the displayer 
function display(){
    let timer = new Date();
    let amPm;
    let second = timer.getSeconds();
    let minute = timer.getMinutes();
    let hour = timer.getHours();
    let today = timer.getDay();
    let currentDate = timer.getDate();
    let currentMonth = timer.getMonth();
    let currentYear = timer.getFullYear();
    //set the greeting based on time 
    if(hour > 12){
        hour = hour - 12;
        amPm = 'PM'
        if(hour>=7){
            greeting.innerHTML = 'Good Evening';
        }
        else if(hour<7){
            greeting.innerHTML = 'Good Afternoon';
        }
    }
    else if(hour < 12){
        amPm = 'AM'
        if(hour>=7){
            greeting.innerHTML = 'Good Evening';
        }
        if(hour<=7){
            hour = hour + 12;
            greeting.innerHTML = 'Good Morning';
        }
    }

    //add zeros to the timer area 
    if(second < 10){
        second = '0' + second;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(hour <  10){
        hour = '0' + hour;
        } 

    //display the time 
    time_hour.innerHTML = (`${hour}:${minute}:${second} ${amPm}`);
    day.innerHTML = `${days[today-1]}`;
    date.innerHTML = `${currentDate},`;
    
    const options = { month: 'long'};
    let myMonth = new Intl.DateTimeFormat('en-US', options).format(currentMonth);
    month.innerHTML = myMonth;
    year.innerHTML = currentYear;
    setTimeout(display, 1000);
}


//display the quotes
function displayQuote(){
    quote.innerHTML = quotes[quoteCount].quote;
    author.innerHTML = quotes[quoteCount].author;
    
    //Repeat every 5 min 
    setTimeout(displayQuote, 300000);
    quoteCount++;
    if(quoteCount == quotes.length){
        quoteCount = 0;
    }
}

//start the functions
window.addEventListener('DOMContentLoaded', () => {
    display();
    displayQuote();   
});

