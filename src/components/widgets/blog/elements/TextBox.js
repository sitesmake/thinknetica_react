import React from 'react';

const { DOM }  = React;

const TextBox = (props) => (
  DOM.span(null, props.children)
);

export default TextBox;
