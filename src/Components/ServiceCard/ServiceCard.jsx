import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { title, status, image, detailsName, price, rating, location } = service;

  return (
    <div className="service-card">
      <img src={image} alt={title || detailsName} />
      <h3>{title || detailsName}</h3>

      {status && <p>{status}</p>}

      {price && (
        <div className="details">
          <p>
            From {price} EGP / guest{" "}
            {rating && <>★ {rating} </>}
            {location && <>• {location}</>}
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
