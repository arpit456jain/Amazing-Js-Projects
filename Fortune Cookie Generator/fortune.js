const generateFortuneCookie = async() =>
{   
        /* Displaying previous fortune cookies for different users*/
    var fortuneElement = document.createElement("li");
    var fortuneCookieText=document.getElementById('cookie');
    fortuneElement.innerHTML=fortuneCookieText.innerHTML;
    document.getElementById("previous-fortunes-container");
    var usedFortunes = document.getElementById("previous-fortunes-container");
    usedFortunes.appendChild(fortuneElement);
    
    /* Generating new fortune cookie */
    var url = "https://raw.githubusercontent.com/reggi/fortune-cookie/master/fortune-cookie.json";
    document.getElementById('message').innerHTML = " ";
    document.getElementById('cookie').innerHTML = " ";
    const user= document.getElementById('fname').value;
    const response = await fetch(url);
    const totalCookie = await response.json();
    const index = Math.floor(Math.random()*totalCookie.length);
    const quo = totalCookie[index];
    document.getElementById('message').innerHTML = "Dear "+user+", your fortune cookie for the day: ";
    document.getElementById('cookie').innerHTML = quo;
    
    /* Sharing Fortune Cookie via Twitter and WhatsApp */
    tweet.href="https://twitter.com/intent/tweet?text="+quo+" ~ Today's Fortune cookie for "+user;
  whatsapp.href="whatsapp://send?text="+quo+" ~ Today's Fortune Cookie for "+user;
}

generateFortuneCookie();

    /* Clear Screen Function */
function clearCookie()
{
    document.getElementById('message').innerHTML = " ";
    document.getElementById('cookie').innerHTML = " ";
    document.getElementById('previous-fortunes-container').innerHTML = " ";
}
