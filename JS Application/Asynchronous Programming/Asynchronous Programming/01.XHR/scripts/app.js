function loadRepos() {
  let url = "https://api.github.com/users/testnakov/repos";
  let divGetEl = document.getElementById("res");

  fetch(url)
    .then((res) => res.json(), )//promise == res
    .then((data) => {
      console.log(data);//Array == data   database
 
      divGetEl.textContent = data.map((x) => x.id).join(" | ");
      console.log("Data Returned");
    })
    .catch((err) => console.log(err));

}
