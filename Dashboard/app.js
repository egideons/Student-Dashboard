const sideMenu = document.querySelector("aside");
const profileBtn = document.querySelector("#profile-btn");
const themeToggler = document.querySelector(".theme-toggler");
const nextDay = document.getElementById("nextDay");
const prevDay = document.getElementById("prevDay");

profileBtn.onclick = function () {
  sideMenu.classList.toggle("active");
};
window.onscroll = () => {
  sideMenu.classList.remove("active");
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};

themeToggler.onclick = function () {
  document.body.classList.toggle("dark-theme");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
};

let setData = (day) => {
  document.querySelector("table tbody").innerHTML = " "; //To clear out previous table data;
  let daylist = ["Monday"];
  document.querySelector(".timetable div h2").innerHTML = daylist[day];
  switch (day) {
    case 0:
      day = Courses;
      break;
  }

  day.forEach((sub) => {
    const tr = document.createElement("tr");
    const trContent = `
                            <td>${sub.session}</td>
                            <td>${sub.courseCode}</td>
                            <td>${sub.courseTitle}</td>
                            <td>${sub.semester}</td>
                            <td>${sub.unit}</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
  });
};

let now = new Date();
let today = Courses; // Will return the present day in numerical value;
let day = today; //To prevent the today value from changing;

function timeTableAll() {
  document.getElementById("timetable").classList.toggle("active");
  setData(today);
  document.querySelector(".timetable div h2").innerHTML = "List of Courses";
}

setData(day); //To set the data in the table on loading window.
document.querySelector(".timetable div h2").innerHTML = "List of Courses"; //To prevent overwriting the heading on loading;
