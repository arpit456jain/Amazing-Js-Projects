//NavBar
$(document).ready(function () {
    $("ul.navbar-nav a").click(function (e) {
     $("ul.navbar-nav a").removeClass("active");
     $(this).addClass("active");
      });
  });
 //NavBar ends 

// scroll to top starts
var scrolltop = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        scrolltop.addClass('active');
    } else {
        scrolltop.removeClass('active');
    }
});
    
scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});
// scroll to top ends

let calculators = [];
const calculatorCard = document.getElementById('cardd');
const getcalculators = fetch('calculatorspage.json')
                .then(response => response.json())
                .then(data => {
                    calculators = data;
                    displayCalculators(calculators)

});

const displayCalculators = (calculators) => {

      
    const htmlString = calculators
    .map((calculator) => {
      console.log(calculator.length)
        return`<div class="stylebox">
          
              <img class="image" src="Calculators/${calculator.name}/preview.png" alt="" >
              <div class="card-data">
                  <p class="card-heading">${calculator.name}</p>
                  <a href=${calculator.link}><button class="btnn">View</button></a>
              </div>
       
          </div>`;
          
    })

        calculatorCard.innerHTML = htmlString;
};

getcalculators();
