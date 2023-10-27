function loadRepos() {
  let username = document.getElementById("username").value;

  fetch(`https://api.github.com/userss/${username}/repos`)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
}

function handleResponse(response) {
  if (response.ok == false) {
    throw new Error(`Error: ${response.status} `);
  }

  return response.json();
}

function handleData(data) {
  const ul = document.getElementById("repos");
  let arr = [];
  for (let el of data) {
    let li = document.createElement("li");
    let a = document.createElement("article");
    a.href = `${el.html_url}`;
    li.textContent = `${el.full_name}`;
    li.appendChild(a);
    ul.appendChild(li);
    arr.push(li);
  }
  ul.replaceChildren(...arr);
}

function handleError(error) {
  console.log(error);
  const ul = document.getElementById("repos");
  ul.textContent = error.message;
}
