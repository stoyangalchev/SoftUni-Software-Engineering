const aboutTemplate = () => `
  <h1>This is about</h1>
  <p>This is the about page</p>`;

const root = document.getElementById("root");

export const aboutView = (ctx) => {
  root.innerHTML = aboutTemplate();
};
