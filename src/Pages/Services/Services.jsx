import React from "react";

import { services, servicesData } from "../../Data/services";
import ServicesCarousel from "../../components/ServicesCarousel/ServicesCarousel";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "./Services.css";

const Services = () => {
  const chefs = servicesData.find((s) => s.categoryName === "Chefs");
  const training = servicesData.find((s) => s.categoryName === "Training");

  const formatDetails = (items) =>
    items.map((item) => ({
      image: item.imgUrl,
      detailsName: item.detailsName,
      price: item.price,
      rating: item.rating,
      location: item.location,
    }));

  return (
    <>
      {/* General Services */}
      <section className="services">
        <ServicesCarousel
          title="Our Services"
          services={services}
          CardComponent={ServiceCard}
        />
      </section>

      <h2 className="fs-5 ps-4" style={{fontSize:40}}>Discover services on Airbnb</h2>
      {/* Chefs */}
      <section className="services large-cards ">
        <ServicesCarousel
          title="Chefs"
          services={formatDetails(chefs.details)}
          CardComponent={ServiceCard}
        />
      </section>

      {/* Training */}
      <section className="services large-cards">
        <ServicesCarousel
          title="Training"
          services={formatDetails(training.details)}
          CardComponent={ServiceCard}
        />
      </section>
    </>
  );
};

export default Services;
