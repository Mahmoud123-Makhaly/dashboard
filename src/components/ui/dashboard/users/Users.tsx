"use client";
import React from "react";
import { useLocale } from "next-intl";

import { AdvancesTable } from "@components";
import { useTranslate } from "@app/hooks";
import { data } from "./data";

const Users = () => {
  const t = useTranslate("COMP_Users");
  const locale: "ar" | "en" = useLocale() as "ar" | "en";

  return (
    <div className="users">
      <AdvancesTable
        inputPlaceholder={t("SEARCH")}
        bodyData={data.bodyData}
        headerData={data.headerData[locale]}
        userinfo
        addBtnSlug="users/add"
        viewBtnSlug="user/123"
      />
    </div>
  );
};

export default Users;
