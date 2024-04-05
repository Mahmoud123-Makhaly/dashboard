"use client";
import React from "react";
import { ButtonMaker, ImageViewer } from "@components";

interface IUserInfoProps {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth?: number;
  imgHeight?: number;
  imgClassName?: string;
  title?: string;
  subTitle?: string;
}
const UserInfo = (props: IUserInfoProps) => {
  const {
    className,
    imgSrc,
    imgAlt,
    imgWidth = 50,
    imgHeight = 50,
    imgClassName,
    title,
    subTitle,
  } = props;
  return (
    <div className={`d-flex align-items-center gap-3${className}`}>
      <ImageViewer
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className={`rounded-circle ${imgClassName}`}
      />
     <div className="flex-col-start">
        <span className="fw-medium">{title}</span>
        <span className="font-12  text-info">{subTitle}</span>
      </div> 
    </div>
  );
};

export default UserInfo;
