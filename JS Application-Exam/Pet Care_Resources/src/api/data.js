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
    host + "/data/pets?sortBy=_createdOn%20desc&distinct=name"
  );
}

// get listing by id
export async function getOfferById(id) {
  return await api.get(host + `/data/pets/${id}`);
}

// create listing
export async function createOffer(offer) {
  return await api.post(host + "/data/pets", offer);
}

// edit listing by id
export async function editOfferById(id, offer) {
  return await api.put(host + `/data/pets/${id}`, offer);
}

// delete listing by id
export async function deleteOfferById(id) {
  return await api.del(host + `/data/pets/${id}`);
}

export async function donationPet(offerId) {
  return await api.post(host + `/data/donation`, offerId);
}

export async function getTotalDonationCount(offerId) {
  return await api.get(
    host +
      `/data/donation?where=petId%3D%22${offerId}%22&distinct=_ownerId&count`
  );
}

export async function didUserDonation(offerId, userId) {
  return await api.get(
    host +
      `/data/donation?where=petId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
