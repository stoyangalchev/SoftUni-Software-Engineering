import * as api from './api.js';
import { getUserData } from '../utils.js';

const user = getUserData();

const endpoints = {
  dashboard: "/data/fruits?sortBy=_createdOn%20desc",
  create: "/data/fruits",
  getSearchMotorcycles: function () {
    if (user) {
      return `/data/fruits?where=name%20LIKE%20%22${user.name}%22`;
    }
    return `/data/fruits?where=name%20LIKE%20%22%22`;
  },
  searchBikes: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
  getById: "/data/fruits/",
  deleteById: "/data/fruits/",
  update: "/data/fruits/",
};

export async function getDashboardBikes() {
	return api.get(endpoints.dashboard);
}

export async function updateBike(id, data) {
	return api.put(endpoints.update + id, data);
}

export async function deleteById(id) {
	return api.del(endpoints.deleteById + id);
}

export async function getBikeById(id) {
	return api.get(endpoints.getById + id);
}

export async function create(data) {
	return api.post(endpoints.create, data);
}

export async function searchBikes(query) {
	return api.get(endpoints.searchBikes(query));
}
