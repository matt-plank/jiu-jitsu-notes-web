import { useEffect, useState } from "react";
import accountApi from "../api/accounts";

const useAccount = (token) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await accountApi.details();
      setDetails(details);
    };

    if (token) fetchDetails();
  }, [token]);

  return details;
};

export default useAccount;
