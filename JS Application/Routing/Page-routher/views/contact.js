const contactTemplate = () => `
    <h1>Contact is here</h1>
    <p>This is the contact page</p>;
    `;
    
const root = document.getElementById("root");

export const contactView = (ctx) => {
 root.innerHTML = contactTemplate();
};
