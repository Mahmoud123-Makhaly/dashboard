import { Link } from "@navigation";
import React from "react";

interface IMenuLinkProps {
  path: string;
  icon: string;
  title: string;
  className?: string;
}
const MenuLink = (props: IMenuLinkProps) => {
  const { path, icon, title, className } = props;
  return (
    <Link href={path} className={className}>
      <span dangerouslySetInnerHTML={{ __html: icon }}></span>
      {title}
    </Link>
  );
};

export default MenuLink;
