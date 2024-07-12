 // Modal related functions
 const modal = document.getElementById('task-modal');
 const addTaskBtn = document.getElementById('add-task-btn');
 const closeModalBtn = document.getElementById('close-modal');

 addTaskBtn.addEventListener('click', () => {
     modal.classList.remove('hidden');
 });

 function closeModal() {
     modal.classList.add('hidden');
 }

 // Task submission
 document.getElementById('task-form').addEventListener('submit', function(event) {
     event.preventDefault();

     const taskTitle = document.getElementById('task-title').value.trim();
     const taskDescription = document.getElementById('task-description').value.trim();
     if (taskTitle !== '' && taskDescription !== '') {
         const newTaskList = document.getElementById('new-task-list');
         const taskItem = document.createElement('li');
         const currentDate = new Date();
         const formattedDate = currentDate.toLocaleDateString();
         const formattedTime = currentDate.toLocaleTimeString();
         
         taskItem.className = 'flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50';
         taskItem.innerHTML = `
             <div class="flex justify-between items-center">
                 <h3 class="text-lg font-semibold">${taskTitle}</h3>
                 <span class="text-sm text-gray-500">${formattedDate} ${formattedTime}</span>
             </div>
             <p>${taskDescription}</p>
             <div class="flex justify-end gap-2 mt-2">
                 <button class="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition" onclick="moveToProgress(this)">Start</button>
                 <button class="text-red-600 hover:text-red-800 transition" onclick="this.parentElement.parentElement.remove()">Delete</button>
             </div>
         `;
         newTaskList.appendChild(taskItem);

         closeModal(); // Close modal after adding task

         // Clear input fields
         document.getElementById('task-title').value = '';
         document.getElementById('task-description').value = '';
     }
 });

 function moveToProgress(button) {
     const taskItem = button.parentElement.parentElement;
     button.textContent = 'Complete';
     button.className = 'bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition';
     button.onclick = function() { moveToComplete(this) };
     document.getElementById('progress-task-list').appendChild(taskItem);
 }

 function moveToComplete(button) {
     const taskItem = button.parentElement.parentElement;
     button.remove();
     document.getElementById('complete-task-list').appendChild(taskItem);
 }

 function showTab(tab) {
     document.getElementById('new-tab').classList.add('hidden');
     document.getElementById('progress-tab').classList.add('hidden');
     document.getElementById('complete-tab').classList.add('hidden');

     document.getElementById(`${tab}-tab`).classList.remove('hidden');
 }