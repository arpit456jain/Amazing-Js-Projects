// load your meme image
var check= false;
$("#input").change(function (event){
  var target= event.target || window.event.srcElement;
  var files= target.files;
  if(FileReader && files && files.length){
    var fr= new FileReader();
    fr.onload= function (){
      $('#img').attr('src',fr.result);
    }
    fr.readAsDataURL(files[0]);
    check=true;
  }
  else{

  }
});


//build process
var element = $("#main");
var getCanvas;

  $("#btn-preview").on('click', function () {
    if(check==true){

      html2canvas(element, {
      onrendered: function (canvas) {
              getCanvas = canvas;
              $("#btn-preview").css("display","none");
              $("#downloads").css("display","inline-block");
          }
      });
    }
    else{
      alert("Oops! Seems Like You're In a Hurry. Try Uploading Meme Image First!!")
    }
  });


//Download Thy Meme, O Sire!
$("#downloads").on('click', function () {
    var imageData = getCanvas.toDataURL("image/png");
    // Browser Downloads It
    var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#downloads").attr("download", "Your_Meme.png").attr("href", newData);
    $("#btn-preview").css("display","inline-block");
    $("#downloads").css("display","none");
    });
  

// Refreshing Page

$("refresh").on('click',function (){
  location.reload();
})

// Coded By Priyanshu Mohanty
