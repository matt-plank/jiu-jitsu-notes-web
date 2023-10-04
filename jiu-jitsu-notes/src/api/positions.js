import * as requests from "./requests";
import routes from "./routes.json";

const positions = {
  all: async () => {
    const queryURL = new URL(routes.position);
    queryURL.searchParams.append("order_by", "name");

    let response = await requests.authenticatedGET(queryURL);
    let json = await response.json();

    return json;
  },
  create: async (data) => {
    let response = await requests.authenticatedPOST(routes.position, data);
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await requests.authenticatedPUT(routes.position, {
      ...data,
      id: id,
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await requests.authenticatedDELETE(routes.position, { id: id });
  },
};

export default positions;
