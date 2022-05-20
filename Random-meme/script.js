const memesSrc = [
  "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2017/09/main-qimg-171482e27ebfc7e262bfbabeb07b9ece-1504253531.jpg",
  "https://static.langimg.com/thumb/msid-67268236,width-680,resizemode-3/navbharat-times.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNpAwPPPim-RN4_DjSYt9ZIzFfjhDdA1tvttXLiouFJ-B0dIGSwAITtyT8LMogSoNu4Y&usqp=CAU",
  "https://tweakindia.com/wp-content/uploads/2020/07/2.png",
  "https://qph.fs.quoracdn.net/main-qimg-d3e293e694b270bcd9ff499f0deede15-lq",
  "https://i.pinimg.com/originals/30/ef/07/30ef075b1a6a289b5dac4d031832eb72.jpg",
  "https://getsethappy.com/wp-content/uploads/2019/01/gully-boys-memes-1080x600.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0TmftlNOhn2jN9D95IRBmVv9UhbrvNKiIQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3w9On31QwjIbk_GPmVPMPTJIrjm6dr46-A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-BveXtt73oa2x0hUtj5h2yK7xEB3gAxwGpF-lwgmTo6cddUDtI8RZT7PuvlGX6hRZYM&usqp=CAU",
  "https://1.bp.blogspot.com/-UlFIpSZcNS0/YJIgP1BEzmI/AAAAAAAAETE/zWEtrl3PqmgjSwJx9ccIlqM3yW_toEZOgCLcBGAsYHQ/s2048/very-funny-indian-memes.jpg",
  "https://1.bp.blogspot.com/-gwaDLFVz8Uc/YNtP0yBouaI/AAAAAAAAB5w/10SEpkv0LIAlvUAv_kCKN58u6wa_auURQCNcBGAsYHQ/s1079/Indian%2Bmemes%2Bin%2Bhindi%2Btrending%2BIndian%2Bmemes18-min.webp",
  "https://images.news18.com/ibnlive/uploads/2021/09/cheese-butter.png",
  "https://images.news18.com/ibnlive/uploads/2014/07/engineeringmemes1.jpg?impolicy=website&width=510&height=356",
  "https://www.ohyaaro.com/wp-content/uploads/2021/05/funny-memes00.jpg",
  "https://memezila.com/wp-content/When-its-raining-but-the-electricity-doesnt-go-Miracle-miracle-meme-2239.png",
];

const memeImg = document.querySelector(".meme");
const getBtn = document.getElementById("btn");
const container = document.querySelector(".img-container");

container.style.display = "none";

getBtn.addEventListener("click", function () {
  const randomMeme = Math.floor(Math.random() * memesSrc.length);
  memeImg.src = memesSrc[randomMeme];
  container.style.display = "block";
});