const homeTemplate = () => `
    <h1>This is home</h1>
    <p>This is the home page</p>`;

const root = document.getElementById("root");

 export const homeView = (ctx) => {
  root.innerHTML = homeTemplate();
};
 
