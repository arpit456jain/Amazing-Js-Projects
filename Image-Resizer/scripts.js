const fileInput = document.querySelector(".file-input");
const downloadBtn = document.querySelector(".download-button");

const widthInput = document.querySelector(".resizer-input-width");
const heightInput = document.querySelector(".resizer-input-height");
const aspectToggle = document.querySelector(".resizer-aspect");
const resetBtn = document.querySelector(".reset-button");

const originalImage = document.querySelector(".original-image");
const img = document.querySelector('.resized-image');

const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-image");
const caption = document.querySelector(".caption");

const canvas = document.querySelector(".resizer-canvas");
const canvasCtx = canvas.getContext("2d");

let activeImage, originalWidthToHeightRatio;

// Function Opens File Explorer
function openFile(){
    fileInput.click();
}

fileInput.addEventListener("change", e => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        openImage(reader.result);
    });

    reader.readAsDataURL(e.target.files[0]);
})

// Updates Custom Width
widthInput.addEventListener("change", () => {
    if(!activeImage) return;
    
        let heightValue; 
    
        if(aspectToggle.checked){
            heightValue = widthInput.value / originalWidthToHeightRatio;
        } else {
            heightValue = heightInput.value;
        }
    
        resize(widthInput.value, heightValue);
});

// Updates Custom Height
heightInput.addEventListener("change", () => {
        if(!activeImage) return;
    
        let widthValue; 
    
        if(aspectToggle.checked){
            widthValue = heightInput.value * originalWidthToHeightRatio;
        } else {
            widthValue = widthInput.value;
        }
    
        resize(widthValue, heightInput.value);
});

// Resets width and height to original
resetBtn.addEventListener("click", () => {
    resize(activeImage.width, activeImage.height);
})

// Aspect Ratio Calculation & Image Src Inputs.
function openImage(imageSrc) {
    activeImage = new Image();

    activeImage.addEventListener('load', () => {
        originalWidthToHeightRatio = activeImage.width / activeImage.height;
        resize(activeImage.width, activeImage.height);
    });
    activeImage.src = imageSrc;
    originalImage.src = imageSrc;
}

// Resizes images with specified width and height.
function resize(width, height) {
    canvas.width = Math.floor(width);
    canvas.height = Math.floor(height);
    widthInput.value = Math.floor(width);
    heightInput.value = Math.floor(height);

    canvasCtx.drawImage(activeImage, 0, 0, Math.floor(width), Math.floor(height));
    let data = canvas.toDataURL('image/jpeg');
    let link = document.createElement('a');
    link.innerHTML = `<img src="${data}" alt="Resized Image"/>`;
    img.innerHTML = "";
    img.appendChild(link, img.firstChild);
    fullImg.innerHTML = `<img class="full-img" src="${data}" alt="Resized Image"/>`;
}

// Downloads Resized Image
downloadBtn.addEventListener('click', () => {
    let data = canvas.toDataURL('image/jpeg');
    downloadBtn.href = data;
    downloadBtn.setAttribute('download', 'Resized-File');
});

// Clears the Canvas on reload.
window.onload = () => {
    widthInput.value = "";
    heightInput.value = "";
    fileInput.value = "";
};

// Displays the Original Image
originalImage.addEventListener('click', () => {
    modal.classList.add('open');
    fullImg.src = activeImage.src;
    caption.innerText = "Original Image";
});

// Opens up the image in a modal.
img.addEventListener('click', () => {
    modal.classList.add('open');
    let data = canvas.toDataURL('image/jpeg');
    fullImg.src = data;
    caption.innerText = "Resized Image";
});

// Removes the modal class.
modal.addEventListener('click', (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});

