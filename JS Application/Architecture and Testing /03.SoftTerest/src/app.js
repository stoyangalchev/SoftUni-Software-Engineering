async function request(url, method = "get", data) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);

    if (response.ok !== true) {
      throw new Error(response.statusText);
    }
    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (eror) {
    alert(eror.message);
    throw eror;
  }
}
window.api = {
  request,
};
