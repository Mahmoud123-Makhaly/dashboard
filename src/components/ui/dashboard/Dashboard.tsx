"use client";
import React from "react";
import { Col, Row } from "reactstrap";

import { Users } from "./dashboad-content/users-info";
import { Transactions } from "./dashboad-content/transactions";
import { Chart } from "./dashboad-content/chart";
import { Products } from "./dashboad-content/products";
import { useLocale } from "next-intl";

const Dashboard = () => {
  return (
    <div className="d-xl-flex  gap-3">
      <div className="flex-grow-1">
        <Users />
        <Col className="col-12 py-3">
          <Transactions />
        </Col>
        <Col className="col-12  ">
          <Chart />
        </Col>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
};

export default Dashboard;
