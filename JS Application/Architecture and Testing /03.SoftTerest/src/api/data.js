import * as api from "./api.js";

const endPoints = {
  ideas: "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
  ideaById: "/data/ideas/",
  create: "/data/ideas",
};

export async function getAllIdeas() {
  return api.get(endPoints.ideas);
}

export async function getById(id) {
  // return api.get('/data/ideas/b8608c22-dd57-4b24-948e-b358f536b958');
  console.log("data.js fun def:", endPoints.ideaById + id);
  return api.get(endPoints.ideaById + id);
}

export async function createIdea(ideaData) {
  return api.post(endPoints.create, ideaData);
}

export async function deleteById(id) {
  return api.delete(endPoints.ideaById + id);
}
