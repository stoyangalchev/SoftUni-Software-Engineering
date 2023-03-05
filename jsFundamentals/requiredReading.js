function requiredReading(pagesBook,pagePerOur,days) {
 let timeToReadBook= pagesBook/pagePerOur
 let requiredTime =timeToReadBook/days
 console.log(requiredTime);
}
requiredReading(212, 20, 2);
