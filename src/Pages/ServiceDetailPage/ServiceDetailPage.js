import React from "react";
import { useParams } from "react-router";
import useService from "../../Hooks/useService";
import "./ServiceDetailPage.css";

const ServiceDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const [services, setServices] = useService();

  return (
    <div>
      {services
        .filter((s) => s.id === parseInt(id))
        .map((service) => (
          <p>{service.title}</p>
        ))}
    </div>
  );
};

export default ServiceDetailPage;
