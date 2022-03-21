
const hamburger=document.querySelector(".hamburger");

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active');
    let cover=document.querySelector(".cover");
    cover.classList.toggle('active-cover');

});

const shortUrl=document.querySelector('#shortLink');
const invalid=document.querySelector('.valid-link');
const shortBtn=document.querySelector('.shorten');

shortBtn.addEventListener('click',()=>{
const query=shortUrl.value;

if(query===""){
shortUrl.classList.toggle('invalid-input');
invalid.innerHTML="** Please add a link **";
invalid.classList.add('invalid');

}
else{
    invalid.classList.remove('invalid');
    shortUrl.classList.remove('invalid-input');
    fetchApi(query);
    
    
}
});

const fetchApi= async(query)=>{
const loader=document.querySelector(".dot");
loader.style.display="block";
const response= await fetch('https://api.shrtco.de/v2/shorten?url='+query);
const data= await response.json();

const finalLink=data.result.short_link;
loader.style.display="none";
showResults(finalLink,query);
shortUrl.value='';
}

const showResults= (finalLink,query)=>{
    
const shortedLinks=document.querySelector('.shorted-links');
const linkBlock=document.createElement("div");
linkBlock.classList.add("short-block");
const queryText=document.createElement("div");
queryText.classList.add("query");
queryText.innerHTML=query;
const link=document.createElement("div");
link.classList.add("link");
link.innerHTML=finalLink;
const copyButton=document.createElement("button");
copyButton.classList.add("copy");
copyButton.classList.add("btn");
copyButton.innerHTML="Copy";
linkBlock.appendChild(queryText);
linkBlock.appendChild(link);
linkBlock.appendChild(copyButton);
shortedLinks.appendChild(linkBlock);
copyButton.addEventListener('click',()=>{
    let copied = link.textContent;

          navigator.clipboard.writeText(copied).then(() => {
            copyButton.textContent = 'Copied!';
            copyButton.style.background = 'hsl(257, 27%, 26%)';
          });
});

};