import * as requests from "./requests";
import routes from "./routes.json";

const account = {
  create: async (username, password) => {
    let response = await requests.authenticatedPOST(routes.account, {
      username: username,
      password: password,
    });
    let json = await response.json();

    return json;
  },
  details: async () => {
    let response = await requests.authenticatedGET(routes.account);
    let json = await response.json();

    return json;
  },
};

export default account;
