import { useEffect, useState } from "react";
import { account as accountApi } from "../api/api";

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
