window.addEventListener("load", solution);

function solution() {
  let employeeGetEl = document.getElementById("employee");
  let categoryGetEl = document.getElementById("category");
  let urgencyGetEl = document.getElementById("urgency");
  let teamGetEl = document.getElementById("team");
  let descriptionGetEl = document.getElementById("description");
  //Preview list Parent
  let previewList = document.getElementsByClassName("preview-list")[0];
  //Pending-list Parent
  let pendinglist = document.getElementsByClassName("pending-list")[0];
  //Resolved-list Parent
  let resolvedList = document.getElementsByClassName("resolved-list")[0];
  //AddBUton
  let addBtn = document.getElementById("add-btn");

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      employeeGetEl.value == "" ||
      categoryGetEl.value == "" ||
      urgencyGetEl.value == "" ||
      teamGetEl.value == "" ||
      descriptionGetEl.value == ""
    ) {
      return;
    }
    let employee = employeeGetEl.value;
    let category = categoryGetEl.value;
    let urgency = urgencyGetEl.value;
    let team = teamGetEl.value;
    let description = descriptionGetEl.value;

    //
    let LiCreateEl = document.createElement("li");
    LiCreateEl.classList.add("problem-content");
    let articleCreateEl = document.createElement("article");
    let p1CreateEl = document.createElement("p");
    p1CreateEl.textContent = `From: ${employee}`;
    let p2CreateEl = document.createElement("p");
    p2CreateEl.textContent = `Category: ${category}`;
    let p3CreateEl = document.createElement("p");
    p3CreateEl.textContent = `Urgency: ${urgency}`;
    let p4CreateEl = document.createElement("p");
    p4CreateEl.textContent = `Assigned to: ${team}`;
    let p5CreateEl = document.createElement("p");
    p5CreateEl.textContent = `Description: ${description}`;
    //EditButton
    let editButtonCreateEl = document.createElement("button");
    editButtonCreateEl.textContent = "Edit";
    editButtonCreateEl.classList.add("edit-btn");
    //continue Button
    let continueButtonCreateEl = document.createElement("button");
    continueButtonCreateEl.textContent = "Continue";
    continueButtonCreateEl.classList.add("continue-btn");

    previewList.appendChild(LiCreateEl);
    LiCreateEl.appendChild(articleCreateEl);
    articleCreateEl.appendChild(p1CreateEl);
    articleCreateEl.appendChild(p2CreateEl);
    articleCreateEl.appendChild(p3CreateEl);
    articleCreateEl.appendChild(p4CreateEl);
    articleCreateEl.appendChild(p5CreateEl);
    LiCreateEl.appendChild(editButtonCreateEl);
    LiCreateEl.appendChild(continueButtonCreateEl);
    //
    addBtn.disabled = true;

    employeeGetEl.value = "";
    categoryGetEl.value = "";
    urgencyGetEl.value = "";
    teamGetEl.value = "";
    descriptionGetEl.value = "";

    editButtonCreateEl.addEventListener("click", (e) => {

      addBtn.disabled = false;
      employeeGetEl.value = employee;
      categoryGetEl.value = category;
      urgencyGetEl.value = urgency;
      teamGetEl.value = team;
      descriptionGetEl.value = description;

      LiCreateEl.remove();
    });
    continueButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      addBtn.disabled = false;
      

      pendinglist.appendChild(LiCreateEl);
     
      let resolveButtonCreateEl = document.createElement("button");
      resolveButtonCreateEl.textContent = "Resolved";
      resolveButtonCreateEl.classList.add("resolve-btn");
      LiCreateEl.appendChild(resolveButtonCreateEl);
      editButtonCreateEl.remove();
       continueButtonCreateEl.remove();

      resolveButtonCreateEl.addEventListener("click", (e) => {
     
        resolvedList.appendChild(LiCreateEl);
        resolveButtonCreateEl.remove();
        let clearButtonCreateEl = document.createElement("button");
        clearButtonCreateEl.textContent = "Clear";
        clearButtonCreateEl.classList.add("clear-btn");
        LiCreateEl.appendChild(clearButtonCreateEl);

        clearButtonCreateEl.addEventListener("click", (e) => {
          e.preventDefault();

          resolvedList.removeChild(LiCreateEl)
        });
      });
    });
  });
}
