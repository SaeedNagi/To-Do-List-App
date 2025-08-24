const btn = document.getElementById("btn")
const tasklist = document.getElementById("tasklist")
const searchinput = document.getElementById("search")
const Clearbtn = document.getElementById("Clearbtn")
btn.onclick = ()=>{
      if (searchinput.value.trim() === "") return alert("Enter a task.......")
      const li = document.createElement("li");
      li.innerHTML = searchinput.value;


      const completeBtn = document.createElement("span");
      completeBtn.innerHTML = " ✔ ";
      completeBtn.style.cursor = "pointer";
      completeBtn.style.color = "White";
      completeBtn.style.borderRadius = "50%";
      completeBtn.style.width = "50vw"
      completeBtn.style.height = "50vh"
      completeBtn.style.marginLeft = "15vw";
      completeBtn.style.fontSize = "2rem"
      completeBtn.style.backgroundColor = " Black";
      completeBtn.onclick = () => {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    };

        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = " ✘ ";
        deleteBtn.style.color = "White";
        deleteBtn.style.backgroundColor = " Black";
        deleteBtn.style.borderRadius = "50%";
        deleteBtn.style.width = "50vw"
        deleteBtn.style.fontSize = "2rem"
        deleteBtn.style.height = "50vh"
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.marginLeft = "15vw";
        deleteBtn.onclick = () => {
        li.remove();
    };

       Clearbtn.onclick = ()=>{
        tasklist.innerHTML = " ";
    }
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn)
      tasklist.appendChild(li);
      searchinput.value = "";
}