window.addEventListener("load", solve);

// function solve() {

//   let genreGetElementById = document.getElementById("genre");
//   let nameOfTheSongGetElementById = document.getElementById("name");
//   let authorOfTheSongGetElementById = document.getElementById("author");
//   let dateOfCreationGetElementById = document.getElementById("date");
//   let addButtonGetElemetnById = document.getElementById("add-btn");
//   let totalLikesGetElement = document.querySelector("#total-likes > div > p");
//   let allhitscontainerGetElement =
//   document.getElementsByClassName("all-hits-container")[0];
  
//   addButtonGetElemetnById.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//       genreGetElementById.value == "" &&
//       nameOfTheSongGetElementById.value == "" &&
//       authorOfTheSongGetElementById.value == "" &&
//       dateOfCreationGetElementById.value == ""
//     ) {
//       return;
//     }
//     //PARENT DIVVVVVV>>>>>>>
   
//     //CREATED DIV>>>>>>
//     let divclaSHitsInfoCreateElement = document.createElement("div");
//     divclaSHitsInfoCreateElement.classList.add("hits-info");
//     //INFO CREATE>>>>>>>>>>>>
//     let imgCreateElement = document.createElement("img");
//     imgCreateElement.src = "./static/img/img.png";
//     let genreH2CreateElement = document.createElement("h2");
//     genreH2CreateElement.textContent = "Genre : " + genreGetElementById.value;
//     let nameOfTheSongH2CreateElement = document.createElement("h2");
//     nameOfTheSongH2CreateElement.textContent = "Name : " + nameOfTheSongGetElementById.value;
//     let authorOfTheSongH2CreateElement = document.createElement("h2");
//     authorOfTheSongH2CreateElement.textContent = "Author : " + authorOfTheSongGetElementById.value;
//     let dateOfCreationH2CreateElement = document.createElement("h3");
//     dateOfCreationH2CreateElement.textContent = "Date : " + dateOfCreationGetElementById.value;
//     //BUTONS CREATE>>>>>>>>>>>>>
//     let saveSongButtonCreateElement = document.createElement("button");
//     saveSongButtonCreateElement.textContent = "Save song";
//     saveSongButtonCreateElement.classList.add("save-btn");
//     let likeSongButtonCreateElement = document.createElement("button");
//     likeSongButtonCreateElement.textContent = "Like song";
//     likeSongButtonCreateElement.classList.add("like-btn");
//     let deleteButtonCreateElement = document.createElement("button");
//     deleteButtonCreateElement.textContent = "Delete";
//     deleteButtonCreateElement.classList.add("delete-btn");

//     //Saved container DIv
//     let savedcontainerGetElement = document.getElementsByClassName("saved-container")[0]

//     //ApendChild>>>>>>>>>>>>
//     allhitscontainerGetElement.appendChild(divclaSHitsInfoCreateElement);
//     divclaSHitsInfoCreateElement.appendChild(imgCreateElement);
//     divclaSHitsInfoCreateElement.appendChild(genreH2CreateElement);
//     divclaSHitsInfoCreateElement.appendChild(nameOfTheSongH2CreateElement);
//     divclaSHitsInfoCreateElement.appendChild(authorOfTheSongH2CreateElement);
//     divclaSHitsInfoCreateElement.appendChild(dateOfCreationH2CreateElement);
//     divclaSHitsInfoCreateElement.appendChild(saveSongButtonCreateElement);
//     divclaSHitsInfoCreateElement.appendChild(likeSongButtonCreateElement);
//     divclaSHitsInfoCreateElement.appendChild(deleteButtonCreateElement);
//     //Likes Song Button


//     likeSongButtonCreateElement.addEventListener("click", likeSong
//     )
//     function likeSong() {
//       likeSongButtonCreateElement.disabled = true

//       let totalLike = totalLikesGetElement.textContent.replace('Total Likes: ', '');
//       totalLike = Number(totalLike);
//       totalLike++;
//       totalLikesGetElement.textContent = `Total Likes: ${totalLike}`;
//     }


//     //Save SongBUttons
//     saveSongButtonCreateElement.addEventListener("click", saveSong)
//     function saveSong() {
//       likeSongButtonCreateElement.remove()
//       saveSongButtonCreateElement.remove()
//       savedcontainerGetElement.appendChild(divclaSHitsInfoCreateElement)



//     }
//     //Delete Button
//     deleteButtonCreateElement.addEventListener("click", deleteSong)
//     function deleteSong() {
//       divclaSHitsInfoCreateElement.remove()
//     }
//     genreGetElementById.value = ""
//     nameOfTheSongGetElementById.value = ""
//     authorOfTheSongGetElementById.value = ""
//     dateOfCreationGetElementById.value = ""
//   });


// }
function solve() {
  //TODO

  const allHitsField = document.querySelector('.all-hits-container');
  const likeField = document.querySelector('.likes p');
  const saveField = document.querySelector('.saved-container');

  const genreField = document.getElementById('genre');
  const nameField = document.getElementById('name');
  const authorField = document.getElementById('author');
  const dateField = document.getElementById('date');
  const addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', addNewSong);

  function addNewSong(e) {
      e.preventDefault();

      const genre = genreField.value;
      const name = nameField.value;
      const author = authorField.value;
      const date = dateField.value;

      if (genre === '' || name === '' || author === '' || date === '') {
          return;
      }

      const div = document.createElement('div');
      div.className = 'hits-info';

      const img = document.createElement('img');
      img.src = './static/img/img.png';

      const h1 = document.createElement('h2');
      h1.textContent = `Genre: ${genre}`;
      const h2 = document.createElement('h2');
      h2.textContent = `Name: ${name}`;
      const h3 = document.createElement('h2');
      h3.textContent = `Author: ${author}`;
      const h4 = document.createElement('h3');
      h4.textContent = `Date: ${date}`;

      const saveBtn = document.createElement('button');
      saveBtn.className = 'save-btn';
      saveBtn.textContent = 'Save song';
      saveBtn.addEventListener('click', saveSong);

      const likeBtn = document.createElement('button');
      likeBtn.className = 'like-btn';
      likeBtn.textContent = 'Like song';
      likeBtn.addEventListener('click', likeSong);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteSong);

      div.appendChild(img);
      div.appendChild(h1);
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);
      div.appendChild(saveBtn);
      div.appendChild(likeBtn);
      div.appendChild(deleteBtn);

      allHitsField.appendChild(div);

      genreField.value = '';
      nameField.value = '';
      authorField.value = '';
      dateField.value = '';

      function saveSong(e) {
          e.target.parentElement.remove();

          const div = document.createElement('div');
          div.className = 'hits-info';

          const img = document.createElement('img');
          img.src = './static/img/img.png';

          const h1 = document.createElement('h2');
          h1.textContent = `Genre: ${genre}`;
          const h2 = document.createElement('h2');
          h2.textContent = `Name: ${name}`;
          const h3 = document.createElement('h2');
          h3.textContent = `Author: ${author}`;
          const h4 = document.createElement('h3');
          h4.textContent = `Date: ${date}`;

          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'delete-btn';
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', deleteSong);

          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(h4);

          div.appendChild(deleteBtn);

          saveField.appendChild(div);
      }
  }

  function likeSong(e) {
      e.target.disabled = true;
      let totalLike = likeField.textContent.replace('Total Likes: ', '');
      totalLike = Number(totalLike);
      totalLike++;

      likeField.textContent = `Total Likes: ${totalLike}`;
  }

  function deleteSong(e) {
      e.target.parentElement.remove();
  }
}