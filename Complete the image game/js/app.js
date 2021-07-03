console.log("hi");
// if users add a note add it to the locals
shownotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let addtitle = document.getElementById('addtitle');
    // notes is the  div in which notes is created
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else 
    {
        // notesobj = JSON.parse(notes);
    }
   let  myobj={
        title:addtitle.value,
        text:addtxt.value
    }
    // notesobj.push(addtxt.value);
    notesobj.push(myobj);
    // here notes.obj is an array
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = '';
    addtitle.value='';
    console.log(notes.obj);
    shownotes();
})

// function to show notes from local storage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title">${index + 1}${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id ="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>
            `;
    });

    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;

    }
    else {
        notesobj.innerHTML = `nothing `;
    }
}

// to delete notes
function deletenote(index) {
    console.log('i an eating',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();

    console.log("input event fired",inputval);

    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt= element.getElementsByTagName("p")[0].innerText;
        console.log(cardtxt);
        if(cardtxt.includes(inputval))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })

})