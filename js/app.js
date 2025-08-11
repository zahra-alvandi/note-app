// const creatButton = document.querySelector(".create-button");
// const modalScreen = document.querySelector(".modal-screen");
// const closeModalBtn = document.querySelector(".close");
// const closeXBtn = document.querySelector(".close-x-btn");
// const textArea = document.querySelector("textarea");
// const createNoteBtn = document.querySelector(".continue");
// const colorBoxes = document.querySelectorAll(".color-box");
// const notesContainer = document.querySelector(".notes-container");
// const searchInput = document.querySelector(".search-input");
// const searchBtn = document.querySelector(".search-btn");


// let mainColor;

// function showModal() {
//     modalScreen.classList.remove("hidden");
// }

// function hideModal() {
//     modalScreen.classList.add("hidden");
// }

// function addNote() {
//     const note = textArea.value;

//     const parentArticleElem = document.createElement("article");
//     parentArticleElem.classList.add("note");
//     parentArticleElem.style.backgroundColor = mainColor;

//     const noteContentElem = document.createElement("p");
//     noteContentElem.classList.add("note-content");
//     noteContentElem.innerHTML = note;

//     const trashParentDiv = document.createElement("div");
//     const noteTrashElem = document.createElement("i");
//     noteTrashElem.className = "fa-solid fa-trash delete";

//     noteTrashElem.addEventListener("click", function (event) {
//         event.target.parentElement.parentElement.remove();
//     });

//     trashParentDiv.append(noteTrashElem);
//     parentArticleElem.append(noteContentElem);
//     parentArticleElem.append(trashParentDiv);

//     notesContainer.append(parentArticleElem);
//     hideModal();
//     textArea.value = "";
// }

// colorBoxes.forEach(function (colorBox) {
//     colorBox.addEventListener("click", function (event) {
//         mainColor = event.target.dataset.color;

//         //* way1 
//         // colorBoxes.forEach(function (item) {
//         //     item.classList.remove("selected");
//         // });

//         //* way2
//         const selectedColorBox = document.querySelector(".selected");
//         selectedColorBox.classList.remove("selected");

//         event.target.classList.add("selected");
//     });
// });

// function searchInNotes() {
//     const searchValue = searchInput.value;
//     const notes = document.querySelectorAll(".note");

//     notes.forEach(function (note) {
//         const noteContentElem = note.querySelector(".note-content");
//         if(noteContentElem.innerHTML.includes(searchValue)) {
//             note.style.display = "flex";
//         } else {
//             note.style.display = "none";
//         }
//     })
// }


// creatButton.addEventListener("click", showModal);
// closeModalBtn.addEventListener("click", hideModal);
// closeXBtn.addEventListener("click", hideModal);
// createNoteBtn.addEventListener("click", addNote);
// searchBtn.addEventListener("click", searchInNotes);
// document.body.addEventListener("keyup", function (event) {
//     if (event.key === "Escape") {
//         modalScreen.classList.add("hidden");
//     }
// });


const createButton = document.querySelector(".create-button");
const closeModalBtn = document.querySelector(".close");
const closeXBtn = document.querySelector(".close-x-btn");
const modal = document.querySelector(".modal-screen");
const textarea = document.querySelector("textarea");
const createNoteBtn = document.querySelector(".continue");
const colorsBoxes = document.querySelectorAll(".color-box");
const notesContainer = document.querySelector(".notes-container");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

let mainColor;

function showModal() {
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
}

function addNote() {
    const note = textarea.value;

    const parentArticleElem = document.createElement("article");
    parentArticleElem.classList.add("note");
    parentArticleElem.style.backgroundColor = mainColor;

    const noteContentElem = document.createElement("p");
    noteContentElem.classList.add("note-content");
    noteContentElem.innerHTML = note;

    const trashParentDiv = document.createElement("div");
    const noteTrashElem = document.createElement("i");
    noteTrashElem.className = "fa-solid fa-trash delete";

    noteTrashElem.addEventListener("click", function (event) {
        event.target.parentElement.parentElement.remove();
    });

    trashParentDiv.append(noteTrashElem);
    parentArticleElem.append(noteContentElem);
    parentArticleElem.append(trashParentDiv);

    notesContainer.append(parentArticleElem);
    hideModal();
    textarea.value = "";
}

function searchInNotes() {
    const searchValue = searchInput.value;
    const notes = document.querySelectorAll(".note");

    notes.forEach(function (note) {
        const noteContentElem = note.querySelector(".note-content");

        if (noteContentElem.innerHTML.includes(searchValue)) {
            note.style.display = "flex";
        } else {
            note.style.display = "none";
        }
    });
}

colorsBoxes.forEach(function (colorBox) {
    colorBox.addEventListener("click", function (event) {
        mainColor = event.target.dataset.color;

        //* Way 1
        // colorsBoxes.forEach(function (item) {
        //   item.classList.remove("selected");
        // });

        //* Way 2
        const selectedColorBox = document.querySelector(".selected");
        selectedColorBox.classList.remove("selected");

        event.target.classList.add("selected");
    });
});

createButton.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", hideModal);
closeXBtn.addEventListener("click", hideModal);
createNoteBtn.addEventListener("click", addNote);
searchBtn.addEventListener("click", searchInNotes);
document.body.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        hideModal();
    }
});
