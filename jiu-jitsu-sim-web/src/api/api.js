import routes from "./routes.json";

export const randomTechnique = async () => {
  let response = await fetch(routes.randomTechnique);
  let json = await response.json();

  return json;
};
