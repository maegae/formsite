function taskSubmit() {
    var taskName = document.getElementById("taskName").value;
    var taskCheck = document.createElement("input");
    var taskItem = document.createElement("li");
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute("onclick", "taskComplete();");
    taskItem.appendChild(taskCheck);
    taskItem.appendChild(document.createTextNode(taskName));
    document.getElementById("taskList").appendChild(taskItem);
}

function taskComplete() {
    alert("Task Complete!");
}