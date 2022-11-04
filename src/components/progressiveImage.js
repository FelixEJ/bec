import { useState, useEffect } from "react";
import styled from "styled-components";

const Img = styled.img`
  &.loading {
    filter: blur(5px);
    clip-path: inset(0);
    width: 100%;
    border-radius: 5px;
    @media only screen and (min-width: 480px) {
    }
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (min-width: 1024px) {
    }
    @media only screen and (min-width: 1600px) {
    }
  }
  &.loaded {
    filter: blur(0px);
    transition: filter 1s linear;
    width: 100%;
    border-radius: 5px;
    @media only screen and (min-width: 480px) {
    }
    @media only screen and (min-width: 768px) {
    }
    @media only screen and (min-width: 1024px) {
    }
    @media only screen and (min-width: 1600px) {
    }
  }
`;

const ProgressiveImage = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <Img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};

export default ProgressiveImage;
