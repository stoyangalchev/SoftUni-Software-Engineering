function matchFullName(input) {
  let text = input.split(', ').join()
  let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let result = text.match(patern);
  console.log(result.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")


