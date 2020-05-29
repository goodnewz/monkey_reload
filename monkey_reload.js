// ==UserScript==
// @name         Monkey reload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reloads a page it on every X minutes to prevent automatic logout. 
// @author       Cvet Georgiev
// @match        https://outlook.office.com/calendar/view/workweek
// @match        https://www.office.com/?auth=2
// @grant        none

// ==/UserScript==

var block_to_insert ;
block_to_insert = document.createElement( 'div' );
var number_times = 'Number of times reloaded ';
var date_time=". Reloaded last at: "
var today = new Date();


function count_times_reloaded(){
    if (localStorage.counter) {
        localStorage.counter = Number(localStorage.counter) + 1;
    } else {
        localStorage.counter = 1;
    }
    location.reload();
}
setInterval(count_times_reloaded, 10*60*1000);// realod the page every 10 minutes

block_to_insert.innerHTML = number_times.concat(localStorage.counter,date_time,today.getHours(),":",today.getMinutes(),":",today.getSeconds()) ;
var body=document.getElementsByTagName('body')[0];
body.insertBefore(block_to_insert,body.childNodes[0]);
//localStorage.removeItem("counter");
