const noteListDiv = document.querySelector(".note-list");
let noteID =1;
function Note(id, title, content)
{
    this.id=id;
    this.title=title;
    this.content=content;
}

// add eventlisteners

function eventListeners()
{
    document.addEventListener("DOMContentLoaded",displayNotes);
    document.getElementById("add-note-btn").addEventListener("click",addNewNote);

    noteListDiv.addEventListener("click", deleteNote);
    document.getElementById("delete-all-btn").addEventListener("click", deleteAllNotes);
}

eventListeners();

//get item from storage

function getDataFromStorage(){
    return localStorage.getItem("notes")?
    JSON.parse(localStorage.getItem("notes")):[];
}

//add a new note in the list

function addNewNote(){
    const noteTitle = document.getElementById("note-title");
    const noteContent= document.getElementById("note-content");

    if(validateInput(noteTitle,noteContent))
    {
        let notes = getDataFromStorage();
        let noteItem= new Note(noteID, noteTitle.value, noteContent.value);
        noteID++;
        notes.push(noteItem);
        createNote(noteItem);

        //saving in the local storage

        localStorage.setItem("notes",JSON.stringify(notes));
        noteTitle.value="";
        noteContent.value="";
    }
}

// input validation


function validateInput(title, content){
        if(title.value!==""&& content.value!==""){
            return true;
        }
        else{
            if(title.value===""){
                title.classList.add("warning");        }
            if(content.value===""){
                content.classList.add("warning");        }
        }
        setTimeout(()=>{
            title.classList.remove("warning");
            content.classList.remove("warning");
        }, 1600);
    }

// create a new note


function createNote(noteItem){
        const div= document.createElement("div");
        div.classList.add("note-item");
        div.setAttribute("data-id",noteItem.id);
        div.innerHTML=`
        <h3>${noteItem.title}</h3>
        <p>${noteItem.content}</p>
        <button type="button" class="btn" id="delete-all-btn">
                    <span><i class="fas fa-trash"></i></span>
                    Delete 
                </button>
        `;
        noteListDiv.appendChild(div);
    }
 

// display all the notes from the local storage


function displayNotes()
{
    let notes = getDataFromStorage();
    if(notes.length>0){
        noteID = notes[notes.length-1].id;
        noteID++;
    }
    else{
        noteID=1;
    }
    notes.forEach(item =>{
        createNote(item);
    });
}


// delete a note


function deleteNote(e){
    if(e.target.classList.contains("btn"))
    {
        e.target.parentElement.remove();
        let divID= e.target.parentElement.dataset.id;
        let notes = getDataFromStorage();
        let newNotesList = notes.filter(item =>{
            return item.id !== parseInt(divID);
        });
        localStorage.setItem("notes",JSON.stringify(newNotesList));
    }
}

// delete all notes

function deleteAllNotes(){
    localStorage.removeItem("notes");
    let noteList = document.querySelectorAll(".note-item");
    if(noteList.length>0){
        noteList.forEach(item=> {
            noteListDiv.removeChild(item);
        });
    }
    noteID=1;
}