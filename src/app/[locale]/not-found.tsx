"use client";
import { useRouter } from "@navigation";
import React, { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/404");
  }, [router]);
  return <React.Fragment></React.Fragment>;
};

export default NotFoundPage;
