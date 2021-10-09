const access_token = "130893679253129";

let input = document.getElementById("searchbar");
const row = document.querySelector(".row");

let timer;
let finalData;

input.addEventListener("keyup", function () {
  list.style.display = "block";
  row.innerHTML = " ";
  inputValue = input.value;

  clearTimeout(timer);
  timer = setTimeout(async () => {
    const data = await fetch(
      ` https://superheroapi.com/api.php/${access_token}/search/${inputValue}`
     
    );

    x = await data.json();
    finalData = x.results;

    const list = document.querySelector("#list");
    list.innerHTML = "";

    try{
      for (i = 0; i < finalData.length; i++) {
        if (finalData[i].name.toLowerCase().includes(inputValue)) {
  
          //  created <a> </a> tag
          const link = document.createElement("a");
          //  added href attribute to a tag
          link.setAttribute("href", "./show.html"); 
          //  added class to a tag
          link.setAttribute("class", "link");
  
          //  created li tag
          const hero = document.createElement("li");
          //  added class to li tag
          hero.setAttribute("class", "list");
            //  added id to li tag
          hero.setAttribute('id', finalData[i].id);
          // added function to li
          hero.setAttribute('onclick', "clickData.apply(this, arguments)");
  
          hero.innerHTML = finalData[i].name;
          link.appendChild(hero)
          list.appendChild(link); 
  
        }
      }
    }
    catch(err){
      if(inputValue === ''){
      row.innerHTML = "<h1 class='text-secondary'>No keyword present in the search bar!</h1>"
      // console.log("No keyword present in the search bar");
      }
      else{
        row.innerHTML = "<h1 class='text-secondary'>No data found!</h1>"
        // console.log("No data found!")
      }
    }
  }, 100);
});

const btn = document.querySelector(".searchBtn");

btn.addEventListener("click", async function () {

  list.style.display = "none";

  row.innerHTML = " ";
  const val = input.value;
  // console.log(val);

  const data = await fetch(
    ` https://superheroapi.com/api.php/${access_token}/search/${val}`
);
  x = await data.json();
  finalData = x.results;

  // console.log(finalData);
  finalData.map((data) => {
    const createNewCard = `
          
          <div class="card mt-1 " style="width: 21rem;" id=${data.id}>
          <img src=${
            data.image.url
          } class="card-img-top p-3" alt="..." height=300px">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
           
            <a href="./show.html" class="btn btn-primary" id=${data.id}  onclick="viewData.apply(this, arguments)">View Details</a>
            <a href="#/" class="btn btn-primary ms-2 addToFav"  id=${data.id} onclick="favData.apply(this, arguments)">Add to Favourites</a>
          </div>
        </div>
        
`;
    row.innerHTML += createNewCard;
  });
});


const viewData = function(event){
  const id = event.target.id;
  window.sessionStorage.setItem('id' , id);
};


const clickData = function(event){
  const id = event.target.id;
  window.sessionStorage.setItem('id' , id);
};

function favData(event){
  
  const favid = event.target.id;

  //  get data from local stoarge
  let existing = localStorage.getItem('fav');
  existing = existing ? JSON.parse(existing)  : [];

  //  check if the particular superhero exists in localstorage or not
  const val = existing.includes(favid);
  
  //  if not add , add them
  if(!val){
  existing.push(favid);
  alert("Added to My Favourites!")
  }
  //  if added, proivde message to user
  else{
    alert("Already added! Click on 'My Favourites' button to view your favourite superheroes")
  }

  localStorage.setItem('fav' ,JSON.stringify(existing));
}


