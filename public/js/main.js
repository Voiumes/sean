"use strict";var mailbtn=document.querySelector(".mailbtn"),numberbtn=document.querySelector(".numberbtn"),mail=document.querySelector(".mail"),number=document.querySelector(".number");mailbtn.addEventListener("click",function(){addblink(mail)}),numberbtn.addEventListener("click",function(){addblink(number)});var addblink=function(e){e.classList.toggle("blinking")},yoko=document.querySelector(".yoko");setTimeout(function(){yoko.className="displaynone"},6500),function(){var n=$(".quotes"),t=-1;!function e(){++t,n.eq(t%n.length).fadeIn(2e3).delay(5e3).fadeOut(2e3,e)}()}(),AOS.init();