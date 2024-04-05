"use client";
import React from "react";
import { Input } from "reactstrap";
import { Icon } from "@components";

interface IInputIconProps {
  className?: string;
  icon: string;
  iconClassName?: string;
  placeholder?: string;
}
const InputGroup = (props: IInputIconProps) => {
  const { className, icon, iconClassName, placeholder } = props;
  return (
    <div className={`input-group ${className}`}>
      <div className="input-group-text border-0 bg-gray">
        <Icon icon={icon} className={`${iconClassName}`} />
      </div>
      <Input
        type="text"
        className="search-input form-control bg-gray border-gray text-info px-0 shadow-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
