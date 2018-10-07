let mailbtn = document.querySelector(".mailbtn");
let numberbtn = document.querySelector(".numberbtn");
let mail = document.querySelector(".mail");
let number = document.querySelector(".number");

mailbtn.addEventListener('click', function(){
    addblink(mail)

});
numberbtn.addEventListener('click', function(){
    addblink(number)
});

const addblink = (e) => {
    e.classList.toggle('blinking');
}


let yoko = document.querySelector('.yoko');

setTimeout(function(){ 
    yoko.className = 'displaynone'; 
}, 6500);


(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(5000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();

AOS.init();