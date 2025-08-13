// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  // Email Regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.textContent = "All fields are required.";
  } else if (!email.match(emailPattern)) {
    msg.style.color = "red";
    msg.textContent = "Please enter a valid email.";
  } else {
    msg.style.color = "green";
    msg.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

// Dynamic To-Do List
document.getElementById("addTask").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
});
