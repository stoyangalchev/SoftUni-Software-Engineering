window.addEventListener("load", solve);

function solve() {
  let firstnameGetEl = document.getElementById("first-name");
  let lastnameGetEl = document.getElementById("last-name");
  let peoplecountGetEl = document.getElementById("people-count");
  let fromdateGetEl = document.getElementById("from-date");
  let dayscountGetEl = document.getElementById("days-count");

  let nextButtonGetEl = document.getElementById("next-btn");
  //Parent Prewiev
  let ticketinfolistGetEl =
    document.getElementsByClassName("ticket-info-list")[0];
  //Parent Confirm
  let confirmticketGetEl = document.getElementsByClassName("confirm-ticket")[0];

  //Div id main
  let divIdmainGetEl = document.getElementById("main");
  //Body el
  let body = document.getElementById("body");

  nextButtonGetEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      firstnameGetEl.value == "" ||
      lastnameGetEl.value == "" ||
      peoplecountGetEl.value == "" ||
      fromdateGetEl.value == "" ||
      dayscountGetEl.value == ""
    ) {
      return;
    }
    let firstname = firstnameGetEl.value;
    let lastname = lastnameGetEl.value;
    let peoplecount = peoplecountGetEl.value;
    let fromdate = fromdateGetEl.value;
    let dayscount = dayscountGetEl.value;

    let liClassTicketCreateEl = document.createElement("li");
    liClassTicketCreateEl.classList.add("ticket");

    let articleCreateEl = document.createElement("article");
    let h3CreateEl = document.createElement("h3");
    h3CreateEl.textContent = `Name: ${firstname} ${lastname}`;
    let p1CreateEl = document.createElement("p");
    p1CreateEl.textContent = `From date: ${fromdate}`;
    let p2CreateEl = document.createElement("p");
    p2CreateEl.textContent = `For ${dayscount} days`;
    let p3CreateEl = document.createElement("p");
    p3CreateEl.textContent = `For ${peoplecount} people`;
    //Edit Button
    let editButtonCreateEl = document.createElement("button");
    editButtonCreateEl.textContent = "Edit";
    editButtonCreateEl.classList.add("edit-btn");
    //Continue Button
    let continueButtonCreateEl = document.createElement("button");
    continueButtonCreateEl.textContent = "Continue";
    continueButtonCreateEl.classList.add("continue-btn");

    ticketinfolistGetEl.appendChild(liClassTicketCreateEl);
    liClassTicketCreateEl.appendChild(articleCreateEl);
    articleCreateEl.appendChild(h3CreateEl);
    articleCreateEl.appendChild(p1CreateEl);
    articleCreateEl.appendChild(p2CreateEl);
    articleCreateEl.appendChild(p3CreateEl);
    liClassTicketCreateEl.appendChild(editButtonCreateEl);
    liClassTicketCreateEl.appendChild(continueButtonCreateEl);

    nextButtonGetEl.disabled = true;

    firstnameGetEl.value = "";
    lastnameGetEl.value = "";
    peoplecountGetEl.value = "";
    fromdateGetEl.value = "";
    dayscountGetEl.value = "";
    editButtonCreateEl.disabled = false;
    continueButtonCreateEl.disabled = false;

    editButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      editButtonCreateEl.disabled = true;
      continueButtonCreateEl.disabled = true;

      firstnameGetEl.value = firstname;
      lastnameGetEl.value = lastname;
      peoplecountGetEl.value = peoplecount;
      fromdateGetEl.value = fromdate;
      dayscountGetEl.value = dayscount;
      liClassTicketCreateEl.remove();
      nextButtonGetEl.disabled = false;
    });

    continueButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      confirmticketGetEl.appendChild(liClassTicketCreateEl);
      editButtonCreateEl.remove();
      continueButtonCreateEl.remove();

      let confirmButtonCreateEl = document.createElement("button");
      confirmButtonCreateEl.textContent = "Confirm";
      confirmButtonCreateEl.classList.add("confirm-btn");
      //Continue Button
      let cancelButtonCreateEl = document.createElement("button");
      cancelButtonCreateEl.textContent = "Cancel";
      cancelButtonCreateEl.classList.add("cancel-btn");

      liClassTicketCreateEl.appendChild(confirmButtonCreateEl);
      liClassTicketCreateEl.appendChild(cancelButtonCreateEl);

      cancelButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        liClassTicketCreateEl.remove();
        nextButtonGetEl.disabled = false;
      });
      confirmButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        divIdmainGetEl.remove();
        let h1CreateEl = document.createElement("h1");
        h1CreateEl.setAttribute("id", "thank-you");
        h1CreateEl.textContent = "Thank you, have a nice day!";

        let backButtonCreateEl = document.createElement("button");
        backButtonCreateEl.textContent = "Back";
        backButtonCreateEl.setAttribute("id", "back-btn");
        body.appendChild(h1CreateEl);
        body.appendChild(backButtonCreateEl);

        backButtonCreateEl.addEventListener("click", (e) => {
          location.reload(true);
        });
      });
    });
  });
}
