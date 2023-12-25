import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Application-specific request
// get all listings
export async function getAllOffers() {
  return await api.get(host + "/data/memes?sortBy=_createdOn%20desc");
}

// get listing by id
export async function getOfferById(id) {
  return await api.get(host + `/data/memes/${id}`);
}

// create listing
export async function createOffer(offer) {
  return await api.post(host + "/data/memes", offer);
}

// edit listing by id
export async function editOfferById(id, offer) {
  return await api.put(host + `/data/memes/${id}`, offer);
}

// delete listing by id
export async function deleteOfferById(id) {
  return await api.del(host + `/data/memes/${id}`);
}



export async function getTotalApplications(userId) {
  return await api.get(
    host +
      `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc
`
  );
}

