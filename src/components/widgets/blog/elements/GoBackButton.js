import React from 'react';

import { Button } from 'semantic-ui-react';

import history from 'helpers/history';

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>go back</Button>
);

export default GoBackButton;
