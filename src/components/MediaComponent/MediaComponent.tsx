import React from "react";

interface MediaComponentProps {
  images: string[];
}

export const MediaComponent: React.FC<MediaComponentProps> = ({ images }) => {
  return (
    <div className="media-container">
      {images.map((src, index) => (
        <img
          key={index}
          className="media__item"
          src={src}
          alt={`Post Item ${index + 1}`}
        />
      ))}
    </div>
  );
};


