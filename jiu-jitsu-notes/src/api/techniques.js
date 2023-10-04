import {
  authenticatedDELETE,
  authenticatedGET,
  authenticatedPOST,
  authenticatedPUT,
} from "./requests";
import routes from "./routes.json";

const techniques = {
  random: async () => {
    let response = authenticatedGET(routes.randomTechnique);
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await authenticatedPOST(routes.technique, data);
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await authenticatedPUT(routes.technique, {
      ...data,
      id: id,
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await authenticatedDELETE(routes.technique, { id: id });
  },
};

export default techniques;
