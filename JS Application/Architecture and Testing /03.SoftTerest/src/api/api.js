const host = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["content-type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  //this is the simple login validation cheching local storage.
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const token = user.accessToken;
    options.headers["X-Authorization"] = token;
  }

  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        localStorage.moveItem("user");
      }

      const error = await response.json();
      throw new Error(error.message);
    }
    //handles logout error that will return non json parcable object - simply a status code 204
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

const get = request.bind(null, "get");
const post = request.bind(null, "post");
const put = request.bind(null, "put");
const del = request.bind(null, "delete");

export { get, post, put, del as delete };
