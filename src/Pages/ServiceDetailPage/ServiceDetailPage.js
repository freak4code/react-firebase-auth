import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../../Hooks/useService";
import useServiceDetail from "../../Hooks/useServiceDetail";
import "./ServiceDetailPage.css";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [services, setServices] = useService();
  const { title, subtitle, image, des } = useServiceDetail(parseInt(id));

  return (
    <div>
      {title != null ? (
        <div>
          <div className="service-detail-container">
            <p className="col-12 d-flex justify-content-center align-items-center">
              <img className="service-image" src={image} alt={title}></img>
            </p>
            <p className="col-12 d-flex justify-content-center align-items-center">
              <h1 className="text-center font-black text-success mt-3">
                {title}
              </h1>
            </p>
          </div>
          <h3 className="text-warning font-black text-center m-3">
            {subtitle}
          </h3>
          <p className="text-secondary font-black text-center m-3">{des}</p>
        </div>
      ) : (
        <div className="no-service">
          <h1 className="text-center font-black text-danger mt-3">
            No service available for this id
          </h1>

          <Link
            className="btn btn-warning col-12 d-flex justify-content-center align-items-center"
            to="/services"
          >
            Back to services
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;
