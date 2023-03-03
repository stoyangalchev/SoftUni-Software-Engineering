function seriesCalculator(input) {
  let nameMoive = input[0];
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let episodeWiOutReclam = Number(input[3]);

  let reclams = 0.2 * episodeWiOutReclam;
  let episodeWithReclam = reclams + episodeWiOutReclam;
  let specialEpisode = seasons * 10;

  let alltime = episodeWithReclam * episodes * seasons + specialEpisode;
  console.log(
    `Total time needed to watch the ${nameMoive} series is ${alltime} minutes.`
  );
}
seriesCalculator(["Lucifer", "3", "18", "55"]);
