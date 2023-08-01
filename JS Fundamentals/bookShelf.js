function bookShelf(input) {
  let library = {};

  for (const line of input) {
    if (line.includes("->")) {
      let [id, genre] = line.split(" -> ");

      if (!library.hasOwnProperty(id)) {
        library[id] = { [genre]: [] };
      }
    } else {
      let [bookInfo, genre] = line.split(", ");

      for (const key in library) {
        if (library[key].hasOwnProperty(genre)) {
          library[key][genre].push(bookInfo);
          break;
        }
      }
    }
  }

  Object.keys(library)
    .sort(
      (a, b) =>
        Object.entries(library[b])[0][1].length -
        Object.entries(library[a])[0][1].length
    )
    .forEach((id) => {
      console.log(
        `${id} ${Object.keys(library[id])}: ${
          Object.values(library[id])[0].length
        }`
      );
      Object.values(library[id]).forEach((values) => {
        values
          .sort((a, b) => a.localeCompare(b))
          .forEach((v) => {
            console.log(`--> ${v}`);
          });
      });
    });
}
bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);
