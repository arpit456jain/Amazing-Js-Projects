const access_token = "130893679253129";

const showContainer = document.querySelector('.show_container')
// get id from local storage to display particular superhero
const id = sessionStorage.getItem('id');

async function showData(){

    const data = await fetch(
        ` https://superheroapi.com/api.php/${access_token}/${id}`
    );
      x = await data.json();
      finalData = x;
    

      const showCard = `
      <h1 class="text-center mb-3">${finalData.name}</h1>
      <div class="container">
  <div class="row">
    <div class="col">
    <img src=${finalData.image.url} class="img-fluid p-2" alt="superhero" >
    <a href="#/" class="btn btn-primary btn-lg ms-3 w-75 addToFav"  id=${finalData.id} onclick="favData.apply(this, arguments)" > <i class="fas fa-heart"></i> Add to Favourites</a>

    </div>
    <div class="col">
    <div class="card-body">
            <h5 class="card-title">Biography</h5>
            <hr>
            <p class="card-text">Full Name : ${finalData.name}</p>
            <p class="card-text">Gender : ${finalData.appearance.gender}</p>
            <p class="card-text">Weight : ${finalData.appearance.weight[1]}</p>
            <p class="card-text">Height : ${finalData.appearance.height[1]}</p>
            <p class="card-text">Aliases : [${finalData.biography.aliases[0]}, ${finalData.biography.aliases[1]}, ${finalData.biography.aliases[2]} ]</p>
            <p class="card-text">Publisher : ${finalData.biography.publisher}</p>
            <p class="card-text">Alignment : ${finalData.biography.alignment}</p>
            <p class="card-text">Occupation : ${finalData.work.occupation}</p>
            <p class="card-text">Relatives : ${finalData.connections.relatives} </p>
            <h5 class="card-title mt-4">PowerStats</h5>
            <hr>
            <p class="card-text">Intelligences : ${finalData.powerstats.intelligence}</p>
            <p class="card-text">Strength : ${finalData.powerstats.strength}</p>
            <p class="card-text">Speed : ${finalData.powerstats.speed}</p>
            <p class="card-text">Durability : ${finalData.powerstats.durability}</p>
            <p class="card-text ">Power : ${finalData.powerstats.power}</p>
            <p class="card-text">Combat : ${finalData.powerstats.combat}</p>
          </div>
    </div>
    
  </div>
</div>

  `
  showContainer.innerHTML = showCard;
}


function favData(event){

    const favid = event.target.id;

    let existing = localStorage.getItem('fav');
    existing = existing ? JSON.parse(existing)  : [];
  
    const val = existing.includes(favid);
    console.log(val);
    if(!val){
    existing.push(favid);
    alert("Added to My Favourites!")
  
    }
    else{
      alert("Already added! Click on 'My Favourites' button to view your favourite superheroes")
    }

    localStorage.setItem('fav' ,JSON.stringify(existing));
}
