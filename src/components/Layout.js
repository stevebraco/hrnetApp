import React from 'react';
import Header from './Header/Header';
import PropTypes from 'prop-types';
import GlobalStyles from '../style/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};
