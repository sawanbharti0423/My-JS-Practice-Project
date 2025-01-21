const btn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea")
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    localStorage.setItem("notes", JSON.stringify(data))
}

btn.addEventListener("click",
    function () {
        addNote();
    }
)

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
     <div class="tool">
          <i class="save fa-regular fa-floppy-disk"></i>
          <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener("click",
        function () {
            note.remove()
            saveNotes()
        }
    )

    note.querySelector(".save").addEventListener("click",
        function () {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener("focusout",
        function () {
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNote) => {
                addNote(lsNote)
            }
        )
    }
)()