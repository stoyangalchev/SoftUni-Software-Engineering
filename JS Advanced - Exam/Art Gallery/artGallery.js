class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    quantity = Number(quantity);
    if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
      throw new Error("This article model is not included in this gallery!");
    }

    let article = this.listOfArticles.find((x) => {
      return (
        x.articleName === articleName &&
        x.articleModel === articleModel.toLowerCase()
      );
    });

    if (article) {
      article.quantity += quantity;
    } else {
      articleModel = articleModel.toLowerCase();

      this.listOfArticles.push({ articleModel, articleName, quantity });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let guestN = this.guests.find((x) => {
      return x.guestName == guestName;
    });

    if (guestN) {
      throw new Error(`${guestName} has already been invited.`);
    } else {
      let points = 0;
      if (personality == "Vip") {
        points = 500;
      } else if (personality == "Middle") {
        points = 250;
      } else {
        points = 50;
      }
      this.guests.push({ guestName, points, purchaseArticle: 0 });

      return `You have successfully invited ${guestName}!`;
    }
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find((x) => {
      return x.articleName == articleName && x.articleModel == articleModel;
    });

    if (article == undefined) {
      throw new Error("This article is not found.");
    }
    if (article.quantity == 0) {
      return `The ${articleName} is not available.`;
    }

    let guest = this.guests.find((x) => x.guestName == guestName);
    if (guest == undefined) {
      return "This guest is not invited.";
    }

    if (guest.points >= this.possibleArticles[articleModel]) {
      guest.points -= this.possibleArticles[articleModel];
      article.quantity -= 1;
      guest.purchaseArticle += 1;
    } else {
      return "You need to more points to purchase the article.";
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }
  showGalleryInfo(criteria) {
    let result = "";
    if (criteria == "article") {
      result += `Articles information:\n`;
      this.listOfArticles.forEach((el) => {
        let { articleModel, articleName, quantity } = el;

        result += `${articleModel} - ${articleName} - ${quantity}\n`;
      });
    } else if (criteria == "guest") {
      result += `Guests information:\n`;
      this.guests.forEach((el) => {
        let { guestName, points, purchaseArticle } = el;

        result += `${guestName} - ${purchaseArticle}\n`;
      });
    }
    return result.trim();
  }
}
const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));

/*{articleModel: 'picture', articleName: 'Mona Liza', quantity: 4}
  {articleModel: 'item', articleName: 'Ancient vase', quantity: 2}*/

/*{guestName: 'John', points: 500, purchaseArticle: 0}
  {guestName: 'Peter', points: 250, purchaseArticle: 0}*/
