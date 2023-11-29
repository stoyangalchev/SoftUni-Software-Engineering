function solve() {
  const url = `http://localhost:3030/jsonstore/advanced/table`;
  const body = document.querySelector(`tbody`);
  const input = document.querySelector(`#searchField`);
  const searchBtn = document.querySelector(`#searchBtn`);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach((obj) => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        const email = document.createElement("td");
        const course = document.createElement("td");

        name.textContent = obj.firstName + " " + obj.lastName;
        email.textContent = obj.email;
        course.textContent = obj.course;

        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(course);
        body.appendChild(row);
      });
    });
  searchBtn.addEventListener("click", onClick);

  function onClick() {
    const rows = Array.from(body.querySelectorAll("tr"));

    const search = input.value.toLowerCase();
    rows.forEach((r) => {
      if (r.textContent.toLowerCase().includes(search)) {
        r.classList.add("select");
      } else {
        r.classList.remove("select");
      }
    });
    input.value = "";
  }
}
solve();
