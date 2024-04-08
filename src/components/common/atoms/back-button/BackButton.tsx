"use client";
import React from "react";
import { ButtonMaker } from "@components";
import { useRouter } from "@navigation";
import { useLocale } from "next-intl";

interface IBackButtonProps {
  block?: boolean;
}
const BackButton = (props: IBackButtonProps) => {
  const { block } = props;
  const router = useRouter();
  const locale: "ar" | "en" = useLocale() as "ar" | "en";
  return (
    <ButtonMaker
      block={block}
      className="btn btn-success mb-3"
      onClick={() => router.back()}
    >
      <i
        className={`fa-solid ${
          locale === "en" ? "fa-arrow-left" : "fa-arrow-left"
        }  fa-2x text-white `}
      ></i>
    </ButtonMaker>
  );
};

export default BackButton;
