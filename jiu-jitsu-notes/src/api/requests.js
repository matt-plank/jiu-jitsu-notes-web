import tokenStorage from "./tokenStorage";

export const authenticatedFetch = async (url, options) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Token ${tokenStorage.get()}`,
    },
  });

  return response;
};

export const handle401 = (response) => {
  if (response.status !== 401) return;

  tokenStorage.delete();
};

export const authenticatedGET = async (url) => {
  const response = await authenticatedFetch(url, {
    method: "GET",
  });

  handle401(response);

  return response;
};

export const authenticatedPUT = async (url, body) => {
  const response = await authenticatedFetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  handle401(response);

  return response;
};

export const authenticatedPOST = async (url, body) => {
  const response = await authenticatedFetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  handle401(response);

  return response;
};

export const authenticatedDELETE = async (url, body) => {
  const response = await authenticatedFetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  handle401(response);

  return response;
};

export const jsonPOST = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
