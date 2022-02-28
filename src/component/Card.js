import React from "react";

function Card(props) {
	return <div className='card'>{props.children}</div>;
}

Card.Header = (props) => {
	return <p className='fh2'>{props.children}</p>;
};
Card.Img = (props) => {
	return (
		<div className='card-imgContainer'>
			<img
				className={props.className}
				style={props.style}
				src={props.src}
				alt={props.alt}
			/>
		</div>
	);
};
Card.Body = (props) => {
	return <div className='card-body'>{props.children}</div>;
};
export { Card };
