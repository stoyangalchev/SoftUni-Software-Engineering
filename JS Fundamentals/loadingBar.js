function loadingBar(loading) {
  let load = 0;
  let notLoad = 0;
  let loaded = 0;
  let notLoaded = 0;

  if (loading === 100) {
    load = loading / 10;
    loaded = "%".repeat(load); //
    notLoad = 10 - load;
    notLoaded = ".".repeat(notLoad); //
    console.log(`${loading}% Complete!`);
    console.log(`[${loaded}${notLoaded}]`);
  } else {
    load = loading / 10;
    loaded = "%".repeat(load); //
    notLoad = 10 - load;
    notLoaded = ".".repeat(notLoad); //
    console.log(`${loading}% [${loaded}${notLoaded}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(90);
