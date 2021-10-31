function backColorChange(colorcode) {
    document.body.style.backgroundColor = colorcode;
    let txtClr = document.getElementsByClassName('textColor');
    if (colorcode == '#000000') {
        for (let i of txtClr)
            i.style.color = "white";
    }
    else {
        for (let i of txtClr)
            i.style.color = "black";
    }

}