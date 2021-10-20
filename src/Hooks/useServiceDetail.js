import { useEffect, useState } from "react";

const useServiceDetail = (id) => {
  const [service, setService] = useState({title: "loading"});
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/616f54f39548541c29c5995c", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "secret-key":
          "$2b$10$NwY0arH/zlq9IoKuLAL3Oewyn573QmO8dLW23DvK.NdVrVO9yGJ2i",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const service = data.find((s) => s.id === id);
        console.log(service);
        if (service == null) {
          setService({});
        } else {
          setService(service);
        }
      });
  }, [id]);

  return service;
};

export default useServiceDetail;
