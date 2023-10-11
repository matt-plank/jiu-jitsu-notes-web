import * as requests from "./requests";
import routes from "./routes.json";

const account = {
  create: async (username, password) => {
    let response = await fetch(routes.account, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 500) {
      return {
        success: false,
        message: "internal server error",
      };
    }

    if (response.status !== 201) {
      return {
        success: false,
        message: (await response.json()).error,
      };
    }

    let json = await response.json();
    let result = {
      ...json,
      success: true,
    };

    return result;
  },
  details: async () => {
    let response = await requests.authenticatedGET(routes.account);
    let json = await response.json();

    return json;
  },
};

export default account;
