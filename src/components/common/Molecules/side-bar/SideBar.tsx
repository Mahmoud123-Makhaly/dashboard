"use client";
import React from "react";
import { useLocale } from "next-intl";

import { ButtonMaker, MenuLink, UserInfo } from "@components";
import { usePathname } from "@navigation";
import { useTranslate } from "@app/hooks";

import { menuItems } from "./data";

const SideBar = ({ className }: { className?: string }) => {
  const locale: "ar" | "en" = useLocale() as "en" | "ar";
  const pathName = usePathname();
  const t = useTranslate("COMP_Side_Bar");
  return (
    <div className={` ${className} bg-secondary p-4  position-sticky `}>
      <UserInfo
        className=" mb-3"
        imgSrc="/images/sidebar/avatar.png"
        imgAlt="user"
        title="john doe"
        subTitle="admin"
      />
      {menuItems[locale].map((cat, index) => (
        <React.Fragment key={index}>
          <span className="fw-bold text-info font-13 mb-2 d-block">
            {cat.title}
          </span>
          <ul className="p-0 m-0">
            {cat.list.map((miniItem, indx) => (
              <li key={indx}>
                <MenuLink
                  path={miniItem.path}
                  icon={miniItem.icon}
                  title={miniItem.title}
                  className={`sidebar-link d-flex gap-3 my-1 padding-12  rounded ${
                    pathName === miniItem.path ? "active" : ""
                  }`}
                />
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}

      <ButtonMaker
        block
        className=" align-items-center sidebar-link d-flex gap-3 border-0   padding-12 bg-transparent"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <p className="m-0">{t("LOGOUT")}</p>
      </ButtonMaker>
    </div>
  );
};

export default SideBar;
