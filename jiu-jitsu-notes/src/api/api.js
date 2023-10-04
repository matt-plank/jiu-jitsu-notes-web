import routes from "./routes.json";

export const token = {
  create: async (username, password) => {
    let response = await fetch(routes.token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    if (response.status !== 200) return "";

    let json = await response.json();

    return json.token;
  },
  fromStorage: () => {
    return localStorage.getItem("token");
  },
  exists: () => {
    const token = localStorage.getItem("token");

    if (token === null || token === "") return false;

    return true;
  },
  delete: () => {
    localStorage.removeItem("token");
  },
};

export const techniques = {
  random: async () => {
    let response = await fetch(routes.randomTechnique, {
      headers: {
        Authorization: `Token ${token.fromStorage()}`,
      },
    });

    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.technique, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.technique, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.technique, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const positions = {
  all: async () => {
    const queryURL = new URL(routes.position);
    queryURL.searchParams.append("order_by", "name");

    let response = await fetch(queryURL, {
      headers: {
        Authorization: `Token ${token.fromStorage()}`,
      },
    });

    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.position, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.position, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.position, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const submissions = {
  create: async (data) => {
    let response = await fetch(routes.submission, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.submission, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.submission, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const grips = {
  all: async () => {
    let response = await fetch(routes.grip, {
      headers: {
        Authorization: `Token ${token.fromStorage()}`,
      },
    });

    if (response.status !== 200) return [];

    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.grip, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ ...data, id: id }),
    });

    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.grip, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify(data),
    });

    let json = await response.json();

    return json;
  },
  remove: async (id) => {
    await fetch(routes.grip, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const playlist = {
  all: async () => {
    let response = await fetch(routes.playlist, {
      headers: {
        Authorization: `Token ${token.fromStorage()}`,
      },
    });
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.playlist, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.playlist, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token.fromStorage()}`,
      },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
};

export const account = {
  create: async (username, password) => {
    let response = await fetch(routes.account, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    if (response.status !== 200) return false;

    return true;
  },
  details: async () => {
    let response = await fetch(routes.account, {
      headers: {
        Authorization: `Token ${token.fromStorage()}`,
      },
    });

    if (response.status !== 200) return {};

    let json = await response.json();

    return json;
  },
};
