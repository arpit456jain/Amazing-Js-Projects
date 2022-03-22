var imageFile = document.getElementById('fileName');
var canvas = document.getElementById('canvas');
var button_state = document.getElementById('button');

button_state.onclick=handleImagetoPdf

function handleImagetoPdf()
{
    html2canvas(canvas,{
        onrendered:function(canvas){
            var imageData=canvas.toDataURL('image/png');
            

            var docs = new jsPDF('p','mm');

            docs.addImage(imageData,'PNG',10,10);
            docs.save("converted-image");
        }
    })
}


var context=canvas.getContext('2d');

imageFile.addEventListener('change',handleImage,false);


function handleImage(e)
{
    var reader=new FileReader();
     
    reader.onload=function(event)
    {
        var image = new Image();

        image.onload=function()
        {
            canvas.width=image.width;
            canvas.height=image.height;
            context.drawImage(image,0,0);
        }

        image.src=event.target.result;
    }

    reader.readAsDataURL(e.target.files[0]);



}