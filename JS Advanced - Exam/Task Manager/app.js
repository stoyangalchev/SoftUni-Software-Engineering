function solve() {
    // console.log("//TODO")
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');
    const addBtn = document.getElementById('add');
    const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    addBtn.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        const task = taskField.value;
        const description = descriptionField.value;
        const date = dateField.value;
        // console.log(task, description, date);

        if (!task || !description || !date) {
            return;
        }

        createArticle('OpenTask', 'green', 'red', task, description, date);
    }

    function createArticle(type, btnClass1, btnClass2, task, description, date) {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;
        const p1 = document.createElement('p');
        p1.textContent = `Description: ${description}`;
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date}`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        if (type === 'OpenTask') {
            const divEl = document.createElement('div');
            divEl.className = 'flex';
            const btn1 = document.createElement('button');
            btn1.textContent = 'Start';
            btn1.className = btnClass1;
            btn1.addEventListener('click', () => {
                deleteTask(article);
                createArticle('ProgressTask', 'red', 'orange', task, description, date)
            });

            const btn2 = document.createElement('button');
            btn2.textContent = 'Delete';
            btn2.className = btnClass2;
            btn2.addEventListener('click', () => deleteTask(article));

            divEl.appendChild(btn1);
            divEl.appendChild(btn2);
            article.appendChild(divEl);
            openArea.appendChild(article);
        } else if (type === 'ProgressTask') {
            const divEl = document.createElement('div');
            divEl.className = 'flex';
            const btn1 = document.createElement('button');
            btn1.textContent = 'Delete';
            btn1.className = btnClass1;
            btn1.addEventListener('click', () => {
                deleteTask(article);
            });

            const btn2 = document.createElement('button');
            btn2.textContent = 'Finish';
            btn2.className = btnClass2;
            btn2.addEventListener('click', () => {
                deleteTask(article);
                createArticle('CompleteTask', null, null, task, description, date)
            });

            divEl.appendChild(btn1);
            divEl.appendChild(btn2);
            article.appendChild(divEl);
            progressArea.appendChild(article);
        } else if (type === 'CompleteTask') {
            completeArea.appendChild(article);
        }

        function deleteTask(article) {
            article.remove();
        }
    }
}
// function solve() {
//   //Input field
//   let taskGetElementbyId = document.getElementById("task");
//   let descriptionGetElementbyId = document.getElementById("description");
//   let dateGetElementById = document.getElementById("date");
//   //Buton field
//   let buttonAddGetElbyID = document.getElementById("add");

//   buttonAddGetElbyID.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (
//       taskGetElementbyId.value == "" ||
//       descriptionGetElementbyId.value == "" ||
//       dateGetElementById.value == ""
//     ) {
//       return;
//     }
//     //Must Be append to class Orange
//     let divGetElement = document.querySelector(
//       "body > main > div > section:nth-child(2) > div:nth-child(2)"
//     );
//     //Article element
//     let articlesCreateElement = document.createElement("article");

//     let h3CreateElement = document.createElement("h3");
//     h3CreateElement.textContent = taskGetElementbyId.value;
//     let p1CreateElement = document.createElement("p");
//     p1CreateElement.textContent = "Description : ";
//     p1CreateElement.textContent += descriptionGetElementbyId.value;
//     let p2CreateElement = document.createElement("p");
//     p2CreateElement.textContent = "Due Date: ";
//     p2CreateElement.textContent += dateGetElementById.value;

//     let divCreateElement = document.createElement("div");
//     divCreateElement.classList = "flex";
//     //Start Button
//     let startButtonCreateEl = document.createElement("button");
//     startButtonCreateEl.textContent = "Start";
//     startButtonCreateEl.classList = "green";
//     //DeleteButton
//     let deleteButtonCreateEl = document.createElement("button");
//     deleteButtonCreateEl.textContent = "Delete";
//     deleteButtonCreateEl.classList = "red";

//     divGetElement.appendChild(articlesCreateElement);
//     articlesCreateElement.appendChild(h3CreateElement);
//     articlesCreateElement.appendChild(p1CreateElement);
//     articlesCreateElement.appendChild(p2CreateElement);
//     articlesCreateElement.appendChild(divCreateElement);
//     divCreateElement.appendChild(startButtonCreateEl);
//     divCreateElement.appendChild(deleteButtonCreateEl);

//     deleteButtonCreateEl.addEventListener("click", (e) => {
//       e.preventDefault();

//       articlesCreateElement.remove();
//     });
//     ////
//     startButtonCreateEl.addEventListener("click", (e) => {
//       e.preventDefault();

//       let divGetEl = document.getElementById("in-progress");

//       let articleCreateElement = document.createElement("article");

//       let h3CreateElement = document.createElement("h3");
//       h3CreateElement.textContent = taskGetElementbyId.value;
//       let p1CreateElement = document.createElement("p");
//       p1CreateElement.textContent = "Description : ";
//       p1CreateElement.textContent += descriptionGetElementbyId.value;
//       let p2CreateElement = document.createElement("p");
//       p2CreateElement.textContent = "Due Date: ";
//       p2CreateElement.textContent += dateGetElementById.value;

//       let divCreateElement = document.createElement("div");
//       divCreateElement.classList = "flex";
//       //Del Button
//       let delButtonCreateEl = document.createElement("button");
//       delButtonCreateEl.textContent = "Delete";
//       delButtonCreateEl.classList = "orange";
//       //finishButton
//       let finishButtonCreateEl = document.createElement("button");
//       finishButtonCreateEl.textContent = "Finish";
//       finishButtonCreateEl.classList = "red";

//       divGetEl.appendChild(articleCreateElement);
//       articleCreateElement.appendChild(h3CreateElement);
//       articleCreateElement.appendChild(p1CreateElement);
//       articleCreateElement.appendChild(p2CreateElement);
//       articleCreateElement.appendChild(divCreateElement);
//       divCreateElement.appendChild(delButtonCreateEl);
//       divCreateElement.appendChild(finishButtonCreateEl);

//       delButtonCreateEl.addEventListener("click", (e) => {
//         e.preventDefault();

//         articleCreateElement.remove();
//       });
//       articlesCreateElement.remove();

//       finishButtonCreateEl.addEventListener("click", (e) => {
//         e.preventDefault();

//         let divelementGet = document.querySelector(
//           "body > main > div > section:nth-child(4) > div:nth-child(2)"
//         );

//         let articlessCreateElement = document.createElement("article");

//         let h3CreateElement = document.createElement("h3");
//         h3CreateElement.textContent = taskGetElementbyId.value;
//         let p1CreateElement = document.createElement("p");
//         p1CreateElement.textContent = "Description : ";
//         p1CreateElement.textContent += descriptionGetElementbyId.value;
//         let p2CreateElement = document.createElement("p");
//         p2CreateElement.textContent = "Due Date: ";
//         p2CreateElement.textContent += dateGetElementById.value;

//         divelementGet.appendChild(articlessCreateElement);
//         articlessCreateElement.appendChild(h3CreateElement);
//         articlessCreateElement.appendChild(p1CreateElement);
//         articlessCreateElement.appendChild(p2CreateElement);
//         articleCreateElement.remove();
//       });
//     });
//   });
// }

