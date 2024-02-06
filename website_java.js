// website_java.js



function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = task;
        var removeButton = document.createElement("button");
        removeButton.textContent = "❌"; // "X" symbol
        removeButton.classList.add("remove-button"); // Add class
        removeButton.onclick = function() {
            li.remove();
        };
        li.appendChild(removeButton);
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
}




function toggleDropdown() {
            var dropdownContent = document.getElementById("dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";} 
	    
  	    else {
                dropdownContent.style.display = "block";
            }
        }


var input = document.getElementById("taskInput");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask(); // Call the addTask function when Enter is pressed
    }
});







