import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import image from "image/header_image_3.jpg";
import image2 from "image/header_image_2.jpg";
import image3 from "image/header_image_1.jpg";
import "react-slideshow-image/dist/styles.css";

const images = [image, image2, image3, image3, image2];

const StyledContainerSlider = styled.div`
  display: flex;
  align-items: center;
  background-repeat: none;
  background-position: center;
  background-size: cover;
  height: 350px;
  background-image: url(${props => props.img});
`;

const slider = images.map((image, index) => (
  <StyledContainerSlider key={index} img={image} />
));

function Slider() {
  return (
    <div>
      <Slide easing="ease">{slider}</Slide>
    </div>
  );
}

export default Slider;
