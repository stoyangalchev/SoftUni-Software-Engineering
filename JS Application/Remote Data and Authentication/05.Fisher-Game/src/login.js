let form = document.querySelector("form");
let url = "http://localhost:3030/users/login";
let logoutBtn = document.getElementById("logout");
 logoutBtn.style.display = "none";
 
form.addEventListener("submit", async (e) => {
  e.preventDefault();
 
  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");
  // Create init to  response
  const dataObj = {
    method: "POST",

    body: JSON.stringify({ email, password }),
  };

  try {
    //Make Response to server
    const response = await fetch(url, dataObj);
    if (response.status !== 200) {
      throw new Error("Error");
    }
    const data = await response.json();

    //Set Session Storage.
    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("id", data._id);
    sessionStorage.setItem("accessToken", data.accessToken);
  } catch (eror) {
    throw new Error(eror);
  }

  window.location.href = "./index.html";
});
