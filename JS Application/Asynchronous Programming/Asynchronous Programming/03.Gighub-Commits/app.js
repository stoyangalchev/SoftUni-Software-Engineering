function loadCommits() {
  let username = document.getElementById("username").value;
  let repo = document.getElementById("repo").value;
  //http://localhost:3030/jsonstore/bus/businfo/1287/buses
  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then(handlerResponse)
    .then(handleData)
    .catch(handleEror);
}

function handlerResponse(respons) {
  if (respons.ok == false || respons.status !== 200) {
    throw new Error(`Error: ${respons.status} ${respons.statusText}`);
  }
  return respons.json();
}
function handleData(data) {
  let ul = document.getElementById("commits");
  let arr = [];
  for (let element of data) {
    if (element.author == username || element.author !== null) {
      let li = document.createElement("li");
      li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
      ul.appendChild(li);
      arr.push(li);
    }
  }
  ul.replaceChildren(...arr);
}
function handleEror(error) {
  const ul = document.getElementById("commits");
  ul.textContent = error.message;
}
