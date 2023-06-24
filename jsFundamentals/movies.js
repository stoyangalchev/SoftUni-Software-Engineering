function movies(array) {
  let movies = [];

  class Movie {
    constructor(name, director, date) {
      this.name = name;
      this.director = director;
      this.date = date;
    }
  }
  let contains = function (movieName) {
    // let movie = null;
    let movie = movies.find((m) => m.name === movieName);

    // movies.forEach(m => m.name === movieName ? movie = m : movie = null);
    return movie;
  };

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");

    if (command.includes("addMovie")) {
      let name = command.slice(1, command.length).join(" ");
      movies.push(new Movie(name, null, null));
    } else if (command.includes("directedBy")) {
      let name1 = command.slice(0, command.indexOf("directedBy")).join(" ");
      // if (contains(name1) !== null) {
      if (contains(name1) !== undefined) {
        let movie = contains(name1);
        movie.director = command
          .slice(command.indexOf("directedBy") + 1, command.length)
          .join(" ");
      }
    } else if (command.includes("onDate")) {
      let name2 = command.slice(0, command.indexOf("onDate")).join(" ");
      // if (contains(name2) !== null) {
      if (contains(name2) !== undefined) {
        let movie = contains(name2);
        movie.date = command
          .slice(command.indexOf("onDate") + 1, command.length)
          .join(" ");
      }
    }
  }
  movies.forEach((m) =>
    m.director != null && m.name != null && m.date != null
      ? console.log(JSON.stringify(m))
      : null
  );
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

function solve4(input) {
  let movies = [];

  for (let line of input) {
    if (line.includes("addMovie")) {
      let splited = line.split("addMovie ");
      let name = splited[1];

      movies.push({ name });
    } else if (line.includes("directedBy")) {
      let [name, directorta] = line.split(" directedBy ");

      let movie = movies.find((m) => m.name === name);

      if (movie) {
        movie.director = directorta;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");

      let movie = movies.find((m) => m.name === name);

      if (movie) {
        movie.date = date;
      }
    }
  }

  movies.forEach((el) => {
    if (el.name && el.date && el.director)
      console.log(JSON.stringify(el));
  });
}
solve4([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);