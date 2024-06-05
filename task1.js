var addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.onclick = function() {
        var taskInput = document.getElementById('taskInput');
        var taskText = taskInput.value;

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        var li = document.createElement('li');
        li.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            li.remove();
        };

            li.onclick = function() {
                if (li.className === 'done') {
                    li.className = '';
                } else {
                    li.className = 'done';
                }
            };

            li.appendChild(deleteButton);
            var taskList = document.getElementById('taskList');
            taskList.appendChild(li);

            taskInput.value = '';
        };