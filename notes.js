let parentContainer = document.querySelector('#container');
let addBtn = document.getElementById('addBtn');

const saveNotes = () => {
    let allNotes = [];
    let yourNotes = parentContainer.querySelectorAll('textarea');
    yourNotes.forEach(notes => {
        allNotes.push(notes.value);
    })
    localStorage.setItem('notes',JSON.stringify(allNotes));
};

addBtn.addEventListener("click",()=>{
    createNotes();
});

const createNotes = (loStNotes = "") => {
    let notesDiv = document.createElement('div');
    notesDiv.classList.add('notes');
    let newElement = `<div class="head">
            <div class="title">
                <input type="text" placeholder="Title Goes Here">
            </div>
            <div class="icon">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="delete fa-solid fa-trash"></i>
            </div>
        </div>
        <textarea name="" placeholder="Write Your Notes" class="msg" id="">${loStNotes}</textarea>` ;
    notesDiv.innerHTML = newElement;
    parentContainer.appendChild(notesDiv);

    //For Save
    notesDiv.querySelector('.save').addEventListener('click',()=>{
        saveNotes();
    })
    
    //For Delete
    notesDiv.querySelector('.delete').addEventListener('click',()=>{
        notesDiv.remove();
        saveNotes();
    })
};
(
    function(){
        let loStNotes = JSON.parse(localStorage.getItem("notes"));
        if(loStNotes.length === 0){
            createNotes();
        }
        else{
            loStNotes.forEach(element => {
                createNotes(element);                
            });
        }
    }
)();
