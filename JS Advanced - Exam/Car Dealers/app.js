window.addEventListener("load", solve);

function solve() {
  let inputElements = document.querySelectorAll('fieldset input, select');
  let publishBtnEl = document.getElementById('publish');
  let tableBodyEl = document.getElementById('table-body');
  let soldCarsListEl = document.getElementById('cars-list');
  let totalProfitEl = document.getElementById('profit');

  // let carDetails = {};
  let totalProfit = 0;

  publishBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    let carDetails = {};

    let hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '');

    if (hasEmptyInput) {
      return;
    }

    Array.from(inputElements).forEach(x => {
      carDetails[x.id] = x.value;
    });

    if (isNaN(Number(carDetails['original-cost'])) || isNaN(Number(carDetails['selling-price']))) {
      return;
    }

    if (Number(carDetails['original-cost']) > Number(carDetails['selling-price'])) {
      return;
    }

    let trRowEl = document.createElement('tr');
    trRowEl.classList.add('row');

    Object.keys(carDetails).forEach(key => {
      let tdEl = document.createElement('td');
      tdEl.textContent = carDetails[key];
      trRowEl.appendChild(tdEl)
    });

    let tdBtnsEl = document.createElement('td');
    let editBtnEl = document.createElement('button');
    editBtnEl.textContent = 'Edit';
    editBtnEl.classList.add('action-btn')
    editBtnEl.classList.add('edit')
    let sellBtnEl = document.createElement('button');
    sellBtnEl.textContent = 'Sell'
    sellBtnEl.classList.add('action-btn');
    sellBtnEl.classList.add('sell');

    tdBtnsEl.appendChild(editBtnEl);
    tdBtnsEl.appendChild(sellBtnEl);

    trRowEl.appendChild(tdBtnsEl);
    tableBodyEl.appendChild(trRowEl);

    Array.from(inputElements).forEach(x => {
      x.value = '';
    })

    editBtnEl.addEventListener('click', (e) => {
      Array.from(inputElements).forEach(x => {
        // console.log(carDetails);
        x.value = carDetails[x.id];
      })

      tableBodyEl.removeChild(trRowEl);
    })

    sellBtnEl.addEventListener('click', (e) => {
      let liEl = document.createElement('li');
      liEl.classList.add('each-list');

      let carModelAndNameEl = document.createElement('span');
      carModelAndNameEl.textContent = carDetails.make + ' ' + carDetails.model;

      let yearEl = document.createElement('span');
      yearEl.textContent = carDetails.year;

      let profitEl = document.createElement('span');
      profitEl.textContent = Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

      liEl.appendChild(carModelAndNameEl);
      liEl.appendChild(yearEl);
      liEl.appendChild(profitEl);

      soldCarsListEl.appendChild(liEl);
      totalProfit += Number(carDetails['selling-price']) - Number(carDetails['original-cost']);

      totalProfitEl.textContent = Math.round(totalProfit).toFixed(2);
      tableBodyEl.removeChild(trRowEl);
    })
  })
}