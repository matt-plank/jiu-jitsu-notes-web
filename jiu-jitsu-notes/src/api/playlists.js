import * as requests from "./requests";
import routes from "./routes.json";

const playlist = {
  all: async () => {
    let response = await requests.authenticatedGET(routes.playlist);
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await requests.authenticatedPOST(routes.playlist, data);
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await requests.authenticatedPUT(routes.playlist, {
      ...data,
      id: id,
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await requests.authenticatedDELETE(routes.playlist, { id: id });
  },
};

export default playlist;
