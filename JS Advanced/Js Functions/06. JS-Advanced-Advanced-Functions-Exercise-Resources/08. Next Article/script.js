function getArticleGenerator(articles) {
  let input = articles;
  let getDivElement = document.getElementById("content");

  return function showNext() {
    if (input.length > 0) {
      let createElement = document.createElement("article");
      createElement.innerText = input.shift();
      getDivElement.appendChild(createElement);
    }
  };
}
