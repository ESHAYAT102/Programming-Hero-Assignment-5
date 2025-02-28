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

window.onload = function () {
  displayDayOfWeek();
  displayFormattedDate();
};

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
