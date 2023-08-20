function encodeAndDecodeMessages() {
  let messageInputElement = document.querySelector(
    '[placeholder="Write your message here..."]'
  );

  let lastReceivedInputElement = document.querySelector(
    '[placeholder="No messages..."]'
  );

  let firstButton = document.querySelector("#main > div:nth-child(1) > button");

  let secondButton = document.querySelector(
    "#main > div:nth-child(2) > button"
  );

  firstButton.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }
    let message = messageInputElement.value;
    let encoded = [];
    for (let i = 0; i < message.length; i++) {
      let currSymbol = message.charCodeAt(i);
      encoded.push(String.fromCharCode(currSymbol + 1));
    }
    messageInputElement.value = "";
    lastReceivedInputElement.value = encoded.join("");
  });

  secondButton.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      return;
    }

    let message = lastReceivedInputElement.value;
    let decoded = [];
    for (let i = 0; i < message.length; i++) {
      let currSymbol = message.charCodeAt(i);
      decoded.push(String.fromCharCode(currSymbol - 1));
    }
    lastReceivedInputElement.value = decoded.join("");
  });
}
