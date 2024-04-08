"use client";
import React from "react";
import { useLocale } from "next-intl";

import { ButtonMaker, CardMaker, Icon, ImageViewer } from "@components";

import { productData } from "./data";
import Image from "next/image";
 
const Products = () => {
  const locale: "ar" | "en" = useLocale() as "ar" | "en";
  return (
    <React.Fragment>
      {productData[locale].map((item, index) => (
        <CardMaker
          key={index}
          inverse
          color="secondary"
          className="position-relative product-card mb-3"
          body
          cardBodyContent
          cardBodyClassName="p-0 flex-col-start gap-2"
          title={
            <div className="d-flex gap-2">
              <ImageViewer src={item.imgSrc} width={30} height={20} fill />
              <p>{item.title}</p>
            </div>
          }
          subTitle={<h6>{item.subTitle}</h6>}
          cardText={<span className="font-14 text-info">{item.cardText}</span>}
        >
          <p className="text-info font-14 my-2">{item.description}</p>
          <ButtonMaker
            text={item.btnText}
            className="flex-center flex-row-reverse gap-2 mt-1 z-1 bg-muted"
          >
            {" "}
            <Icon icon={item.icon} className="order-0" />
          </ButtonMaker>
          {item.backgroundImg && (
            <Image
              alt="product-img"
              src={item.backgroundImg ?? ""}
              width={30}
              height={20}
              className="product-img position-absolute end-0 bottom-0"
            />
          )}
        </CardMaker>
      ))}
    </React.Fragment>
  );
};

export default Products;
