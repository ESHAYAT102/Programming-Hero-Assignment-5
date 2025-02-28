function displayDayOfWeek() {
  const dayParagraph = document.getElementById("day");

  const now = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = now.getDay();
  const dayName = dayNames[dayIndex];

  dayParagraph.textContent = dayName;
}

function displayFormattedDate() {
  const dateParagraph = document.getElementById("date");
  const now = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  dateParagraph.textContent = `${month} ${day} ${year}`;
}

function updateBoard(button) {
  alert("Board Updated Successfully");
  const taskAssignedElement = document.getElementById("task-assigned");
  if (taskAssignedElement) {
    let currentAssigned = parseInt(taskAssignedElement.textContent);
    if (!isNaN(currentAssigned) && currentAssigned > 0) {
      taskAssignedElement.textContent = currentAssigned - 1;
    }
  }
  const taskScoreElement = document.getElementById("task-score");
  if (taskScoreElement) {
    let currentScore = parseInt(taskScoreElement.textContent);
    if (!isNaN(currentScore)) {
      taskScoreElement.textContent = currentScore + 1;
    }
  }
  const taskTitle =
    button.parentElement.parentElement.parentElement.querySelector(
      "p.text-xl.font-semibold"
    ).innerText;
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")} ${ampm}`;
  const newDiv = document.createElement("div");
  newDiv.textContent = `${taskTitle} - Completed at: ${timeString}`;
  newDiv.classList.add("p-5", "bg-slate-100", "rounded-lg", "mb-2");
  const activityLog = document.getElementById("activity-log");
  if (activityLog) {
    activityLog.prepend(newDiv);
  }
  button.disabled = true;
  checkIfAllTasksCompleted();
}

function checkIfAllTasksCompleted() {
  const taskAssignedElement = document.getElementById("task-assigned");
  if (taskAssignedElement && parseInt(taskAssignedElement.textContent) === 0) {
    alert("Congratulations! You have completed the current task.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(
    ".grid.grid-cols-3.grid-rows-2.gap-5 button"
  );
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      updateBoard(this);
    });
  });
  const clearHistoryButton = document.getElementById("clear-history");
  if (clearHistoryButton) {
    clearHistoryButton.addEventListener("click", function () {
      const activityLog = document.getElementById("activity-log");
      if (activityLog) {
        activityLog.innerHTML = "";
      }
    });
  }
  displayDayOfWeek();
  displayFormattedDate();
});
