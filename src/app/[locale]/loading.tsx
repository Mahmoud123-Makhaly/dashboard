"use client";
import React from "react";
import { Loading } from "@components";

const loading = () => {
  return (
    <div className="flex-col w-100 min-vh-100 loading__wrapper">
      <Loading />
    </div>
  );
};

export default loading;
