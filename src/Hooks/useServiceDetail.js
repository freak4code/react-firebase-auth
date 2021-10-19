import { useEffect, useState } from "react";

const useServiceDetail = (id) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const service = data.find((element) => element.id === id);
        console.log(service);
        setService(service);
      });
  }, []);

  return [service, setService];
};

export default useServiceDetail;
