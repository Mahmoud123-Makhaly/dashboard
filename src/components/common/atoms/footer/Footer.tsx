"use client";
import React from "react";
import { useTranslate } from "@app/hooks";

const Footer = () => {
  const t = useTranslate("COMP_Footer");
  return (
    <div className="flex-between my-3 text-info">
      <h6 className="fw-bold">Lama Dev</h6>
      <p className="font-12">&copy; {t("ALL_RIGHTS_RESERVED")} </p>
    </div>
  );
};

export default Footer;
