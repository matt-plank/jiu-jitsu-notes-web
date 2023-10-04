import * as requests from "./requests";
import routes from "./routes.json";

const grips = {
  all: async () => {
    let response = await requests.authenticatedGET(routes.grip);
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await requests.authenticatedPUT(routes.grip, {
      ...data,
      id: id,
    });
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await requests.authenticatedPOST(routes.grip, data);
    let json = await response.json();

    return json;
  },
  remove: async (id) => {
    await requests.authenticatedDELETE(routes.grip, { id: id });
  },
};

export default grips;
