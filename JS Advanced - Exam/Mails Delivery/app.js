function solve() {
  let recipientNameGetEl = document.getElementById("recipientName");
  let titleGetEl = document.getElementById("title");
  let messageGetEl = document.getElementById("message");

  let addButtonGetEl = document.getElementById("add");
  let resetButtonGetEl = document.getElementById("reset");

  //ListMail parent
  let listGetElement = document.getElementById("list");
  //Sent-list parent
  let sentListGetElement = document.getElementsByClassName("sent-list")[0];
  // Class -delete list parent
  let deletelistGetElement = document.getElementsByClassName("delete-list")[0];

  //RESET BUTTTON>>>>>>>>>>>>>>>>>
  resetButtonGetEl.addEventListener("click", (e) => {
    e.preventDefault();

    recipientNameGetEl.value = "";
    titleGetEl.value = "";
    messageGetEl.value = "";
  });

  //ADD BUTTTON>>>>>>>>>>>>>>>>>
  addButtonGetEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      recipientNameGetEl.value == "" ||
      titleGetEl.value == "" ||
      messageGetEl.value == ""
    ) {
      return;
    }
    //Must be append to List Mail parent
    let liCreateElement = document.createElement("li");

    let h4TitleCreateElement = document.createElement("h4");
    h4TitleCreateElement.textContent = `Title: ${titleGetEl.value}`;

    let h4RecipientNameCreateElement = document.createElement("h4");
    h4RecipientNameCreateElement.textContent = `Recipient Name: ${recipientNameGetEl.value}`;

    let spanCreateElement = document.createElement("span");
    spanCreateElement.textContent = `${messageGetEl.value}`;

    let divListActionCreateEl = document.createElement("div");
    divListActionCreateEl.setAttribute("id", "list-action");

    let sendButtonCreateEl = document.createElement("button");
    sendButtonCreateEl.textContent = "Send";
    sendButtonCreateEl.setAttribute("type", "submit");
    sendButtonCreateEl.setAttribute("id", "send");

    let deleteButtonCreateEl = document.createElement("button");
    deleteButtonCreateEl.textContent = "Delete";
    deleteButtonCreateEl.setAttribute("type", "submit");
    deleteButtonCreateEl.setAttribute("id", "delete");

    listGetElement.appendChild(liCreateElement);
    liCreateElement.appendChild(h4TitleCreateElement);
    liCreateElement.appendChild(h4RecipientNameCreateElement);
    liCreateElement.appendChild(spanCreateElement);
    liCreateElement.appendChild(divListActionCreateEl);
    liCreateElement.appendChild(sendButtonCreateEl);
    liCreateElement.appendChild(deleteButtonCreateEl);

    recipientNameGetEl.value = "";
    titleGetEl.value = "";
    messageGetEl.value = "";
    //SEND BUTTTTTON
    sendButtonCreateEl.addEventListener("click", (e) => {
      //   e.preventDefault();
      // Must be append to Sent-list
      let liSentCreateEl = document.createElement("li");

      let span1CreateEl = document.createElement("span");
      let nameSpan1 = h4RecipientNameCreateElement.textContent.split(": ")[1];
      span1CreateEl.textContent = `To: ${nameSpan1}`;

      let span2CreateEl = document.createElement("span");
      let nameSpan2 = h4TitleCreateElement.textContent.split(": ")[1];
      span2CreateEl.textContent = `Title: ${nameSpan2}`;

      let divSendCreateel = document.createElement("div");
      divSendCreateel.classList.add("btn");

      let deleteSentBtCreateEl = document.createElement("button");
      deleteSentBtCreateEl.setAttribute("type", "submit");
      deleteSentBtCreateEl.classList.add("delete");
      deleteSentBtCreateEl.textContent = "Delete";

      sentListGetElement.appendChild(liSentCreateEl);
      liSentCreateEl.appendChild(span1CreateEl);
      liSentCreateEl.appendChild(span2CreateEl);
      liSentCreateEl.appendChild(divSendCreateel);
      liSentCreateEl.appendChild(deleteSentBtCreateEl);

      deleteSentBtCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        let trashLiCreateEl = document.createElement("li");

        let span1CreateEl = document.createElement("span");
        let nameSpan1 = h4RecipientNameCreateElement.textContent.split(": ")[1];
        span1CreateEl.textContent = `To: ${nameSpan1}`;

        let span2CreateEl = document.createElement("span");
        let nameSpan2 = h4TitleCreateElement.textContent.split(": ")[1];
        span2CreateEl.textContent = `Title: ${nameSpan2}`;

        deletelistGetElement.appendChild(trashLiCreateEl);
        trashLiCreateEl.appendChild(span1CreateEl);
        trashLiCreateEl.appendChild(span2CreateEl);

        sentListGetElement.removeChild(liSentCreateEl);
      });
      listGetElement.removeChild(liCreateElement);
    });

    deleteButtonCreateEl.addEventListener("click", deleteBTN2);

    function deleteBTN2(e) {
      e.preventDefault();
      let trashLiCreateEl = document.createElement("li");

      let span1CreateEl = document.createElement("span");
      let nameSpan1 = h4RecipientNameCreateElement.textContent.split(": ")[1];
      span1CreateEl.textContent = `To: ${nameSpan1}`;

      let span2CreateEl = document.createElement("span");
      let nameSpan2 = h4TitleCreateElement.textContent.split(": ")[1];
      span2CreateEl.textContent = `Title: ${nameSpan2}`;

      deletelistGetElement.appendChild(trashLiCreateEl);
      trashLiCreateEl.appendChild(span1CreateEl);
      trashLiCreateEl.appendChild(span2CreateEl);

      listGetElement.removeChild(liCreateElement);
    }
  });
}
solve();
