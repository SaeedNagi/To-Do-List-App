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
      completeBtn.style.marginLeft = "70px";
      completeBtn.onclick = () => {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    };

        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = " ✘ ";
        deleteBtn.style.cursor = "pointer";
         deleteBtn.style.marginLeft = "70px";
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