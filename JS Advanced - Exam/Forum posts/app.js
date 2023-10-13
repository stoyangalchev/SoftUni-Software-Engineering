window.addEventListener("load", solve);

// function solve() {
//   let postTitleGetEl = document.getElementById("post-title");
//   let postCategory = document.getElementById("post-category");
//   let postContent = document.getElementById("post-content");
//   let publishBtn = document.getElementById("publish-btn");
//   let clearButton = document.getElementById("clear-btn");

//   //Review LISt parent
//   let reviewListGetEl = document.getElementById("review-list");
//   //Upload list parent
//   let publishedListGetEl = document.getElementById("published-list");

//   publishBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//       postTitleGetEl.value != "" &&
//       postCategory.value != "" &&
//       postContent.textContent != ""
//     ) {
//       return;
//     }
//     let postTitleGetEl1 = postTitleGetEl.value;
//     let postCategory2 = postCategory.value;
//     let postContent3 = postContent.value;

//     let liCreateEl = document.createElement("li");
//     liCreateEl.classList.add("rpost");
//     let articleCreateEl = document.createElement("article");
//     let h4CreateEl = document.createElement("h4");
//     h4CreateEl.textContent = postTitleGetEl.value;
//     let pCategoryCreateEl = document.createElement("p");
//     pCategoryCreateEl.textContent = "Category: ";
//     pCategoryCreateEl.textContent += postCategory.value;
//     let pContentCreateEl = document.createElement("p");
//     pContentCreateEl.textContent = "Content: ";
//     pContentCreateEl.textContent += postContent.value;

//     //Edit button
//     let editCreateButton = document.createElement("button");
//     editCreateButton.classList.add("action-btn");
//     editCreateButton.textContent = "Edit";
//     //Approve button
//     let approveCreateButton = document.createElement("button");
//     approveCreateButton.classList.add("action-btn");
//     approveCreateButton.textContent = "Aprove";

//     reviewListGetEl.appendChild(liCreateEl);
//     liCreateEl.appendChild(articleCreateEl);
//     articleCreateEl.appendChild(h4CreateEl);
//     articleCreateEl.appendChild(pCategoryCreateEl);
//     articleCreateEl.appendChild(pContentCreateEl);
//     liCreateEl.appendChild(editCreateButton);
//     liCreateEl.appendChild(approveCreateButton);

//     postTitleGetEl.value = "";
//     postCategory.value = "";
//     postContent.value = "";

//     editCreateButton.addEventListener("click", (e) => {
//       e.preventDefault();

//       postTitleGetEl.value = postTitleGetEl1;
//       postCategory.value = postCategory2;
//       postContent.value = postContent3;
//       reviewListGetEl.removeChild(liCreateEl);
//     });
//     approveCreateButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       let liCreateEl = document.createElement("li");
//       liCreateEl.classList.add("rpost");
//       let articleCreateEl = document.createElement("article");
//       let h4CreateEl = document.createElement("h4");
//       h4CreateEl.textContent = postTitleGetEl1;
//       let pCategoryCreateEl = document.createElement("p");
//       pCategoryCreateEl.textContent = "Category: ";
//       pCategoryCreateEl.textContent += postCategory2;
//       let pContentCreateEl = document.createElement("p");
//       pContentCreateEl.textContent = "Content: ";
//       pContentCreateEl.textContent += postContent3;

//       publishedListGetEl.appendChild(liCreateEl);
//       liCreateEl.appendChild(articleCreateEl);
//       articleCreateEl.appendChild(h4CreateEl);
//       articleCreateEl.appendChild(pCategoryCreateEl);
//       articleCreateEl.appendChild(pContentCreateEl);

//       let reviewlist = document.getElementById("review-list");

//       reviewlist.removeChild(reviewlist.children[0]);
//     });
//     clearButton.addEventListener("click", () => {
//       while (publishedListGetEl.firstChild) {
//         publishedListGetEl.removeChild(publishedListGetEl.firstChild);
//       }
//     });
//   });
// }
/////////////

function solve() {
  const titleField = document.getElementById("post-title");
  const categoryField = document.getElementById("post-category");
  const contentField = document.getElementById("post-content");
  const publishBtn = document.getElementById("publish-btn");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");
  const clearBtn = document.getElementById("clear-btn");

  publishBtn.addEventListener("click", publish);

  function publish(ev) {
    ev.preventDefault();

    const title = titleField.value;
    const category = categoryField.value;
    const content = contentField.value;

    if (!title || !category || !content) {
      return;
    }

    const liElement = el("li", "", "rpost");
    const articleElement = el("article");
    const h4 = el("h4", `${title}`);
    const pCategory = el("p", `Category: ${category}`);
    const pContent = el("p", `Content: ${content}`);
    const editBtn = el("button", "Edit", "action-btn edit");
    const approveBtn = el("button", "Approve", "action-btn approve");

    articleElement.appendChild(h4);
    articleElement.appendChild(pCategory);
    articleElement.appendChild(pContent);
    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    reviewList.appendChild(liElement);

    clearInputFields();

    editBtn.addEventListener("click", () => {
      titleField.value = title;
      categoryField.value = category;
      contentField.value = content;
      liElement.remove();
    });

    approveBtn.addEventListener("click", () => {
      liElement.removeChild(editBtn);
      liElement.removeChild(approveBtn);
      publishedList.appendChild(liElement);
    });
    
  }

  clearBtn.addEventListener("click", () => {
    publishedList.innerHTML = "";
  });

  function clearInputFields() {
    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";
  }

  function el(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}