document.getElementById("btn").addEventListener("click",function(){
    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
});

function checkPalindrome(txt){
    let temp_text = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = temp_text.length;
    let res =document.getElementById("result");
    let i;

    for( i = 0; i < len / 2; i++){
        if( temp_text[i] !== temp_text[len-1-i]){
            res.textContent = `Nope! " ${txt} " is NOT a palindrome`;
            document.getElementById("input-text").value='';
            return;
        }
        res.textContent = `Yes! " ${txt} " is a palindrome`
        document.getElementById("input-text").value='';
    }
}
