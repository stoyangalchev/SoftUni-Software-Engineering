const url = "http://localhost:3030/jsonstore/messenger";
const messages = document.getElementById("messages");

let author = document.getElementsByName("author")[0];
let content = document.getElementsByName("content")[0];
function attachEvents() {
  document.getElementById("submit").addEventListener("click", postMessages);
  document.getElementById("refresh").addEventListener("click", loadAllMessages);
}

async function loadAllMessages() {
  const res = await fetch(url);

  const data = await res.json();

  messages.value = Object.values(data)
    .map(({ author, content }) => `${author}: ${content}`)
    .join("\n");
}

async function postMessages() {
  if (author.value == "" || content.value == "") {
    alert("Field Are Required?");
  }

  // await request(url, { author: author.value, content: content.value });
  let bodysend = {
    author: author.value,
    content: content.value,
  };
  const res = await fetch(url, {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(bodysend),
  });

  const data = await res.json();
  author.value=''
  content.value=''
  return data

}

// async function request(url, option) {
//   if (option) {
//     option = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(option),
//     };
//   }

//   const response = await fetch(url, option);
//   return response.json();
// }
attachEvents();
