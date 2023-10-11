import * as requests from "./requests";
import routes from "./routes.json";

const token = {
  create: async (username, password) => {
    let response = await requests.jsonPOST(routes.token, {
      username: username,
      password: password,
    });

    if (response.status !== 200) {
      return "";
    }

    let json = await response.json();

    return json.token;
  },
};

export default token;
