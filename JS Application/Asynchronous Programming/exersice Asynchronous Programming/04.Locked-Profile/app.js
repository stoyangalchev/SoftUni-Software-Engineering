async function lockedProfile() {
  //capture elements
  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  const URL = "http://localhost:3030/jsonstore/advanced/profiles";

  function createProfile(username, email, age, n) {
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");

    const userIcon = document.createElement("img");
    userIcon.src = "./iconProfile2.png";
    userIcon.classList.add("userIcon");
    profileDiv.appendChild(userIcon);

    const lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock";
    profileDiv.appendChild(lockLabel);

    const lockRadio = document.createElement("input");
    lockRadio.type = "radio";
    lockRadio.name = `user${n}Locked`;
    lockRadio.value = "lock";
    lockRadio.checked = true;
    profileDiv.appendChild(lockRadio);

    const unlockLabel = document.createElement("label");
    unlockLabel.textContent = "Unlock";
    profileDiv.appendChild(unlockLabel);

    const unlockRadio = document.createElement("input");
    unlockRadio.type = "radio";
    unlockRadio.name = `user${n}Locked`;
    unlockRadio.value = "unlock";
    profileDiv.appendChild(unlockRadio);

    const horizontalLine = document.createElement("hr");
    profileDiv.appendChild(horizontalLine);

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";
    profileDiv.appendChild(usernameLabel);

    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = `user${n}Username`;
    usernameInput.value = username;
    usernameInput.disabled = true;
    usernameInput.readOnly = true;
    profileDiv.appendChild(usernameInput);

    const usernameDiv = document.createElement("div");
    usernameDiv.id = `user${n}HiddenFields`;
    usernameDiv.style.display = "none";
    profileDiv.appendChild(usernameDiv);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    usernameDiv.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = `user${n}Email`;
    emailInput.value = email;
    emailInput.disabled = true;
    emailInput.readOnly = true;
    usernameDiv.appendChild(emailInput);

    const ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";
    usernameDiv.appendChild(ageLabel);

    const ageInput = document.createElement("input");
    ageInput.type = "email";
    ageInput.name = `user${n}Age`;
    ageInput.value = age;
    ageInput.disabled = true;
    ageInput.readOnly = true;
    usernameDiv.appendChild(ageInput);

    const showBtn = document.createElement("button");
    showBtn.textContent = "Show More";
    profileDiv.appendChild(showBtn);

    showBtn.addEventListener("click", showMore);

    return profileDiv;
  }

  const response = await fetch(URL, { method: "GET" });
  const profilesObj = await response.json();
  let n = 0;

  for (const user in profilesObj) {
    let username = profilesObj[user].username;
    let email = profilesObj[user].email;
    let age = profilesObj[user].age;
    n++;
    let profileDiv = createProfile(username, email, age, n);

    mainElement.appendChild(profileDiv);
  }

  function showMore(e) {
  
    const locked = e.target.parentElement.children[2];
    const usernameDiv = e.target.parentElement.children[8];

    if (locked.checked) {
      return;
    }

    if (e.target.textContent === "Show More") {
      usernameDiv.style.display = "block";
      e.target.textContent = "Hide it";
    } else {
      usernameDiv.style.display = "none";
      e.target.textContent = "Show More";
    }

    if (locked.checked && e.target.textContent === "Hide it") {
      return;
    }
  }
}
