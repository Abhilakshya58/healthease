import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./Slider.css";

function Slider() {
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title 1",
      description: "This is a description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title 2",
      description: "This is a second description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 3",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 4",
      description: "This is a third description",
      clickEvent: "sliderClick"
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title 14",
      description: "This is a third description",
      clickEvent: "sliderClick"
    }
  ];
  return (
    <>
      <ReactCardSlider slides={slides} />
    </>
  );
}

export default Slider;
