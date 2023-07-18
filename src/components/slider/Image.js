import React from "react";

const ImageSlider = ({image, mImage}) => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 787px)"
          type="image/webp"
          srcset={image}
        />
        <source
          media="(max-width: 786px)"
          type="image/webp"
          srcset={mImage}
        />
        <img
          loading="eager"
          src={image}
          width="100%"
          alt=" BC Web Wise is ranked amongst top 25 Agency in the world"
          className=""
        />
      </picture>
    </div>
  );
};

export default ImageSlider;
