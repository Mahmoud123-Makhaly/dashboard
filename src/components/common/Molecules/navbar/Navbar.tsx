"use client";
import React from "react";

import { usePathname } from "@navigation";
import { Icon, InputGroup, Language } from "@components";
import { useTranslate } from "@app/hooks";

const Navbar = () => {
  const t = useTranslate("COMP_Navbar");
  const pathname = usePathname();
  return (
    <div className="Navbar rounded p-3  bg-secondary flex-between">
      <span className="text-info fw-bold text-capitalize">
        {pathname.split("/").pop()}
      </span>
      <div className="d-flex align-items-center gap-3">
        <InputGroup
          icon="fa-solid fa-magnifying-glass  "
          iconClassName="text-info"
          className="bg-gray rounded w-auto overflow-hidden"
          placeholder={t("PLACEHOLDER")}
        />
        <Icon icon="fa-solid fa-message" />
        <Icon icon="fa-solid fa-bell" />
        <Language />
      </div>
    </div>
  );
};

export default Navbar;
