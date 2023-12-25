import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllOffers() {
  return await api.get(
    host + "/data/games?sortBy=_createdOn%20desc&distinct=category"
  );
}
export async function getAllDashboard() {
  return await api.get(host + "/data/games?sortBy=_createdOn%20desc");
}
// get listing by id
export async function getById(id) {
  return await api.get(host + `/data/games/${id}`);
}

// create listing
export async function createOffer(offer) {
  return await api.post(host + "/data/games", offer);
}

// edit listing by id
export async function editOfferById(id, offer) {
  return await api.put(host + `/data/games/${id}`, offer);
}

// delete listing by id
export async function deleteById(id) {
  return await api.del(host + `/data/games/${id}`);
}

export async function getComments(gameId) {
  return get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function addComment(data) {
  return post("/data/comments", data);
}


