import CarouselComponent from "@/Components/Carousel/Carousel";
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const homeReduxData = useSelector((state) => state.Home.homeData);
  const accommodations = [
    "What's up at ",
    "Homes at ",
    "Unique stays at ",
    "Experiences ",
    "Discover ",
    "Adventures at ",
  ];

  return (
    <div className="container py-5">
      {homeReduxData.map((city, index) => (
        <div key={index} className="mb-5">
          <h3 className="mb-4">{accommodations[index] + city.cityName}</h3>
          <CarouselComponent details={city.details} />
        </div>
      ))}
    </div>
  );
}
