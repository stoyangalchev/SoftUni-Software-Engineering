window.addEventListener("load", solve);

function solve() {
  let firstnameGetEl = document.getElementById("first-name");
  let lastnameGetEl = document.getElementById("last-name");
  let ageGetEl = document.getElementById("age");
  let storytitleGetEl = document.getElementById("story-title");
  let genreGetEl = document.getElementById("genre");
  let storyGetEl = document.getElementById("story");

  let formBtnPublishGetEl = document.getElementById("form-btn")
  //PreviewList parrent.
  let previewlistGetEl = document.getElementById("preview-list")
  //Div main parrent
  let divMainGetEl = document.getElementById("main")

  formBtnPublishGetEl.addEventListener("click", (e) => {
    e.preventDefault()
    if (firstnameGetEl.value == "" ||
      lastnameGetEl.value == "" ||
      ageGetEl.value == "" ||
      storytitleGetEl.value == "" ||
      genreGetEl.value == "" ||
      storyGetEl.value == "") {
      return
    }
    let firstname = firstnameGetEl.value
    let lastname = lastnameGetEl.value
    let age = ageGetEl.value
    let storytitle = storytitleGetEl.value
    let genre = genreGetEl.value
    let story = storyGetEl.value


    let liClassStoryCreateEl = document.createElement("li")
    liClassStoryCreateEl.classList.add("story-info")

    let articleCreateEl = document.createElement("article")
    let h4CreateEl = document.createElement("h4")
    h4CreateEl.textContent = `Name: ${firstname} ${lastname}`
    let agePCreateel = document.createElement("p")
    agePCreateel.textContent = `Age: ${age}`
    let titlePCreateel = document.createElement("p")
    titlePCreateel.textContent = `Title: ${storytitle}`
    let genrePCreateel = document.createElement("p")
    genrePCreateel.textContent = `Genre: ${genre}`
    let storyPCreateel = document.createElement("p")
    storyPCreateel.textContent = `${story}`

    //Save Button
    let saveButtonCreateEl = document.createElement("button")
    saveButtonCreateEl.classList.add("save-btn")
    saveButtonCreateEl.textContent = "Save Story"
    //Edit Button
    let eidtButtonCreateEl = document.createElement("button")
    eidtButtonCreateEl.classList.add("edit-btn")
    eidtButtonCreateEl.textContent = "Edit Story"
    //Delete Button
    let deleteButtonCreateEl = document.createElement("button")
    deleteButtonCreateEl.classList.add("delete-btn")
    deleteButtonCreateEl.textContent = "Delete Story"

    previewlistGetEl.appendChild(liClassStoryCreateEl)
    liClassStoryCreateEl.appendChild(articleCreateEl)
    articleCreateEl.appendChild(h4CreateEl)
    articleCreateEl.appendChild(agePCreateel)
    articleCreateEl.appendChild(titlePCreateel)
    articleCreateEl.appendChild(genrePCreateel)
    articleCreateEl.appendChild(storyPCreateel)
    liClassStoryCreateEl.appendChild(saveButtonCreateEl)
    liClassStoryCreateEl.appendChild(eidtButtonCreateEl)
    liClassStoryCreateEl.appendChild(deleteButtonCreateEl)

    formBtnPublishGetEl.disabled = true

    firstnameGetEl.value = ""
    lastnameGetEl.value = ""
    ageGetEl.value = ""
    storytitleGetEl.value = ""
    genreGetEl.value = ""
    storyGetEl.value = ""

    eidtButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault()

      firstnameGetEl.value = firstname
      lastnameGetEl.value = lastname
      ageGetEl.value = age
      storytitleGetEl.value = storytitle
      genreGetEl.value = genre
      storyGetEl.value = story

      formBtnPublishGetEl.disabled = false
      previewlistGetEl.removeChild(liClassStoryCreateEl)
    })

    saveButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault()

      while (divMainGetEl.firstChild) {
        divMainGetEl.removeChild(divMainGetEl.firstChild);
      }
      let createH1TexCreateEl = document.createElement("h1")
      createH1TexCreateEl.textContent = "Your scary story is saved!"
      divMainGetEl.appendChild(createH1TexCreateEl)
    })


    deleteButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault()
      previewlistGetEl.removeChild(liClassStoryCreateEl)

      formBtnPublishGetEl.disabled = false
    })

  })
}
