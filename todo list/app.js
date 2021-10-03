
$('ul').on('click','li',function (){

    $(this).toggleClass('completed');

})


$('input[type="text"]').$(selector).keypress(function (event) { 
    if(event.which===13){
        const todoText =$ (this).val();
        const todo =`<li>${todoText}</li>`;
        $('ul').append(todo);
        $(this).val("");
    }
    
});

$('span').click(function(event){
    $(this).parent().remove();
    event.stopPropagation();
});