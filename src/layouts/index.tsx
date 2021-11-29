import React, { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import './index.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="site">
      <Nav />
      <div className="site-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
