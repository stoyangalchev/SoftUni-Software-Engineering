function extract(content) {
  let elementbyId = document.getElementById(content).textContent;
  let patern = /\(([A-z ]+)\)/gm;
  let matches = elementbyId.matchAll(patern);
  let result = [];
  for (let match of matches) {
    result.push(match[1]);
  }
  return result.join("; ");
}
