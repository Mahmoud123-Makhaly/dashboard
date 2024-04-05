"use client";
import React from "react";
import { ImageViewer } from "@components";
import { useTranslate } from "@app/hooks";
import { Link } from "@navigation";

const Custom404 = () => {
  const t = useTranslate("Comp_Custom_Err");
  return (
    <div className="flex-col gap-3  min-vh-100">
      <ImageViewer
        src="/images/404/error.jpg"
        alt="error"
        width={250}
        height={200}
        priority
      />
      <p className="my-4 text-center">{t("PAGE_NOT_FOUND")}</p>
      <Link href="/" className="btn btn-primary">
        {t("GO_TO_HOME")}
      </Link>
    </div>
  );
};

export default Custom404;
