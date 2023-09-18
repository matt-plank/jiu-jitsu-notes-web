import routes from "./routes.json";

export const randomTechnique = async () => {
  let response = await fetch(routes.randomTechnique);
  let json = await response.json();

  return json;
};

export const allPositions = async () => {
  let response = await fetch(routes.allPositions);
  let json = await response.json();

  return json;
};

export const allGrips = async () => {
  let response = await fetch(routes.allGrips);
  let json = await response.json();

  return json;
};

export const updatePosition = async (id, data) => {
  let response = await fetch(routes.allPositions, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, id: id }),
  });
  let json = await response.json();

  return json;
};

export const updateTechnique = async (id, data) => {
  let response = await fetch(routes.technique, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, id: id }),
  });
  let json = await response.json();

  return json;
};

export const createTechnique = async (data) => {
  let response = await fetch(routes.technique, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let json = await response.json();

  return json;
};

export const deleteTechnique = async (id) => {
  await fetch(routes.technique, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });
};
