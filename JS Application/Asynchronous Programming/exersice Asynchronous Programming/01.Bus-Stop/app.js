function getInfo() {
  let stopIdGetEl = document.getElementById("stopId").value;
  let submitBtnGetEl = document.getElementById("submit");

  let stopNameGetEl = document.getElementById("stopName");
  let busesGetEl = document.getElementById("buses");
  let url = "http://localhost:3030/jsonstore/bus/businfo/";

  fetch(url + stopIdGetEl)
    .then((response) => {
      if (response.ok == false) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      stopNameGetEl.textContent = data.name;
   busesGetEl.replaceChildren();
      for (let [k, v] of Object.entries(data.buses)) {
        console.log(k, v);
        let createLI = document.createElement("li");
        createLI.textContent = `Bus ${k} arrives in ${v} minutes`;
        busesGetEl.appendChild(createLI);
      }
   
    })
    .catch((error) => {
       busesGetEl.replaceChildren();
      stopNameGetEl.textContent = "Error";
    });
}


