"use client";
import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IImageViewerProps {
  src: string | StaticImport;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  errorImgSrc?: string;
  fill?: boolean;
}
const ImageViewer = (props: IImageViewerProps) => {
  const {
    src,
    alt,
    width,
    height,
    sizes,
    className,
    priority,
    errorImgSrc,
    fill,
  } = props;
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <div className="position-relative">
      <Image
        src={imgSrc}
        alt={alt??""}
        className={`position-static ${className}`}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        onError={() => setImgSrc(errorImgSrc ?? "/images/HProductNoImg.png")}
        fill={!width && !height ? true : false}
      />
    </div>
  );
};

export default ImageViewer;
