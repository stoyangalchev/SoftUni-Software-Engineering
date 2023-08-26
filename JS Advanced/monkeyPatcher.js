function solution(par) {
  if (par == "upvote") {
    return (this.upvotes += 1);
  } else if (par == "downvote") {
    return (this.downvotes += 1);
  } else if (par == "score") {
    let upvotes = this.upvotes + findInflating.call(this);
    let downvotes = this.downvotes + findInflating.call(this);
    let balance = this.upvotes - this.downvotes;
    let rating = findRating.call(this);
    return [upvotes, downvotes, balance, rating];
  }

  function findInflating() {
    let inflating = 0;

    if (this.upvotes + this.downvotes > 50) {
      inflating = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
    }
    return inflating;
  }

  function findRating() {
    let totalVotes = this.upvotes + this.downvotes;
    let possitiveVotes = this.upvotes;
    let negativeVotes = this.downvotes;

    if (totalVotes < 10) {
      return "new";
    } else if ((possitiveVotes / totalVotes) * 100 > 66) {
      return "hot";
    } else if (possitiveVotes - negativeVotes >= 0 && totalVotes > 100) {
      return "controversial";
    } else if (possitiveVotes - negativeVotes < 0) {
      return "unpopular";
    }
    return "new";
  }
}
let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};
solution.call(post, "upvote");
solution.call(post, "downvote");
let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
solution.call(post, "downvote"); // (executed 50 times)
score = solution.call(post, "score");
