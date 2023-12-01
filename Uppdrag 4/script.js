let list = ["Städa", "Handla", "Plugga", "Ge blod"];

/* Jag hade väldigt svårt att komma igång med denna uppgift 
men gick bra när jag väl lyckades få igång remove button har skrivit kommentar om tankar under
kodens gång. */
        // Att få upp array till skärmen och sortera i alfabetsordning
function renderTasks() {
  let taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ""; 
  list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  list.forEach(task => {
    let li = document.createElement('li');
    li.textContent = task;
    taskListElement.appendChild(li);
  });
}
 // lägga till något i todolistan samt ta bort gammal input och skriv ut en
 // ny array med ny lista
function addTask() {
  let inputTask = document.getElementById('newTask').value.trim();

  if (inputTask === "") {
    alert("Skriv in något du behöver göra");
  } else {
    document.getElementById('newTask').value = ''; 

    // Så man inte behöver storbokstav samt sort array igen tillsammans med 
    // att lägga till ny item i lista med confirm
    if (list.some(task => task.toLowerCase() === inputTask.toLowerCase())) {
      alert("Den här uppgiften finns redan i listan!");
    } else {
      let addToTaskList = confirm("Vill du lägga till i listan?");
      
      if (addToTaskList) {
        list.push(inputTask);
        list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); // bokstavs ordning sort array
        renderTasks();
      }
    }
  }
}
// för att ta bort något i listan med hjälp av user input, med sort, alfabet och allt
// från tidigare 
function deleteTask() {
  let taskToDelete = document.getElementById('deleteTask').value.trim();

  if (taskToDelete === "") {
    alert("Skriv in något att ta bort från listan");
  } else {
    const index = list.findIndex(task => task.toLowerCase() === taskToDelete.toLowerCase());

    if (index !== -1) {
      list.splice(index, 1);
      list.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); 
      renderTasks();
    } else {
      alert("Woops, denna fanns inte i listan"); }
    document.getElementById('deleteTask').value = '';
  }
}
renderTasks();