import React, { PropTypes } from 'react';

import { Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>
        Thinknetica blog
      </Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);
