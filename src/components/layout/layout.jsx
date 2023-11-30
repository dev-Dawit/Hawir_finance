import React from 'react';

import { HeaderSection }  from '../layout_components/header/header';
import { SiderSection } from '../layout_components/sider/sider';
import { FooterSection } from '../layout_components/footer/footer';
import { ContentSection } from '../layout_components/content/content';
//import { BreadCrumbSection } from '../breadCrumb/breadCrumb';

import './layout.styles.scss';

const Theme = () => {
  return (
    <div className="layout">
      <HeaderSection className="header" />
      <div className="container">
        <div className="sidebar">
          <SiderSection />
        </div>
        <div className="contentContainer">
          <ContentSection className="content" />
          <FooterSection className="footer" />
        </div>
      </div>
    </div>
  );
};

export default Theme;


