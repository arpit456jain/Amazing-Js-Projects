
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex =0 

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction === 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  }
  else if(direction === 'down') {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength -1
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
=======
//NavBar
$(document).ready(function () {
  $("ul.navbar-nav a").click(function (e) {
   $("ul.navbar-nav a").removeClass("active");
   $(this).addClass("active");
    });
});

// scroll to top starts
var scrolltop = $("#scroll-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    scrolltop.addClass("active");
  } else {
    scrolltop.removeClass("active");
  }
});

scrolltop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});
// scroll to top ends

let projects = [] ;
const allProjectList = document.getElementById('styles');
const experi = document.getElementById("cardd")
const ProjectCounter = document.getElementById('counter');
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredProjects = projects.filter( projects => {
        
        return projects.name.toLowerCase().includes(searchString.toLowerCase());
    });

    displayProjects(filteredProjects);
});


const getProject =()=>{
  fetch('style_links.json')
                .then(response => response.json())
                .then(data => {
                    projects = data;
                    displayProjects(projects)

  });
} 


    // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Css-Effects/tree/master/${links[i].name}" class="code">Code</a>
    const displayProjects = (projects) => {

      
        const htmlString = projects
        .map((project) => {

          


            return`<div class="stylebox">
              
            <img class="image" src="/${project.name}/preview.png" onerror="this.src='logo.png'" alt="" >
                  <div class="card-data">
                      <p class="card-heading">${project.name}</p>
                
                      <a href=${(project.link).split(" ").join("%20")} target="_blank"><button class="btnn">View</button></a> 
                  </div>
           
              </div>`; // Links to projects (To eliminate space , used split and join)
              
        })
       
        // allProjectList.innerHTML = htmlString;
        experi.innerHTML = htmlString
        ProjectCounter.innerHTML = projects.length;
        
    }

    getProject();



  // <a target="_blank" href="https://github.com/arpit456jain/Amazing-Js-Projects/tree/master/${links[i].name}" class="code">Code</a>
