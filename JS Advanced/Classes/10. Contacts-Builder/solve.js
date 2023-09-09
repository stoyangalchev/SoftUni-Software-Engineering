class Contact {
  constructor(fName, lName, phone, email) {
      this.firstName = fName
      this.lastName = lName
      this.phone = phone
      this.email = email
      this._online = false
  }

  get online() {
      return this._online
  }

  set online(value) {
      this._online = value

      if (this.onlineDiv) {
          this.onlineDiv.className = this._online ? 'title online' : 'title'
      }
  }

  elementFactory(tag, content = '') {
      const e = document.createElement(tag)
      e.innerHTML = content

      return e
  }

  eFactory(tag, content = '') {
      const e = document.createElement(tag)
      e.innerHTML = content

      return e
  }

  render(id) {
      this.templ = this.elementFactory('article')
      this.onlineDiv = this.elementFactory('div', `${this.firstName} ${this.lastName}`)
      this.infoBtn = this.elementFactory('button', '&#8505;')
      this.infoDiv =
          this.elementFactory(
              'div',
              `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
          )


      this.onlineDiv.className = this.online ? 'title online' : 'title'
      this.infoDiv.className = 'info'
      this.infoDiv.style.display = 'none'

      this.onlineDiv.appendChild(this.infoBtn)
      this.templ.appendChild(this.onlineDiv)
      this.templ.appendChild(this.infoDiv)

      document.getElementById(id).appendChild(this.templ)

      this.infoBtn.addEventListener('click', () => {
          this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
          if (this.infoDiv.style.display === 'none') {
              this.online = false
          }
          else (
              this.online = true
          )
      })
  }

}
let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];


contacts.forEach(c => c.render('main'));