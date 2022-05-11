const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");
const apiUrl = "https://api.lyrics.ovh";
const lyricsDiv = document.getElementById("lyrics");
let timeoutSuggest;
searchInput.addEventListener("input", () => {
  if (timeoutSuggest) {
    clearTimeout(timeoutSuggest);
  }
  timeoutSuggest = setTimeout(suggestions, 300);
});

removeResults = () => {
  results.innerHTML = "";
};

suggestions = () => {
  const term = searchInput.value;
  if (!term) {
    removeResults();
    return;
  }
  results.innerHTML = "Loading...";
  fetch(`${apiUrl}/suggest/${term}`)
    .then((response) => response.json())
    .then(({ data }) => {
      removeResults();
      const finalResults = [];
      const seenResults = [];
      data.forEach(({ title, artist, album }) => {
        if (seenResults.length >= 10) {
          return;
        }
        const t = `${title} - ${artist.name}`;
        if (seenResults.includes(t)) {
          return;
        }
        seenResults.push(t);
        finalResults.push({
          title,
          artist: artist.name,
          album: album.title,
          cover: album.cover_medium,
        });
      });
      const l = finalResults.length;
      if (l) {
        finalResults.forEach((result, i) => {
          let c = "result";
          if (i == l - 1) {
            c += " result-last";
          }
          const e = document.createElement("li");
          e.classList.add("flex");
          e.innerHTML = `
          <div class="${c}">
            <div class="background-image" style="background-image: url('${result.cover}')"></div>
            <img src="${result.cover}" class="cover">
            <div class="title">${result.title}</div>
            <div class="artist">${result.artist}</div>
          </div>
          `;
          results.appendChild(e);
          e.addEventListener("click", () => {
            songLyrics(result);
          });
        });
      } else {
        results.innerHTML = "No results";
      }
    })
    .catch((error) => {
      results.innerHTML = error;
    });
};

songLyrics = ({ artist, title, cover, album }) => {
  removeResults();
  lyricsDiv.innerHTML = "Loading...";
  fetch(`${apiUrl}/v1/${artist}/${title}`)
    .then((response) => response.json())
    .then(({ lyrics }) => {
      let html = `
      <img src="${cover}" class="cover-large">
      <h3 class="lyrics-title">
        ${title} - ${artist} (${album})
      </h3>`;
      html += `
      <div id="thelyrics" class="thelyrics">
        ${lyrics.replace(/\n/g, "<br />")}
      </div>
      `;
      lyricsDiv.innerHTML = html;
    })
    .catch((error) => {
      lyricsDiv.innerHTML = "Not found";
    });
};
