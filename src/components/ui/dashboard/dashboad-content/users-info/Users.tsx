"use client";
import React from "react";
import { Row, Col } from "reactstrap";
import { useLocale } from "next-intl";

import { CardMaker, Icon } from "@components";

import { dashboardData } from "./data";

const Users = ({ className }: { className?: string }) => {
  const locale: "ar" | "en" = useLocale() as "ar" | "en";

  return (
    <Row>
      {dashboardData[locale].map((item, index) => (
        <Col sm={6} xl={4} key={index}>
          <CardMaker
            color="secondary"
            inverse
            body
            className="pointer users-card mb-2 mb-xl-0"
          >
            <div className="d-flex gap-3 align-items-baseline">
              <Icon icon={item.icon} />
              <div className="flex-col-start gap-2">
                <p>{item.title}</p>
                <h6 className="fw-medium">{item.count}</h6>
                <p
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  className="font-14"
                ></p>
              </div>
            </div>
          </CardMaker>
        </Col>
      ))}
    </Row>
  );
};

export default Users;
