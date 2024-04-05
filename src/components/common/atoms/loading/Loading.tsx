import React from "react";

interface ILoadingProps {
  type?: "spinner" | "dots";
}
const Loading = (props: ILoadingProps) => {
  const { type = "dots" } = props;
  return <div className={`${type}`}></div>;
};

export default Loading;
