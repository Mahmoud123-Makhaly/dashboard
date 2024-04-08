import React, { ReactNode, Suspense } from "react";
import { Footer, Loading, Navbar, SideBar } from "@components";

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
};

const layout = (props: Props) => {
  const { params, children } = props;

  return (
    <Suspense key={params.path} fallback={<Loading />}>
      <main className="d-flex">
        <SideBar className="sidebar top-0 start-0 width-250 overflow-auto position-fixed" />
        <div className="pt-0 p-3 content flex-grow-1">
          <Navbar />
          <div className="paddingt-90">{children}</div>
          <Footer />
        </div>
      </main>
    </Suspense>
  );
};

export default layout;
