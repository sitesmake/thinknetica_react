const DOM = React.DOM;

const Image = (props) => (
  DOM.img(
    { ... props },
    null
  )
);

// ReactDOM.render(
//   React.createElement(Image,
//     {
//       src: 'http://lorempixel.com/200/200',
//       width: 100,
//       height: 100,
//       alt: 'random image resized'
//     } ),
//   document.getElementById('app')
// );

ReactDOM.render(
  <Image src='http://lorempixel.com/200/200' width='100' height='100' alt='Random' />,
  document.getElementById('app')
);
