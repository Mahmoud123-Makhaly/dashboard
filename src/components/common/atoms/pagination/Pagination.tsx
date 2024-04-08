"use client";
import Link from "next/link";
import React from "react";
import { useTranslate } from "@app/hooks";
import { ButtonMaker } from "../button-maker";

const Pagination = () => {
  const t = useTranslate("COMP_Pagination");
  return (
    <div className="d-flex justify-content-end">
      <div className="flex-between w-100">
        <ButtonMaker className="btn btn-info" disabled>
          {t("PREVIOUS")}
        </ButtonMaker>

        <ButtonMaker className="btn btn-info">{t("NEXT")}</ButtonMaker>
      </div>
    </div>
  );
};

export default Pagination;
