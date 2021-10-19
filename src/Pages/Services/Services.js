import React from "react";
import Service from "../../Components/Service/Service";
import useService from "../../Hooks/useService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useService();
  return (
    <div>
      <h3 className="text-center font-black service-title text-success mt-3">
        Services
      </h3>
      <div className="service-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
