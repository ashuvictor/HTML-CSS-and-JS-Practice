const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
};

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
};

showTask();






// // Select elements from the DOM
// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById('list-container');

// // Function to add a task
// const addTask = () => {
//     if (inputBox.value.trim() === '') {
//         alert('You must write something!');
//     } else {
//         const li = document.createElement('li');
//         li.textContent = inputBox.value.trim();
        
//         li.addEventListener('click', () => {
//             li.classList.toggle('checked');
//             saveData();
//         });

//         const span = document.createElement('span');
//         span.textContent = '\u00D7';
//         span.classList.add('delete');
//         span.addEventListener('click', () => {
//             li.remove();
//             saveData();
//         });

//         li.appendChild(span);
//         listContainer.appendChild(li);
//         saveData();
//     }
//     inputBox.value = '';
// };

// // Event listener for list interactions
// listContainer.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked');
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// });

// // Save tasks to localStorage
// const saveData = () => {
//     const tasks = [];
//     document.querySelectorAll('#list-container li').forEach((li) => {
//         tasks.push({
//             task: li.firstChild.textContent,
//             checked: li.classList.contains('checked'),
//         });
//     });
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// };

// // Load tasks from localStorage
// const showTask = () => {
//     const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//     tasks.forEach(({ task, checked }) => {
//         const li = document.createElement('li');
//         li.textContent = task;
//         if (checked) li.classList.add('checked');

//         li.addEventListener('click', () => {
//             li.classList.toggle('checked');
//             saveData();
//         });

//         const span = document.createElement('span');
//         span.textContent = '\u00D7';
//         span.classList.add('delete');
//         span.addEventListener('click', () => {
//             li.remove();
//             saveData();
//         });

//         li.appendChild(span);
//         listContainer.appendChild(li);
//     });
// };

// // Initialize the app
// showTask();
