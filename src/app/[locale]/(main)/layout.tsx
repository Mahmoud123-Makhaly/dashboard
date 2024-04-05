import React, { ReactNode, Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { Loading, Navbar, SideBar } from "@components";

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
};

const layout = (props: Props) => {
  const { params, children } = props;

  return (
    <Suspense key={params.path} fallback={<Loading />}>
      <main className="d-flex">
        <SideBar className="sidebar " />
        <div className="content p-3 ">
          <Navbar />
          {children}
        </div>
      </main>
    </Suspense>
  );
};

export default layout;
