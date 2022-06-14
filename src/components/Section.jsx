const Section = (props) => {
  return <section className={`${props.css}`}>{props.children}</section>;
};

export default Section;
