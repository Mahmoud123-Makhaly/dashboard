"use client";
import React, { useEffect } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@navigation";
 import { ButtonMaker, ImageViewer } from "@components";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const url = searchParams.get("redirectURL")
    ? `${pathname}?redirectURL=${searchParams.get("redirectURL")}`
    : pathname;
  useEffect(() => {
    const savedLang = localStorage.getItem("I18N_LANGUAGE");
    if (savedLang && savedLang != locale) {
      router.push(url, { locale: savedLang });
    }
  }, []);

  return (
    <ButtonMaker
      className="  border-0 p-0 "
      onClick={() => {
        const newLang = locale === "ar" ? "en" : "ar";
        localStorage.setItem("I18N_LANGUAGE", newLang);
        router.push(url, { locale: newLang });
      }}
    >
      <ImageViewer
        src={
          locale === "ar"
            ? "/images/svgs/header/UK.svg"
            : "/images/svgs/header/EG.svg"
        }
        alt={"language"}
        className="rounded rounded-0 flex-col "
        width={0}
        height={0}
      />
    </ButtonMaker>
  );
};

export default Language;
