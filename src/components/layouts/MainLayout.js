import React, { PropTypes } from 'react';

import { Segment, Header, Container, Button } from 'semantic-ui-react';

import Link from 'components/elements/link';

import history from 'helpers/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>go back</Button>
);

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
