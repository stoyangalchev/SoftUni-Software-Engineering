import { addComment, deleteByIde, getById, getComments } from "../api/data.js";
import { html, page, nothing } from "../../node_modules/lit-html/lit-html";

const detailsTemplate = (game, user, comments, onComment, onDelete) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src="${game.imageUrl}" />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>
      <p class="text">${game.summary}</p>
      <div class="details-comments">
        <h2>Comments:</h2>
        ${comments.length > 0
          ? html`
              <ul>
                ${comments.map(
                  (c) => html`
                    <li class="comment">
                      <p>Content: ${c.comment}</p>
                    </li>
                  `
                )}
              </ul>
            `
          : html`<p class="no-comment">No comments.</p>`}
      </div>
      ${user?._id == game._ownerId
        ? html` <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>

    ${user && user?._id !== game._ownerId
      ? html`
          <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${onComment}>
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `
      : nothing}
  </section>
`;

export const showDetails = async(ctx) => {
  const id = ctx.params.id;
  const item = await getById(id);
  let comments = await getComments(item._id);
console.log(2);
  const onComment = async (e) => {
    e.preventDefault();

    let { comment } = Object.fromEntries(new FormData(e.target));

    await addComment({ gameId: item._id, comment });

    ctx.page.redirect(`/details/${item._id}`);
    e.target.reset();
  };
  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await deleteByIde(id);
      ctx.page.redirect("/catalog");
    }
  }
debugger
  ctx.render(detailsTemplate(item, ctx.user, comments, onComment, onDelete));
};
