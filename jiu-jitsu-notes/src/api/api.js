import routes from "./routes.json";

export const techniques = {
  random: async () => {
    let response = await fetch(routes.randomTechnique);
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.technique, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.technique, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.technique, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const positions = {
  all: async () => {
    let response = await fetch(routes.position);
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await fetch(routes.position, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.position, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.position, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const submissions = {
  create: async (data) => {
    let response = await fetch(routes.submission, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await fetch(routes.submission, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, id: id }),
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await fetch(routes.submission, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });
  },
};

export const grips = {
  all: async () => {
    let response = await fetch(routes.grip);
    let json = await response.json();

    return json;
  },
};
