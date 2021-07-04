const MyParagraph = (props) => {
	console.log("paragraph component running")
  return <p>{props.children}</p>;
};

export default MyParagraph;
