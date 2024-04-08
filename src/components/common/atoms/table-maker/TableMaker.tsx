"use client";
import React from "react";
import { Table } from "reactstrap";
import { ImageViewer } from "@components";
import { useTranslate } from "@app/hooks";

interface TableMaker {
  tableData: Array<{
    imgSrc?: string;
    name?: string;
    status?: string;
    date?: string;
    amount?: string;
    color?: string;
  }>;
  headerData: any;
}
const TableMaker = (props: TableMaker) => {
  const { tableData, headerData } = props;
  const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];

  const td = arr.forEach((element, index, array) => {
    <td>{element.x}</td>;
  });
  return (
    <Table className=" table-nowrap mb-0  table-borderless  ">
      <thead>
        <tr>
          {headerData.map((item: any, index: any) => (
            <th key={index} scope="col">
              {item.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td className="d-flex gap-3 align-items-center">
              {item.imgSrc && (
                <ImageViewer
                  alt="avatar"
                  width={40}
                  height={40}
                  src={item.imgSrc}
                  className="rounded-circle"
                />
              )}

              <p>{item.name}</p>
            </td>
            <td>
              <span className={`badge  bg-${item.color}`}>{item.status}</span>
            </td>
            <td>{item.date}</td>

            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableMaker;
