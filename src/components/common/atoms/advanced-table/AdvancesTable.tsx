"use client";

import React, { useState } from "react";
import {
  ButtonMaker,
  ImageViewer,
  InputGroup,
  ModalMaker,
  Pagination,
} from "@components";
import { Link } from "@navigation";
import { useTranslate } from "@app/hooks";

interface IAdvancesTableProps {
  inputPlaceholder?: string;
  headerData?: Array<string>;
  bodyData?: Array<string>;
  userinfo?: boolean;
  addBtnSlug?: string;
  viewBtnSlug?: string;
}
const AdvancesTable = (props: IAdvancesTableProps) => {
  const {
    inputPlaceholder,
    headerData,
    bodyData,
    userinfo,
    addBtnSlug,
    viewBtnSlug,
  } = props;
  const t = useTranslate("COMP_AdvancedTable");

  return (
    <div className="bg-secondary p-3 rounded">
      <div className="flex-between">
        <InputGroup
          icon="fa-solid fa-magnifying-glass  "
          iconClassName="text-info"
          className="bg-gray rounded w-auto overflow-hidden"
          placeholder={inputPlaceholder}
        />

        <Link href={`/dashboard/${addBtnSlug}`} className="btn btn-muted">
          {t("ADD_NEW")}
        </Link>
      </div>

      <div className="table-responsive table-card mt-3 mb-1">
        <table
          className="table align-middle table-nowrap table-borderless"
          id="customerTable"
        >
          <thead className="table-light">
            <tr>
              {headerData?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className="list form-check-all ">
            <tr>
              {userinfo && (
                <td className="d-flex gap-3 align-items-center">
                  <ImageViewer
                    alt="avatar"
                    width={40}
                    height={40}
                    src="/images/sidebar/avatar.png"
                    className="rounded-circle"
                  />
                  Kevin Dawson
                </td>
              )}

              {bodyData?.map((item, index) => (
                <td key={index}>{item}</td>
              ))}

              <td className="d-flex gap-2">
                <Link
                  href={`/dashboard/${viewBtnSlug}`}
                  className="btn btn-success"
                >
                  {t("VIEW")}{" "}
                </Link>
                <ButtonMaker className="bg-danger" text={t("REMOVE")} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default AdvancesTable;
