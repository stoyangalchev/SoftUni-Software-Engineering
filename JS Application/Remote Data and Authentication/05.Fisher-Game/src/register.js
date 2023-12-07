let formEl = document.querySelector("form");
let logoutBtns=document.getElementById("logout")
 logoutBtns.style.display = "none";
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  //Get Url Get Form
  const url = "http://localhost:3030/users/register";
  let form = new FormData(e.currentTarget);
  let emailData = form.get("email");
  let passwordData = form.get("password");
  let rePasswordData = form.get("rePass");
  // Make validation of input fields.
  if (
    !emailData ||
    !passwordData ||
    !rePasswordData ||
    passwordData !== rePasswordData
  ) {
    return window.alert("InputFields Register Error");
  }
  //Create Object ,method, headers, body.
  let bodyObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailData,
      password: passwordData,
    }),
  };

  try {
    //Make Response to server.
    const response = await fetch(url, bodyObject);
    const data = await response.json();
    //Set Session Storage.
    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("id", data._id);
    sessionStorage.setItem("accessToken", data.accessToken);
    window.location.href = "./index.html";
  } catch (error) {
    throw new Error(`Error ${error}`);
  }
});
