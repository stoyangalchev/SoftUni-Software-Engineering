function solve(arr) {
  const r =
    /(?:^| )([A-Za-z0-9]+[-._]*)+\b@([a-zA-Z]+\-*[a-zA-Z]+\.[a-zA-Z]+\-*[a-zA-Z]+)(\.*[a-zA-Z]+\-*[a-zA-Z]+)*/g;
  const matches = arr.match(r) || [];

  matches.map((x) => x.trim()).forEach((x) => console.log(x));
}
solve([
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.",
]);
solve([
  "Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.",
]);
solve(" support@github.com.");
