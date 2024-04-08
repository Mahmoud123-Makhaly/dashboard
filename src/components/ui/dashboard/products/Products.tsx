"use client";
import React from "react";
import { useLocale } from "next-intl";

import { AdvancesTable } from "@components";
import { useTranslate } from "@app/hooks";
import { data } from "./data";

const Products = () => {
  const t = useTranslate("COMP_Products");
  const locale: "ar" | "en" = useLocale() as "ar" | "en";
  return (
    <div className="users">
      <AdvancesTable
        bodyData={data.bodyData}
        headerData={data.headerData[locale]}
        inputPlaceholder={t("SEARCH")}
        addBtnSlug="products/add"
      />
    </div>
  );
};

export default Products;
