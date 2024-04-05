import React from "react";

interface IIconProps {
  className?: string;
  icon: string;
}
const Icon = (props: IIconProps) => {
  const { className, icon } = props;
  return <i className={`${icon} ${className}`}></i>;
};

export default Icon;
