"use client";
import React from "react";

import { usePathname } from "@navigation";
import { Icon, InputGroup, Language } from "@components";
import { useTranslate } from "@app/hooks";

const Navbar = () => {
  const t = useTranslate("COMP_Navbar");
  const pathname = usePathname();
  return (
    <div className="Navbar rounded p-3  bg-secondary d-md-flex justify-content-between align-items-center position-fixed ">
      <span className="text-info fw-bold text-capitalize d-none d-md-block">
        {pathname.split("/").pop()}
      </span>
      <div className="d-flex flex-between  align-items-center gap-3">
        <InputGroup
          icon="fa-solid fa-magnifying-glass  "
          iconClassName="text-info"
          className="bg-gray rounded w-auto overflow-hidden"
          placeholder={t("PLACEHOLDER")}
        />
        <div className="d-flex  align-items-center gap-3">
          <Icon icon="fa-solid fa-message" />
          <Icon icon="fa-solid fa-bell" />
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
