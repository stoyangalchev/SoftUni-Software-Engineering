function solve() {
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let infoGetEl = document.getElementsByClassName("info")[0];
  let stop = {
    next: "depot",
  };
  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`)
      .then((response) => response.json())
      .then((data) => {
        stop = data;
        infoGetEl.textContent = "Next stop" + stop.name;
      })
      .catch((error) => {
        infoGetEl.textContent = "Error";
      });
    departBtn.disabled = true;
    arriveBtn.disabled = false;

  }

  function arrive() {
   infoGetEl.textContent="Arriving at "+stop.name;
    departBtn.disabled=false;
    arriveBtn.disabled=true;

  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
