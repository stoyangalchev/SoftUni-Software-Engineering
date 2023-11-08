async function attachEvents() {
  const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
  const dataPosts = await response.json();
  const post = document.getElementById("posts");
  const postTitle = document.getElementById("post-title");
  const postBody = document.getElementById("post-body");
  const postComments = document.getElementById("post-comments");

  document
    .getElementById("btnLoadPosts")
    .addEventListener("click", async () => {
      Object.values(dataPosts).forEach(({ _, id, title }) => {
        elements("option", title, id, post);
      });
    });
  document.getElementById("btnViewPost").addEventListener("click", async () => {
    const resp = await fetch("http://localhost:3030/jsonstore/blog/comments");
    const data = await resp.json();
    const titleComments = Object.values(data).filter(
      (comment) => comment.postId === post.value
    );
    const titleText = [...post].find((text) => text.value === post.value);
    postTitle.textContent = titleText.textContent;
    const bodyText = Object.values(dataPosts).find(
      (text) => text.id === post.value
    );
    postBody.textContent = bodyText.body;
    postComments.textContent = "";
    titleComments.forEach((c) => {
      elements("li", c.text, "", postComments, c.id);
    });
  });
  function elements(type, text, val, parent, ids) {
    const el = document.createElement(type);
    text ? (el.textContent = text) : "";
    val ? el.setAttribute("value", val) : "";
    parent ? parent.appendChild(el) : "";
    ids ? el.setAttribute("id", ids) : "";
    return el;
  }
}
attachEvents();
