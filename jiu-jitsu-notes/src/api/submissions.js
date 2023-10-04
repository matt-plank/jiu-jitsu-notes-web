import * as requests from "./requests";
import routes from "./routes.json";

const submissions = {
  create: async (data) => {
    let response = await requests.authenticatedPOST(routes.submission, data);
    let json = await response.json();

    return json;
  },
  update: async (id, data) => {
    let response = await requests.authenticatedPUT(routes.submission, {
      ...data,
      id: id,
    });
    let json = await response.json();

    return json;
  },
  delete: async (id) => {
    await requests.authenticatedDELETE(routes.submission, { id: id });
  },
};

export default submissions;
