/* eslint-disable react/prop-types */
function Helmet(props) {
  document.title = "Maltimart - " + props.title;
  return <div className="w-100">{props.children}</div>;
}

export default Helmet;
