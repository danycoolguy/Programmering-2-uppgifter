/* Det första jag gjorde var en function för att få upp anteckningarna på skärmen samt sortera dom.
I och med att användaren lägger till en anteckning gjort jag även så att edit och delete knappen
endast kommer upp då */
        function renderTasks() {
            let taskListElement = document.getElementById('taskList');
            taskListElement.innerHTML = "";
            list.sort((a, b) => a.titel.localeCompare(b.titel, undefined, { sensitivity: 'base' }));
            list.forEach(task => {
                let div = document.createElement('div');
                div.classList.add('note');

                let titelH2 = document.createElement('h2');
                titelH2.textContent = task.titel;

                let textP = document.createElement('p');
                textP.textContent = task.text;

                let editButton = document.createElement('span');
                editButton.innerHTML = ' ✏️ Edit';
                editButton.style.color = 'blue';
                editButton.style.cursor = 'pointer';
                editButton.onclick = function () { editTask(task); };

                let deleteButton = document.createElement('span');
                deleteButton.innerHTML = ' 🗑️ Radera';
                deleteButton.style.color = 'red';
                deleteButton.style.cursor = 'pointer';
                deleteButton.onclick = function () { deleteTask(task); };

                div.appendChild(titelH2);
                div.appendChild(textP);
                div.appendChild(editButton);
                div.appendChild(deleteButton);

                taskListElement.appendChild(div);
            });
        }
/* function för att skapa antecking via text inmatning från alert samt regler om den finns i listan 
redan och liknande. */
        function skapaAnteckning() {
            let titel = document.getElementById('titel').value.trim();
            let text = document.getElementById('text').value.trim();

            if (titel === "" || text === "") {
                alert("Fyll i både titel och text.");
            } else {
                document.getElementById('titel').value = '';
                document.getElementById('text').value = '';

                if (list.some(task => task.titel.toLowerCase() === titel.toLowerCase())) {
                    alert("Den här anteckningen finns redan i listan!");
                } else {
                    let addToTaskList = confirm("Vill du lägga till i listan?");
                    
                    if (addToTaskList) {
                        list.push({ titel: titel, text: text });
                        list.sort((a, b) => a.titel.localeCompare(b.titel, undefined, { sensitivity: 'base' }));
                        localStorage.setItem('anteckningar', JSON.stringify(list));
                        renderTasks();
                    }
                }
            }
        }
/* Edit task function så jag kan ändra tidigare anteckningar */
        function editTask(task) {
            let newTitel = prompt("Ändra titel:", task.titel);
            let newText = prompt("Ändra text:", task.text);
            
            if (newTitel !== null && newText !== null) {
                task.titel = newTitel.trim();
                task.text = newText.trim();
                localStorage.setItem('anteckningar', JSON.stringify(list));
                renderTasks();
            }
        }
/* Delete function för att ta bort anteckningar genom att klicka på radera knappen */
        function deleteTask(task) {
            const index = list.findIndex(t => t === task);

            if (index !== -1) {
                list.splice(index, 1);
                localStorage.setItem('anteckningar', JSON.stringify(list));
                renderTasks();
            }
        }

        // Eventlistener för att spara anteckningar när användaren lämnar sidan och kommer tillbaka
        window.addEventListener('beforeunload', function() {
            localStorage.setItem('anteckningar', JSON.stringify(list));
        });

        // När sidan startar ska anteckningarna laddas
        window.addEventListener('load', function() {
            renderTasks();
        });

        let list = JSON.parse(localStorage.getItem('anteckningar')) || [];