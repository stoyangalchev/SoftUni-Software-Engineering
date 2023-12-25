import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteFactById,
  getFactById,
  getTotalLikes,
  like,
  didUserLiked,
} from "../api/data.js";

const detailsTamplate = (
  fact,
  isOwner,
  onDelete,
  isLoggedIn,
  totalLikesCount,
  onClickLike,
  didUserLikeded
) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="${fact.imageUrl}" alt="example1" />
      </div>

      <div id="info-wrapper">
        <p>
          <strong>Band:</strong><span id="details-singer">${fact.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong
          ><span id="details-album">${fact.album}</span>
        </p>
        <p>
          <strong>Release date:</strong
          ><span id="details-release">${fact.release}</span>
        </p>
        <p>
          <strong>Label:</strong><span id="details-label">${fact.label}</span>
        </p>
        <p>
          <strong>Sales:</strong><span id="details-sales">${fact.sales}</span>
        </p>
      </div>

      <div id="likes">
        Likes: <span id="likes-count">${totalLikesCount}</span>
      </div>
      
        ${
          isOwner
            ? html`<div id="action-buttons">
                <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
                  >Delete</a
                >
              </div>`
            : ""
        }
        ${(() => {
          if (didUserLikeded == 0) {
            if (isLoggedIn && !isOwner) {
              return html` <a
                href="javascript:void(0)"
                @click=${onClickLike}
                id="like-btn"
                >Like</a
              >
               </div>`;
            }
          }
        })()}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);
  const user = ctx.user;

  let userId;
  let totalLikesCount;
  let didUserLikeded;

  if (user != null) {
    userId = user._id;
    didUserLikeded = await didUserLiked(factId, userId);
  }

  const isOwner = user && fact._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalLikesCount = await getTotalLikes(factId);
  ctx.render(
    detailsTamplate(
      fact,
      isOwner,
      onDelete,
      isLoggedIn,
      totalLikesCount,
      onClickLike,
      didUserLikeded
    )
  );

  async function onClickLike() {
    const likes = {
      factId: factId,
    };
    await like(likes);

    totalLikesCount = await getTotalLikes(factId);
    didUserLikeded = await didUserLiked(factId, userId);
    ctx.render(
      detailsTamplate(
        fact,
        isOwner,
        onDelete,
        isLoggedIn,
        totalLikesCount,
        onClickLike,
        didUserLiked
      )
    );
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteFactById(factId);
      ctx.page.redirect("/dashboard");
    }
  }
}
