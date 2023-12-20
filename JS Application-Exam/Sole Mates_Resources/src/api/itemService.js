import * as api from './api.js';
import { getUserData } from '../utils.js';

const user = getUserData();

const endpoints = {
  dashboard: "/data/shoes?sortBy=_createdOn%20desc",
  create: "/data/shoes",
  getSearchMotorcycles: function () {
    if (user) {
      return `/data/shoes?where=brand%20LIKE%20%22${user._id}%22`;
    }
    return `/data/shoes?where=brand%20LIKE%20%22%22`;
  },
  searchBikes: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
  getById: "/data/shoes/",
  deleteById: "/data/shoes/",
  update: "/data/shoes/",
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
