// ==UserScript==
// @name         Monkey reload
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Reloads a page it on every X minutes to prevent automatic logout. 
// @author       Cvet Georgiev
// @match        https://outlook.office.com/calendar/view/workweek
// @match        https://www.office.com/?auth=2
// @grant        none


// ==/UserScript==
var interval = 10; // set interval in munutes

var block_to_insert ;
block_to_insert = document.createElement( 'div' );
block_to_insert.style.background="black";
block_to_insert.style.height="21px"
block_to_insert.style.color="red";
var date_time="Reloaded last on: ";
var today = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reload(){
    location.reload();
}

setInterval(reload, interval*60*1000);// realod the page every 10 minutes

block_to_insert.innerHTML = date_time.concat(month[today.getMonth()]," ",today.getDay(),", ",today.getFullYear()," at ",addZero(today.getHours()),":",addZero(today.getMinutes()),":",addZero(today.getSeconds()));
var body = document.getElementsByTagName('body')[0];
body.insertBefore(block_to_insert,body.childNodes[0]);