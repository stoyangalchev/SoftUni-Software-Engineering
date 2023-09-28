window.addEventListener("load", solution);
function solution() {
  let mainDivEl = document.getElementById("block");
  let bodyEl = document.getElementsByTagName("body")[0];
  let previewEl = document.getElementById("infoPreview");
  let editButt = document.getElementById("editBTN");
  editButt.addEventListener("click", editF);
  let conditueButt = document.getElementById("continueBTN");
  conditueButt.addEventListener("click", continueF);

  let fNameEl = document.getElementById(`fname`);
  let emailEl = document.getElementById(`email`);
  let phoneEl = document.getElementById(`phone`);
  let adressEl = document.getElementById(`address`);
  let postalEl = document.getElementById(`code`);

  let submitButEl = document.getElementById("submitBTN");
  submitButEl.addEventListener("click", submitF);

  function submitF(event) {
    event.preventDefault();
    if (fNameEl.value !== "" && emailEl.value !== "") {
      let nameLiEl = document.createElement("li");
      let emailLiEl = document.createElement("li");
      let phoneLiEl = document.createElement("li");
      let adressLiEl = document.createElement("li");
      let postalLiEl = document.createElement("li");

      nameLiEl.textContent = "Full Name: ";
      emailLiEl.textContent = "Email: ";
      phoneLiEl.textContent = "Phone Number: ";
      adressLiEl.textContent = "Address: ";
      postalLiEl.textContent = "Postal Code: ";
      nameLiEl.textContent += fNameEl.value;
      emailLiEl.textContent += emailEl.value;
      phoneLiEl.textContent += phoneEl.value;
      adressLiEl.textContent += adressEl.value;
      postalLiEl.textContent += postalEl.value;

      previewEl.appendChild(nameLiEl);
      previewEl.appendChild(emailLiEl);
      previewEl.appendChild(phoneLiEl);
      previewEl.appendChild(adressLiEl);
      previewEl.appendChild(postalLiEl);

      editButt.removeAttribute("disabled");
      conditueButt.removeAttribute("disabled");
      submitButEl.setAttribute("disabled", "");

      fNameEl.value = "";
      emailEl.value = "";
      phoneEl.value = "";
      adressEl.value = "";
      postalEl.value = "";
    }
  }
  function editF(event) {
    let currUlList =
      event.target.parentElement.parentElement.children[0].children;
    console.log(currUlList);
    let currButtons = Array.from(event.target.parentElement.children);
    let arrwithLiEls = Array.from(currUlList);

    fNameEl.value = arrwithLiEls[0].textContent.split("Full Name: ")[1];
    emailEl.value = arrwithLiEls[1].textContent.split("Email: ")[1];
    phoneEl.value = arrwithLiEls[2].textContent.split("Phone Number: ")[1];
    adressEl.value = arrwithLiEls[3].textContent.split("Address: ")[1];
    postalEl.value = arrwithLiEls[4].textContent.split("Postal Code: ")[1];

    currButtons[0].setAttribute("disabled", "");
    currButtons[1].setAttribute("disabled", "");
    submitButEl.removeAttribute("disabled");
    for (const liEls of arrwithLiEls) {
      liEls.remove();
    }
  }

  function continueF(event) {
    mainDivEl.remove();
    let divEl = document.createElement("div");
    divEl.setAttribute("id", "block");
    let h3El = document.createElement("h3");
    h3El.textContent = "Thank you for your reservation!";
    divEl.appendChild(h3El);
    bodyEl.appendChild(divEl);
  }
}
