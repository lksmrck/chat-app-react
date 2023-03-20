import { ReactNode, FC } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/*   <Footer /> */}
    </>
  );
};

export default Layout;
