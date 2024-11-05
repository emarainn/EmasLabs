function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    if (taskValue === "") return;

    const li = document.createElement("li");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.className = "task-checkbox"; // Add class for styling
    taskCheckbox.onchange = () => {
        taskText.classList.toggle("crossed-out", taskCheckbox.checked);
    };

    const taskText = document.createElement("span");
    taskText.textContent = taskValue;
    taskText.className = "task-text"; // Add class for styling

    const removeBtn = document.createElement("span");
    removeBtn.innerHTML = '<i id="trashBtn" class="fas fa-trash" style="color: red;"></i>';
    removeBtn.className = "remove";
    removeBtn.onclick = () => {
        currentTask = li; // Store the current task
        showToast(); // Show the toast notification
    };


    li.appendChild(taskCheckbox);
    li.appendChild(taskText);
    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    updateTaskCount();
    toggleCardVisibility();
}

function toggleCardVisibility() {
    const taskList = document.getElementById("taskList");
    const taskCard = document.getElementById("taskCard");
    taskCard.style.display = taskList.childElementCount > 0 ? "block" : "none";
}

function toggleText() {
    const checkbox = document.getElementById("myCheckbox");
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        const taskCheckbox = task.querySelector("input[type='checkbox']");
        const taskText = task.querySelector("span");
        taskText.classList.toggle("crossed-out", checkbox.checked);

        const removeBtn = task.querySelector(".remove");
        if (checkbox.checked) {
            if (taskCheckbox) {
                taskCheckbox.checked = false;
            }
            if (removeBtn) {
                removeBtn.remove();
            }
        } else {
            if (!removeBtn) {
                const newRemoveBtn = document.createElement("span");
                newRemoveBtn.innerHTML = '<i id="trashBtn" class="fas fa-trash" style="color: red;"></i>'; // Re-add the trash icon
                newRemoveBtn.className = "remove";
                newRemoveBtn.onclick = () => {
                    task.remove();
                    updateTaskCount();
                    toggleCardVisibility();
                };
                task.appendChild(newRemoveBtn);
            }
        }
    });
}


function updateTaskCount() {
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");
    taskCount.textContent = `List Count: ${taskList.childElementCount}`; // Update the count display
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.style.display = "block"; // Show the toast

    // Hide the toast after a certain duration
    setTimeout(() => {
        toast.style.display = "none"; 
    }, 5000); // Optional: hide after 5 seconds

    // Add event listeners for the buttons
    document.getElementById("confirmDelete").onclick = () => {
        if (currentTask) {
            currentTask.remove(); // Remove the current task
            updateTaskCount();
            toggleCardVisibility();
            hideToast(); // Hide the toast
        }
    };

    document.getElementById("cancelDelete").onclick = () => {
        hideToast(); // Just hide the toast if the user cancels
    };
}

function hideToast() {
    const toast = document.getElementById("toast");
    toast.style.display = "none"; // Hide the toast
}