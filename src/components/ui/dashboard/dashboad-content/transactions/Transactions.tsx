"use client";
import React from "react";
import { useLocale } from "next-intl";

import { ProductsDemo, TableMaker } from "@components";
import { useTranslate } from "@app/hooks";

import { tableData } from "./data";

const Transactions = () => {
  const t = useTranslate("COMP_Transactions");
  const locale: "ar" | "en" = useLocale() as "ar" | "en";
  return (
    <div className="transactions table-responsive bg-secondary p-3  rounded">
      <h5 className=" text-info">{t("LATEST_TRANSACTIONS")}</h5>
      <TableMaker
        tableData={tableData[locale]}
        headerData={tableData.tableHeader[locale]}
      />
    </div>
  );
};

export default Transactions;
