import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllFacts() {
  
  return await api.get(host + "/data/motorcycles?sortBy=_createdOn%20desc");
}


export async function getFactById(id) {
  return await api.get(host + `/data/motorcycles/${id}`);
}

// create listing
export async function addFact(fact) {

  return await api.post(host + "/data/motorcycles", fact);
}

// edit listing by id
export async function editFactById(id, fact) {
  return await api.put(host + `/data/motorcycles/${id}`, fact);
}

// delete listing by id
export async function deleteFactById(id) {
  return await api.del(host + `/data/motorcycles/${id}`);
}

// export async function like(factId) {
//   return await api.post(host + `/data/likes`, factId);
// }

// export async function getTotalLikes(factId) {
//   return await api.get(
//     host + `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`
//   );
// }

// export async function didUserLiked(factId, userId) {
//   return await api.get(
//     host +
//       `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
//   );
// }
