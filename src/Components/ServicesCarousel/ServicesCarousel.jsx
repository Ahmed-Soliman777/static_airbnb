import { useEffect, useRef, useState } from "react";
import "./ServicesCarousel.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesCarousel = ({ title, services }) => {
  const carouselRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    setAtStart(container.scrollLeft === 0);
    setAtEnd(
      Math.ceil(container.scrollLeft + container.clientWidth) >=
        container.scrollWidth
    );
  };

  useEffect(() => {
    handleScroll();
    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - 300
          : container.scrollLeft + 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="services-carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <div className="arrows">
          <button
            className="arrow"
            onClick={() => scroll("left")}
            disabled={atStart}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="arrow"
            onClick={() => scroll("right")}
            disabled={atEnd}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="services-carousel" ref={carouselRef}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
