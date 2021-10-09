const access_token = "130893679253129";

const row = document.querySelector(".row");
const header = document.querySelector(".sub-heading");

const ids = JSON.parse(localStorage.getItem("fav"));
console.log(ids);

if (ids.length === 0) {
  header.innerHTML = "No favourites Added!";
} else {
  header.innerHTML = `You have ${ids.length} favourite Superheroes in your collection!`;
}

async function favouriteData() {
  for (i in ids) {
    const id = ids[i];

    const data = await fetch(
      ` https://superheroapi.com/api.php/${access_token}/${id}`
    );
    finalData = await data.json();

    const showCard = `
       
      <div class="card mb-3" style="max-width: 540px;" id=${finalData.id}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${finalData.image.url}  class="img-fluid rounded-start p-2 ps-0" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${finalData.name}</h5>
              <p class="card-text">Gender : ${finalData.appearance.gender}</p>
              <p class="card-text">Publisher : ${finalData.biography.publisher}</p>
              <a href="./show.html" class="btn btn-primary" id=${finalData.id}  onclick="viewData.apply(this, arguments)">View Details</a>
              <a href=" " class="btn btn-outline-danger mt-2" id=${finalData.id}  onclick="removeData.apply(this, arguments)">Remove from Fvaourites</a>
            </div>
          </div>
        </div>
      </div>` ;

    row.innerHTML += showCard;
  }
}

function removeData(event) {
  const givenId = event.target.id;
  let existing = JSON.parse(localStorage.getItem("fav"));
  let new_array = existing.filter((id) => id !== givenId);
  localStorage.setItem("fav", JSON.stringify(new_array));
}

const viewData = function(event){
  const id = event.target.id;
  window.sessionStorage.setItem('id' , id);
};
